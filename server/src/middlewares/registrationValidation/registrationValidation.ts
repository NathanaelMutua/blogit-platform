import validateUserRegistrationNames from "./validateUserRegistrationNames";
import validateEmailRegistration from "./validateEmailRegistration";
import validateUsernameRegistration from "./validateRegistrationUsername";
import validatePassword from "./validatePassword";
import validateProfileImage from "./validateProfileImage";
import { PrismaClient } from "@prisma/client";

export const myClient = new PrismaClient();

const registrationValidation = [
  validateUserRegistrationNames,
  validateEmailRegistration,
  validateUsernameRegistration,
  validatePassword,
  validateProfileImage,
];

export default registrationValidation;
