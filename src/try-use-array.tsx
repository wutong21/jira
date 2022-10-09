import React from "react";
import { useArray, useMount } from "./utils";


interface Person { name: string; age: number }

export const TsReactTest = () => {
    const person: Person[] = [
        { name: "jack", age: 25 },
        { name: "ma", age: 22 },
    ]
    const { value, clear, removeIndex, add } = useArray(person)

    useMount(() => {
    })

    return (
        <div>
            <button onClick={() => add({ name: "john", age: 22 })}>add join</button>
            <button onClick={() => removeIndex(0)}>remove 0</button>
            <button style={{ marginBottom: '50px' }} onClick={() => clear()}>clear</button>
            {value.map((person: { age: number, name: string }, index: number) =>
                <div style={{ marginBottom: '30px' }}>
                    <span style={{ color: 'red' }}>{index}</span>
                    <span>{person.name}</span>
                    <span>{person.age}</span>
                </div>
            )}
        </div>
    )
}