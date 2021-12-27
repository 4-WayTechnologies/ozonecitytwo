import React from 'react'
import styles from "../styles/sectionFive.module.css"
import {Container, Row ,Col} from "react-bootstrap"


function SectionFve() {
    return (
            <Container fluid className={styles.sectionFive_wrapper}>
                <Row className={styles.sectionFiveHeading}>
                    <Col>
                    <h1>OZONE CITY PHASE 1 & 3</h1>
                    <p>What we will help you with is giving you a safe, sophisticated neighborhood loaded with numerous high-end necessities. It’s possible here for you to build your unique home as you plan to - specific to the details, without any compromises. The space has the ‘aha’ factor that makes a lasting statement (and also your guests slightly jealous.)</p>
                    
                    </Col>
                </Row>
                <Row className={styles.stats_wrapper}>
                    <Col md={4} className={styles.section_stats}> <span> Plot Size :</span>    115 - 200 sq. yards</Col>
                    <Col md={4} className={styles.section_stats}> <div className={styles.padding}> <span> Property Type:</span>     Plot</div></Col>
                    <Col md={4} className={styles.section_stats}> <span> Price Range:</span>         20.92 L - 34.09 L</Col>
                </Row>
                <Row className={styles.bluePrint_wrapper}>
                    <Col md={4}> <img  src="/images/bluprint_1.png" alt="" /> </Col>
                    <Col md={4}> <img className={styles.padding}  src="/images/bluprint_2.png" alt="" /> </Col>
                    <Col md={4}> <img  src="/images/bluprint_3.png" alt="" /> </Col>
                </Row>
            </Container>
    )
}

export default SectionFve
