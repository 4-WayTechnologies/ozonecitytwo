import React from 'react'
import styles from "../styles/sectionSeven.module.css"
import {Container,Row,Col} from "react-bootstrap"

function SectionSeven() {
    return (
        <Container fluid id="sectionSeven_wrapper" className={styles.sectionSeven_wrapper}>
            <h1 className={styles.section_heading}>
            Ozone City 2 Amenities
            </h1>
            <div className={styles.sectionSeven}>
                <Row className={styles.sectionContainer}>
                <Col sm={6} md={4} className={styles.icon_wrapper}>
                <div className={styles.svg_icon}>
                    <img layout='fill' alt="" src="/images/rain.svg"></img>
                </div>
                <p> Rain Water Harvesting </p>
                </Col>
                <Col sm={6} md={4} className={styles.icon_wrapper}>
                <div className={styles.svg_icon}>
                    <img layout='fill' alt="" src="/images/fire_extinguisher.svg"></img>
                </div>
                <p>  Fire Safety </p>
                </Col>
                <Col sm={6} md={4} className={styles.icon_wrapper}>
                <div className={styles.svg_icon}>
                    <img layout='fill' alt="" src="/images/security_worker.svg"></img>
                </div>
                <p> Security Personnel </p>
                </Col>
                <Col sm={6} md={4} className={styles.icon_wrapper}>
                <div className={styles.svg_icon}>
                    <img layout='fill' alt="" src="/images/car_garage.svg"></img>
                </div>
                <p> Covered Car Parking </p>
                </Col>
                <Col sm={6} md={4} className={styles.icon_wrapper}>
                <div className={styles.svg_icon}>
                    <img layout='fill' alt="" src="/images/party_area.svg"></img>
                </div>
                <p> Party Area </p>
                </Col>
                <Col sm={6} md={4} className={styles.icon_wrapper}>
                <div className={styles.svg_icon}>
                    <img layout='fill' alt="" src="/images/club_house.svg"></img>
                </div>
                <p> Club House </p>
                </Col>
                <Col sm={6} md={4} className={styles.icon_wrapper}>
                <div className={styles.svg_icon}>
                    <img layout='fill' alt="" src="/images/play_area.svg"></img>
                </div>
                <p> Play Area </p>
                </Col>
                <Col sm={6} md={4} className={styles.icon_wrapper}>
                <div className={styles.svg_icon}>
                    <img layout='fill' alt="" src="/images/garden.svg"></img>
                </div>
                <p> Landscaped Garden </p>
                </Col>
                <Col sm={6} md={4} className={styles.icon_wrapper}>
                <div className={styles.svg_icon}>
                    <img layout='fill' alt="" src="/images/pool.svg"></img>
                </div>
                <p> Swimming Pool </p>
                </Col>
                </Row>

            </div>
            </Container>
    )
}

export default SectionSeven
