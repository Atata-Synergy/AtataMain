import React, { Component } from "react";
// import ReactImageMagnify from 'react-image-magnify';
import styled from "styled-components";
import Img1 from '../Images/1.png';
import Img2 from '../Images/2.png';
import Img3 from '../Images/3.png';
import Img4 from '../Images/4.png';
import Img5 from '../Images/5.png';



class ImagePreview extends Component {
    
  constructor(){
    super()
    
    this.state = {
      mainUrl: Img1,
    }
    this.Swap = this.Swap.bind(this)

  }
  Swap(url){
    this.setState({mainUrl: url})
  };
  
  render() {
    
    return (
      <Preview>
        <div className="ImagePreview">
          <img src={this.state.mainUrl} id="main" />
        </div>
        <div className="ImageList">
          <li>
          
            <img src={Img1} onClick={()=> this.Swap(Img1)} id="p-img" />
          </li>
          <li>
            <img src={Img2} onClick={()=> this.Swap(Img2)} id="p-img" />
          </li>
          <li>
            <img src={Img3} onClick={()=> this.Swap(Img3)} id="p-img" />
          </li>
          <li>
            <img src={Img4} onClick={()=> this.Swap(Img4)} id="p-img" />
          </li>
          <li>
            <img src={Img5} onClick={()=> this.Swap(Img5)} id="p-img" />
          </li>
        </div>
      </Preview>
    );
  }
}

const imageProps = {
  smallImage: {
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

const Preview = styled.div`
  padding: 10px;
  .ImagePreview {
    border: solid 1px var(--colorAsh);
    width: 500px;
    height: 400px;
    margin: auto;
    padding: auto;
    overflow: hidden;
    img {
      width: 550px;
      height: 500px;
    }
  }
  .ImageList {
    width: 89%;
    margin: auto;
    margin-top: 3px;
    padding: 10px;
    display: flex;
    list-style-type: none;
    background-color: var(--colorAsh);

    li {
      border: solid 1px var(--colorAsh);
      overflow: hidden;
      width: 50%;
      height: 80px;
      margin: auto;
      margin: 0 1px;

      img {
        width: 100px;
        height: 80px;
      }
    }
  }
`;
export default ImagePreview;
