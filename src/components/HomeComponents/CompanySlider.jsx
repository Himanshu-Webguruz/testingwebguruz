"use client";
import React from "react";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import Image from "next/image";
import Seo from "../../../public/images/logo-images/google-partner.webp";
import Nasscom from "../../../public/images/logo-images/nasscom.webp";
import Seos from "../../../public/images/logo-images/op-seos.webp";
import Hubspot from "../../../public/images/logo-images/hubspot-certified-partner-logo-img.webp";
import Semrush from "../../../public/images/logo-images/semrush.webp";
import Unnamed from "../../../public/images/logo-images/unnamed.webp";
import Upwork from "../../../public/images/logo-images/up-work.webp";

const animation = { duration: 40000, easing: (t) => t };

export default () => {
  const [sliderRef] = useKeenSlider({
    loop: true,
    renderMode: "performance",
    drag: false,
    slides: {
      perView: 5, // Number of slides to display at once
      spacing: 10, // Space between slides (in pixels)
    },
    breakpoints: {
      "(max-width: 991px)": {
        slides: {
          perView: 4,
          spacing: 10,
        },
      },
      "(max-width: 767px)": {
        slides: {
          perView: 3,
          spacing: 10,
        },
      },
      "(max-width: 629px)": {
        slides: {
          perView: 2,
          spacing: 10,
        },
      },
    },


    created(s) {
      s.moveToIdx(5, true, animation);
    },
    updated(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
    animationEnded(s) {
      s.moveToIdx(s.track.details.abs + 5, true, animation);
    },
  });
  return (
    <>
      <div className="slider-logo">
        <div className="container">
          <div className="row">
            <div className="col-sm-12 col-xs-12">
            <div ref={sliderRef} className="keen-slider">
                <div className="keen-slider__slide number-slide1">
                  <a href="https://nasscom.in/" target="_blank" rel="noopener noreferrer">
                  <Image src={Nasscom} alt="Image 1" priority style={{height:"auto" ,width:"auto"}} />
                  </a>
                </div>
                <div className="keen-slider__slide number-slide2">
                  <a href="https://www.topseos.com/profile/webguruz-technologies-private-limited" target="_blank" rel="noopener noreferrer">
                  <Image src={Seos} alt="Image 1" priority style={{height:"auto" ,width:"auto"}} />
                  </a>
                </div>
                <div className="keen-slider__slide number-slide3">
                  <a href="https://skillshop.exceedlms.com/profiles/71a1dd4d734c411d939ea9f3d4333dc2" target="_blank" rel="noopener noreferrer">
                  <Image src={Seo} alt="Image 1" priority style={{height:"auto" ,width:"auto"}} />
                  </a>
                </div>
                <div className="keen-slider__slide number-slide4">
                <a href="https://ecosystem.hubspot.com/marketplace/solutions/webguruz-com-in" target="_blank" rel="noopener noreferrer">
                  <Image src={Hubspot} alt="Image 1" priority style={{height:"auto" ,width:"auto"}} />
                  </a>
                </div>
                <div className="keen-slider__slide number-slide8">
                <a href="https://www.upwork.com/agencies/webguruz/">
                  <Image src={Upwork} alt="Image 1" priority style={{height:"auto" ,width:"auto"}} />
                  </a>
                </div>
                <div className="keen-slider__slide number-slide9">
                <a href="https://www.designrush.com/agency/profile/webguruz-technologies" target="_blank" rel="noopener noreferrer">
                  <Image src={Unnamed} alt="Image 1" priority style={{height:"auto" ,width:"auto"}} />
                  </a>
                </div>
                <div className="keen-slider__slide number-slide10">
                <a href="https://www.semrush.com/agencies/webguruz-technologies-pvt-ltd/" target="_blank" rel="noopener noreferrer">
                  <Image src={Semrush} alt="Image 1" priority style={{height:"auto" ,width:"auto"}} />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
