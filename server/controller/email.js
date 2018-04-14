const nodemailer = require("nodemailer");
const config = require("./../config");

const mailTransport = nodemailer.createTransport(config.email.config);

class Email {
  static async send(client) {
    const options = {
      from: config.email.options.from,
      to: config.email.options.to,
      subject: config.email.options.title,
      text: config.email.options.title,
      html: `<h1>${config.email.options.title}</h1>
      <p>称呼: ${client.name}<p>
      <p>公司名称: ${client.company}<p>
      <p>邮箱: ${client.email}<p>
      <p>电话: ${client.phone}<p>
      <p>固定电话: ${client.tel}<p>
      <p>想要了解的内容:<p>
      <p>${client.message}<p>`
    };
    return mailTransport.sendMail(options);
  }
}
export default Email;
