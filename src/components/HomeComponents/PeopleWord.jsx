import React from "react";
import Slides from "./Slides";
import testmImg from "../../../public/images/testimonials.webp";
import quoteImg from "../../../public/images/quote-right-solid.svg";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight, faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const PeopleWord = () => {
  const TestImagebac = {
    textAlign: "center",
    backgroundImage: `url(${testmImg.src})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    padding: "60px 0px",
  };

  return (
    <>
      <div className="clients-words-webguruz" style={TestImagebac}>
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <div className="clientlvtxt">
                <figure>
                  <Image src={quoteImg} className="img-fluid" alt="Qoute Image" />
                </figure>
                <h5>OUR CLIENTS LOVE US</h5>
                <h2>
                  Here's what <strong> they're saying</strong>
                </h2>
                <p>
                  Read the experiences of our clients who have witnessed
                  firsthand the impact of our solutions on their businesses.
                </p>
                <div className="custom-navigation">
                  <div className="custom-swiper-button-prev">
                    <button aria-label="Previous Slide">
                      {" "}
                      <FontAwesomeIcon icon={faArrowLeft} />
                    </button>
                  </div>
                  <div className="custom-swiper-button-next">
                    {" "}
                    <button aria-label="Next Slide">
                      {" "}
                      <FontAwesomeIcon icon={faArrowRight} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-12">
              <Slides />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default PeopleWord;
