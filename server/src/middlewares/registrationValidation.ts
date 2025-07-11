import validateUserRegistrationNames from "./validations/validateUserRegistrationNames";
import validateEmailRegistration from "./validations/validateEmailRegistration";
import validateUsernameRegistration from "./validations/validateRegistrationUsername";
import validatePassword from "./validations/validatePassword";
import { PrismaClient } from "@prisma/client";

export const myClient = new PrismaClient();

const registrationValidation = [
  validateUsernameRegistration,
  validateEmailRegistration,
  validateUserRegistrationNames,
  validatePassword,
];

export default registrationValidation;
