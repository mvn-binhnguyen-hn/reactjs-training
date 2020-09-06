import React, { useState, FC } from "react";

interface Props {
    label: string;
    onCallback: (num: number) => void;
}

const MyFunctionalComponent: FC<Props> = ({ label, onCallback }) => {
    const [pressCount, setPressCount] = useState(0);

    const updatePressCount = (offset: number) => {
        const count = pressCount + offset;
        setPressCount(count);
        onCallback(count);
    };
    return (
        <div>
            MyFunctionalComponent - {label}
            <div>
                <button
                    onClick={() => {
                        updatePressCount(-1);
                    }}
                >
                    -
                </button>
                {pressCount}
                <button
                    onClick={() => {
                        updatePressCount(1);
                    }}
                >
                    +
                </button>
            </div>
        </div>
    );
};

export default MyFunctionalComponent;
