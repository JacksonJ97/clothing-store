const AddToCart = ({ setCartItemCount }) => {
  return <button onClick={() => setCartItemCount((prevCount) => prevCount + 1)}>Add to cart</button>;
};

export default AddToCart;
