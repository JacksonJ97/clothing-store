import styled from "styled-components";

// Styles
const Button = styled.button`
  padding: 1em;
`;

const AddToCart = ({ item, setCartItems }) => {
  const handleClick = () => {
    setCartItems((prevState) => {
      if (prevState.find((element) => element.id === item.id)) {
        let newCartItems = prevState.map((element) => {
          if (element.id === item.id) {
            return { ...element, quantity: element.quantity + 1 };
          }
          return element;
        });

        return newCartItems;
      }

      return [...prevState, { ...item, quantity: 1 }];
    });
  };

  return <Button onClick={handleClick}>Add to cart</Button>;
};

export default AddToCart;
