import { IProps } from "./model";

export const View = (props: IProps) => {
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
                <p>{props.title}</p>
            </div>
        </div>
    )
}