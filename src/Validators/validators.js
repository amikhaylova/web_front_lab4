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

