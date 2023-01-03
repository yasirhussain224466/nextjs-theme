/* eslint-disable @next/next/no-sync-scripts */
import React from "react";
import Head from "next/head";
import Script from "next/script";
import Navbar from "../../components/Navbar/navbar";
import Footer from "../../components/Footer/footer";
import DarkTheme from "../../layouts/Dark";
import ContactHeader from "../../components/Contact-header/contact-header";
import ContactForm from "../../components/Contact-form/contact-form";
import Services from "../../components/Services/services";
import Intro2 from "../../components/Intro2/intro2";

const Contact = () => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
    document.querySelector("body").classList.add("contact-page");
    return () => {
      document.querySelector("body").classList.remove("contact-page");
    };
    var navbar = navbarRef.current,
      logo = logoRef.current;
    if (window.pageYOffset > 300) {
      navbar.classList.add("nav-scroll");
    } else {
      navbar.classList.remove("nav-scroll");
    }
    window.addEventListener("scroll", () => {
      if (window.pageYOffset > 300) {
        navbar.classList.add("nav-scroll");
      } else {
        navbar.classList.remove("nav-scroll");
      }
    });
  }, [navbarRef]);
  React.useEffect(() => {
    setTimeout(() => {
      if (document.querySelector("#ieatmaps")) initMap();
    }, 1000);
  }, []);
  // React.useEffect(() => {
  //   Array.from(document.getElementsByTagName("iframe")).forEach((iframe) => {
  //     iframe.contentWindow.addEventListener(
  //       "load",
  //       () => {
  //         const doc = iframe.contentWindow.document;
  //         iframe.height = doc.body.scrollHeight;
  //       },
  //       true
  //     );
  //     iframe.contentWindow.addEventListener(
  //       "resize",
  //       () => {
  //         iframe.height = iframe.contentWindow.document.body.scrollHeight + 40;
  //       },
  //       true
  //     );
  //   });
  // }, []);
  return (
    <>
      <DarkTheme>
        <Navbar nr={navbarRef} lr={logoRef} />
        <div className="container">
          <div className="row">
            <div className="col-lg-4">
              <Intro2 />
            </div>
            <div className="col-lg-8">
              <ContactHeader />
            </div>
          </div>
        </div>
        <Services style="4item" />
        <div className="main-content">
          <ContactForm />
          {/* <div className="map" id="ieatmaps" /> */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3618.39311965789!2d67.03167951474937!3d24.918674349059287!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3eb33f97f216cb0f%3A0x71dbd8e2e73a877f!2sMinhaj%20Ghori%20Rd%2C%20Nazimabad%20No.%204%20Block%204%20Nazimabad%2C%20Karachi%2C%20Karachi%20City%2C%20Sindh%2074600%2C%20Pakistan!5e0!3m2!1sen!2s!4v1645023188002!5m2!1sen!2s"
            width="100%"
            height="600"
            style={{ border: "0" }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
          <Footer hideBGCOLOR />
        </div>
      </DarkTheme>
      <Script id="map" strategy="afterInteractive" src="/js/map.js"></Script>
      {/* <Script
        id="google-map"
        async
        defer
        src="https://maps.googleapis.com/maps/api/js?key=AIzaSyA5bpEs3xlB8vhxNFErwoo3MXR64uavf6Y&callback=initMap"
      ></Script> */}
    </>
  );
};

export default Contact;
