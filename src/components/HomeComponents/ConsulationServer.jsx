// ConsulationServer.js
import ConsulationClient from "./ConsulationClient";
import consultbac from "../../../public/images/consultation.webp";

const ConsulationServer = () => {
  const ConsultbacImg = {
    textAlign: "center",
    backgroundImage: `url(${consultbac.src})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    padding: "80px 0px",
  };

  return (
    <div className="consultaion-form" style={ConsultbacImg}>
      <div className="container">
        <div className="row">
          <div className="col-lg-7 col-md-7 col-sm-12 col-12">
            <div className="webgurusign">
              <h5>MAKE A GRADE WITH WEBGURUZ</h5>
              <h2>
                Sign Up for a Free <strong>Consultation, now!</strong>
              </h2>
              <p>
                Discover the transformative power of our digital solutions. Let
                Webguruz be your trusted partner in the digital world, crafting
                solutions that make your brand stand out and leave a lasting
                impression.
              </p>
              <p>
                Get in touch today, and together, we’ll embark on a digital
                adventure unlike any other.{" "}
              </p>
            </div>
          </div>
          <div className="col-lg-5 col-md-5 col-sm-12 col-12">
            <ConsulationClient />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsulationServer;
