import '../css/Cart.css'
import {Link }from 'react-router-dom'

export default function Cart({ cart, setCard }) {

    // remove from cart
    const remove = ({cart, item}) => {
        alert("Item removed from cart. ");
        const allItems = [...cart] //getting all items from the card
        allItems.splice((item.id - 1), 1) //the 1) is to delete a single
        setCard(allItems)
        // there is a function (suplice) to delete the  item from card

    }

    // add quantity function
    const addQuantity = (item) => {
        // alert("quantity added");
        const allItems = [...cart]
        console.log(allItems);
        allItems[item.id - 1].quantity += 1
        setCard(allItems);


    }

    //  minus  quantity function
    const reduceQuantity = (item) => {
        // alert("quantity reduced");
        const allItems = [...cart]
        allItems[item.id - 1].quantity -= 1
        setCard(allItems)
    }

    return (
        <>
            < br /> < br /> < br /> < br />  < br /><br /> 


            {
                <div className="container" >
<div className="row">
    <div className="col-md-8">
                    <br />
                    <div className="d-flex">
                 <p>Your cart <Link to="/Shipping"> Shipping  </Link></p>
                   
                    </div>
                 
                    
                    {
                        cart.map(item => (
                            <div key={item.id} className="addToCard">
                                <img src={item.image} alt="" />
                                <h5>{item.title}</h5>
                                <p>{item.price * item.quantity}</p>
                                <div className="btn">
                                    <button onClick={() => addQuantity(item)}>+</button>
                                    <button >{item.quantity}</button> {/*was added in json  for product qunatity*/}
                                    <button onClick={() => reduceQuantity(item)}>-</button>
                                    <div className=" btn btn-danger" onClick={() => remove(item)}>Remove</div>
                                </div>

                            </div>
                        ))
                    }
                </div>
                 
                <div className="col-md-4" id="shipping-bg">
                    <br />
                   <h4>Order Summary</h4> 
                   <br />
                 
{
    cart.map(item =>(
         <div key={item.id} >
  <div className="subtotal">
                    <h5>{item.title.substring(0, 12)} </h5> 
                    <p>R {item.price * item.quantity}</p> 
                <h6> Total Q'ty  :{  item.quantity} </h6>
                   </div> 
                   <hr />
     </div>
     
    ))
   
}

<h6> Total No of items :{ cart.length } </h6>

<br /><br />
           <Link to="/Shipping"><button id='btn' style={{width:"80%"}}>Proceed to checkout</button><br /><br />    </Link>

            <Link to="/"> <button id='btnn' style={{width:"80%"}}>Continue shopping</button><br /><br /> </Link>  
               
            
                </div>
</div>
</div>

  
            }


        </>
    )
}