"use client";
import { useState, useEffect } from "react";
import styles from "./BlogDisplay.module.css";
import SecondBlog from "../../../public/images/SecondBlog.webp";
import thirdBlog from "../../../public/images/thirdBlog.webp";
import firstBlog from "../../../public/images/firstBlog.webp";
import Image from "next/image";

const blogs = [
  {
    date: "24-Jul-2024",
    title: "How Does Digital Marketing Help Real Estate Businesses?",
    comments: 0,
    image: firstBlog,
  },
  {
    date: "18-Jul-2024",
    title: "How to Design a Great iOS App: Tips for New Entrepreneurs",
    comments: 0,
    image: SecondBlog,
  },
  {
    date: "18-Jul-2024",
    title: "Common iOS App Mistakes New Businesses Make And How To Avoid Them",
    comments: 0,
    image: thirdBlog,
  },
];

const BlogHome = () => {
  const [activeCard, setActiveCard] = useState(0);
  const [lastActiveCard, setLastActiveCard] = useState(0);

  useEffect(() => {
    // Set the first card as active by default
    setActiveCard(0);
    setLastActiveCard(0);
  }, []);

  const handleMouseEnter = (index) => {
    setActiveCard(index);
    setLastActiveCard(index);
  };

  const handleMouseLeave = (index) => {
    setActiveCard(index);
  };

  return (
    <>
      <section id="blogmain">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="blgheadg">
                <h2>
                  Our Latest <strong>Blogs</strong>
                </h2>
              </div>
              <div className="blgcnt">
                <div className="blgcninr blgcnlft">
                  <div className={`bloginlftset`}>
                    <div className={`blgsmt`}>
                      {blogs.map((blog, index) => (
                        <div
                          key={index}
                          className={`blgintve ${styles.card} ${
                            index === activeCard ? styles.activeCard : ""
                          }`}
                          onMouseEnter={() => handleMouseEnter(index)}
                          onMouseLeave={() => handleMouseLeave(index)}
                        >
                          <div className={`bloginlftsetcntnt`}>
                            <p className={`bloginlftsetdate`}>{blog.date}</p>
                            <h5 className={`bloginlftsetitle`}>{blog.title}</h5>
                            <h5 className={`bloginlftsetcomment`}>
                              Comments {blog.comments}
                            </h5>
                          </div>
                        </div>
                      ))}{" "}
                    </div>
                  </div>
                </div>
                <div className="blgcninr blgcnrght">
                  <div className={styles.imageDisplay}>
                    <Image
                      src={
                        blogs[activeCard !== null ? activeCard : lastActiveCard]
                          .image
                      }
                      alt={
                        blogs[activeCard !== null ? activeCard : lastActiveCard]
                          .title
                      }
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BlogHome;
