import { useSignUpFormStore } from "@/stores/signUpForm";
import { useStepCounterStore } from "@/stores/stepCounter";
import { checkLuhnAlgo } from "@/js/common/utils";
import {ref} from "vue";

export const signUpCompose = {
    data: {
        cardInfoValidMsg: ref(undefined)
    },
    fn: {
        openPostCodePopup: () => {
            new daum.Postcode({
                oncomplete: function(data) {
                    const { signUpForm } = useSignUpFormStore();
                    signUpForm.addrMain.val = data?.address;
                    signUpCompose.fn.checkInputValue('addrMain');
                }
            }).open();
        },
        checkInputValue: (ref:string = ''):boolean => {
            const { signUpForm } = useSignUpFormStore();
            if(void 0 === ref){
                throw new Error('checkInputValue target parameter undefined');
            }
            const val = signUpForm[ref].val;

            const krNameExp = /^[가-힣]{2,}$/;
            const enNameExp = /^[a-zA-Z]{3,}$/;
            const pwExp =  /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[!@#$%^&*()\-_=+\\\|\[\]{};:'",<.>/?]).{8,}$/;
            const phoneNumExp = /^(0\d{2,3})[- ]?\d{4}[- ]?\d{4}$/;
            const emailExp =/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
            const errMsg = {
                nm: '2글자 이상의 한글 완성형, 또는 3글자 이상의 영문 알파벳, 그 외 특수문자, 숫자, 공백은 허용하지 않습니다.',
                pw: '영문 대문자, 소문자, 숫자, 특수문자를 포함한 8자리 이상의 문자 형식이어야 합니다.',
                pwConfirm: '비밀번호 입력값과 동일하여야 합니다.',
                email: '이메일형식이 올바르지않습니다.',
                addrMain: '유효한 우표번호를 입력해주세요.',
                addrSub: '유효한 우표번호를 입력해주세요.',
                phoneNum: '0으로 시작하며 중간 3-4자리, 마지막 4자리의 형식, 하이픈 또는 공백은 허용합니다.\nex) 010-1234-1234\n' +
                    'ex) 010 111 1234\n' +
                    'ex) 01022223333',
            }

            let isValid = false;
            switch(ref){
                case 'nm':
                    isValid = krNameExp.test(val) || enNameExp.test(val);
                    break;
                case 'pw':
                    isValid = pwExp.test(val);
                    signUpForm.pwConfirm.msg = '';
                    signUpForm.pwConfirm.val =  '';
                    break;
                case 'pwConfirm':
                    isValid = signUpForm.pw.val.length > 0 && signUpForm.pw.val == signUpForm.pwConfirm.val;
                    break;
                case 'addrMain':
                case 'addrSub':
                    isValid = signUpForm?.[ref]?.val?.length > 0
                    break;
                case 'email':
                    isValid = emailExp.test(val);
                    break;
                case 'phoneNum':
                    isValid = phoneNumExp.test(val);
                    break;
            }
            signUpForm[ref].isValid = isValid;
            signUpForm[ref].msg = isValid ? 'OK' : val.length > 0 ? errMsg[ref] : '';
            return isValid;
        },
        clickConfirmBtn: () => {
            const { signUpForm } = useSignUpFormStore();
            const { setStepCount, increment } = useStepCounterStore();

            const cardNumbers = Object.entries(signUpForm).filter(v => v[0].indexOf('cardNum') > -1).map(v => v[1].val).join('');
            const isValid = checkLuhnAlgo(cardNumbers);
            if(isValid){
                signUpForm.cardNum1.isValid = true;
                signUpForm.cardNum2.isValid = true;
                signUpForm.cardNum3.isValid = true;
                signUpForm.cardNum4.isValid = true;
            }
            signUpCompose.data.cardInfoValidMsg.value = isValid ? 'OK' : '카드번호가 유효하지않습니다.';
            const isComplete = Object.values(signUpForm).every(v => v.isValid === true && v?.val?.length > 0 );
            if(!isComplete){
                const findStep = Object.values(signUpForm).find(v => v.isValid === false).stepCnt;
                setStepCount(findStep);
            } else {
                increment();
            }
        }
    }
}