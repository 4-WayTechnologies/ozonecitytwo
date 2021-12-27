import React from 'react'
import {Container,Row,Col} from "react-bootstrap"
import styles from "../styles/gallery.module.css"

function Gallery() {
    const list=["qJdsnAqbBWs","mVrd7_qxrfM","qJdsnAqbBWs","wtLTdorQ8Sk","mFtsE1NvxMA","ypU0mZPmmWM","eQklRfowfQk","tRd0QUb4oZo","Ts0ijzU21gk","ApbeC_d4K9s","ntGqVIlDRZw","6f5UxdH-nss","UT1luM1cEVg","RiCm6AZKZvc","JxMroPBxkRA","OSo4-omeWRk"]
    return (
        <div>
          <Container fluid>
              <Row className={styles.heading}>
                  <h1>Video Gallery</h1>
              </Row>
               <Row className={styles.gallery_list}> 
                    { list.map((li)=>{
                        return <Col className={styles.gallery_item} md={3}> <h1><iframe width="413" height="293" src={"https://www.youtube.com/embed/"+li+"?rel=0"} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></h1> </Col>
                        })}
               </Row>
          </Container>
        </div>
    )
}

export default Gallery
