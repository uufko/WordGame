import {StyleSheet} from 'react-native';
import {UDevice} from '../../../assets/uMetarial/uDevice';
import {UColors} from '../../../assets/uMetarial/uColors';

export const Style = StyleSheet.create({
  backgroundImage: {
    height: UDevice.height * 0.5,
    width: UDevice.width,
    alignSelf: 'center',
  },
  view:{
    height:UDevice.height*.4,
    width:UDevice.width,
   
  }
});
