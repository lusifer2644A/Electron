import React from "react";
import banner from "../../assets/images/banner.jpg";

const Landing = () => {
    return (
        <div className="landing">
            <div className="bannerImage">
                <img src={banner} alt="" />
            </div>
            <div className="overview p-3">
                <div className="x-large primary-color">OVERVIEW </div>
                <div className="overviewText">
                    <ul>
                        <li>
                            Electron offers a wide range of agricultural
                            products related to pumping solutions. We offer
                            starters, pumpsets, wires, and cables required for
                            the complete irrigation system set up in small or
                            large farms.
                        </li>
                        <li>
                            These products are manufactured with expertise
                            gained from over five decades of experience,
                            endurance, and workmanship. Electron products are
                            engineered to perfection with utmost care and
                            stringent quality control at all stages to ensure
                            trouble-free service. Electrons unwavering
                            determination has given us a strong presence across
                            Bihar with 100 plus channel and provide online
                            services.
                        </li>
                        <li>
                            The agriculture water pump is the most effective
                            machine for irrigation purposes. They play a
                            fundamental part in agriculture as they pump water
                            from the source to the agricultural field. Pumps can
                            be used for many types of irrigation, such as drip,
                            sprinkler, and using a hosepipe. Agriculture Pumps
                            offered by Electron provide a solution to irrigation
                            of agricultural fields.
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Landing;
