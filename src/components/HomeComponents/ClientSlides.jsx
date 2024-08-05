"use client";

import React, { useRef, useEffect } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import seo from "../../../public/images/office-picture.webp";

const ClientComponent = ({ backgroundImage }) => {
  const swiperRef = useRef(null);

  useEffect(() => {
    const swiperInstance = swiperRef.current?.swiper;
    const nextButton = document.querySelector(".custom-swiper-button-next");
    const prevButton = document.querySelector(".custom-swiper-button-prev");

    if (swiperInstance && nextButton && prevButton) {
      nextButton.addEventListener("click", () => {
        swiperInstance.slideNext();
      });
      prevButton.addEventListener("click", () => {
        swiperInstance.slidePrev();
      });
    }

    return () => {
      if (nextButton && prevButton) {
        nextButton.removeEventListener("click", swiperInstance.slideNext);
        prevButton.removeEventListener("click", swiperInstance.slidePrev);
      }
    };
  }, []);

  const Slldrbac = {
    textAlign: "center",
    backgroundImage: `url(${backgroundImage})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
    padding: "50px 15px",
    borderRadius: "12px",
  };

  return (
    <div className="sliderswp" style={Slldrbac}>
      <Swiper
        ref={swiperRef}
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        grabCursor={true}
        navigation={{
          nextEl: ".custom-swiper-button-next",
          prevEl: ".custom-swiper-button-prev",
        }}
        modules={[Navigation]}
        className="mySwiper"
      >
        {[1, 2, 3, 4, 5].map((slide, index) => (
          <SwiperSlide key={index}>
            <TestimonialContent
              imageSrc={seo}
              altText="Tina Costermans"
              testimonialText={getTestimonialText(slide)}
              authorName={getAuthorName(slide)}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

const TestimonialContent = ({
  imageSrc,
  altText,
  testimonialText,
  authorName,
}) => (
  <div className="tstsctn" style={{ textAlign: "center" }}>
    <div className="testmnimg">
      <Image
        src={imageSrc}
        alt={altText}
        width={768}
        height={846}
        layout="responsive"
        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        style={{ borderRadius: "50%" }}
      />
    </div>
    <p>{testimonialText}</p>
    <h3>{authorName}</h3>
  </div>
);

const getTestimonialText = (slide) => {
  const testimonials = [
    "I like to take this review as a chance to thank Jass and his amazing team, Webguruz. Because I am continually stunned with their work. I am creating a big video course, which includes building a website, membership site, and an affiliate system to work with affiliates. They are creative in designing, and technically sound enough to work on it. Now I’m not the most easy customer to work with. I work everything out in the very smallest details. After that, as I am in a learning process myself to create alI this, I keep adjusting things, or even change things completely, which impacts things that are already set up, and complicates the work for everyone. I know this mustn’t be easy for them. But still, nothing changes in their attitude. All this time they keep having a very professional, and even supportive attitude towards my project. I am really satisfied with their work so far, the lay-out of my website is beautiful. I feel I am receiving more than what I am paying for. But what I love most, is that Jass and his team are not just doing their job, you know, they are really engaged and truly have a heart for their clients. I know I will have a life time relationship working with Webguruz Technologies. Thank you for your outstanding work!!!",
    "Words cannot express how impressed I am with Webguruz. I would go so far as to say, you set a bench mark in completing the task within time. I am really happy with your quality work and responsiveness. You just took my stress away. It was really swift and saved both my time and money.",
    "When you talk about SEO(Search Engine Optimisation), Webguruz technologies are just the best technology but they are better than the best.",
    "I started my relationship with Webguruz with a simple web page design assignment. I was so impressed I gave them a shot at SEO work. Again they were outstanding. When I was unhappy with my initial game programming they came to the rescue. Together we composed amazing world class graphics. Then they took a good storyline and with their creativity suggested an amazing storyline. They communicate clearly and go to the extra mile to talk with me on my schedule, even if that means they stay up extra late some nights.",
    "My partners and I are starting our company as inexpensively as possible and Webguruz has been a key addition, combining affordability with results in helping me design and then creating a beautiful website. When we come to market later this year we know our website will shine. Thank you, Webguruz.",
  ];
  return testimonials[slide - 1];
};

const getAuthorName = (slide) => {
  const authors = [
    "Tina Costermans",
    "Sonia Smith",
    "Stephony",
    "Brian",
    "Eileen",
  ];
  return authors[slide - 1];
};

export default ClientComponent;
