import React, { useEffect, useState } from 'react';

import { List } from "./list"
import { SearchPanel } from "./search-panel"
import { cleanObject, useDebounce, useMount } from '../../utils'
import * as qs from "qs"
import { useHttp } from '../../utils/http';

const apiUrl = process.env.REACT_APP_API_URL
// 使用typescript的原因 在静态代码中找到其中的一些错误 -> 强类型
export const ProjectListScreen = () => {
    const [users, setUsers] = useState([])

    const [param, setParam] = useState({
        name: '',
        personId: ''
    })
    const debouncedParam = useDebounce(param, 200)
    const [list, setList] = useState([])
    const client = useHttp()

    useEffect(() => {
        client('projects', { data: cleanObject(debouncedParam) }).then(setList)
    }, [debouncedParam])

    useMount(() => {
        client('users').then(setUsers)
    })
    return <div>
        <SearchPanel users={users} param={param} setParam={setParam} />
        <List users={users} list={list} />
    </div>
}