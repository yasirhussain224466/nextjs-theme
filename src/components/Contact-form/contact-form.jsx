import React from "react";
import ContactFromDate from "../../data/sections/form-info.json";
import { API_URL } from "../../pages/api/constant";

const ContactForm = () => {
  const handleSubmit = (e) => {
    console.log("Hello");
    e.preventDefault();
    const name = document.getElementById("form_name").value;
    const email = document.getElementById("form_email").value;
    const message = document.getElementById("form_message").value;
    const obj = {
      name,
      email,
      comment: message,
    };
    if (name && email && message) {
      fetch(`${API_URL}messages`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ data: obj }),
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          console.log(data);
          // if (data?.id) {
          //   console.log("Clear");
          //   name.value = "";
          //   email.value = "";
          //   message.value = "";
          // }
          document.getElementById("form_name").value = "";
          document.getElementById("form_email").value = "";
          document.getElementById("form_message").value = "";
          document.querySelector(".messages").innerText =
            "Your response has been recorded!.";
          setTimeout(() => {
            document.querySelector(".messages").innerText = "";
          }, 2000);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      document.querySelector(".messages").innerText =
        "Please provide your details.";
      setTimeout(() => {
        document.querySelector(".messages").innerText = "";
      }, 2000);
    }
  };
  return (
    <section className="contact section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-6">
            <div className="form md-mb50">
              <h4 className="fw-700 color-font mb-50">Get In Touch.</h4>

              <form id="contact-form" method="post" action="contact.php">
                <div className="messages"></div>

                <div className="controls">
                  <div className="form-group">
                    <input
                      id="form_name"
                      type="text"
                      name="name"
                      placeholder="Name"
                      required="required"
                    />
                  </div>

                  <div className="form-group">
                    <input
                      id="form_email"
                      type="email"
                      name="email"
                      placeholder="Email"
                      required="required"
                    />
                  </div>

                  <div className="form-group">
                    <textarea
                      id="form_message"
                      name="message"
                      placeholder="Message"
                      rows="4"
                      required="required"
                    ></textarea>
                  </div>

                  <button
                    onClick={handleSubmit}
                    type="submit"
                    className="butn bord"
                  >
                    <span>Send Message</span>
                  </button>
                </div>
              </form>
            </div>
          </div>
          <div className="col-lg-5 offset-lg-1">
            <div className="cont-info">
              <h4 className="fw-700 color-font mb-50">Contact Info.</h4>
              <h3 className="wow" data-splitting>
                {ContactFromDate.title}
              </h3>
              <div className="item mb-40">
                <h5>
                  <a href="#0">{ContactFromDate.email}</a>
                </h5>
                <h5>021 36720047</h5>
              </div>
              <h3 className="wow" data-splitting>
                Visit Us.
              </h3>
              <div className="item">
                <h6>
                  {ContactFromDate.location.first}
                  <br />
                  {ContactFromDate.location.second}
                </h6>
              </div>
              <div className="social mt-50">
                <a href="#0" className="icon">
                  <i className="fab fa-facebook-f"></i>
                </a>
                <a
                  href="https://www.linkedin.com/company/kodexolabs/"
                  className="icon"
                >
                  <i className="fab fa-linkedin"></i>
                </a>
                {/* <a href="#0" className="icon">
                  <i className="fab fa-pinterest"></i>
                </a>
                <a href="#0" className="icon">
                  <i className="fab fa-behance"></i>
                </a> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
