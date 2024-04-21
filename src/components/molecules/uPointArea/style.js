import { StyleSheet } from "react-native";
import { UDevice } from "../../../assets/uMetarial/uDevice";
import { UColors } from "../../../assets/uMetarial/uColors";

export const Style = StyleSheet.create({
    container: {
        height: UDevice.height * .07,
        width: UDevice.width * .9,
        justifyContent: "space-between", 
        alignItems: "center",
        alignSelf:"center",flexDirection:"row",
    },
    viewStyle: {
        height: UDevice.height * .06,
        width: UDevice.width * .25,
        justifyContent:"center",
        alignItems:"center",
        borderRadius:10,
        margin:2,backgroundColor:UColors.lightListColor
    },
})