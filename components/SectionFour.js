import React from 'react'
import styles from "../styles/sectionFour.module.css"
import {Container,Row,Col} from "react-bootstrap"


function SectionFour() {
    return (
            <Container fluid id="sectionFour_wrapper" className={styles.sectionFour_wrapper}>
                <Row className={styles.sectionFour}>
                    <Col sm={12} md={6} className={styles.colOne}>
                        <div className={styles.imgWrapper}>
                            <img  src="/images/01.jpg"/>
                        </div>
                    </Col>
                    <Col sm={12} md={6}>
                        <div className={styles.textWrapper}>
                            <h2>OZONE CITY 2</h2>
                            <p>
                            Since Ozone city is located in the Bhiwadi, it will take you away from the city-life-conundrums. You will enjoy the umpteen benefits like nowhere else. Breathing fresh air, sitting under the starlit sky every day. The kind of place with fresh pure rainwater harvesting and additionally you’ll live in a warm, classy society. And, at the same time, it keeps you well connected because of its strategic location next to the NH-08, thus you will be able to easily commute to and from society.
                            </p>
                            <div className={styles.cta_wrapper}>
                                <div className={styles.cta}>
                                Schedule a visit 
                                <div className={styles.cta_icon}>
                                    <img  src="/images/ion_caret-back.svg" alt="" />
                                </div>
                                </div>

                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
    )
}

export default SectionFour
