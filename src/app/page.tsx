import Faq from "@/components/HomeComponents/Faq";
import ServiceCards from "@/components/HomeComponents/ServiceCards";
import CompanySlider from "@/components/HomeComponents/CompanySlider";
import AboutOffice from "@/components/HomeComponents/AboutOffice";
import DomainsSection from "@/components/HomeComponents/DomainsSection";
import SeoFormServer from "@/components/HomeComponents/SeoFormServer";
import ConsulationServer from "@/components/HomeComponents/ConsulationServer";
import PeopleWord from "@/components/HomeComponents/PeopleWord";
import ZLast from "@/components/HomeComponents/ZLast";
import BlogHome from "@/components/HomeComponents/BlogHome";
export default function Home() {
  return (
    <>
      <ZLast />
      <CompanySlider />
      <DomainsSection />
      <SeoFormServer />
      <AboutOffice />
      <ServiceCards />
      <PeopleWord />
      <ConsulationServer />
      <Faq />
      <BlogHome />
    </>
  );
}