import info from '../../config';
import nodemailer from "nodemailer";
const smtpTransport = nodemailer.createTransport({
    service: "Gmail",
    auth: {
        user:  info.email,
        pass:  info.password
    }
});


class Mail {
    constructor(from) {
        this.from = from;
    }

    send(subject, html, to) {
        return new Promise((resolve, reject) => {
            smtpTransport.sendMail({
                from: this.from,
                to,
                subject,
                html
            }, (error, info) => {
                if (error) {
                    return reject(error)
                }
                resolve(info);
            })
        });

    }
}

export default Mail;