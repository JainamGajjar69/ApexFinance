import React, { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [userData, setUserData] = useState({
    yourName: "",
    emailAddress: "",
    yourMessage: "",
  });
  let name, value;
  const postUserData = (event) => {
    name = event.target.name;
    value = event.target.value;
    setUserData({ ...userData, [name]: value });
  };

  //connect with firebase
  const submitData = async (event) => {
    event.preventDefault();
    const { yourName, emailAddress, yourMessage } = userData;

    if (yourName && emailAddress && yourMessage) {
      const res = await fetch(
        "https://apexfinanceuserdata-default-rtdb.firebaseio.com/userDatabase.json",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            yourName,
            emailAddress,
            yourMessage,
          }),
        }
      );
      if (res) {
        setUserData({ yourName: "", emailAddress: "", yourMessage: "" });
        alert("Data Stored");
      } else {
        alert("Fill the data properly");
      }
    } else {
      alert("Fill the data properly");
    }
  };



  return (
    <>
      <div class="section wf-section snipcss-V4UWm">
        <div class="container">
          <div class="w-layout-grid grid-two-thirds-copy">
            <div class="panel">
              <div class="panel-body">
                <div class="space-bottom">
                  <h3 class="card-heading display-inline">Contact us.</h3>
                  <div class="card-heading text-gray-4 display-inline">
                    &nbsp;Because Money comes and goes with Emotion
                  </div>
                </div>
                <div class="form w-form">
                  <form
                    id="wf-form-Contact-Form"
                    name="wf-form-Contact-Form"
                    data-name="Contact Form"
                    method="POST"
                    class="form-vertical"
                    aria-label="Contact Form"
                  >
                    <div class="w-layout-grid form-grid-halves">
                      <input
                        type="text"
                        class="form-input form-input-large w-input"
                        maxlength="256"
                        name="yourName"
                        data-name="Name"
                        placeholder="Your Name"
                        id="contact-name"
                        required=""
                        value={userData.yourName}
                        onChange={postUserData}
                      />
                      <input
                        type="email"
                        class="form-input form-input-large w-input"
                        maxlength="256"
                        name="emailAddress"
                        data-name="Email"
                        placeholder="Email Address"
                        id="contact-email"
                        required=""
                        value={userData.emailAddress}
                        onChange={postUserData}
                      />
                    </div>
                    <textarea
                      placeholder="Your Message"
                      maxlength="5000"
                      id="Message"
                      name="yourMessage"
                      data-name="Message"
                      class="form-input textarea w-input"
                      value={userData.yourMessage}
                      onChange={postUserData}
                    ></textarea>
                    <input
                      type="submit"
                      data-wait="Please wait..."
                      id="w-node-_536b9db9-8d9a-5940-b59e-6577ca86cd40-bcf9e2c6"
                      class="button-large w-button"
                      onClick={submitData}
                    />
                  </form>
                  <div
                    class="form-success w-form-done"
                    tabindex="-1"
                    role="region"
                    aria-label="Contact Form success"
                  >
                    <div>Thank you! Your submission has been received!</div>
                  </div>
                  <div
                    class="form-error w-form-fail"
                    tabindex="-1"
                    role="region"
                    aria-label="Contact Form failure"
                  >
                    <div>
                      Oops! Something went wrong while submitting the form.
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div class="panel">
              <div class="panel-body justify-content-center">
                <div class="center-content">
                  <div class="circle-large bg-primary-4">
                    <img
                      src="https://uploads-ssl.webflow.com/5f2c87246b17fcf662282594/5f2c87244e4a4867e4b25ca6_icon-mail.svg"
                      width="48"
                      height="48"
                      alt=""
                    />
                  </div>
                  <h4>Email</h4>
                  <div class="text-lead">
                    <a href="mailto:hello@panels.io?subject=Website%20Enquiry">
                      apexfinance@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
