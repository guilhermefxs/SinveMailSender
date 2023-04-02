const MailSlurp = require("mailslurp-client").default;
var express = require('express');
var router = express.Router();


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


/* GET users listing. */
router.get('/', async function(req, res, next) {
  await sendEmailMailSlurp('wgjlvbjlzvsuewfoxt@bbitf.com');
  res.send('ok');
});

module.exports = router;
