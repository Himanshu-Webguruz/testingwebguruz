// components/SeoFormServer.js
import dynamic from "next/dynamic";
import seoBackground from "/public/images/seo-score-bg-1.webp";

const Seobackgimg = {
  backgroundImage: `url(${seoBackground.src})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center center",
  padding: "45px 90px",
};

// Dynamically import the client-side form
const SeoFormClient = dynamic(() => import("./SeoFormClient"), {
  ssr: false,
});

export default function SeoFormServer() {
  return (
    <>
      <section className="webguruz-seo-form">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12 col-sm-12 col-12">
              <div className="webguruz-seo-form" style={Seobackgimg}>
                <div className="heading-one-seo">
                  <h5>CHECK YOUR WEBSITE'S SEO</h5>
                  <h3>
                    What is Your<strong> SEO SCORE</strong>
                  </h3>
                </div>
                <SeoFormClient />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
