import React from 'react';
import ImageCards from './ImageCards';
import './Images.css';

const ImageList = (props) => {

        // passign image to ImageCards
    return (
        <div className='img-list'>
            {
                props.images.map((image) => {
                    return <ImageCards key={image.id} image={image} />; // key needs to be inside this
                })
            }
        </div>
    )
    // console.log(images.id)
    // return <div>
    //     <ImageCards image={images} />
    // </div>
};

export default ImageList;