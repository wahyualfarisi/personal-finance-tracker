export const onCheckValidity = (value, validation) => {
    let isValid = true;
    
    

    if( validation.required ){
        isValid = value.trim() !== "" && isValid;
    }

    if( validation.minLength ){
        isValid = value.length >= validation.minLength && isValid;
    }

    if( validation.maxLength ){
        isValid = value.length <= validation.maxLength && isValid;
    }

    if( validation.onlyNumber){
        
    }

    return isValid;
}