import validatePasswordLogin from "./validations/validatePasswordLogin";
import validateUserIdentifierLogin from "./validations/validateUserIdentifierLogin";

const validateUserLogin = [validateUserIdentifierLogin, validatePasswordLogin];

export default validateUserLogin;
