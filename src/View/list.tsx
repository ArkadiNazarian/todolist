import { MyItem } from "../Model/model"

export const List = (props: MyItem) => {
    return (
            <p className="tw-text-2xl">{props.id+1}. {props.value}<br /></p>
    )
}