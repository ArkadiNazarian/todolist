import { IProps } from "../Model/model";
import { List } from "./list";

export const View = (props: IProps) => {

    const list = props.title.map((index) => (
        <List index={index}/>
    ))


    return (
        <div>
            <form onSubmit={props.action_add}>
                <input
                    type="text"
                    name="title"
                    value={props.form_data.title}
                    onChange={props.handleChange}
                />
                <button
                    type="submit">
                    Add
                </button>
                <button
                    type="reset"
                    onClick={props.handler_discard}
                >
                    Discard
                </button>
            </form>
            <div>
                {
                    list
                }
            </div>
        </div>
    )
}