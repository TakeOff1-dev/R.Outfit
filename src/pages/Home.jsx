import "../css/Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Card, ThemeProvider } from "react-bootstrap";
import { Link } from "react-router-dom";

// Product
import Product from '../json/Filter.json'

// courousel
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// imgaes
import casual from '../images/casual.png'
import formal from '../images/formal.png'
import gym from '../images/gym.png'
import party from '../images/party.png'

import trouser2 from '../images/trouser2.png'
import trouser1 from '../images/trouser1.png'
import shirt3 from '../images/shirt3.png'
import tshirt12 from '../images/tshirt2.png'

function Home({ addToCard }) {
  // // array of image
  // const images = [
  //   {
  //     name: "Fjallraven",
  //     "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
  //     price: "230.99",
  //     review: "Lorem lorem lorem lorem lorem"
  //   },
  //   {
  //     name: "Men'sCasual",
  //     "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
  //     price: "280.99",
  //     review: "Lorem lorem lorem lorem lorem"
  //   },
  //   {
  //     name: "Men'sCotton",
  //     "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
  //     price: "230.99",
  //     review: "Lorem lorem lorem lorem lorem"
  //   },
  //   {
  //     name: "Men'sClothing",
  //     "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png",
  //     price: "210.99",
  //     review: "Lorem lorem lorem lorem lorem"
  //   }
  // ];


  // image / specials
  const src = [
    {
      name: "Rain Jacket",
      "image": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2t.png",
      price: "230.99",
      review: "Lorem lorem lorem loremlorem"
    },
    {
      name: "MBJ Women ",
      "image": "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_t.png",
      price: "280.99",
      review: "Lorem lorem lorem loremlorem"
    },
    {
      name: " Women Short",
      "image": "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_t.png",
      price: "230.99",
      review: "Lorem lorem lorem loremlorem"
    },
    {
      name: " Womens T-Shirt ",
      "image": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_t.png",
      price: "210.99",
      review: "Lorem lorem lorem loremlorem"
    }
  ];



  // slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    responsive: [
{
  breakpoint:1200,
  settings:{
    slidesToShow:3,
  }
},
{
  breakpoint:768,
  settings:{
    slidesToShow:2,
  }
},
{
  breakpoint:480,
  settings:{
    slidesToShow:1,
  }
},

    ]
  };
  return (
    <>
      < br /> < br /> < br /> < br />  < br />
      <ThemeProvider
        breakpoints={["xxxl", "xxl", "xl", "lg", "md", "sm", "xs", "xxs"]}
        minBreakpoint="xxs"
      >
        <div className="image ">
          <div className="container">
            <div className="row">
              <div className="col xs={6}">
                <br />
                <br />
                <h1>
                  FIND CLOTHES THAT <br /> MATCHES YOUR STYLE
                </h1>
                <p className="p">
                  Browse through our diverse range of meticulously crafted
                  garments, designed to bring out your individuality and cater
                  to your sense of style.
                </p>
                <button className="shop-now">SHOP NOW</button>
                <br />
                <br />
                <div className=" row">
                  <div className="col-md-4" id="border">
                    <h1>200+</h1>
                    <p>Internal brands</p>
                  </div>
                  <div className="col-md-4 " id="border">
                    <h1>2,000+</h1>
                    <p>Hight quality products</p>
                  </div>
                  <div className="col-md-4 " id="border">
                    <h1>30,000+</h1>
                    <p>Happy customers</p>
                  </div>
                </div>
                <br />
              </div>
              {/* <div class="container">
  <div class="row row-cols-auto">
    <div class="col"><h1 className="">200+  <br/>  </h1><p>International brands</p></div>
    <div class="col"><h1>2,000+ <br/> </h1><p>Hight quality product</p></div>
    <div class="col"><h2>30,000+ <br/>  </h2><p>Happy customers</p>
    </div> */}
              <div className="col-md-6"></div>
            </div>
          </div>
        </div>

        {/* below main image */}
        <div class="container- bg-black ">
          <div class="row row-cols-auto  justify-content-around">
            <div class="col">
              <h2 className="">VERSACE</h2>
            </div>
            <div class="col">
              <h2>ZARA </h2>
            </div>
            <div class="col">
              <h2>GUCCI</h2>
            </div>
            <div class="col">
              <h2>PRADA</h2>
            </div>
            <div class="col">
              <h2>Calvin klein</h2>
            </div>
          </div>
        </div>

<br />
{/* row of 4 */}
<div className="imgg">
<div className="container">
  <div className="row">
   <div className="col-md-3">
   <div className="dress">
     <img src={trouser2} alt="" />
   </div>
   </div>
   <div className="col-md-3">
   <div className="dress">
    <img src={trouser1} alt="" />
   </div>
   </div>
   <div className="col-md-3">
   <div className="dress">
       <img src={shirt3} alt="" />
   </div>
   </div>
   
   <div className="col-md-3">
   <div className="dress">
      <img src={tshirt12} alt="" />
   </div>
   </div>
  </div>
  </div>

</div>
 
   <div class="custom-shape-divider-top-1759346447">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                  <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                </svg>
              </div>
     

        {/* new arrivals */}
        <div className="new-arrivals">

          
          <div className="container">
            <h3 className="text-center">
              {" "}
              <b>NEW ARRIVALS</b>{" "}
            </h3>
            <div className="w-3/4 m-auto">
              <div className="mt-20">
                <Slider {...settings}>
                  {Product.map(i => (
                    <div className="">
                      <div className=" card  flex justify-center items-center">
                        <div className="img">
                          <br />
                          <button className=" px-6 py-1 badge bg-primary" id="btn" onClick={() => addToCard(i)}>
                            Add to cart
                          </button>
                          <br /><br />
                          <img src={i.image} alt="" className="card-img-top" />
                        </div>
                        <div className=" card-body flex flex-col justify-center items-center">
                          <p className="name">
                            {i.title.substring(0, 10)}
                            <p>{i.description.substring(0, 10)}</p>
                          </p>
                          <p className="price">
                            R{i.price}
                            <i class="bi bi-heart"></i> <br />
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star"></i>
                          </p>
                          <Link to="/Filter"><button className=" px-6 py-1 badge bg-secondary">
                            See more
                          </button></Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
                <br />
                <br />
                <hr />
              </div>
            </div>
          </div>

          {/* browee by dress style */}
          <div className="container">
            <div className="bg-color">
              <div className="row">
                <div className="text-center">
                  <h3> <b>BROWSE BY DRESS STYLE</b></h3>
                </div> <br /><br />
                {/* images */}
                <div className="col-md-8">
                  <div className="card" >
                    <p className="bds-p">Casual</p>
                    <img src={casual} alt="" w-4 className="bds-img" />
                  </div>
                </div>
                <div className="col-md-4">
                  <div className="card" >
                    <p className="bds-p">Formal</p>
                    <img src={formal} alt="" w-4 className="bds-img" />
                  </div>
                </div>
              </div>

              {/* another row */}
              <div className="row">
                <div className="col-md-4" >
                  <div className="card" id="bds-imgs">
                    <p className="bds-p">Gym</p>
                    <img src={gym} alt="" w-4 className="bds-img" />
                  </div>
                </div>
                <div className="col-md-8">
                  <div className="card" id="">
                    <p className="bds-p">Party</p>
                    <img src={party} alt="" w-4 className="bds-img" />
                  </div>
                </div>
              </div>
            </div>
          </div>





          {/* specials */}
          <br />
          <div className="container">
            <h3 className="text-center">
              {" "}
              <b>SPECIALS </b>
            </h3>
            <p style={{ color: "grey" }} className="text-center"> <i> Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Veritatis impedit
              eius vel nemo maiores laboriosam
              exercitationem consequatur <br />
              reprehenderit voluptatum ab quibusdam
              delectus, dolores alias eligendi
              dolore itaque repudiandae cum ipsa. </i>
              <div class="custom-shape-divider-top-1759346447">
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                  <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" class="shape-fill"></path>
                </svg>
              </div>
            </p>
            <div className="w-3/4 m-auto">
              <div className="mt-20">
                <Slider {...settings}>
                  {src.map(i => (
                    <div className="">
                      <div className=" card  flex justify-center items-center">
                        <div className="img">
                          <br />
                          <button className=" px-6 py-1 badge bg-primary" id="btn">
                            Add to chart
                          </button>
                          <br /><br />
                          <img src={i.image} alt="" className="card-img-top" />
                        </div>
                        <div className=" card-body flex flex-col justify-center items-center">
                          <p className="name">
                            {i.name}
                            <p>{i.review.substring(0, 12)}</p>
                          </p>
                          <p className="price">
                            R{i.price}
                            <i class="bi bi-heart"></i> <br />
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                             <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star"></i>

                          </p>
                          <Link to="/Filter">
                            <button className=" px-6 py-1 badge bg-secondary" st>
                              See more
                            </button>
                          </Link>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
                <br />
                <br />
                <Link
                  to="/Filter"
                  className="btn btn-outline-danger mx-auto d-grid gap-2 col-6 "
                >
                  {" "}
                  See more filters
                </Link>
                <hr />
              </div>
            </div>
          </div>


<br />
{/* row of 4 */}
<div className="img">
<div className="container">
  <div className="row">
   <div className="col-md-3">
   <div className="i-images">
     <img src={trouser2} alt="" />
   </div>
   </div>
   <div className="col-md-3">
   <div className="i-images">
    <img src={trouser1} alt="" />
   </div>
   </div>
   <div className="col-md-3">
   <div className="i-images">
       <img src={shirt3} alt="" />
   </div>
   </div>
   <div className="col-md-3">
   <div className="i-images">
      <img src={tshirt12} alt="" />
   </div>
   </div>
  </div>
  </div>

</div>
 

          {/* testimonials */}
          <div className="container">
            <div className="row">
              <h3><b>OUR HAPPY CUSTOMES</b></h3>
              <br /><br />
              <div className="col-md-4">
                <div className="test-border">
<h6>Conil C</h6>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  
                  <p style={{ color: "grey" }}> Lorem, ipsum dolor sit amet consectetur adipisicing
                    elit. Dolores esse, necessitatibus placeat
                    architecto ab minima iste odio officiis totam,
                    iure quo perferendis ullam adipisci voluptatibus.
                    Optio illo incidunt veniam totam.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="test-border">
<h6>Saad A</h6>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  
                  <p style={{ color: "grey" }}>Lorem, ipsum dolor sit amet consectetur adipisicing
                    elit. Dolores esse, necessitatibus placeat
                    architecto ab minima iste odio officiis totam,
                    iure quo perferendis ullam adipisci voluptatibus.
                    Optio illo incidunt veniam totam.</p>
                </div>
              </div>
              <div className="col-md-4">
                <div className="test-border">
<h6>Sarah M</h6>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star-fill"></i>
                  <i class="bi bi-star"></i>
                  
                  <p style={{ color: "grey" }}>Lorem, ipsum dolor sit amet consectetur adipisicing
                    elit. Dolores esse, necessitatibus placeat
                    architecto ab minima iste odio officiis totam,
                    iure quo perferendis ullam adipisci voluptatibus.
                    Optio illo incidunt veniam totam.</p>
                </div>
              </div>
            </div>
          </div>

          <br />




          {/* end of div */}
        </div>
































      </ThemeProvider>
    </>
  );
}
export default Home;
