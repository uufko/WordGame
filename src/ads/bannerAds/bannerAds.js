import { View} from 'react-native'
import React from 'react'
import {BannerAd, BannerAdSize, TestIds} from 'react-native-google-mobile-ads';
import { UDevice } from '../../assets/uMetarial/uDevice';

const adUnitId = __DEV__ ? TestIds.BANNER : 'ca-app-pub-9042490279958793/5958422501';

export const BannerAds = () => {
  return (
    <View style={{alignItems:"center", justifyContent:"flex-end",height:UDevice.height*.315}}>
      <BannerAd
        size={BannerAdSize.LARGE_BANNER}
        unitId={adUnitId}
      />
    </View>
  )
}