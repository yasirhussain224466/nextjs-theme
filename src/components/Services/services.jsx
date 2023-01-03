import React from "react";
import featuresData from "../../data/sections/features.json";
import { AiOutlineArrowDow, AiOutlineArrowUp } from "react-icons/ai";

const Services = ({ style, lines }) => {
  let className1 = "featureContent";
  let className2 = "featureContent";
  let className3 = "featureContent";
  let className4 = "featureContent";

  const [state1, setState1] = React.useState(false);
  const [state2, setState2] = React.useState(false);
  const [state3, setState3] = React.useState(false);
  const [state4, setState4] = React.useState(false);

  if (state1 === true) {
    className1 = "";
  }
  if (state2 === true) {
    className2 = "";
  }
  if (state3 === true) {
    className3 = "";
  }
  if (state4 === true) {
    className4 = "";
  }
  return (
    <section
      className={`services bords section-padding ${
        style === "4item" ? "lficon" : lines ? "" : "pt-0"
      }`}
    >
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-8 col-md-10">
            <div className="sec-head text-center">
              <h6 className="wow fadeIn" data-wow-delay=".5s">
                Best Features
              </h6>
              <h3 className="wow color-font">
                We are a new digital product development agency
              </h3>
            </div>
          </div>
        </div>
        <div className="row">
          {style === "4item" ? (
            <>
              <div
                key={1}
                className="col-lg-6 wow fadeInLeft"
                data-wow-delay=".5"
              >
                <div className="item-box">
                  <div>
                    <span className="icon pe-7s-paint-bucket"></span>
                  </div>
                  <div className="cont">
                    <h6>Custom Product Development</h6>
                    <p className={className1 + 1}>
                      Your idea, our solution. Kodexo Labs is proficient in
                      turning your visions into reality. Our proactive
                      developers are always ready to provide the most
                      comprehensive array of mobile app development services to
                      our clients and dedicated to the best development venture
                      under the most advanced technologies. With our 4+ years of
                      experience, we ensure that you always get the latest
                      product development ideas when it comes to building
                      realities over your imagination.
                    </p>
                    
                  </div>
                </div>
              </div>
              <div
                key={2}
                className="col-lg-6 wow fadeInLeft"
                data-wow-delay=".7"
              >
                <div className="item-box">
                  <div>
                    <span className="icon pe-7s-phone"></span>
                  </div>
                  <div className="cont">
                    <h6>Hybrid Mobile Applications Development</h6>
                    <p className={className2 + 2}>
                      Your enterprise application needs are not an easy task.
                      Hybrid apps that work on all platforms, devices, and
                      browsers are one of our expertise. With the experience of
                      developing over 15+ apps, we are now specialized in
                      working with a range of technologies such as frameworks,
                      including flutter, react native, and programming
                      languages, and are skilled at combining these to offer a
                      solution to your exact business requirements.
                    </p>
                    
                  </div>
                </div>
              </div>
              <div
                key={3}
                className="col-lg-6 wow fadeInLeft"
                data-wow-delay=".5"
              >
                <div className="item-box">
                  <div>
                    <span className="icon pe-7s-display1"></span>
                  </div>
                  <div className="cont">
                    <h6>E-Commerce Website Development</h6>
                    <p className={className3 + 3}>
                      With an estimated 19% of global sales attributed to
                      e-commerce, it&apos; a field that only promises to grow.
                      At Kodexo Labs, we believe that you can accomplish your
                      goals with the right team on your side. Our highly-skilled
                      team offers dedicated e-commerce website design with
                      development solutions to help you grow your business and
                      dreams. In the competitive world of e-commerce—no matter
                      what size your business is. We understand that even the
                      smallest businesses are capable of big things, and we want
                      to help you get there.
                    </p>
                   
                  </div>
                </div>
              </div>
              <div
                key={4}
                className="col-lg-6 wow fadeInLeft"
                data-wow-delay=".5"
              >
                <div className="item-box">
                  <div>
                    <span className="icon pe-7s-diskette"></span>
                  </div>
                  <div className="cont">
                    <h6>Website Development</h6>
                    <p className={className4 + 4}>
                      Kodexo Labs team of website development experts has helped
                      countless businesses like yours realize their dream of
                      success. Our dedicated web designs and development
                      solutions have been proven time and time again to bring
                      businesses the financial success they need to thrive. So
                      if you&apos;ve been thinking about scaling your business,
                      don&apos;t hesitate!
                    </p>
                    
                  </div>
                </div>
              </div>
            </>
          ) : (
            // max item 3 in Home page
            featuresData.slice(0, 3).map((feature) => (
              <div
                key={feature.id}
                className="col-lg-4 wow fadeInLeft"
                data-wow-delay=".5s"
              >
                <div className="item-box md-mb50">
                  <span className={`icon ${feature.icon}`}></span>
                  <h6>{feature.title}</h6>
                  <p className="featureContent">{feature.content}</p>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
      {lines ? (
        <>
          <div className="line top left"></div>
          <div className="line bottom right"></div>
        </>
      ) : null}
    </section>
  );
};

export default Services;