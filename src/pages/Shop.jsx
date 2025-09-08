
import '../css/Shop.css'
// images
import shopimg from '../images/shopimg.png'
import shopimg1 from '../images/shopimg1.png'
import shopimg2 from '../images/shopimg2.png'
// courousel
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
export default function Shop(){

    // array of image
  const images = [
    {
      name: "Fjallraven",
      "image": "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_t.png",
      price: "230.99",
      review: "Lorem lorem lorem lorem lorem"
    },
    {
      name: "Men'sCasual",
      "image": "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_t.png",
      price: "280.99",
      review: "Lorem lorem lorem lorem lorem"
    },
    {
      name: "Men'sCotton",
      "image": "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_t.png",
      price: "230.99",
      review: "Lorem lorem lorem lorem lorem"
    },
    {
      name: "Men'sClothing",
      "image": "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png",
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


    return(
        <>
        
       
       <div className="container">
        <div className="row">
            <div className="col-md-4">
               <div className="card">
                <img src={shopimg} alt="" id="bg-img"/>
               </div>
              
            </div>
            <div className="col-md-2">
    <div className="cloths">
        <img src={shopimg1} alt="" /> <br /><br />
        <img src={shopimg2} alt="" />
</div>
            </div>
            <div className="col-md-6">
                <h2><b>ONE LIFE GRAPHIC T-SHIRT</b></h2>
                
                    <p className="price">    
                            
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star-fill"></i>
                            <i class="bi bi-star"></i>
                            4/5
                            
                          <div className="p-discount">
                             <h4>R299</h4>
                           <h4 id="ori-price">R350</h4>
                           <p>20% off</p>
                          </div>
                           <p style={{color:"grey"}}> Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                            Libero labore ullam, ad nihil, dolores earum aspernatur 
                            recusandae amet, ipsam illo veritatis.</p>

                          </p>
      <hr />                   
<p>Select color</p>
<div className="color">
    <p id="color-1"></p>
    <p id="color-2"></p>
    <p id="color-3"></p>
</div>

<hr />
<p>Choose size</p>
<div className="btn">
                         <button type="button" class="btn btn-secondary">Small</button>
                          
                           <button type="button" class="btn btn-secondary">Medium</button>
                           <button type="button" class="btn btn-secondary">Large</button>
</div>
<hr />
{/* add to cart */}
<div className="btn">
     <button className=" px-6 py-1 badge bg-secondary">
                            -
                          </button>
                           <button className=" px-6 py-1 badge bg-secondary">
                            1
                          </button>
                           <button className=" px-6 py-1 badge bg-secondary">
                            +
                          </button>
                          <button type="button" class="btn btn-primary">Add to cart</button>
</div>


                
            </div>
        </div>
       </div>
        
        {/* you may also like */}
         <br />
                  <div className="container">
                    <h3 className="text-center">
                      {" "}
                      <b>YOU MIGHT ALSO LIKE</b>{" "}
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
        




        
        </>
    )
}

