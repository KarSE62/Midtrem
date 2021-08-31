import React from "react";

function About(props){
    const {dabout} = props;
    return(
        <div className="w3-container w3-padding-32" id="about">
        <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">{dabout.label}</h3>
        <p>{dabout.p}</p>
</div>

    );
}

export default About;