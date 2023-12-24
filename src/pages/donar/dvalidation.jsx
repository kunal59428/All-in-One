const Validation = (value) => {

    let errors={};

    if(!value.name){
        errors.name="Name is required."
    }
    if(!value.phone){
        errors.phone="Phone Number is required."
    }else if(value.phone.length < 10){
        errors.phone = "phone number must be of ten digits."
    }

    if(!value.email){
        errors.email="Email is required."
    }else if (!/\S+@\S+\.\S+/.test(value.email)){
        errors.email="Email is invaild."
    }
    if(!value.password){
        errors.password="password is required."
    }else if(value.password.length < 5){
        errors.password = "Password must be more than five characters"
    }
    return errors;
}

export default Validation;