import React from 'react'
import {Container,Row,Col} from "react-bootstrap"
import styles from "../styles/footer.module.css"

function Footer() {
    return (
        <Container fluid className={styles.footerWrapper}>
            <Row className={styles.contact_info}>
                <Col md={4} className={styles.col_wrapper}>
                    <div className={styles.icon}>
                        <img src="/images/location.svg"/>
                    </div>
                    <div className={styles.info_text}>
                        <h2>Address</h2>
                        <p>Alwar Bypass Road Bhiwadi, Rajasthan</p>
                    </div>
                </Col>
                <Col md={4} className={styles.col_wrapper}>
                    <div className={styles.icon_hourGlass}>
                        <img src="/images/hour_glass.svg"/>
                    </div>
                    <div className={styles.info_text}>
                        <h2>Working Hours</h2>
                        <p>9:00 am to 5:00pm Workdays. <br/> 9:00 am to 2:00pm (Saturdays)

</p>
                    </div>
                </Col>
                <Col md={4} className={styles.col_wrapper}>
                    <div className={styles.icon_globe}>
                        <img src="/images/globe.svg"/>
                    </div>
                    <div className={styles.info_text}>
                        <h2>Sales Office</h2>
                        <p>Plot No. 9, 6A, 4th Floor, Ozone Center, Sector-12, Faridabad, Haryana, INDIA.</p>
                    </div>
                </Col>
            </Row>
            <Row className={styles.footer_row}>
                <Col sm={6} md={3} className={styles.footer_Col}>
                    <div className={styles.logo}>
                        <img src="/images/logo.png" />
                    </div>
                </Col>
                <Col sm={6} md={3} className={styles.footer_Col}>
                    <div className={styles.footer_text}>
                        <ul>
                            <li>Ozone City 2</li>
                            <li>Apartments</li>
                            <li>Facilities</li>
                            <li>News</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </Col>
                <Col sm={6} md={3} className={styles.footer_Col}>
                <div className={styles.footer_text}>
                        <ul>
                            <li>Ozone City 2</li>
                            <li>Apartments</li>
                            <li>Facilities</li>
                            <li>News</li>
                            <li>Contact</li>
                        </ul>
                    </div>
                </Col>
                <Col sm={6} md={3} className={styles.footer_Col}>
                    <div className={styles.follow_link}>
                        <h2>FOLLOW US ON</h2>
                        <ul className={styles.social_icon}>
                            <li> <img src="/images/facebook_white.svg" alt="" /> </li>
                            <li> <img src="/images/Instagram_white.svg" alt="" /> </li>
                            <li> <img src="/images/LinkedIn_white.svg" alt="" /> </li>
                            <li> <img src="/images/Twitter_white.svg" alt="" /> </li>
                            <li> <img src="/images/Telegram_white.svg" alt="" /> </li>
                        </ul>
                        <h2>CONTACT US</h2>
                        <div className={styles.contact_desc}>
                            <ul>
                                <li><img src="/images/Viber_white.svg" alt="" /></li>
                                <li>+91-9971077552</li>
                            </ul>
                            <ul>
                                <li><img src="/images/Viber_white.svg" alt="" /></li>
                                <li>+91-9971077559</li>
                            </ul>
                            <ul>
                                <li><img src="/images/Gmail_white.svg" alt="" /></li>
                                <li>info@bmrrealtors.com</li>
                            </ul>
                        </div>
                    </div>
                </Col>

            </Row>
            <Row className={styles.newsletterWrapper}>
                <div className={styles.newsletter}>
                    <p>Be the first to know about discounts & new events Email Address</p>
                    <input placeholder='Email Address' className={styles.newsletter_input}/>
                </div>

            </Row>
            
        </Container>

    )
}

export default Footer
