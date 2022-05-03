import { React, useEffect } from "react";
import "./css/MainContent-1.css";
import AOS from "aos";
import "aos/dist/aos.css";
import CountUp from "react-countup";
import VisibilitySensor from "react-visibility-sensor";

const MainContent1 = () => {
  let dailyVisits = 2.75;
  let clients = 250;
  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);
  return (
    <div className="mainContent1">
      <div className="flex">
        <div
          data-aos="fade-up"
          data-aos-once="true"
          className="flex-child-element"
        >
          <p className="head">Let's connect</p>
          <p className="head1">Getting You Connected To Your Audience</p>

          <VisibilitySensor partialVisibility>
            {({ isVisible }) => (
              <ul className="dc">
                <li>
                  {isVisible ? (
                    <CountUp end={dailyVisits} decimals={2} duration={1.5} />
                  ) : (
                    0
                  )}
                  k
                </li>

                <li>
                  {isVisible ? <CountUp end={clients} duration={1.5} /> : 0}+
                </li>
              </ul>
            )}
          </VisibilitySensor>

          <ul className="under-dc">
            <li>Daily Visits</li>
            <li>Clients</li>
          </ul>
        </div>
        <div className="flex-child-element">
          <div className="para">
            <p data-aos="fade-up" data-aos-once="true" className="right-para">
              As technology around us shifted from big chunky television boxes
              to LEDs & OLEDs, it's probably the best time to shift from old
              traditional methods of marketing to digital presence & growth of
              your company via digital marketing. We at zedital, provide a clear
              vision & assistance for all your digital needs & efforts.
            </p>
            <p data-aos="fade-up" data-aos-once="true" className="right-para">
              Connect with your target audience & expand the horizon of your
              business with zedital digital marketing agency. We have myriad
              offerings which include not only marketing of your product but
              also scaling up your business initiatives to a completely new
              level.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent1;
