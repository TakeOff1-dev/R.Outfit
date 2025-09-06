
import '../css/Shop.css'
// images
import shopimg from '../images/shopimg.png'
import shopimg1 from '../images/shopimg1.png'
import shopimg2 from '../images/shopimg2.png'

export default function Shop(){
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
<hr />
                          </p>
                         
<p>Select color</p>
<div className="color">
    <p id="color-1"></p>
    <p id="color-2"></p>
    <p id="color-3"></p>
</div>

<hr />
<p>Choose size</p>
<div className="btn">
                          <button className=" px-6 py-1 badge bg-secondary">
                            Small
                          </button>
                           <button className=" px-6 py-1 badge bg-secondary">
                            Medium
                          </button>
                           <button className=" px-6 py-1 badge bg-secondary">
                            Large
                          </button>
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
                          <button className=" px-6 py-1 badge bg-secondary" id="add-to-card">
                          Add to cart
                          </button>
</div>


                
            </div>
        </div>
       </div>
        
        
        
        




        
        </>
    )
}

