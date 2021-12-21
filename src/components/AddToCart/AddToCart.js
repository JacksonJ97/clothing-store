import styled from "styled-components";

// Styles
const Button = styled.button`
  font-size: 1rem;
  background-color: #ffffff;
  border: 1px solid #202020;
  border-radius: 6px;
  padding: 0.75em;
  cursor: pointer;

  :hover {
    background-color: #efefe7;
  }
`;

const AddToCart = ({ item, setCartItems }) => {
  const handleClick = () => {
    setCartItems((prevState) => {
      if (prevState.find((element) => element.id === item.id)) {
        let newCartItems = prevState.map((element) => {
          if (element.id === item.id) {
            return { ...element, quantity: element.quantity + 1, total: (element.quantity + 1) * element.price };
          }
          return element;
        });

        return newCartItems;
      }

      return [...prevState, item];
    });
  };

  return <Button onClick={handleClick}>Add to cart</Button>;
};

export default AddToCart;
