import {View} from "./view";
import { Container } from "./container";

export function App(){
    let get_props = Container()
    return <View {...get_props}/>
}

