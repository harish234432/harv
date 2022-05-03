import { React, useEffect } from "react";
import Cards from "./Cards.jsx";
import "./css/MainContent-3.css";
import phone from "./images/phone.jpg";
import computer from "./images/computer.jpg";
import seo from "./images/seo.jpg";
import smm from "./images/smm.jpg";
import fb from "./images/fb.jpg";
import email from "./images/email.jpg";
import branding from "./images/branding.jpg";
import startup from "./images/startup.jpg";
import pr from "./images/pr.jpg";
import AOS from "aos";
import "aos/dist/aos.css";
function MainContent3() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <div id="services" className="mainContent3">
      <div data-aos="fade-up" data-aos-once="true">
        <p className="u-heading">Our services</p>
        <h1 className="Heading-3">What do you need?</h1>
      </div>
      <div className="cards">
        <Cards
          image={phone}
          heading="Mobile Application & UI/UX"
          text="We offer dynamic and interactive UI/UX development services using the
            latest tools and technologies. Our designs improve the end- user
            experience and leave a long- lasting impact"
        />
        <Cards
          image={computer}
          heading="Website Development"
          text="We care about your market position & therefore; we have our dedicated developers for strengthening your foothold in the digital marketplace. We provide all services from website creation to maintenance & development of a pre- established business.
          "
        />
        <Cards
          image={seo}
          heading="Search Engine Optimization"
          text="Increase your organic traffic & watch your sales volume spiking off the chart with our experienced team of SEO content writers along with our curative & enthusiastic search engine optimization specialist.
          "
        />
        <Cards
          image={smm}
          heading="Social Media Marketing"
          text="Getting the attention of Gen z’s has never been tougher! From quick changes in fashion taste to the trendiest wish lists, the younger generation is omnipresent. Cater their needs with our explicit social media marketing team & watch your social presence grow."
        />
        <Cards
          image={fb}
          heading="FB & Google Ad"
          text="Advertisements & campaigning is our stronghold for marketing new products or scaling up the existing business. We provide the best-in-class ad services for all your google & FB ads. Reach a multitude of protentional clients with our speedy ad campaigns & get great results in short stretch of time."
        />
        <Cards
          image={email}
          heading="E-mail Marketing"
          text="The most hyped part of marketing is surely E-mail marketing. Get your products & services right to your target clients through our elusive E-mail marketing strategies & services."
        />
        <Cards
          image={branding}
          heading="Branding"
          text="As a branding agency, we make sure that each of our project is completed with brimful care & attention to detail. Join us for brand identities, packaging & signage to graphic exhibitions with endless possibilities of UI/UX designs for mobile applications & websites."
        />
        <Cards
          image={startup}
          heading="Business Profile Management"
          text="At zedital we are driven by the thought of complete perfection in our every project and what better way to show perfection than a complete skillset cumulated in a business profile. Fuse your ideas with our professional BPM team & present yourself distinctly."
        />
        <Cards
          image={pr}
          heading="PR & Verification"
          text="Ever thought how exciting it would be to get a blue verification tick on your social profile?  Double your excitement with zedital’s premium PR & verification team & get verified on all major social platforms."
        />
      </div>
    </div>
  );
}

export default MainContent3;
