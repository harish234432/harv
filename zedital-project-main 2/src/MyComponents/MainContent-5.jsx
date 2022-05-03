import { React, useEffect } from "react";
import "./css/MainContent-5.css";
import handicapped_guy from "./images/handicapped_guy.png";
import { TiTick } from "react-icons/ti";
import AOS from "aos";
import "aos/dist/aos.css";

function MainContent5() {
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <div id="aboutus" className="mainContent5">
      <div className="heading5">
        <h1 data-aos="fade-right" data-aos-once="true">
          Get to know us
        </h1>
        <div
          data-aos="fade-left"
          data-aos-once="true"
          className="underline5"
        ></div>
      </div>
      <p  className="para5-1">
        <p data-aos="fade-up" data-aos-once="true">
          Zedital operates on the below principles to enable our client's
          Digital growth.
        </p>
        <h1 data-aos="fade-up" data-aos-once="true">
          <TiTick className="tick-1" />
          Growth driven mindset
        </h1>
        <p data-aos="fade-up" data-aos-once="true">
        Since zedital was itself a startup once, we understand the toil & hard work behind setting up of a business. We value our customer’s ideas & their contemplative vision. We are a growth driven company which believes in customer-oriented business & therefore our expert team at Zedital will work every step of your digital growth journey to give a tough fight to your competitors.
        </p>

        <h1 data-aos="fade-up" data-aos-once="true">
          <TiTick className="tick-1" />
          Dedicated experienced team
        </h1>
        <p data-aos="fade-up" data-aos-once="true">
        Get full support of our experienced team at zedital & kickstart your digital campaigns across myriad digital platforms & achieve the most positive business outcomes.
        </p>

        <h1 data-aos="fade-up" data-aos-once="true">
          <TiTick className="tick-1" />
          Sporty marketing & reliability 
        </h1>
        <p data-aos="fade-up" data-aos-once="true">
        Our influential marketing techniques & considerable outreach has managed to provide reliability to our business model. We are quick to adapt the modern methods & resources as soon as they surface the business market.
        </p>

        <h1 data-aos="fade-up" data-aos-once="true">
          <TiTick className="tick-1" />
          Full benefaction to our clients  
        </h1>
        <p data-aos="fade-up" data-aos-once="true">
        We at zedital believe in mutual cooperation & subsistence development-oriented methods to provide full benefaction to our clients. Full technical as well as development support is provided at our end
        </p>

      </p>
      <div className="flex flex-item-5">
        <div
          data-aos="flip-right"
          data-aos-once="true"
          className="flex-child-element"
        >
          <img className="handicapped_guy" src={handicapped_guy} alt="" />
        </div>
        <div className="flex-child-element second-item">
          <div data-aos="flip-left" data-aos-once="true">
            <h1>Why Choose Zedital Marketing Agency?</h1>
            <p className="para5-2">
              We have highly skilled team with excellent technical
              knowledge and experience in using the latest software standards.
              We have built a large pool of knowledge that we apply to deliver
              solutions that meet client's needs, expectations and budget. By
              putting our clients at the heart of everything we do, we are proud
              that we are still supporting our very first business client.
            </p>
          </div>
          <ul className="list5">
            {}
            <li data-aos="fade-left" data-aos-once="true">
              <TiTick className="tick" /> Receive the long time solution
            </li>
            <li data-aos="fade-left" data-aos-once="true">
              <TiTick className="tick" /> Get the best deal for any solution
            </li>
            <li data-aos="fade-left" data-aos-once="true">
              <TiTick className="tick" /> Constant & clean communication
            </li>
            <li data-aos="fade-left" data-aos-once="true">
              <TiTick className="tick" /> Time to time delivery of Quality work
            </li>
            <li data-aos="fade-left" data-aos-once="true">
              <TiTick className="tick" /> Connect with trust & long term
              relationships
            </li>
            <li data-aos="fade-left" data-aos-once="true">
              <TiTick className="tick" /> Increase your business growth and
              expand the possibilites
            </li>
            <li data-aos="fade-left" data-aos-once="true">
              <TiTick className="tick" /> We use latest & Flexible Technology
              for your business
            </li>
            <li data-aos="fade-left" data-aos-once="true">
              <TiTick className="tick" /> We are passionate about our work and
              wish you all the success in your future endeavours</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MainContent5;
