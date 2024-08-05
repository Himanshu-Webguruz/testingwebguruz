import React from "react";
import seowork from "../../../public/images/real-seo-works-1.webp";
import Link from "next/link";
import services from "../../utils/servicecards";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const Card = ({ Icon, title, description }) => (
  <div className="col-lg-4 col-md-6 col-sm-6 col-12 mb-4">
    <div className="webguruz-portfolio-cards">
      <div className="svg-icons-portfolio">
        <Icon />
      </div>
      <h2 className="portfolio-headings">{title}</h2>
      <p>{description}</p>
    </div>
  </div>
);

const ServiceCards = () => {
  const styleservicecard = {
    textAlign: "center",
    backgroundImage: `url(${seowork.src})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    padding: "60px 0px",
  };
  return (
    <>
      <div className="webguruz-portfolio" style={styleservicecard}>
        <div className="container">
          <div className="webguruz-portHeading">
            <div className="portfolio-heading-main">
              <h5 style={{ color: "#fff" }}>FROM IDEATION TO LAUNCH</h5>
            </div>
            <div className="portfolio-heading-sub">
              <h3 style={{ color: "#fff", paddingBottom: "60px" }}>
                Here's how we make <strong>things possible</strong>
              </h3>
            </div>
          </div>

          <div className="homepage-portfolio row">
            {services.map((service, index) => (
              <Card key={index} {...service} />
            ))}
          </div>
          <Link className="link-btn" href={"/About"} rel="noopener noreferrer">
            Learn More
            <span> <FontAwesomeIcon icon={faArrowRight} /></span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default ServiceCards;
