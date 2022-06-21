import { Mylist } from "../Model/model"

export const List = (props: Mylist) => {
    return (
            <p className="tw-text-2xl">{props.index}<br /></p>
    )
}