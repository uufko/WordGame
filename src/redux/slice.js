import { current, createSlice } from '@reduxjs/toolkit';
import { UDatas } from '../assets/uMetarial/uDatas';

const AnswerSlice = createSlice({
    name: 'answers',
    initialState: {
        hiddenAnswer: '', //UDatas.Word4[1].answer.split("").map(function (set) { return "" }),
        answer: '', //UDatas.Word4[1].answer.split(""),
        controlAnswer: '',
        question: '', //UDatas.Word4[1].question,
        randomArray: [],
        score: 0,
        totalScore: 0,
        order: 4,
        inputValue: '',
        trueFalseControl: '',
        randomNumber: 0,
    },
    reducers: {
        setScore(state, data) {
            state.score = state.answer.length * 100 - state.randomArray.length * 100;
        },
        setAnswer(state, data) {
            state.hiddenAnswer[data.payload] = state.answer[data.payload];
            (state.hiddenAnswer.toString() == state.answer.toString()) == true
                ? (state.trueFalseControl = 'true')
                : null;
        },
        addRandomArray(state, data) {
            if (state.answer.length == state.randomArray.length) {
                console.log('tamam');
            } else {
                state.randomArray.push(data.payload);
            }
        },

        changeAnswer(state, data) {
            switch (state.order) {
                case 4:
                    state.hiddenAnswer = (UDatas.Word4[state.randomNumber]).answer.split('').map(function (set) {return '';});
                    break;
                case 5:
                    state.hiddenAnswer = (UDatas.Word5[state.randomNumber]).answer.split('').map(function (set) {return '';});
                    break;
                case 6:
                    state.hiddenAnswer = (UDatas.Word6[state.randomNumber]).answer.split('').map(function (set) {return '';});
                    break;
                case 7:
                    state.hiddenAnswer = (UDatas.Word7[state.randomNumber]).answer.split('').map(function (set) {return '';
                        });
                    break;
                case 8:
                    state.hiddenAnswer = (UDatas.Word8[state.randomNumber]).answer
                        .split('')
                        .map(function (set) {
                            return '';
                        });
                    break;
                case 9:
                    state.hiddenAnswer = (UDatas.Word9[state.randomNumber]).answer
                        .split('')
                        .map(function (set) {
                            return '';
                        });
                    break;
                case 10:
                    state.hiddenAnswer = (UDatas.Word10[state.randomNumber]).answer
                        .split('')
                        .map(function (set) {
                            return '';
                        });
                    break;
            }
        },
        changeHiddenAnswer(state, data) {
            switch (state.order) {
                case 4:
                    state.answer = UDatas.Word4[state.randomNumber].answer.split('');
                    break;
                case 5:
                    state.answer = UDatas.Word5[state.randomNumber].answer.split('');
                    break;
                case 6:
                    state.answer = UDatas.Word6[state.randomNumber].answer.split('');
                    break;
                case 7:
                    state.answer = UDatas.Word7[state.randomNumber].answer.split('');
                    break;
                case 8:
                    state.answer = UDatas.Word8[state.randomNumber].answer.split('');
                    break;
                case 9:
                    state.answer = UDatas.Word9[state.randomNumber].answer.split('');
                    break;
                case 10:
                    state.answer = UDatas.Word10[state.randomNumber].answer.split('');
                    break;
            }
        },
        setControlAnswer(state, data) {
            switch (state.order) {
                case 4:
                    state.controlAnswer = UDatas.Word4[state.randomNumber].answer;
                    break;
                case 5:
                    state.controlAnswer = UDatas.Word5[state.randomNumber].answer;
                    break;
                case 6:
                    state.controlAnswer = UDatas.Word6[state.randomNumber].answer;
                    break;
                case 7:
                    state.controlAnswer = UDatas.Word7[state.randomNumber].answer;
                    break;
                case 8:
                    state.controlAnswer = UDatas.Word8[state.randomNumber].answer;
                    break;
                case 9:
                    state.controlAnswer = UDatas.Word9[state.randomNumber].answer;
                    break;
                case 10:
                    state.controlAnswer = UDatas.Word10[state.randomNumber].answer;
                    break;
            }
        },
        changeQuestion(state, data) {
            switch (state.order) {
                case 4:
                    state.question = UDatas.Word4[state.randomNumber].question;
                    break;
                case 5:
                    state.question = UDatas.Word5[state.randomNumber].question;
                    break;
                case 6:
                    state.question = UDatas.Word6[state.randomNumber].question;
                    break;
                case 7:
                    state.question = UDatas.Word7[state.randomNumber].question;
                    break;
                case 8:
                    state.question = UDatas.Word8[state.randomNumber].question;
                    break;
                case 9:
                    state.question = UDatas.Word9[state.randomNumber].question;
                    break;
                case 10:
                    state.question = UDatas.Word10[state.randomNumber].question;
                    break;
            }
        },
        increaseOrder(state, data) {
            state.totalScore = state.totalScore + (state.answer.length * 100) - (state.randomArray.length * 100);
            state.order = state.order + 1;
            state.randomArray = [];
            state.inputValue = '';
            state.trueFalseControl = '';
        },
        setInputValue(state, data) {
            state.inputValue = data.payload;
        },
        setTrueFalseControl(state, data) {
            if (
                state.controlAnswer.toLocaleUpperCase() ==
                state.inputValue.toLocaleUpperCase()
            ) {
                state.hiddenAnswer = state.answer;
                state.trueFalseControl = 'true';
                //setTimeout(() => {console.log("u") }, 2000)
            } else {
                state.trueFalseControl = 'false';
            }
        },
        setRandomNumber(state, data) {
            switch (state.order) {
                case 4:
                    console.log(Object.keys(UDatas.Word4).length);
                    state.randomNumber = Math.floor(Math.random() * Object.keys(UDatas.Word4).length);
                    console.log("randomNumber",state.randomNumber);
                    break;
                case 5:
                    console.log(Object.keys(UDatas.Word5).length);
                    state.randomNumber = Math.floor(Math.random() * Object.keys(UDatas.Word5).length);
                    console.log("randomNumber",state.randomNumber);
                    break;
                case 6:
                    console.log(Object.keys(UDatas.Word6).length);
                    state.randomNumber = Math.floor(Math.random() * Object.keys(UDatas.Word6).length);
                    console.log("randomNumber",state.randomNumber);
                    break;
                case 7:
                    console.log(Object.keys(UDatas.Word7).length);
                    state.randomNumber = Math.floor(Math.random() * Object.keys(UDatas.Word7).length);
                    console.log("randomNumber",state.randomNumber);
                    break;
                case 8:
                    console.log(Object.keys(UDatas.Word8).length);
                    state.randomNumber = Math.floor(Math.random() * Object.keys(UDatas.Word8).length);
                    console.log("randomNumber",state.randomNumber);
                    break;
                case 9:
                    console.log(Object.keys(UDatas.Word9).length);
                    state.randomNumber = Math.floor(Math.random() * Object.keys(UDatas.Word9).length);
                    console.log("randomNumber",state.randomNumber);
                    break;
                case 10:
                    console.log(Object.keys(UDatas.Word10).length);
                    state.randomNumber = Math.floor(Math.random() * Object.keys(UDatas.Word10).length);
                    console.log("randomNumber",state.randomNumber);
                    break;
            }
            
        },
        setTrueFalseControlWithInput(state, data) {
            if (state.randomArray.length == state.order) {
                state.trueFalseControl = 'true';
            } else {
                state.trueFalseControl = '';
            }
        },
        refreshOrder(state, data) {
            state.order = 4
            state.score = 0
            state.totalScore = 0
            state.randomArray=[]
            state.trueFalseControl = ""
        },
    },
});

export const {
    refreshOrder,
    setTrueFalseControlWithInput,
    setRandomNumber,
    setTrueFalseControl,
    setControlAnswer,
    setInputValue,
    setScore,
    increaseOrder,
    setAnswer,
    addRandomArray,
    changeAnswer,
    changeHiddenAnswer,
    changeQuestion,
} = AnswerSlice.actions;
export default AnswerSlice;
