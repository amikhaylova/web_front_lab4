export const required = value =>{
    if (value) return undefined;
    return 'Поле обязательно для заполнения';
};
export const maxLength = value =>{
    if (value && value.length > 15) return "Максимальная длина 15 символов";
    return undefined;
};

export const matchInput = (input, allInputs) =>{
    if (allInputs.reg_pas1 === allInputs.reg_pas2){
        return undefined;
    }else{
        return 'Пароль не совпадает';
    }
};

export const maxPointLength = value =>{
    if (value && value.length > 6) return "Максимальная длина 5 символов";
    return undefined;
};

export const x_value = value =>{
    let x;
    if (isNaN(value)){
        return 'Требуется число'
    }
    x = parseFloat(value);
    if ((x<=-5) || (x>=5)) return "Число X должно быть в диапазоне от -5 до 5";
    return undefined;
};
export const y_value = value =>{
    let y;
    if (isNaN(value)){
        return 'Требуется число'
    }
    y = parseFloat(value);
    if ((y<=-3) || (y>=3)) return "Число Y должно быть в диапазоне от -3 до 3";
    return undefined;
};
export const r_value = value =>{
    let r;
    if (isNaN(value)){
        return 'Требуется число'
    }
    r = parseFloat(value);
    if ((r<=-5) || (r>=5)) return "Число R должно быть в диапазоне от -5 до 5";
    if (r<=0) return "Тебуется положительное число R";
    return undefined;
};