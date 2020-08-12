import React from 'react';
import Image from './Image';
import './App.css';


const ImageList=props=>{
  
   let imgs=props.data.map(img=>
            <Image 
               url={img.urls.thumb} 
                user={img.user.links.html}
                photo={img.user.profile_image.small}
                name={img.user.name}
				link={img.links.html}
            />)
      
     
    return(
        <ul className="imageList">
            {imgs}
            </ul>
        )
    }
export default ImageList;