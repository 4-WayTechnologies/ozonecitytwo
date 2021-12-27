import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../styles/Home.module.css'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import SectionOne from '../components/SectionOne';
import SectionTwo from '../components/SectionTwo';
import SectionThree from '../components/SectionThree';
import SectionFour from '../components/SectionFour';
import SectionFve from '../components/SectionFve';
import SectionSix from '../components/SectionSix';
import SectionSeven from '../components/SectionSeven';
import SectionEight from '../components/SectionEight';
import SectionNine from '../components/SectionNine';
import Footer from '../components/Footer';



export default function Home() {
    const responsive = {
      desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 1,
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
      <>
      <div className={styles.hero}>
        
        <div className={styles.navWrapper}>
          <nav className={styles.nav}>
            <div className={styles.logo}>
              <img layout='fill'   src="/images/logo.png" alt="logo" />
            </div>
            <ul className={styles.navItem}>
                <li>+91-9971077552</li>
                <li>+91-9971077559</li>
                <li>info@bmrrealtors</li>
            </ul>
            <div className={styles.navIcon}>
              <img layout='fill'  alt="" src='/images/phone_icon.svg'/>
            </div>
          </nav>
          <div className={styles.subNav}>
          <ul>
            <li> <a href="#sectionOne_wrapper">START</a></li>
            <li> <a href="#sectionTwo_wrapper">GALLERY</a></li>
            <li> <a href="#sectionThree_wrapper">PROPERTY</a></li>
            <li> <a href="#sectionFour_wrapper">ABOUT</a></li>
            <li> <a href="#sectionSeven_wrapper">AMENITIES</a></li>
  
          </ul>
        </div>
          
        </div>
      
        <Carousel
          swipeable={true}
          draggable={false}
          showDots={true}
          
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          keyBoardControl={true}
          customTransition="all .5"
          transitionDuration={500}
          containerClass="carousel-container"
          removeArrowOnDeviceType={["tablet", "mobile","desktop"]}
          
          dotListClass="custom-dot-list-style"
          itemClass="carousel-item-padding-40-px">
          <div className={styles.sliderWrapper}>
            <div className={styles.sliderItem}>
              <div className={styles.hero_text}>
                <h1>OZONE <span>CITY 2</span></h1>
                <p>We Build Your Dream House</p>
                <div className={styles.cta_wrapper}>
                  <div className={styles.cta}>
                    <span className={styles.cta_text}> GET A CONSULTANCY </span>
                    <div className={styles.ctaArrow}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="49" height="20" viewBox="0 0 49 20" fill="none">
                      <path d="M48.0958 10.7902C48.6162 10.2698 48.6162 9.42601 48.0958 8.90558L39.6149 0.424721C39.0945 -0.0957072 38.2507 -0.0957072 37.7303 0.424721C37.2099 0.945148 37.2099 1.78893 37.7303 2.30936L45.2688 9.8479L37.7303 17.3864C37.2099 17.9069 37.2099 18.7507 37.7303 19.2711C38.2507 19.7915 39.0945 19.7915 39.6149 19.2711L48.0958 10.7902ZM0.511108 11.1805H47.1535V8.51526H0.511108V11.1805Z" fill="white" />
                      </svg>
                    </div>
                  </div>
                  <div className={styles.cta_home}>
                    <img   src="/images/cta_home.svg" alt="" />
                  </div>
  
                </div>
              </div>
              {/* <img layout='fill'  className={styles.heroImage} src='https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' className='sliderImage'>
              </Image> */}
            </div>
          </div>
          {/* <div className={styles.sliderWrapper}>
            <div className={styles.sliderItem}>
              <img layout='fill'  src='https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80' className='sliderImage'>
              </Image>
            </div>
          </div> */}
          {/* <div className={styles.sliderWrapper}>
            <div className={styles.sliderItem}>
              <img layout='fill'  src='https://images.unsplash.com/photo-1512917774080-9991f1c4c750?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80' className='sliderImage'>
              </Image>
            </div>
          </div> */}
          </Carousel>
         
      </div>
      <SectionOne/>
      <SectionTwo/>
      <SectionThree/>
      <SectionFour/>
      <SectionFve/>
      <SectionSix/>
      <SectionSeven/>
      <SectionEight/>
      <SectionNine/>
      <Footer/>
      </>
    )
  }