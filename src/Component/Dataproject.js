import React from "react";

function Dataproject(props){
  const {data} = props;
    return(
        
        <div className="w3-col l3 m6 w3-margin-bottom">
        <div className="w3-display-container">
      <div className="w3-display-topleft w3-black w3-padding">{data.namedata}</div>
      <img src={data.img} alt="House" style={{ width: "100%" }} />
    
    </div>
    </div>

    );
}
export default Dataproject;