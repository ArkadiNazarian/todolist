import { IProps } from "../Model/model";
import { List } from "./list";

export const View = (props: IProps) => {
    return (
        <div >
            <p >Todo list </p>
            <form onSubmit={props.action_add}>
                <div >
                    <div>
                        <input
                            type="text"
                            name="title"
                            value={props.form_data.title}
                            onChange={props.handleChange}
                            size={50}
                        />
                    </div>
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
                </div>
            </form>
            <div>
                {
                    props.items.map((value,index) => (
                        <List value={value} key={index} id={index} handler_remove={()=>props.handler_remove_item(index)}/>
                    ))
                }
            </div>
        </div>
    )
}