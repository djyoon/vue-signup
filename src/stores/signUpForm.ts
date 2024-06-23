import { ref, reactive } from 'vue'
import { defineStore } from 'pinia'
import { type ISignUpForm } from '@/interface/signUp';

export const useSignUpFormStore = defineStore('signUpForm', () => {
    const signUpForm: ISignUpForm = reactive({
        email: { val: '', isValid: false, msg: '', stepCnt: 0 },
        pw: { val: '', isValid: false, msg: '', stepCnt: 0 },
        pwConfirm: { val: '', isValid: false, msg: '', stepCnt: 0 },
        nm: { val: '', isValid: false, msg: '', stepCnt: 1 },
        phoneNum: { val: '', isValid: false, msg: '', stepCnt: 1 },
        addrMain: { val: '', isValid: false, msg: '', stepCnt: 1 },
        addrSub: { val: '', isValid: false, msg: '', stepCnt: 1 },
        cardNum1: { val: '', isValid: false, msg: '', stepCnt: 2 },
        cardNum2: { val: '', isValid: false, msg: '', stepCnt: 2 },
        cardNum3: { val: '', isValid: false, msg: '', stepCnt: 2 },
        cardNum4: { val: '', isValid: false, msg: '', stepCnt: 2 },
        });
    return { signUpForm }
}, {
        persist:{
            storage: sessionStorage
        }
    })
