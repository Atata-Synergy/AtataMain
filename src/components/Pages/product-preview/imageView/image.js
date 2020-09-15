import React from 'react';
import ReactImageMagnify from 'react-image-magnify';
import Img1 from ".Images/1.png";
 
function App(props) {
  const imageProps = {
    smallImage: {
      alt: 'Phasellus laoreet',
      isFluidWidth: true,
      src: Img1
    },
    largeImage: {
      src: Img1,
      width: 1200,
      height: 1800
    },
    enlargedImageContainerStyle: { background: '#fff', zIndex: 9 }
  };
  return (
    <div className="container mt-4">
      <h2>Product details</h2>
      <div className="row mt-4">
        <div className="col-md-5">
          <ReactImageMagnify {...imageProps} />
        </div>
...
...
      </div>
    </div>
  );
}
 
export default App;