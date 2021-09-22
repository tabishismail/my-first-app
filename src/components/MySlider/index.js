import { Carousel, CarouselItem } from 'react-bootstrap';
import img from "../../assets/image/1.jpg"
import img1 from "../../assets/image/2.jpg"
import img2 from "../../assets/image/3.jpg"
import img3 from "../../assets/image/4.jpg" 

let MySlider = () => {
  return (
    <Carousel variant="dark">
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img}
          alt="First slide"
        />        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img1}
          alt="Second slide"
        />       
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img2}
          alt="Third slide"
        />        
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src={img3}
          alt="Third slide"
        />
      </Carousel.Item>
    </Carousel>
  )
}

export default MySlider;