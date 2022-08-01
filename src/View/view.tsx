import { IProps, MyItem } from "../Model/model";
import { List } from "./list";

export const View = (props: IProps) => {
    return (
        <div className="tw-h-screen tw-bg-gradient-to-b tw-from-slate-900 tw-to-white">
            <p className="tw-text-white tw-text-center tw-pt-28 tw-text-4xl">Todo list </p>
            <form onSubmit={props.action_add}>
                <div className="tw-flex tw-justify-center tw-p-32">
                    <div>
                        <input
                            className="tw-rounded-md tw-h-9 tw-m-2"
                            type="text"
                            name="title"
                            value={props.form_data.title}
                            onChange={props.handleChange}
                            size={50}
                        />
                    </div>
                    <button
                        className="tw-rounded-lg tw-h-10 tw-w-20 tw-m-2"
                        type="submit">
                        Add
                    </button>
                    <button
                        className="tw-rounded-lg tw-h-10 tw-w-20 tw-m-2"
                        type="reset"
                        onClick={props.handler_discard}
                    >
                        Discard
                    </button>
                </div>
            </form>
            <div className="tw-text-center">
                {
                    props.items.map((value,index) => (
                        <List value={value} key={index} id={index} handler_remove={()=>props.handler_remove_item(index)}/>
                    ))
                }
            </div>
        </div>
    )
}