import axios from "axios";

const verifyMail = (email: string, code: number) => {
  const MAIL_URI = process.env.MAIL_URI;
  try {
    axios.post(`${MAIL_URI}/mail/send`, {
      name: "mail:verify",
      to: email,
      data: { code: code },
    });
    console.log("Mail request sent");
  } catch (e) {
    console.log(e);
  }
};

export { verifyMail };
