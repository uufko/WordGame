import {StyleSheet} from 'react-native';
import {UDevice} from '../../../assets/uMetarial/uDevice';

export const Style = StyleSheet.create({
  viewStyle: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 10,
    width: UDevice.width,
  },
  listViewStyle: {
    height: UDevice.height * 0.1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
