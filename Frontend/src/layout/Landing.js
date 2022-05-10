import './../layout/Home.css';
import landImage from './../images/home-img-1.png';

function Landing() {
  return (
    <>
    
    // home section starts  //

<section className="home" id="home">

<div className="swiper-container home-slider">

    <div className="swiper-wrapper wrapper">

        <div className="swiper-slide slide">
            <div className="content">
                <span>our special dish</span>
                <h3>spicy noodles</h3>
                <p>Rs 50 Cashback Deal with Slice Card Terms & Conditions:</p>
                <a href="#" className="btn">order now</a>
            </div>
            <div className="image">
                <img src={landImage} alt=""/>
            </div>
        </div>

       

       

    </div>

    <div className="swiper-pagination"></div>

</div>

</section>

    </>
  )
}

export default Landing