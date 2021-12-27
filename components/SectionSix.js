import React from 'react'
import styles from "../styles/sectionSix.module.css"
import {Container,Row,Col} from "react-bootstrap"

function SectionSix() {
    return (
        <Container fluid className={styles.sectionSix_wrapper}>
            <Row className={styles.sectionSix}>
                <Col sm={12} md={6} className={styles.col_text}>
                    <h1>Ozone City 2 living Spaces</h1>    
                    <h2>Are you interested to buying plots</h2>  
                    <p>Our expansive township is a safe space your children need growing up. With a high standard of living and premium facilities, it makes the best option for your future plans. You can savor the proximity of a like-minded and warm group of people too. There has been never a better time to buy a house for investment or to call it your “forever home.” It is best to create lifetime memories with your family. </p>          
                    
                    <div className={styles.cta_wrapper}>
                    <div className={styles.cta}>
                        <div className={styles.cta_text}>
                            Schedule a visit
                        </div>
                        <div className={styles.cta_icon}>
                            <img layout='fill' alt="" src="/images/ion_caret-back.svg"/>
                        </div>
                    </div>
                    </div>
                </Col>
                <Col sm={12} md={6}></Col>
            </Row>
        </Container>
    )
}

export default SectionSix
