import { StyleSheet } from "react-native";
import { UDevice } from "../../../assets/uMetarial/uDevice";
import { UColors } from "../../../assets/uMetarial/uColors";

export const Style = StyleSheet.create({
    viewStyle:{
        height:UDevice.height*.07,
        width:UDevice.width*.3,
        borderRadius:10, 
        justifyContent:"center",
        alignItems:"center",margin:10,
        backgroundColor:UColors.listColor,
        alignSelf:"center"
    },
    textStyle:{
        fontSize:UDevice.width*.05,
        fontFamily:"bont",
        color:UColors.textColor
    }
})