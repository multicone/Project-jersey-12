const currentuser = require("./currentuser.js");
const forgotPassword = require("./forgotPassword.js");
const newPassword = require("./newPassword.js");
const resendVerification = require("./resendVerification.js");
const resetPassword = require("./resetPassword.js");
const signin = require("./signin.js");
const signUp = require("./signup.js");
const submitJoursey = require("./submitJoursey.js");
const verifyUser = require("./verifyUser.js");

module.exports = {
  paths: {
    "/api/users/signup": {
      ...signUp,
    },
    "/api/users/signin": {
      ...signin,
    },
    "/api/users/currentuser": {
      ...currentuser,
    },
    "/api/users/verify": {
      ...verifyUser,
    },
    "/api/users/resend": {
      ...resendVerification,
    },
    "/api/users/forgot-password": {
      ...forgotPassword,
    },
    "/api/users/reset-password": {
      ...resetPassword,
    },
    "/api/users/reset-password/new": {
      ...newPassword,
    },
    "/api/joursey": {
      ...submitJoursey,
    },
  },
};
