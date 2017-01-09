import * as React from "react";
import { Value } from "./Value";
import { FormElementProps, removeProps } from "./FormElementProps";

export interface RadioButtonProps<T> extends FormElementProps {
    selected: Value<T>;
    option: T;
}

export class TypedRadioButton<T> extends React.Component<RadioButtonProps<T>, {}> {

    changed = (ev: React.FormEvent<HTMLInputElement>) => {
        if (ev.currentTarget.checked) {
            this.props.selected.value = this.props.option;
        }
    }

    render() {
        return <input type="radio"
            {...removeProps(this.props, "selected", "option")}
            checked={this.props.selected.value == this.props.option}
            onChange={this.changed} />;
    }
}

export class RadioButton extends TypedRadioButton<any> {}
export class RadioButtonString extends TypedRadioButton<string> {}
export class RadioButtonNumber extends TypedRadioButton<number> {}