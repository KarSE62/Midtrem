import React from "react";

function Dataabout(props) {
    const { data } = props;
    return (
        <div className="w3-col l3 m6 w3-margin-bottom">
            <img src={data.img} alt="John" style={{ width: "100%" }} />
            <h3>{data.nameD}</h3>
            <p className="w3-opacity">{data.position}</p>
            <p>
                {data.p}
            </p>
            <p>
                <button className="w3-button w3-light-grey w3-block">Contact</button>
            </p>
        </div>

    );
}

export default Dataabout;