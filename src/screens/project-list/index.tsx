import React, { useEffect, useState } from 'react';

import { List } from "./list"
import { SearchPanel } from "./search-panel"
import { cleanObject, useDebounce, useMount } from '../../utils'
import * as qs from "qs"

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

    useEffect(() => {
        fetch(`${apiUrl}/projects?${qs.stringify(cleanObject(debouncedParam))}`).then(async response => {
            if (response.ok) {
                setList(await response.json())
            }
        })
    }, [debouncedParam])

    useMount(() => {
        fetch(`${apiUrl}/users`).then(async response => {
            if (response.ok) {
                setUsers(await response.json())
            }
        })
    })
    return <div>
        <SearchPanel users={users} param={param} setParam={setParam} />
        <List users={users} list={list} />
    </div>
}