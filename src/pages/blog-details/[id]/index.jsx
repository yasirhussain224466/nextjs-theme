import React from "react";
import Navbar from "../../../components/Navbar/navbar";
import PageHeader from "../../../components/Page-header/page-header";
import Footer from "../../../components/Footer/footer";
import DarkTheme from "../../../layouts/Dark";
import { API_URL } from "../../api/constant";
import BlogDetails from "../../../components/Blog-details/index";

const BlogDetailsDark = ({ blog }) => {
  const navbarRef = React.useRef(null);
  const logoRef = React.useRef(null);

  React.useEffect(() => {
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
  return (
    <DarkTheme>
      <div className="circle-bg">
        <div className="circle-color fixed">
          <div className="gradient-circle"></div>
          <div className="gradient-circle two"></div>
        </div>
      </div>
      <Navbar nr={navbarRef} lr={logoRef} />
      <PageHeader
        title={blog?.data?.attributes?.title}
        paragraph={blog?.data?.attributes?.paragraph}
      />
      <BlogDetails theme="dark" blog={blog} />
      <Footer />
    </DarkTheme>
  );
};

export const getServerSideProps = async (context) => {
  const res = await fetch(
    `${API_URL}blogs/${Number(context?.query.id)}?populate=comments`
  );
  const blog = await res.json();
  return {
    props: {
      blog,
    },
  };
};

export default BlogDetailsDark;
