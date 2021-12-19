const CartItem = ({ name, img, price, quantity }) => {
  return (
    <div>
      <div>{img}</div>
      <div>{name}</div>
      <div>{price}</div>
      <div>{quantity}</div>
    </div>
  );
};

export default CartItem;
