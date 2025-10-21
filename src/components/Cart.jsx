import '../css/Cart.css';
import { Link } from 'react-router-dom';

export default function Cart({ cart, setCard }) {

    // Remove item from cart
    const remove = (item) => {
        alert("Item removed from cart.");
        const updatedCart = cart.filter((cartItem) => cartItem.id !== item.id);
        setCard(updatedCart);
    };

    // Increase quantity
    const addQuantity = (item) => {
        const updatedCart = cart.map(cartItem =>
            cartItem.id === item.id
                ? { ...cartItem, quantity: cartItem.quantity + 1 }
                : cartItem
        );
        setCard(updatedCart);
    };

    // Decrease quantity
    const reduceQuantity = (item) => {
        if (item.quantity > 1) {
            const updatedCart = cart.map(cartItem =>
                cartItem.id === item.id
                    ? { ...cartItem, quantity: cartItem.quantity - 1 }
                    : cartItem
            );
            setCard(updatedCart);
        } else {
            remove(item);
        }
    };

    // Calculate total price and order summary
    let totalPrice = 0;
    const orderSummary = cart.map((item) => {
        const itemTotal = item.quantity * item.price;
        totalPrice += itemTotal;

        return (
            <div key={item.id}>
                <div className="subtotal">
                    <h5>{item.title.substring(0, 12)}</h5>
                    <p>R {itemTotal.toFixed(2)}</p>
                    <h6>Total Q'ty: {item.quantity}</h6>
                </div>
                <hr />
            </div>
        );
    });

    return (
        <>
            <br /><br /><br /><br /><br /><br />

            <div className="container">
                <div className="row">
                    {/* Left: Cart Items */}
                    <div className="col-md-8">
                        <br />
                        <div className="d-flex">
                            <p>Your cart <Link to="/Shipping"> → Shipping</Link></p>
                        </div>

                        {cart.length === 0 ? (
                            <p>Your cart is empty.</p>
                        ) : (
                            cart.map((item) => (
                                <div key={item.id} className="addToCard">
                                    <img src={item.image} alt={item.title} />
                                    <h5>{item.title}</h5>
                                    <p>R {(item.price * item.quantity).toFixed(2)}</p>
                                    <div className="btn">
                                        <button onClick={() => addQuantity(item)}>+</button>
                                        <button>{item.quantity}</button>
                                        <button onClick={() => reduceQuantity(item)}>-</button>
                                        <div className="btn btn-danger" onClick={() => remove(item)}>
                                            Remove
                                        </div>
                                    </div>
                                </div>
                            ))
                        )}
                    </div>

                    {/* Right: Order Summary */}
                    <div className="col-md-4" id="shipping-bg">
                        <br />
                        <h4>Order Summary</h4>
                        <br />
                        {orderSummary}
                        <h6>Total No of Items: {cart.length}</h6>
                        <h5><p>Total Price: R {totalPrice.toFixed(2)}</p></h5>

                        <br /><br />
                        <Link to="/Shipping">
                            <button id="btn" style={{ width: "80%" }}>
                                Proceed to checkout
                            </button>
                        </Link>
                        <br /><br />

                        <Link to="/">
                            <button id="btnn" style={{ width: "80%" }}>
                                Continue shopping
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
}