import { MyItem } from "../Model/model"

export const List = (props: MyItem) => {
    return (
        <div >
            <p >{props.id + 1}. {props.value}<br /></p>
            <button onClick={()=>props.handler_remove(props.id)}>Remove</button>
        </div>
    )
}