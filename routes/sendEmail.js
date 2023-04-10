import { MailSlurp } from "mailslurp-client";

const sendEmailMailSlurp = async (emailAddress, body) => {
  try {
    const apiKey = process.env.API_KEY ?? '16cf4152f4a81c1806a230530ead06796708392da78eca8faefd6bc530cee076';
    const mailslurp = new MailSlurp({ apiKey });

    // create an inbox
    const inbox = await mailslurp.inboxController.createInbox({});
    const options = {
      to: [emailAddress],
      subject: 'Hello',
      body: body,
    };
    const sent = await mailslurp.sendEmail(inbox.id, options);
  } catch (error) {
    console.log(error);
  }

}

export const sendEmail = async (req, res) => {
  try {
    const email = req.params.email;
    await sendEmailMailSlurp(email, req.body.message);
    res.send('ok');
  } catch (err) {
    res.status(500).send({ err: err.message })
  }
}
