import React from 'react'
import styles from "../styles/sectionTwo.module.css"
import {Container,Row,Col} from "react-bootstrap"
import Carousel from 'react-multi-carousel';

function SectionTwo() {
    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 3,
          slidesToSlide: 1 // optional, default to 1.
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1,
          slidesToSlide: 2 // optional, default to 1.
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1,
          slidesToSlide: 1 // optional, default to 1.
        }
      };
    return (
        <Container fluid id="sectionTwo_wrapper" className={styles.sectionTwo_wrapper}>
           <Row className={styles.sectionTwo}>
                <Col lg={6} className="sectionOne_text_wrapper">
                <div className={styles.sectionOne_text}>
                    <h2>Property Inner Gallery</h2>
                        <p>
                        We know you deserve the premium life and that’s exactly what you get. The various king-size lawns, perfect for long evening walks, are connected with majestic walkways surrounding the children’s park and multiple patios to sit in. It also has world-class amenities like space for indoor, outdoor games, a party area, a clubhouse, broad pedestrian-free tree-lined avenues, and a children’s play area.
                        </p>
                        <div className={styles.cta_sectionOne}>
                            <span>See All Gallery</span>
                            <div className={styles.ctaOne_icon}>
                                <img   src="/images/ion_caret-back.svg" alt="arrow" />
                                
                            </div>
                            <div className={styles.border}></div>
                        </div>
                </div>
                



                </Col>
                <Col lg={6} className={styles.carousel_wrapper}>
                
                
                <Carousel
                 swipeable={true}
                 draggable={false}
                 showDots={false}
                 
                 responsive={responsive}
                 infinite={true}
                 autoPlay={true}
                 autoPlaySpeed={3500}
                 keyBoardControl={true}
                 customTransition="all .5"
                 transitionDuration={500}
                 containerClass="carousel-container"
                 
                 removeArrowOnDeviceType={["tablet", "mobile","desktop"]}
                 
                 dotListClass="custom-dot-list-style"
                 itemClass="carousel-item-padding-40-px">
                     
                     <div className={styles.sliderWrapper}>
                            <div className={styles.sliderItem}>
                                <img   src="/images/02.jpg" alt="" />
                            </div>
                     </div>
                     <div className={styles.sliderWrapper}>
                            <div className={styles.sliderItem}>
                                <img   src="/images/03.jpg" alt="" />
                            </div>
                     </div>
                     <div className={styles.sliderWrapper}>
                            <div className={styles.sliderItem}>
                                <img   src="/images/04.jpg" alt="" />
                            </div>
                     </div>
                     <div className={styles.sliderWrapper}>
                            <div className={styles.sliderItem}>
                                <img   src="/images/05.jpg" alt="" />
                            </div>
                     </div>

                                     
                </Carousel>
                
                
                </Col>
           </Row>
        </Container>
    )
}

export default SectionTwo
