import React from 'react'
import styles from "../styles/sectionEight.module.css"
import {Container,Row,Col} from "react-bootstrap"


function SectionEight() {
    return (
        <Container fluid className={styles.sectionEight_wrapper}>
            <Row className={styles.sectionEight}>
                <Col md={6} className={styles.col_text}>
                    <h1>Property Certificates</h1>    
                    <p>Our lasting sites and projects are legally approved by the government of India, adhering to all the required tax and property laws. Making it a trustworthy and safe bet on your future that you will cherish forever. Rest assured things have been taken care of, just sit back & relax.Loan facility easily available with Axis bank. </p>          
                </Col>
                <Col md={6}>
                    <Row className={styles.imageRow}>
                        <Col className={styles.imagesRera}>
                        <img alt=""  src="/images/RERA.png"  />
                        </Col>
                        <Col className={styles.images}>
                        <img alt=""  src="/images/axis_bank.png"  />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    )
}

export default SectionEight
