// components/SeoFormClient.js
"use client";

import { useState, useEffect, useRef } from "react";

export default function SeoFormClient() {
  const [website, setWebsite] = useState("");
  const [email, setEmail] = useState("");
  const [errors, setErrors] = useState({ website: "", email: "" });
  const [isFormValid, setIsFormValid] = useState(false);

  const websiteRef = useRef(null);
  const emailRef = useRef(null);

  // Domains to validate
  const hasValidDomain =
    /\.(com|net|org|in|edu|gov|mil|int|io|co|us|uk|de|jp|fr|au|br|cn|es|it|nl|ru|se|no|fi|dk|ch|at|be|pt|cz|gr|tr|il|ar|mx|pl|kr|za|nz|ir|hk|sg|my|id|th|tw|vn|ph|eg|ng|pk|sa|ua|bd|ve|ma|ke|tz|ug|sd|dz|ly|ao|cm|sn|mu|zm|zw|ls|sz|bw|na|sl|gm|bi|cv|gw|er|dj|so|km|mg|sc|mz|mw|ml|et|rw|ss|cf|ga|cg|cd|gq|st|cv|tg|bf|ne|ml|gn|bj|sn|gm|lr|sl|ci|gh|ng|td|cm|cf|cd|cg|ga|gq|st|cv|tg|bf|ne|ml|gn|bj|sn|gm|lr|sl|ci|gh|ng|td|cm|cf|cd|cg|ga|gq|ao|st|cv|tg|bf|ne|ml|gn|bj|sn|gm|lr|sl|ci|gh|ng|td|cm|cf|cd|cg|ga|gq|ao|st|cv|tg|bf|ne|ml|gn|bj|sn|gm|lr|sl|ci|gh|ng|td|cm|cf|cd|cg|ga|gq|ao|st|cv|tg|bf|ne|ml|gn|bj|sn|gm|lr|sl|ci|gh|ng|td|cm|cf|cd|cg|ga|gq|ao|st|cv|tg|bf|ne|ml|gn|bj|sn|gm|lr|sl|ci|gh|ng|td|cm|cf|cd|cg|ga|gq|ao|st|cv|tg|bf|ne|ml|gn|bj|sn|gm|lr|sl|ci|gh|ng|td|cm|cf|cd|cg|ga|gq|ao|st|cv|tg|bf|ne|ml|gn|bj|sn|gm|lr|sl|ci|gh|ng|td|cm|cf|cd|cg|ga|gq|ao|st|cv|tg|bf|ne|ml|gn|bj|sn|gm|lr|sl|ci|gh|ng|td|cm|cf|cd|cg|ga|gq|ao|st|cv|tg|bf|ne|ml|gn|bj|sn|gm|lr|sl|ci|gh|ng|td|cm|cf|cd|cg|ga|gq|ao|st|cv|tg|bf|ne|ml|gn|bj|sn|gm|lr|sl|ci|gh|ng|td|cm|cf|cd|cg|ga|gq|ao|st|cv|tg|bf|ne|ml|gn|bj|sn|gm|lr|sl|ci|gh|ng|td|cm|cf|cd|cg|ga|gq|ao|st|cv|tg|bf|ne|ml|gn|bj|sn|gm|lr|sl|ci|gh|ng|td|cm|cf|cd|cg|ga|gq|ao|st|cv|tg|bf|ne|ml|gn|bj|sn|gm|lr|sl|ci|gh|ng|td|cm|cf|cd|cg|ga|gq|ao|st|cv|tg|bf|ne|ml|gn|bj|sn|gm|lr|sl|ci)$/i;

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

  const validateEmail = (email) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  useEffect(() => {
    const websiteError =
      website && !validateWebsite(website) ? "Enter a valid URL" : "";
    const emailError =
      email && !validateEmail(email) ? "Enter a valid email" : "";
    setErrors({ website: websiteError, email: emailError });
    setIsFormValid(!websiteError && !emailError);
  }, [website, email]);

  const handleWebsiteChange = (e) => {
    setWebsite(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
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

    // Perform final validation before submission
    const websiteError = !validateWebsite(website) ? "Enter a valid URL" : "";
    const emailError = !validateEmail(email) ? "Enter a valid email" : "";

    if (websiteError || emailError) {
      setErrors({ website: websiteError, email: emailError });
      setIsFormValid(false);
      if (websiteError && websiteRef.current) websiteRef.current.focus();
      else if (emailError && emailRef.current) emailRef.current.focus();
      return;
    }

    // If valid, submit the form
    alert(`Website: ${website}, Email: ${email}`);
  };

  return (
    <div className="form-details">
      <form onSubmit={handleSubmit} className="homepage-form">
        <div className="website-input">
          <input
            type="text"
            placeholder="example (google.com)*"
            value={website}
            onChange={handleWebsiteChange}
            onBlur={handleWebsiteBlur}
            ref={websiteRef}
            required
          />
          {errors.website && <p style={{ color: "red" }}>{errors.website}</p>}
        </div>
        <div className="email-input">
          <input
            type="email"
            placeholder="Your Email*"
            value={email}
            onChange={handleEmailChange}
            ref={emailRef}
            required
          />
          {errors.email && <p style={{ color: "red" }}>{errors.email}</p>}
        </div>
        <div className="formbtn">
          <button className="link-btn" type="submit" disabled={!isFormValid}>
            Get Started
          </button>
        </div>
      </form>
    </div>
  );
}
