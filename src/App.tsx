import {View} from "./View/view";
import { Container } from "./Container/container";

export function App(){
    let get_props = Container()
    return <View {...get_props}/>
}

