import { MailSlurp } from "mailslurp-client";

const sendEmailMailSlurp = async (emailAddress) => {
  try {
    const apiKey = process.env.API_KEY ?? '89b94c2651742b24da443f864494b693a3e78ad36704c87c91af664746c2f43f';
    const mailslurp = new MailSlurp({ apiKey });

    // create an inbox
    const inbox = await mailslurp.inboxController.createInbox({});
    const options = {
      to: [emailAddress],
      subject: 'Hello',
      body: 'Welcome',
  };
  const sent = await mailslurp.sendEmail(inbox.id, options);
  } catch (error) {
    console.log(error);
  }
  
}

export const sendEmail = async (req, res) => {
  try {
    console.log(req.params)
    const email = req.params.email;
    await sendEmailMailSlurp(email);
    res.send('ok');
  } catch (err) {
      res.status(500).send({ err: err.message })
  }
}
