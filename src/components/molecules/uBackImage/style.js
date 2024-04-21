import { StyleSheet } from "react-native";
import { UDevice } from "../../../assets/uMetarial/uDevice";

export const Style = StyleSheet.create({
    viewStyle:{
    height:UDevice.height*.058,
    width:UDevice.height*.048
    },
    imageBackStyle:{
        height:UDevice.height*.058,
        width:UDevice.height*.048,
        justifyContent:"center",
        alignItems:"center", 
    },
    textStyle:{
        fontSize:UDevice.width*.1,
        fontFamily:"bont"
    }
})