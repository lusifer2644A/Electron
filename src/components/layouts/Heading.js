import React from "react";
import bgImage from "../../assets/images/name_bg1.jpg";

const Heading = ({ name }) => {
    return (
        <>
            <img src={bgImage} alt="" />
            <div className="white mainTitle uppercase pageHeading">{name}</div>
            <div className="blackdrop" />
        </>
    );
};

export default Heading;
