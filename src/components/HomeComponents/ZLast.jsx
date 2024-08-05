"use client";
import React from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faXTwitter,
  faLinkedin,
  faFacebook,
  faInstagram,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";
import "swiper/css/navigation";

import bannerImage1 from "../../../public/images/banner-image.webp";
import bannerImage2 from "../../../public/images/banner-image2.webp";

// import required modules
import Image from "next/image";

export default function App() {
  return (
    <>
      <section id="bannersct">
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="banslider">
                <Swiper
                  slidesPerView={1}
                  spaceBetween={30}
                  loop={true}
                  grabCursor={true}
                  className="mySwiper"
                >
                  <SwiperSlide className="swpslide1">
                    <div className="swprsldr">
                      <div className="swprimg">
                        <Image
                          src={bannerImage1}
                          alt="banner Image 1"
                          width={1920}
                          height={994}
                          priority
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          placeholder="blur"
                        />
                      </div>
                      <div className="swprsldcnt">
                        <div className="swprcninnr">
                          <div className="swprft social">
                            <div className="sscl">
                              <ul>
                                <li>
                                  <a
                                    href="https://www.facebook.com/webguruztechnologies/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Visit our Facebook page"
                                  >
                                    <FontAwesomeIcon
                                      icon={faFacebook}
                                      height={20}
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="https://twitter.com/Webguruz"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Visit our Twitter page"
                                  >
                                    <FontAwesomeIcon
                                      icon={faXTwitter}
                                      height={20}
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="https://www.linkedin.com/company/webguru-technologies-pvt.-ltd./"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Visit our Linkedin page"
                                  >
                                    <FontAwesomeIcon
                                      icon={faLinkedin}
                                      height={20}
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="https://www.instagram.com/webguruz"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Visit our Instagram page"
                                  >
                                    <FontAwesomeIcon
                                      icon={faInstagram}
                                      height={20}
                                    />
                                  </a>
                                </li>
                                <li>
                                  <a
                                    href="https://www.youtube.com/channel/UC-xaX1FJWj40ED-cTm2Lq6w"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    aria-label="Visit our Youtube channel"
                                  >
                                    <FontAwesomeIcon
                                      icon={faYoutube}
                                      height={20}
                                    />
                                  </a>
                                </li>
                              </ul>
                            </div>
                          </div>
                          <div className="swprft aswcnt">
                            <div className="dgtlcnt">
                              <h5>
                                Innovative Digital Solutions to Fuel your Growth
                              </h5>
                              <h2>
                                A Website &{" "}
                                <strong>
                                  Mobile App Development Company with You in
                                  Mind
                                </strong>
                              </h2>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                  <SwiperSlide className="swpslide2">
                    <div className="swprsldr">
                      <div className="swprimg">
                        <Image
                          src={bannerImage2}
                          alt="banner Image 2"
                          width={1920}
                          height={994}
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                          placeholder="blur"
                          loading="lazy"
                        />
                      </div>
                      <div className="swprsldcnt slidersw2">
                        <div className="sldrswp2cnt">
                          <h4>Unlocking Success with Data-Driven Strategies</h4>
                          <p>
                            As a Certified SEMrush Agency Partner, we don't just
                            analyze trends; we set them.
                          </p>
                          <p className="btmitlc">
                            <strong>
                              <em>
                                Let's turn clicks into clients and dreams into
                                digital victories, together!
                              </em>
                            </strong>
                          </p>
                        </div>
                      </div>
                    </div>
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
