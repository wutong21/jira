import { useEffect, useState } from "react";

export const isFalsy = (value: unknown): boolean => (value === 0 ? false : !value);

// 在一个函数里，改变传入的对象本身是不好的
export const cleanObject = (object: object) => {
  const result = { ...object };
  Object.keys(result).forEach((key: string) => {
    // @ts-ignore
    const value = result[key];
    if (isFalsy(value)) {
      // @ts-ignore
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
export const useMount = (callback: () => void) => {
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
export const debounce = (func: any, delay: number) => {
  let timeout: any;
  return (...param: any) => {
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
export const throttle = (func: any, delay: number) => {
  let old = 0;
  return (...param: any) => {
    let now = new Date().valueOf();
    if (now - old > delay) {
      func(param);
      old = now;
    }
  };
};
// 后面用泛型来规范类型
export const useDebounce = (value: unknown, delay?: number): any => {
  const [debounceValue, setDebounceValue] = useState(value);

  useEffect(() => {
    // 每次在value变化以后 ， 设置一个定时器
    const timeout = setTimeout(() => setDebounceValue(value), delay);
    // 每次在上一个useEffect处理完以后再运行
    return () => clearTimeout(timeout);
  }, [value, delay]);

  return debounceValue;
};
