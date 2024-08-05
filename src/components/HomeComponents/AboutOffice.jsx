import Image from "next/image";
import officespace from "../../../public/images/office-picture.webp";
import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
const AboutOffice = () => {
  return (
    <div className="about-office">
      <div className="container-fluid">
        <div className="row d-flex align-items-center">
          <div className="col-sm-6 image-col ">
            <Image
              src={officespace}
              alt="Office"
              width={768}
              height={846}
              priority
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
              placeholder="blur"
            />
          </div>
          <div className="col-sm-6 text-col heading possible-solution-right">
          <h5>
          YOUR VISION, OUR EXPERTISE- BOUNDLESS POSSIBILITIES</h5>
            <h3>Unique, Dynamic & Scalable- is <span>how we craft our solutions</span></h3>
            <p>
              At Webguruz, we don’t settle for ordinary. We are on a pursuit to
              redefine excellence through unparalleled, unique, dynamic, and
              scalable solutions that are tailor-made for your business. We go
              above and beyond to understand your brand’s DNA and ensure that
              each solution we deliver embodies your essence.
            </p>
            <p>
              Every digital journey we embark on is an adventure. We blend
              design, cutting-edge technology, and data-driven insights to craft
              websites and apps that are a true masterpiece. From captivating
              visuals to seamless user experiences, we can help you create
              digital solutions that captivate and convert visitors into loyal
              customers.
            </p>
            <p>
              Scalability is not an afterthought rather a strategic advantage.
              Our solutions are built to grow with you- from the early stages of
              a startup to the expansion of an enterprise. We future-proof your
              success, thus keeping you agile and adaptable in an ever-evolving
              digital landscape.
            </p>
           <Link className= "link-btn" href={'/About'}
            rel="noopener noreferrer"
           >Know More About Us<span><FontAwesomeIcon icon={faArrowRight} /></span>
           </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutOffice;
