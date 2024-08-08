import React from "react";
import ClientSlides from "./ClientSlides";
import sldrbackg from "/public/images/testimonials-bg.webp";

const ServerComponent = () => {
  return (
    <section id="bannersct">
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <ClientSlides backgroundImage={sldrbackg.src} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServerComponent;
