import React from "react";
import PropTypes from "prop-types";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
CarouselImage.propTypes = {
  autoPlay: PropTypes.bool,
  centerMode: PropTypes.bool,
  interval: PropTypes.number,
  infiniteLoop: PropTypes.bool,
  showThumbs: PropTypes.bool,
  swipeable: PropTypes.bool,
  swipeScrollTolerance: PropTypes.number,
  dataSource: PropTypes.array.isRequired,
};
CarouselImage.defaultProps = {
  autoPlay: true,
  centerMode: true,
  interval: 2000,
  infiniteLoop: true,
  showThumbs: false,
  swipeable: true,
  swipeScrollTolerance: 5,
};

function CarouselImage(props) {
  const { dataSource } = props;
  return (
    <div className="CarouselImage">
      <Carousel {...props}>
        {dataSource.map((img, index) => {
          return (
            <div key={`img${index}`}>
              <img src={img.image} />
              {img.content && <p className="legend">{img.content}</p>}
            </div>
          );
        })}
      </Carousel>
    </div>
  );
}

export default CarouselImage;
