import axios from "axios";

const forgotPasswordMail = (email: string, code: number) => {
  const MAIL_URI = process.env.MAIL_URI;
  try {
    axios.post(`${MAIL_URI}/mail/send`, {
      name: "mail:recover",
      to: email,
      data: { code: code },
    });
  } catch (e) {
    console.log(e);
  }
};

export { forgotPasswordMail };
