"use client";

import React, { useState, useEffect, useRef } from "react";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import forminr from "/public/images/form.f1917fc2.webp";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ConsulationClient = () => {
  const Formbacinr = {
    textAlign: "center",
    backgroundImage: `url(${forminr.src})`,
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center center",
  };

  const [formData, setFormData] = useState({
    name: "",
    email: "",
  });
  const [phone, setPhone] = useState("");
  const [website, setWebsite] = useState("");
  const [errors, setErrors] = useState({ website: "", email: "" });
  const [isFormValid, setIsFormValid] = useState(false);

  const websiteRef = useRef(null);

  const hasValidDomain =
    /\.(com|net|org|in|edu|gov|mil|int|io|co|us|uk|de|jp|fr|au|br|cn|es|it|nl|ru|se|no|fi|dk|ch|at|be|pt|cz|gr|tr|il|ar|mx|pl|kr|za|nz|ir|hk|sg|my|id|th|tw|vn|ph|eg|pk|sa|ua|bd|ve|ma|ke|tz|ug|sd|dz|ly|mu|zm|zw|ls|sz|bw|na|bi|gw|er|dj|so|km|mg|sc|mz|mw|et|rw|ss|cg|cd|st|tg|ne|gn|bj|td|tg|bf|ng|tg|gh|cm|cf|gq|ao|ml|ga|bj|sn|cv|gm|lr|sl|ci)$/i;

  const validateWebsite = (url) => {
    const pattern = new RegExp(
      "^(https?:\\/\\/)?" + // protocol
        "((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|" + // domain name
        "((\\d{1,3}\\.){3}\\d{1,3}))" + // OR ip (v4) address
        "(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*" + // port and path
        "(\\?[;&a-z\\d%_.~+=-]*)?" + // query string
        "(\\#[-a-z\\d_]*)?$",
      "i"
    ); // fragment locator
    return !!pattern.test(url);
  };

  useEffect(() => {
    const websiteError =
      website && !validateWebsite(website) ? "Enter a valid URL" : "";
    setErrors((prevErrors) => ({
      ...prevErrors,
      website: websiteError,
    }));
    setIsFormValid(!websiteError);
  }, [website]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleWebsiteChange = (e) => {
    setWebsite(e.target.value);
  };

  const handleWebsiteBlur = () => {
    const trimmedWebsite = website.trim();
    // Check if website is valid and has a valid domain
    if (hasValidDomain.test(trimmedWebsite)) {
      if (
        !trimmedWebsite.startsWith("http://") &&
        !trimmedWebsite.startsWith("https://")
      ) {
        setWebsite("http://" + trimmedWebsite);
      }
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        website: "Enter a valid URL",
      }));
      if (websiteRef.current) websiteRef.current.focus();
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData, { website, phone });
  };

  return (
    <form className="consltfrm" onSubmit={handleSubmit} style={Formbacinr}>
      <div className="hdgfrm">
        <h2>Get Free Consultation</h2>
      </div>
      <div className="name frminr">
        <input
          type="text"
          id="name"
          name="name"
          placeholder="your-name*"
          value={formData.name}
          onChange={handleChange}
          required
        />
      </div>
      <div className="email frminr">
        <input
          type="email"
          id="email"
          name="email"
          placeholder="your-email*"
          value={formData.email}
          onChange={handleChange}
          required
        />
      </div>
      <div className="phn frminr">
        
        <PhoneInput
          country={"in"}
          placeholder="Phone Number"
          value={phone}
          onChange={(phone) => setPhone(phone)}
        />
      </div>
      <div className="webs frminr">
        <input
          type="text"
          id="website"
          placeholder="your website"
          name="website"
          value={website}
          onChange={handleWebsiteChange}
          onBlur={handleWebsiteBlur}
          ref={websiteRef}
          required
        />
        {errors.website && <p style={{ color: "red" }}>{errors.website}</p>}
      </div>
      <div className="sbmt frminr">
        <button type="submit" className="link-btn">
          GET FREE SEO SUPPORT{" "}
          <span>
            <FontAwesomeIcon icon={faArrowRight} />
          </span>
        </button>
      </div>
    </form>
  );
};

export default ConsulationClient;
