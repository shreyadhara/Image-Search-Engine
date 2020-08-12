import React from 'react';

const Image=props=>

	<li>
         <div  >
		<a href={props.link}>
           <img src={props.url} alt="nothing" style={{"height":"200px","width":"370px","display":"flex","justifyContent":"center", "marginLeft":"20px", "padding":"45px","borderRadius":"55px"}} />
        </a>
        
		<div style={{  "position": "relative","bottom"  : "100px", "right" : "20px","color":"white"}}>
        <img src={props.photo} alt="nothing" style={{"borderRadius":"50%"  }}/>
		Image by {props.name}
        </div>
        </div>
        </li>
       

export default Image;
