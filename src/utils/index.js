import { useEffect, useState } from "react";

export const isFalsy = (value) => (value === 0 ? false : !value);

// 在一个函数里，改变传入的对象本身是不好的
export const cleanObject = (object) => {
  const result = { ...object };
  Object.keys(result).forEach((key) => {
    const value = result[key];
    if (isFalsy(value)) {
      delete result[key];
    }
  });
  return result;
};

/**
 * custom hook
 * 初始化只使用一次的 抽象方法
 * 原因： 不想看到满屏的useEffect 和 空数组[]
 * @param {*} callback
 */
export const useMount = (callback) => {
  useEffect(() => {
    callback();
  }, []);
};
/**
 * 防抖
 * @param {*} func
 * @param {*} delay
 * @returns
 */
export const debounce = (func, delay) => {
  let timeout;
  return (...param) => {
    if (timeout) {
      clearTimeout(timeout);
    }

    timeout = setTimeout(function () {
      func(...param);
    }, delay);
  };
};

/**
 * 节流函数
 * @param {*} func
 * @param {*} delay
 * @returns
 */
export const throttle = (func, delay) => {
  let old = 0;
  return (...param) => {
    let now = new Date().valueOf();
    if (now - old > delay) {
      func(param);
      old = now;
    }
  };
};

export const useDebounce = (value, delay) => {
  const [debounceValue, setDebounceValue] = useState(value);
  useEffect(() => {
    // 每次在value变化以后 ， 设置一个定时器
    const timeout = setTimeout(() => setDebounceValue(value), delay);
    // 每次在上一个useEffect处理完以后再运行
    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debounceValue;
};
