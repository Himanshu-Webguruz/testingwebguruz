// src/components/Navbar.jsx
"use client";
import Link from "next/link";
import flagimg from "../../public/images/india-flag-icon.webp";
import logoweb from "../../public/images/logo.webp";
import Image from "next/image";
import { useState, useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setIsCollapsed(false);
        setActiveDropdown(null);
      }
    };

    window.addEventListener("click", handleClickOutside);
    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, [navRef]);

  const handleToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  const handleLinkClick = () => {
    setIsCollapsed(false);
    setActiveDropdown(null);
  };

  const toggleDropdown = (dropdown) => {
    setActiveDropdown((prev) => (prev === dropdown ? null : dropdown));
  };

  return (
    <header className={`hdrtopsst ${isScrolled ? "onScroll" : ""}`}>
      <div className="tphdr">
        <div className="container-fluid">
          <div className="col-lg-12 col-md-12 col-sm-12 col-12">
            <div className="tplft">
              <ul>
                <li>
                  <a href="tel:+91730 700 1777">
                    <figure>
                      <Image src={flagimg} alt="Call Us" />
                    </figure>{" "}
                    (+91) 730 700 1777
                  </a>
                  ( Sales )
                </li>
                <li>
                  <a href="tel:+919592016444">
                    <figure>
                      <Image src={flagimg} alt="Call Us" />
                    </figure>{" "}
                    (+91) 959 201 6444
                  </a>
                  ( Jobs )
                </li>
                <li className="tprgtqt">
                  <a href="#" className="link-btn quotebtntrt">
                    Get A Quote
                    <span>
                      <FontAwesomeIcon icon={faArrowRight} />
                    </span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="btmhdr">
        <nav className="navbar navbar-expand-lg navbar-light" ref={navRef}>
          <div className="container-fluid">
            <Link className="navbar-brand" href="/">
              <Image src={logoweb} alt="logo" />
            </Link>
            <button
              className="navbar-toggler"
              type="button"
              onClick={handleToggle}
              aria-controls="navbarSupportedContent"
              aria-expanded={isCollapsed}
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className={`collapse navbar-collapse ${isCollapsed ? "show" : ""}`}
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" aria-current="page" href="/About" onClick={handleLinkClick}>
                    About
                  </Link>
                </li>
                <li className={`nav-item dropdown ${activeDropdown === "services" ? "show" : ""}`}>
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    onClick={() => toggleDropdown("services")}
                    aria-expanded={activeDropdown === "services"}
                  >
                    Services
                  </a>
                  <ul className={`dropdown-menu ${activeDropdown === "services" ? "show" : ""}`} aria-labelledby="navbarDropdown">
                    <li>
                      <Link className="dropdown-item" href="/Services/webDevelopment" onClick={handleLinkClick}>
                        Web Development
                      </Link>
                      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li>
                          <Link className="dropdown-item" href="/Services/webDevelopment/fullStackDevelopment" onClick={handleLinkClick}>
                            FullStack Development
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" href="/Services/webDevelopment/AspDotNetDevelopment" onClick={handleLinkClick}>
                            AspDotNetDevelopment
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" href="/Services/webDevelopment/JavaWebDevelopment" onClick={handleLinkClick}>
                            JavaWebDevelopment
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" href="/Services/webDevelopment/PhpDevelopment" onClick={handleLinkClick}>
                            PhpDevelopment
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" href="/Services/webDevelopment/PythonDevelopment" onClick={handleLinkClick}>
                            PythonDevelopment
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" href="/Services/webDevelopment/RubyonRailDevelopment" onClick={handleLinkClick}>
                            RubyonRailDevelopment
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="/Services/webdesign" onClick={handleLinkClick}>
                        Web Design
                      </Link>
                      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li>
                          <Link className="dropdown-item" href="/Services/webdesign/HTML5" onClick={handleLinkClick}>
                            HTML5 Development
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" href="/Services/webdesign/ParallaxDesign" onClick={handleLinkClick}>
                            Parallax Design
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="/Services/SearchEngineOptimisation" onClick={handleLinkClick}>
                        Search Engine Optimisation
                      </Link>
                      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li>
                          <Link className="dropdown-item" href="/Services/SearchEngineOptimisation/EcommerceSEO" onClick={handleLinkClick}>
                            Ecommerce SEO
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" href="/Services/SearchEngineOptimisation/LocalSEO" onClick={handleLinkClick}>
                            Local SEO
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" href="/Services/SearchEngineOptimisation/OnlineReputationManagement" onClick={handleLinkClick}>
                            Online Reputation Management
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" href="/Services/SearchEngineOptimisation/paidMarketing" onClick={handleLinkClick}>
                            Paid Marketing
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" href="/Services/SearchEngineOptimisation/SEO" onClick={handleLinkClick}>
                            SEO
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="/Services/MobileAppDevelopment" onClick={handleLinkClick}>
                        Mobile App Development
                      </Link>
                      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li>
                          <Link className="dropdown-item" href="/Services/MobileAppDevelopment/AndroidAppDevelopment" onClick={handleLinkClick}>
                            Android App Development
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" href="/Services/MobileAppDevelopment/HTML5AppDevelopment" onClick={handleLinkClick}>
                            HTML 5 App Development
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" href="/Services/MobileAppDevelopment/iOSAppDevelopment" onClick={handleLinkClick}>
                            iOSAppDevelopment
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" href="/Services/MobileAppDevelopment/iPadAppDevelopment" onClick={handleLinkClick}>
                            iPadAppDevelopment
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" href="/Services/MobileAppDevelopment/iPhoneAppDevelopment" onClick={handleLinkClick}>
                            iPhoneAppDevelopment
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" href="/Services/MobileAppDevelopment/PhoneGapDevelopment" onClick={handleLinkClick}>
                            PhoneGapDevelopment
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" href="/Services/MobileAppDevelopment/TitaniumDevelopment" onClick={handleLinkClick}>
                            TitaniumDevelopment
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="/Services/ECommerceDevelopment" onClick={handleLinkClick}>
                        ECommerce Development
                      </Link>
                      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li>
                          <Link className="dropdown-item" href="/Services/ECommerceDevelopment/CustomEcommerceDevelopment" onClick={handleLinkClick}>
                            Custom Ecommerce Development
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" href="/Services/ECommerceDevelopment/MagentoMarketing" onClick={handleLinkClick}>
                            Magento Marketing
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" href="/Services/ECommerceDevelopment/Shopify" onClick={handleLinkClick}>
                            Shopify
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" href="/Services/ECommerceDevelopment/WooCommerce" onClick={handleLinkClick}>
                            WooCommerce
                          </Link>
                        </li>
                      </ul>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="/Services/DigitalMarketing" onClick={handleLinkClick}>
                        Digital Marketing
                      </Link>
                      <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                        <li>
                          <Link className="dropdown-item" href="/Services/DigitalMarketing/BrandMarketing" onClick={handleLinkClick}>
                            Brand Marketing
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" href="/Services/DigitalMarketing/ContentMarketing" onClick={handleLinkClick}>
                            Content Marketing
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" href="/Services/DigitalMarketing/EmailMarketing" onClick={handleLinkClick}>
                            Email Marketing
                          </Link>
                        </li>
                        <li>
                          <Link className="dropdown-item" href="/Services/DigitalMarketing/FacebookMarketing" onClick={handleLinkClick}>
                            Facebook Marketing
                          </Link>
                        </li>
                      </ul>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/OurPortfolio" >
                    Our Portfolio
                  </Link>
                </li>
                <li className={`nav-item dropdown ${activeDropdown === "resources" ? "show" : ""}`}>
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    onClick={() => toggleDropdown("resources")}
                    aria-expanded={activeDropdown === "resources"}
                  >
                    Resources
                  </a>
                  <ul className={`dropdown-menu ${activeDropdown === "resources" ? "show" : ""}`} aria-labelledby="navbarDropdown">
                    <li>
                      <Link className="dropdown-item" href="/Resources/Blog" >
                        Blog
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="/Resources/Infographics" >
                        Infographics
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className={`nav-item dropdown ${activeDropdown === "joinUs" ? "show" : ""}`}>
                  <a
                    className="nav-link dropdown-toggle"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    onClick={() => toggleDropdown("joinUs")}
                    aria-expanded={activeDropdown === "joinUs"}
                  >
                    Join Us
                  </a>
                  <ul className={`dropdown-menu ${activeDropdown === "joinUs" ? "show" : ""}`} aria-labelledby="navbarDropdown">
                    <li>
                      <Link className="dropdown-item" href="/JoinUs/Career">
                        Careers
                      </Link>
                    </li>
                    <li>
                      <Link className="dropdown-item" href="/JoinUs/InternshipPrograms">
                        Internship Programs
                      </Link>
                    </li>
                  </ul>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" href="/Contact" >
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
