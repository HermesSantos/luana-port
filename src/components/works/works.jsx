import styles from './works.module.css'
import { Carousel } from "react-bootstrap"
import { WorkComment } from './workComment'

export const Works = () => {
  return (
    <div>
      <div className="container">
        <div className="row text-center">
          <h1>Meus trabalhos</h1>
          <div className={`${styles.main}`}>
            <Carousel>
              <Carousel.Item interval={1000}>
                <img
                  className=" w-25 h-25"
                  src="../../../public/port3.jpg"
                  alt="First slide"
                />
                <Carousel.Caption>
                  <h3>First slide label</h3>
                  <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={1000}>
                <img
                  className=" w-25 h-25"
                  src="../../../public/port1.jpg"
                  alt="Second slide"
                />
                <Carousel.Caption>
                  <h3>Second slide label</h3>
                  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </Carousel.Caption>
              </Carousel.Item>
              <Carousel.Item interval={1000}>
                <img
                  className=" w-25 h-25"
                  src="../../../public/port2.jpg"
                  alt="Third slide"
                />
                <Carousel.Caption>
                  <h3>Third slide label</h3>
                  <p>
                    Praesent commodo cursus magna, vel scelerisque nisl consectetur.
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            </Carousel>
            <WorkComment/>
          </div>
        </div>
      </div>
    </div>
  )
}