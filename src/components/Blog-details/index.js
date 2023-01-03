/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";

const BlogDetails = ({ blog, theme }) => {
  console.log(blog);
  return (
    <section className="blog-pg single section-padding pt-0">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-11">
            <div className="post">
              {/* <div className="img">
                <img src="/img/blog/single.jpg" alt="" />
              </div>
              <div className="content pt-60">
                
              </div> */}
              <div
                dangerouslySetInnerHTML={{
                  __html: blog?.data?.attributes?.content,
                }}
              ></div>

              <div className="pagination">
                <span>
                  <a href="#0">Prev Post</a>
                </span>
                <span className="icon">
                  <Link href="/blog/blog-dark">
                    <a>
                      <i className="fas fa-th-large"></i>
                    </a>
                  </Link>
                </span>
                <span className="text-right">
                  <a href="#0">Next Post</a>
                </span>
              </div>
              <div className="comments-area">
                <h5>Comments :</h5>
                {blog?.data?.attributes?.comments?.data?.map(
                  (comment, index) => (
                    <div className="item" key={index}>
                      <div className="comment-img">
                        <img src="/img/blog/01.jpg" alt="" />
                      </div>
                      <div className="info">
                        <h6>
                          Jorden Griffin -{" "}
                          <span>
                            {new Date(
                              comment?.attributes?.createdAt
                            ).getDate() +
                              "/" +
                              new Date(
                                comment?.attributes?.createdAt
                              ).getMonth() +
                              "/" +
                              new Date(
                                comment?.attributes?.createdAt
                              ).getFullYear()}
                          </span>
                        </h6>
                        <span className="replay">
                          <a href="#0">
                            Replay <i className="fas fa-reply"></i>
                          </a>
                        </span>
                        <p>{comment?.attributes?.title}</p>
                      </div>
                    </div>
                  )
                )}
                <div className="item relped">
                  <div className="comment-img">
                    <img src="/img/blog/01.jpg" alt="" />
                  </div>
                  <div className="info">
                    <h6>
                      Jorden Griffin - <span> 6 Aug 2019</span>
                    </h6>
                    <span className="replay">
                      <a href="#0">
                        Replay <i className="fas fa-reply"></i>
                      </a>
                    </span>
                    <p>
                      the main component of a healthy environment for self
                      esteem is that it needs be nurturing. The main compont of
                      a healthy environment.
                    </p>
                  </div>
                </div>
                <div className="item">
                  <div className="comment-img">
                    <img src="/img/blog/01.jpg" alt="" />
                  </div>
                  <div className="info">
                    <h6>
                      Jorden Griffin - <span> 6 Aug 2019</span>
                    </h6>
                    <span className="replay">
                      <a href="#0">
                        Replay <i className="fas fa-reply"></i>
                      </a>
                    </span>
                    <p>
                      the main component of a healthy environment for self
                      esteem is that it needs be nurturing. The main compont of
                      a healthy environment.
                    </p>
                  </div>
                </div>
              </div>
              <div className="comment-form">
                <h5>Add Comment :</h5>
                <div className="form">
                  <form action="">
                    <div className="row">
                      <div className="col-12">
                        <div className="form-group">
                          <textarea placeholder="Your Comment"></textarea>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input type="text" placeholder="Your Name" />
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <input type="email" placeholder="Your Email" />
                        </div>
                      </div>
                      <div className="col-12">
                        <div className="form-group text-center">
                          <a
                            href="#0"
                            className={`butn ${
                              theme
                                ? theme === "light"
                                  ? "dark"
                                  : ""
                                : "light"
                            } curve full-width`}
                          >
                            Comment
                          </a>
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BlogDetails;
