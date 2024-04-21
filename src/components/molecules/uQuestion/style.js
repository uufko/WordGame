import { StyleSheet } from "react-native";
import { UDevice } from "../../../assets/uMetarial/uDevice";
import { UColors } from "../../../assets/uMetarial/uColors";

export const Style = StyleSheet.create({
    viewStyle:{
        height:UDevice.height*.25,
        width:UDevice.width*.9,
        borderRadius:20, 
        alignSelf:"center",
        justifyContent:"center",
        alignItems:"center",margin:10,
        backgroundColor:UColors.lightListColor,padding:5
    },
    textStyle:{
        fontSize:UDevice.width*.1,
        fontFamily:"bont"
    }
})