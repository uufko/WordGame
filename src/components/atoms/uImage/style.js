import { StyleSheet } from "react-native";
import { UDevice } from "../../../assets/uMetarial/uDevice";
import { UColors } from "../../../assets/uMetarial/uColors";

export const Style = StyleSheet.create({
    touchableStyle:{
        height:UDevice.height*.08,
        width:UDevice.width*.08,
        borderRadius:10, 
        justifyContent:"center",
        alignItems:"center",margin:10,
        backgroundColor:UColors.lightListColor,
        alignSelf:"center"
    },
    imageStyle:{
        height:UDevice.height*.1,
        width:UDevice.height*.1
    }
})