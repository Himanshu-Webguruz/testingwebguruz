import Image from "next/image";
import webguruzlogo from "../../public/images/footer-images/webguruz-logo.webp";
import React from "react";
import webguruzlocation from "../../public/images/footer-images/fotter-location.webp";
import webguruzphoneicon from "../../public/images/footer-images/phone-icon.webp";
import webguruzemailicon from "../../public/images/footer-images/email-icon.webp";
import indianFlag from "../../public/images/footer-images/indianflag.svg";
import footerDmca from "../../public/images/footer-images/dmca_img.webp";
import Link from "next/link";
import Accordion from "./HomeComponents/Accordian";
import footerbg from "../../public/images/footer-images/seo-score-bg-1.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faLinkedin,
  faFacebook,
  faInstagram,
  faYoutube,
  faPinterest,
} from "@fortawesome/free-brands-svg-icons";

const footerLinks = [
  { href: "/Resources/Blog", text: "Top Blogs By Our Experts" },
  { href: "/#", text: "Webguruz Foundation" },
  { href: "/#", text: "Parichay" },
  { href: "/#", text: "Terms & Conditions" },
  { href: "/#", text: "Privacy & Policy" },
  { href: "/#", text: "Sitemap" },
];
const footerbgstyle = {
  textAlign: "center",
  backgroundImage: `url(${footerbg.src})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center center",
  padding: "60px 0px",
};
const Footer = () => {
  return (
    <footer id="webguruz-footer" style={footerbgstyle}>
      <div className="container">
        <div className="row">
          <div className="col-sm-12">
            <div id="webgruruz-logo" className="mb-5">
              <Link href={"/"}>
                <Image src={webguruzlogo} alt="Logo" id="webguruz-image" />
              </Link>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-4 col-xs-12">
            <div id="footer-address">
              <div id="webguruz-addres" className="icon-footer">
                <Image
                  src={webguruzlocation}
                  alt="Location"
                  id="webguruz-location"
                />
              </div>
              <a
                href="https://www.google.com/maps/place/WebGuruz+Technologies+Pvt+Ltd/@30.7070078,76.6849962,17z/data=!4m6!3m5!1s0x390fecf52c807f63:0x6e127f6af8de3a2!8m2!3d30.7070078!4d76.6849962!16s%2Fg%2F1tf7kys0?entry=ttu"
                target="_blank"
                rel="noopener noreferrer"
              >
                4th Floor, SM Heights, C-205, Phase 8 B, Sector 74 Mohali
              </a>
            </div>
          </div>
          <div className="col-sm-4 col-xs-12">
            <div id="webguruz-phoneNumber">
              <div className="icon-footer">
                <Image
                  src={webguruzphoneicon}
                  alt="Phone"
                  id="webguruz-phone"
                />
              </div>
              <div className="sales-details">
                <Image src={indianFlag} alt="indianFlag" id="indianFlag" />
                <p>
                  <span>Sales</span> -{" "}
                  <a href="tel:730 700 1777">(+91) 730 700 1777</a>
                </p>
              </div>
              <div className="sales-details">
                <Image src={indianFlag} alt="indianFlag" id="indianFlag" />
                <p>
                  <span>Jobs</span> -{" "}
                  <a href="tel:(+91) 959 201 6444">(+91) 959 201 6444</a>
                </p>
              </div>
            </div>
          </div>
          <div className="col-sm-4 col-xs-12">
            <div id="webguruz-emailAddress">
              <div className="icon-footer">
                <Image
                  src={webguruzemailicon}
                  alt="Email Address"
                  id="webguruz-emailAddress"
                />
              </div>
              <div className="sales-details">
                <p>
                  <span>Sales</span> -{" "}
                  <a
                    href="mailto:provider@webguruz.in"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    provider@webguruz.in
                  </a>
                </p>
              </div>
              <div className="sales-details">
                <p>
                  {" "}
                  <span>Jobs</span> -{" "}
                  <a
                    href="mailto:careers@webguruz.in"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    careers@webguruz.in
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-sm-12">
            <div className="footer-menu-links">
              <ul>
                {footerLinks.map((link, index) => (
                  <li
                    key={index}
                    className={`webguruz footer-${link.text.replace(
                      /\s+/g,
                      ""
                    )}`}
                  >
                    <Link href={link.href}>{link.text}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <div className="webguruz-rating">
              <div className="ratingreviews">
                Rated <span>4.1/5</span> for Webguruz based on <span>239</span>{" "}
                reviews at Google.
                <a
                  href="https://search.google.com/local/reviews?placeid=ChIJY3-ALPXsDzkRouONr_Yn4QY"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Review us on Google"
                >
                  {" "}
                  Our Reviews on Google
                </a>
              </div>

              <a
                href="https://www.dmca.com/Protection/Status.aspx?ID=2af704c9-ad37-4670-a717-28eb4c89e78b&refurl=https://webguruz.in/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="DMCA Protected"
              >
                <Image
                  src={footerDmca}
                  alt="Dmca Protected"
                  id="footer-dmcaProtected"
                />
              </a>
            </div>
            <div className="webguruz-footer-elements">
              <div className="webguruz-favicons">
                <ul>
                  <li>
                    <a
                      href="https://www.facebook.com/webguruztechnologies/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Visit our Facebook page"
                    >
                      <FontAwesomeIcon icon={faFacebook} height={20} />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://twitter.com/Webguruz"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Visit our Twitter profile"
                    >
                      <FontAwesomeIcon icon={faXTwitter} height={20} />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.linkedin.com/company/webguru-technologies-pvt.-ltd./"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Visit our LinkedIn page"
                    >
                      <FontAwesomeIcon icon={faLinkedin} height={20} />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.instagram.com/webguruz"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Visit our Instagram page"
                    >
                      <FontAwesomeIcon icon={faInstagram} height={20} />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://www.youtube.com/channel/UC-xaX1FJWj40ED-cTm2Lq6w"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Visit our Youtube channel"
                    >
                      <FontAwesomeIcon icon={faYoutube} height={20} />
                    </a>
                  </li>
                  <li>
                    <a
                      href="https://in.pinterest.com/webguruz/"
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label="Visit our Pinterest page"
                    >
                      <FontAwesomeIcon icon={faPinterest} height={20} />
                    </a>
                  </li>
                </ul>
              </div>
              <div className="webgurz-copyright">
                <h3>Copyright @ 2024 Webguruz Technologies Private Limited.</h3>
              </div>
              <div className="legal-accordion">
                <Accordion title="Statutory legal information">
                  <p>
                    Webguruz is the Registered Name of Webguruz Technologies
                    Pvt. Ltd., a mobile app and web development company having
                    its office in Mohali, Punjab, India at the registered
                    address- C-205, 4th Floor, SM Heights, Sector 74, Mohali,
                    160055.
                  </p>
                  <p>
                    The personal information(Name, Email, Phone and Project
                    Details) that you submit to us through our website will
                    remain confidential. We don't sell, share or rent this
                    information to third-parties unless required by the law
                    enforcement agencies governed by the State Govt. or the
                    Govt. of India. For details, refer to our Privacy Policy.
                  </p>
                  <p>
                    Our team will use this information to send updates to you
                    about our company and projects or contact you if requested
                    or when it deems necessary. You may opt out of receiving
                    this communication by dropping us an email on{" "}
                    <a
                      href="mailto:info@webguruz.in"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      info@webguruz.in
                    </a>
                  </p>
                </Accordion>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
