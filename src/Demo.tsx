import React, { useState, ChangeEvent } from "react";
import MyClassComponent from "components/MyClassComponent/MyClassComponent";
import MyFunctionalComponent from "components/MyFunctionalComponent/MyFunctionalComponent";
import "./Demo.scss";
import ComponentStyleDemo from "components/ComponentStyleDemo/ComponentStyleDemo";
import ComponentStyleDemo2 from "components/ComponentStyleDemo2/ComponentStyleDemo2";
import styled from "styled-components";

const Button = styled.button`
    background-color: "white";
    border: 2px solid green;
    border-radius: 5px;
`;

const Button2 = styled(Button)`
    border-color: red;
`;

const Demo = () => {
    const [isDisplayLabel, setIsDisplayLabel] = useState(false);
    const [inputVal, setInputVal] = useState("abc");

    const checkPressCount = (pressCount: number) => {
        setIsDisplayLabel(pressCount === 5);
    };

    const items = [1, 2, 3, 4, 5];

    const onUpdateVal = (e: ChangeEvent<HTMLInputElement>) => {
        setInputVal(e.target.value);
    };

    return (
        <div>
            Demo component{isDisplayLabel && <span> - Demo label</span>}
            <MyClassComponent label="This is a label - class component"></MyClassComponent>
            <hr />
            <MyFunctionalComponent
                label="This is a label - functional component"
                onCallback={checkPressCount}
            ></MyFunctionalComponent>
            <hr />
            {items.map((item, index) => (
                <div key={index}>{item}</div>
            ))}
            <div>{inputVal}</div>
            <input value={inputVal} onChange={onUpdateVal}></input>
            <hr />
            {/* Style in ReactJS */}
            <div
                style={{ backgroundColor: "red", padding: 15, color: "white" }}
            >
                Style in ReactJS App
            </div>
            <ComponentStyleDemo></ComponentStyleDemo>
            <ComponentStyleDemo2></ComponentStyleDemo2>
            <Button>My styled button</Button>
            <Button2>My styled button 2</Button2>
        </div>
    );
};

export default Demo;
