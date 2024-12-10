// validation.js
import validator from 'validator';

const validatePassword = (password:string) => {
  return validator.isLength(password, { min: 3 });
};


export default validatePassword