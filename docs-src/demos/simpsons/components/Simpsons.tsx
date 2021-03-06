import * as React from "react"
import { observer } from "mobx-react";

import { TypedSelect, box } from "../../../../index";

import Simpson from "../Simpson";
import ViewState from "../ViewState";
import TagList from "./TagList";
import SimpsonEditor from "./SimpsonEditor";
import SimpsonsSelectorButtons from "./SimpsonsSelectorButtons";

class SelectSimpson extends TypedSelect<Simpson> {}

@observer
export default class Simpsons extends React.Component<{}, {}> {

    private viewState = new ViewState();

    render() {

        const state = this.viewState;
        const selected = box(state).selected;

        return (
            <div className="simpsons">
                <fieldset>
                    <legend>Tags</legend>
                    <TagList tags={state.allTags} />
                </fieldset>
                {
                    state.filtered.length ? (
                        <fieldset>
                            <legend>Simpsons</legend>
                            <SimpsonsSelectorButtons
                                simpsons={state.filtered}
                                selected={selected} />
                            <SelectSimpson
                                options={state.filtered}
                                value={selected}
                                labels={s => s.name.model}
                                keys={s => s.id} />
                        </fieldset>
                    ) : undefined
                }
                {
                    state.filtered.indexOf(state.selected) !== -1 ? (
                        <fieldset>
                            <legend>Simpson</legend>
                            <SimpsonEditor simpson={state.selected!} />
                        </fieldset>
                    ) : undefined
                }
            </div>
        );
    }
}
