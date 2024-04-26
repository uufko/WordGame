import { StyleSheet } from "react-native";
import { UDevice } from "../../../assets/uMetarial/uDevice";
import { UColors } from "../../../assets/uMetarial/uColors";

export const Style = StyleSheet.create({
    touchable:{
        height:UDevice.height*.1,
        width:UDevice.width,
        flexDirection:"row",
        justifyContent:"center",
        alignItems:"center",
        columnGap:-UDevice.width*.02
    },
    image:{
        height:UDevice.height*.025,
        width:UDevice.width*.1
    },
    text:{
        fontSize:UDevice.size*.5,
        color:"black",
        fontFamily:"OpenSans-Italic",
        textDecorationLine:"underline",
        opacity:.5
    }
})