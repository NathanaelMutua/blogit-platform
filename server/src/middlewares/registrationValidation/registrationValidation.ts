import validateUserRegistrationNames from "./validateUserRegistrationNames";
import validateEmailRegistration from "./validateEmailRegistration";
import validateUsernameRegistration from "./validateRegistrationUsername";
import validatePassword from "./validatePassword";
import validateProfileImage from "./validateProfileImage";

const registrationValidation = [
  validateUserRegistrationNames,
  validateEmailRegistration,
  validateUsernameRegistration,
  validatePassword,
  validateProfileImage,
];

export default registrationValidation;
