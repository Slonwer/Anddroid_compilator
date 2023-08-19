import React from "react";
import { Text , SafeAreaView} from "react-native";
import { Comp01, Comp02 } from "./Componetes/Muitos";


import Msg from "./Componetes/Primeiro";

export default () =>(
    <SafeAreaView>
        <Msg></Msg>
        <Text>Olá mundo</Text>
        <Comp01></Comp01>
        <Comp02></Comp02>
    </SafeAreaView>
)
