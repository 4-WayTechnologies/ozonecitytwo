import React from 'react'
import {Container,Row,Col} from "react-bootstrap"
import styles from "../styles/sectionNine.module.css"
import Carousel from 'react-multi-carousel';
import Link from "next/link"
function SectionNine() {
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
        <Container fluid className={styles.sectionNine_wrapper}>
              <Row className={styles.sectionNine}>
                <h1>Project Video Gallery</h1>
              </Row>
              <Row className={styles.carousel_wrapper}>
                  <Carousel
                 swipeable={true}
                 draggable={true}
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
                            <iframe width="413" height="293" src="https://www.youtube.com/embed/OSo4-omeWRk?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen ></iframe>
                            </div>
                     </div>
                     <div className={styles.sliderWrapper}>
                            <div className={styles.sliderItem}>
                            <iframe width="413" height="293" src="https://www.youtube.com/embed/RiCm6AZKZvc?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                     </div>
                     <div className={styles.sliderWrapper}>
                            <div className={styles.sliderItem}>
                            <iframe width="413" height="293" src="https://www.youtube.com/embed/JxMroPBxkRA?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                     </div>
                     <div className={styles.sliderWrapper}>
                            <div className={styles.sliderItem}>
                            <iframe width="413" height="293" src="https://www.youtube.com/embed/UT1luM1cEVg?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                     </div>
                     <div className={styles.sliderWrapper}>
                            <div className={styles.sliderItem}>
                            <iframe width="413" height="293" src="https://www.youtube.com/embed/6f5UxdH-nss?rel=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
                            </div>
                     </div>

                                     
                </Carousel>
                  
              </Row>
              
              <div className={styles.cta_sectionOne}>
                            <span><Link href="/gallery">See All Gallery </Link></span> 
                            <div className={styles.ctaOne_icon}>
                                <img   src="/images/ion_caret-back.svg" alt="arrow" /> 
                            </div>
                            <div className={styles.border}></div>
                </div>
             
        </Container>
    )
}

export default SectionNine
