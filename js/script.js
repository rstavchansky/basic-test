import fetch from 'node-fetch'

sendEmailButton = document.querySelector(".emailTest");

var sendEmail = function () {

await fetch(
    `${process.env.URL}/.netlify/functions/emails/welcome`,
    {
      headers: {
        "netlify-emails-secret": process.env.NETLIFY_EMAILS_SECRET,
      },
      method: "POST",
      body: JSON.stringify({
        from: "no-reply@yourdomain.com",
        to: "jane.example@test.com",
        cc: "cc@test.com",
        bcc: "bcc@test.com",
        subject: "Welcome",
        parameters: {
          products: ["product1", "product2", "product3"],
          name: "Jane",
        },
      }),
    }
  );
}

sendEmailButton.addEventListener("click", sendEmail);
