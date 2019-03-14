import React from 'react';

class ImageCards extends React.Component {

    constructor(props) {
        super(props)
        this.state = {rowSpan: 0}
            // creating image reference to get size of image
        this.imageRef = React.createRef();
    }

    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpan)
    }

    setSpan = () => {
        const imageHeight = this.imageRef.current.clientHeight;
        const rowSpan = Math.ceil(imageHeight / 10);
        this.setState({rowSpan})
        console.log(this.state.rowSpan);
    }

        // Showing Images on Screen
    render() {
            // getting image data from Images.js
        const {description, urls} = this.props.image;
        return (
            <div className='image-list' style={{ gridRowEnd: `span ${this.state.rowSpan}`}}>
                <img

                    ref={this.imageRef}
                    alt={description}
                    src={urls.regular}
                />
            </div>
        );
    };
};

export default ImageCards;
