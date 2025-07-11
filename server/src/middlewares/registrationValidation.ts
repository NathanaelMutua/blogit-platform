import validateUserRegistrationNames from "./validations/validateUserRegistrationNames";
import validateEmailRegistration from "./validations/validateEmailRegistration";
import validateUsernameRegistration from "./validations/validateRegistrationUsername";
import validatePassword from "./validations/validatePassword";
import validateProfileImage from "./validations/validateProfileImage";
import { PrismaClient } from "@prisma/client";

export const myClient = new PrismaClient();

const registrationValidation = [
  validateUserRegistrationNames,
  validateEmailRegistration,
  validateUsernameRegistration,
  validatePassword,
];

export default registrationValidation;
