import { StyleSheet } from "react-native";
import { UDevice } from "../../../assets/uMetarial/uDevice";
import { UColors } from "../../../assets/uMetarial/uColors";

export const Style = StyleSheet.create({
    viewStyle:{
        height:UDevice.height*.06,
        width:UDevice.width*.4,
        borderRadius:10, 
        justifyContent:"center",
        alignItems:"center",margin:10,
        backgroundColor:UColors.lightListColor,
        alignSelf:"center"
    },
    textInputStyle:{
        height:UDevice.height*.06,
        width:UDevice.width*.4,
        borderRadius:10,
        textAlign:"center",
        fontFamily:"bont",
        fontSize:UDevice.height*.02,
        color:UColors.lightTextColor,
    }
})