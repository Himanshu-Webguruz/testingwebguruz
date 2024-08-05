import React from "react";
import { services } from "../../utils/services";
import Link from "next/link";
import businessBanner from "../../../public/images/full-service-1.webp";

const bannerImage = {
  backgroundImage: `url(${businessBanner.src})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center center",
  padding: "80px 0px 130px 0px",
};

const DomainsSection = () => {
  return (
    <>
      <div className="power-business" style={bannerImage}>
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-xs-12 heading mb-5 text-center">
              <h5>YOUR BUSINESS. ONLINE. NOW!</h5>
              <h3>
                Finest Digital Solutions
                <span> to Power your Business</span>
              </h3>
            </div>
          </div>
          <div className="row">
            {services.map((service, index) => (
              <div key={index} className="col-lg-2 col-md-6 col-sm-6 col-12">
                <div className="card-business">
                  <div className="service-card">
                    <Link href={service.link}>
                      <span className="icon">{service.icon}</span>
                      <h4 style={{ color: "black" }}>{service.title}</h4>
                    </Link>
                    <p>{service.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default DomainsSection;
