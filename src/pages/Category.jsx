
import React from 'react'

import '../css/Category.css'
// courousel
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Category(){

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
    slidesToShow: 2,
    slidesToScroll: 1
  };
    return(
        <>

        <br />

        <div className="container">
            
            <div className="row">
                <div className="col-md-3">
                   <div className="border">
<div class="accordion" id="accordionExample">
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
        Accordion Item #1
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the first item's accordion body.</strong> 
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
        Accordion Item #2
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the second item's accordion body.</strong> 
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
        Accordion Item #3
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the third item's accordion body.</strong> 
      </div>
    </div>
  </div>
</div>
       {/* color      */}
           <hr />                   
<p>Select color</p>
<div className="color">
    <p id="color-1"></p>
    <p id="color-2"></p>
    <p id="color-3"></p>
    <p id="color-4"></p>
    <p id="color-5"></p>
    <p id="color-6"></p>
</div>
<div className="color">
    <p id="color-5"></p>
    <p id="color-6"></p>
    <p id="color-7"></p>
    <p id="color-8"></p>
    
</div>
<hr />
<p>Choose size</p>
<div className="btn">
 <button type="button" class="btn btn-secondary">XX-Small</button>                        
 <button type="button" class="btn btn-secondary">X-Small</button>
</div>
<div className="btn">
 <button type="button" class="btn btn-secondary">Medium</button>                        
 <button type="button" class="btn btn-secondary">Large</button>
</div>
<div className="btn">
 <button type="button" class="btn btn-secondary">X-Large</button>                        
 <button type="button" class="btn btn-secondary">XX-Large</button>
</div>
         

        {/* dressing style   */}
                         
<div class="accordion" id="accordionExample">
      
  <div class="accordion-item">
    <p style={{"padding":"10px"}}>Dressing Style</p>
    <h2 class="accordion-header" id="headingOne">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="false" aria-controls="collapseOne">
       Casual
      </button>
    </h2>
    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the first item's accordion body.</strong> 
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingTwo">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
       Formal
      </button>
    </h2>
    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the second item's accordion body.</strong> 
      </div>
    </div>
  </div>
  <div class="accordion-item">
    <h2 class="accordion-header" id="headingThree">
      <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
      Party
      </button>
    </h2>
    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
      <div class="accordion-body">
        <strong>This is the third item's accordion body.</strong> 
      </div>
    </div>
  </div>
</div>
 </div>  
 
                </div>


                <div className="col-md-9">
                    
                    
                                      <div className="container">
                                        <h3 className="text-center">
                                          {" "}
                                        <h5>Casual</h5>
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
                                                        {/* <p>{i.review.substring(0, 12)}</p> */}
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

{/* second row */}

                                      <div className="container">
                                        <h3 className="text-center">
                                          {" "}
                                        
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
                                                      {/* <p>{i.review.substring(0, 12)}</p> */}
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

                </div>
               



















            </div>
        </div>
        </> 
    )
}

