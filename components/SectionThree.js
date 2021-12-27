import React from 'react'
import styles from "../styles/sectionThree.module.css"
import {Container, Row ,Col} from "react-bootstrap"

function SectionThree() {
    return (
        <Container fluid id="sectionThree_wrapper" className={styles.sectionThree_wrapper}>
           <Row className={styles.sectionThreeHeading}>
                <div className="headingWrapper">
                    <h1>OZONE CITY PROPERTY</h1>
                    <h2>Highlights</h2>
                </div>

           </Row>
           <Row className={styles.sectionThree}>
               <Col lg={3} className={styles.colOne}>
                   <div className={styles.highlight_icon}>
                       <img layout='fill'  src="/images/entypo_location.svg" alt="" />
                   </div>
                   <h2 className={styles.iconHeading}>Near to subway</h2>
                   <div className={styles.highlight_info}>
                       <span>30</span> mins
                   </div>
               </Col>
               <Col lg={3} className={styles.colTwo}>
                   <div className={styles.highlight_icon}>
                      <img layout='fill'  src="/images/Key_home.svg" alt="" />
                   </div>
                   <h2 className={styles.iconHeading}>Total Project Area</h2>
                   <div className={styles.highlight_info}>
                       <span>70</span> Acres
                   </div>
               </Col>
               <Col lg={3} className={styles.colThree}>
                   <div className={styles.highlight_icon}>
                      <img layout='fill'  src="/images/cil_mobile-landscape.svg" alt="" />
                   </div>
                   <h2 className={styles.iconHeading}>No. of Units</h2>
                   <div className={styles.highlight_info}>
                       <span>559</span> Units <br/>
                       139 EWS
                   </div>
               </Col>
               <Col lg={3} className={styles.colFour}>
                   <div className={styles.highlight_icon}>
                      <img layout='fill'  src="/images/bi_building.svg" alt="" />
                   </div>
                   <h2 className={styles.iconHeading}>Near to Honda Factory</h2>
                   <div className={styles.highlight_info}>
                       <span>10</span> mins
                   </div>
               </Col>
           </Row>
        </Container>
    )
}

export default SectionThree
