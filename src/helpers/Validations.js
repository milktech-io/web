export const validateName = (name) => {
    const re =/^[A-Za-zÁÉÍÓÚáéíóúñÑ ]+$/g;
    return re.test(name);
  };
  export const validatePhone = (phone) => {
    const re = /^(\+\d{1,2}\s?)?1?-?\.?\s?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/;
    return re.test(phone);
  };
  export const validateEmail = (email) => {
    const re = /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
    return re.test(email);
  };
  export const validatePassword = (password) => {
    let uppercase=false;
    let lowercase=false;
    let number=false;

    if (password.length<8) {
      return false;
    }

    for (let i=0; i<password.length; i++) {
      let character = password[i];

      if(!isNaN(character)) {
        number=true;
      }else if(character===character.toUpperCase()){
        uppercase=true;
      } else {
        lowercase=true;
      }

    }

    return lowercase && uppercase && number;
  };

  export const validatePasswordConfirm = (password, passwordConfirm) => {
    return password === passwordConfirm;
  }
  
export const validateUser = (user) => {
    const re = /^[A-Za-z0-9\s]+$/;
    return re.test(user);
  };