import React, { Component } from "react";

interface Props {
    label: string;
}

interface States {
    pressCount: number;
}

export class MyClassComponent extends Component<Props, States> {
    constructor(props: Props) {
        super(props);

        this.state = {
            pressCount: 0,
        };
    }

    updatePressCount = (offset: number) => {
        this.setState({
            pressCount: this.state.pressCount + offset,
        });
    };

    render() {
        return (
            <div>
                MyClassComponent - {this.props.label}
                <div>
                    <button
                        onClick={() => {
                            this.updatePressCount(-1);
                        }}
                    >
                        -
                    </button>
                    {this.state.pressCount}
                    <button
                        onClick={() => {
                            this.updatePressCount(1);
                        }}
                    >
                        +
                    </button>
                </div>
            </div>
        );
    }
}

export default MyClassComponent;
