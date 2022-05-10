import './Home.css';
import tasty1 from './../images/dish-1.png';
import tasty2 from './../images/dish-2.png';
import tasty3 from './../images/dish-3.png';
import tasty4 from './../images/dish-4.png';
import tasty5 from './../images/dish-5.png';
import tasty6 from './../images/dish-6.png';

function Items() {
  return (
    <>
    <section className="dishes" id="dishes">

<h3 className="sub-heading"> our dishes </h3>
<h1 className="heading"> popular dishes </h1>

<div className="box-container">

    <div className="box">
        <a href="#" className="fas fa-heart"></a>
        <a href="#" className="fas fa-eye"></a>
        <img src={tasty1} alt=""/>
        <h3>tasty food</h3>
        <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half-alt"></i>
        </div>
        <span>$15.99</span>
        <a href="#" className="btn">add to cart</a>
    </div>

    <div className="box">
        <a href="#" className="fas fa-heart"></a>
        <a href="#" className="fas fa-eye"></a>
        <img src={tasty2} alt=""/>
        <h3>tasty food</h3>
        <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half-alt"></i>
        </div>
        <span>$15.99</span>
        <a href="#" className="btn">add to cart</a>
    </div>

    <div className="box">
        <a href="#" className="fas fa-heart"></a>
        <a href="#" className="fas fa-eye"></a>
        <img src={tasty3} alt=""/>
        <h3>tasty food</h3>
        <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half-alt"></i>
        </div>
        <span>$15.99</span>
        <a href="#" className="btn">add to cart</a>
    </div>

    <div className="box">
        <a href="#" className="fas fa-heart"></a>
        <a href="#" className="fas fa-eye"></a>
        <img src={tasty4} alt=""/>
        <h3>tasty food</h3>
        <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half-alt"></i>
        </div>
        <span>$15.99</span>
        <a href="#" className="btn">add to cart</a>
    </div>

    <div className="box">
        <a href="#" className="fas fa-heart"></a>
        <a href="#" className="fas fa-eye"></a>
        <img src={tasty5} alt=""/>
        <h3>tasty food</h3>
        <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half-alt"></i>
        </div>
        <span>$15.99</span>
        <a href="#" className="btn">add to cart</a>
    </div>

    <div className="box">
        <a href="#" className="fas fa-heart"></a>
        <a href="#" className="fas fa-eye"></a>
        <img src={tasty6} alt=""/>
        <h3>tasty food</h3>
        <div className="stars">
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star"></i>
            <i className="fas fa-star-half-alt"></i>
        </div>
        <span>$15.99</span>
        <a href="#" className="btn">add to cart</a>
    </div>

</div>

</section>
    </>
  )
}

export default Items;