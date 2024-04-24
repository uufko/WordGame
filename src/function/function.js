import { View, Text } from 'react-native';
import React from 'react';
import { useSelector } from 'react-redux';
import { UDevice } from '../assets/uMetarial/uDevice';

export const uFunction = () => {
    const { controlAnswer } = useSelector(state => state.answers);

    const listHeightFunc = () => {
        switch (controlAnswer.length) {
            case 4:
                return UDevice.height * 0.082;
                break;
            case 5:
                return UDevice.height * 0.082;
                break;
            case 6:
                return UDevice.height * 0.082;
                break;
            case 7:
                return UDevice.height * 0.082;
                break;
            case 8:
                return UDevice.height * 0.072;
                break;
            case 9:
                return UDevice.height * 0.062;
                break;
            case 10:
                return UDevice.height * 0.059;
                break;
        }
    };

    const listWidthFunc = () => {
        switch (controlAnswer.length) {
            case 4:
                return UDevice.height * 0.07;
                break;
            case 5:
                return UDevice.height * 0.07;
                break;
            case 6:
                return UDevice.height * 0.07;
                break;
            case 7:
                return UDevice.height * 0.07;
                break;
            case 8:
                return UDevice.height * 0.062;
                break;
            case 9:
                return UDevice.height * 0.052;
                break;
            case 10:
                return UDevice.height * 0.047;
                break;
        }
    };
    return { listHeightFunc, listWidthFunc };
};
