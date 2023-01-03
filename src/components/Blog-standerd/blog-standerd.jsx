/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const BlogStanderd = ({ blogs }) => {
  return (
    <section className="blog-pg section-padding pt-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="posts">
              {blogs?.map((blogItem, index) => (
                <div
                  className={`item ${
                    index === blogs.length - 1 ? "" : "mb-80"
                  }`}
                  key={blogItem?.id}
                >
                  <div className="img">
                    <Link href="/blog-details/blog-details-dark">
                      <a>
                        <img
                          src={
                            blogItem?.attributes.image?.data?.length > 0
                              ? blogItem?.attributes.image?.data[0]?.attributes
                                  ?.url
                              : ""
                          }
                          alt=""
                        />
                      </a>
                    </Link>
                  </div>
                  <div className="content">
                    <div className="row justify-content-center">
                      <div className="col-10">
                        <Link href="/blog/blog-dark">
                          <a className="date">
                            <span className="num">
                              {new Date(
                                blogItem?.attributes.createdAt
                              ).getDate()}
                            </span>
                            <span>{blogItem?.attributes?.title}</span>
                          </a>
                        </Link>

                        <div className="tags">
                          {blogItem?.attributes?.tags?.data?.map(
                            (tag, index) => (
                              <Link key={index} href="#">
                                <a>{tag?.attributes?.name}</a>
                              </Link>
                            )
                          )}
                        </div>
                        <h4 className="title">
                          <Link href="/blog-details/blog-details-dark">
                            {blogItem?.attributes.title}
                          </Link>
                        </h4>
                        <div
                          dangerouslySetInnerHTML={{
                            __html: blogItem?.attributes?.content,
                          }}
                        ></div>
                        <Link
                          href="/blog-details/[id]"
                          as={`/blog-details/${blogItem?.id}`}
                        >
                          <a className="butn bord curve mt-30">Read More</a>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
              <div className="pagination">
                {/* {blogs?.map((blog) => (
                  <span className="active">
                    <Link href="#">{blog?.id}</Link>
                  </span>
                ))} */}
                {/* <span>
                  <Link href="/blog/blog-dark">2</Link>
                </span> */}
                <span>
                  <Link href="/blog/blog-dark">
                    <a>
                      <i className="fas fa-angle-right"></i>
                    </a>
                  </Link>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogStanderd;
