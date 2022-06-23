import { MyItem } from "../Model/model"

export const List = (props: MyItem) => {
    return (
        <div>
            <p className="tw-text-2xl">{props.id + 1}. {props.value}<br /></p>
            <button
                onClick={props.handler_remove}
            >discard</button>
        </div>
    )
}