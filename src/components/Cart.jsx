import '../css/Cart.css'

export default function Cart({ cart, setCard }) {

    // remove from cart
    const remove = (item) => {
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
                <div className="container">
                    <p>Your cart</p>
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
            }


        </>
    )
}