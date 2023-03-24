import { useState } from "react";

export function AgeCounter(props) {
    const[age, setAge] = useState(30);

    function increaseAge() {
        setAge(age + 1);
    }

    return (
        <>
        <button onClick={increaseAge}>Increase age</button>
        <p>You are {age} years old</p>
        </>
    )
}