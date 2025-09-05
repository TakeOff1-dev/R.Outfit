import "../css/Home.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { ThemeProvider } from "react-bootstrap";
import { Link } from "react-router-dom";
// courousel
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

function Home() {
  // array of image
  const images = [
    {
      name: "Fjallraven",
      "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
      price: "230.99",
      review: "Lorem lorem lorem lorem lorem"
    },
    {
      name: "Men's Casual",
      "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
      price: "280.99",
      review: "Lorem lorem lorem lorem lorem"
    },
    {
      name: "Men's cotton",
      "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
      price: "230.99",
      review: "Lorem lorem lorem lorem lorem"
    },
    {
      name: "Men's Clothing",
      "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png",
      price: "210.99",
      review: "Lorem lorem lorem lorem lorem"
    }
  ];


  // image / specials
  const src = [
    {
      name: "Rain Jacket",
      "image": "https://fakestoreapi.com/img/71HblAHs5xL._AC_UY879_-2t.png",
      price: "230.99",
      review: "Lorem lorem lorem lorem lorem"
    },
    {
      name: "MBJ Women Solid",
      "image": "https://fakestoreapi.com/img/71z3kpMAYsL._AC_UY879_t.png",
      price: "280.99",
      review: "Lorem lorem lorem lorem lorem"
    },
    {
      name: "Opna Women Short",
      "image": "https://fakestoreapi.com/img/51eg55uWmdL._AC_UX679_t.png",
      price: "230.99",
      review: "Lorem lorem lorem lorem lorem"
    },
    {
      name: "DANVOUY Womens T Shirt ",
      "image": "https://fakestoreapi.com/img/61pHAEJ4NML._AC_UX679_t.png",
      price: "210.99",
      review: "Lorem lorem lorem lorem lorem"
    }
  ];



  // slider
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1
  };
  return (
    <>
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

        {/* new arrivals */}
        <div className="new-arrivals">

          <br />
          <div className="container">
            <h3 className="text-center">
              {" "}
              <b>NEW ARRIVALS</b>{" "}
            </h3>
            <div className="w-3/4 m-auto">
              <div className="mt-20">
                <Slider {...settings}>
                  {images.map(i => (
                    <div className="  ">
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
                            <i class="bi bi-heart"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star"></i>
                          </p>
                          <button className=" px-6 py-1 badge bg-secondary">
                            See more
                          </button>
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

          {/* specials */}
          <br />
          <div className="container">
            <h3 className="text-center">
              {" "}
              <b>SPECIALS </b>
            </h3>
            <p className="text-center"> <i> Lorem ipsum dolor sit amet consectetur
              adipisicing elit. Veritatis impedit
              eius vel nemo maiores laboriosam
              exercitationem consequatur <br />
              reprehenderit voluptatum ab quibusdam
              delectus, dolores alias eligendi
              dolore itaque repudiandae cum ipsa. </i> </p>
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
                            <i class="bi bi-heart"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star"></i>

                          </p>
                          <button className=" px-6 py-1 badge bg-secondary">
                            See more
                          </button>
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

        </div>
































      </ThemeProvider>
    </>
  );
}
export default Home;
