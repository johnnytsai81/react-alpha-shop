import React, { useState } from "react";

export const CartContext = React.createContext();

const productData = [
  {
    id: "1",
    name: "貓咪罐罐",
    img: "https://picsum.photos/300/300?text=1",
    price: 100,
    quantity: 2,
  },
  {
    id: "2",
    name: "貓咪干干",
    img: "https://picsum.photos/300/300?text=2",
    price: 200,
    quantity: 1,
  },
];


export function ContextProvider({ children }) {
  const [index, setIndex] = useState(0);
  const [products, setProducts] = useState(productData);
  const [formData, setFormData] = useState({
    totalPrice: "400",
    visaName: "defaultValue",
    visaNumber: "defaultValue",
    visaEXP: "defaultValue",
    visaCVC: "defaultValue",
  });

  function handleFormSubmit(event) {
    console.log(formData)
    alert("恭喜下單成功") 
  }

  function handleFormChange(event) {
    const { name, value } = event.target;  

    setFormData((prevFormData) => {
        return {
        ...prevFormData,
        [name]: value,
      };
    });
  }


  return (
    <CartContext.Provider
      value={{
        index,
        setIndex,
        products,
        setProducts,
        formData,
        setFormData,
        handleFormSubmit,
        handleFormChange,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}
