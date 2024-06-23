const checkLuhnAlgo = (cardNumber:string):boolean => {
    try{
        cardNumber = cardNumber.replace(/[^\d]/g, '');
        if (cardNumber.length !== 16) {
            return false;
        }
        let sum = 0;
        for (let i = 0; i < 16; i++) {
            let digit = parseInt(cardNumber[i]);
            if (i % 2 === 0) {
                digit *= 2;
                if (digit >= 10) {
                    digit = digit - 9;
                }
            }
            sum += digit;
        }
        return sum % 10 === 0;
    } catch(e) {
        throw new Error(`checkLuhnAlgo error: ${e}`);
    }
}

const execCallback = (cb:any, errMsg:string = '에러메시지'):void => {
    try{
        cb();
    }catch(e){
        throw new Error(errMsg ?? e);
    }
}

export {
    checkLuhnAlgo,
    execCallback
}
