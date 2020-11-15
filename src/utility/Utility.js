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

export const formatRupiah = (value) => {
    
    var input = String(value);

    var number_str = input.toString();
        var split = number_str.split(',');
        var sisa = split[0].length % 3;
        var rupiah = split[0].substr(0, sisa);
        var ribuan = split[0].substr(sisa).match(/\d{3}/gi)
        

        if(ribuan){
            var separator = sisa ? '.' : '';
            rupiah += separator + ribuan.join('.')
        }

        return rupiah;
}