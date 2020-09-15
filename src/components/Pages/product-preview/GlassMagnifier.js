import React, { Component } from "react";
import { GlassMagnifier } from "react-image-magnifiers";
import image from "../Images/1.png";
import largeImage from "../Images/1.pngcks";

export default class GlassMagnifierExample extends Component {
  render() {
    return (
      <div>
        <GlassMagnifier
          imageSrc={image}
          imageAlt="Example"
          largeImageSrc={largeImage}
        />
      </div>
    );
  }
}
