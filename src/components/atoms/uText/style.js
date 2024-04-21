import { StyleSheet } from "react-native";
import { UDevice } from "../../../assets/uMetarial/uDevice";
import { UColors } from "../../../assets/uMetarial/uColors";

export const Style = StyleSheet.create({
    textStyle:{
        fontSize:UDevice.width*.1,
        fontFamily:"bont",
        color:UColors.lightTextColor
    }
})