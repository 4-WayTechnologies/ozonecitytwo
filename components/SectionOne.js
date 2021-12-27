import styles from "../styles/sectionOne.module.css"
import {Container,Row,Col} from "react-bootstrap"
function SectionOne() {
    return (
        <Container fluid id="sectionOne_wrapper" className={styles.sectionOne_wrapper}>
            <Row className="sectionOne">
                <Col md={6} className={styles.sectionOne_img}>
                    <div className={styles.oneBG}></div>
                    <div className={styles.oneImg_wrapper}>
                        <img className={styles.oneImg} src="/images/01.jpg" alt="" />
                    </div>
                </Col>
                <Col md={6} className="sectionOne_text_wrapper">
                    <div className={styles.sectionOne_text}>
                        <h2>Premium living space in the lap of serenity</h2>
                        <p>
                        Ozone City 2 is an exquisite project in the pollution-free Bhiwadi, Rajasthan, our township has several vacant plots waiting to be transformed into your dream home. It matches your modern-day taste and makes you feel the shimmer of everyday life right from the moment you wake up to the moment you sleep. You can book a plot size of 135 sq yards and 160 sq yards, which will fit perfectly with your personal needs.See our projects
                        </p>
                        <div className={styles.cta_sectionOne}>
                            <span>See Our Projects</span>
                            <div className={styles.ctaOne_icon}>
                                <img src="/images/arrow_3.svg" alt="arrow" />
                                
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </Container>
    )
}

export default SectionOne
