import { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {dummyProducts} from "../assets/assets"
import toast from "react-hot-toast";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {

  const currency = import.meta.env.VITE_CURRENCY;

  const navigate = useNavigate();
  const [user, setUser] = useState(false);
  const [isSeller, setIsSeller] = useState(false);
  const [showUserLogin,setShowUserLogin]=useState(false);
  const [products,setProducts]=useState([]);
  const [cartItems,setCartItems]=useState({});

  const fetchProducts= async ()=>{
    setProducts(dummyProducts)
  }

  useEffect(()=>{
    fetchProducts()
  },[])

  //add to cart
  const addToCart=(itemId)=>{
    let cartData=structuredClone(cartItems)
    if(cartData[itemId])
    {
      cartData[itemId]+=1;
    }
    else
    {
      cartData[itemId]=1;
    }
    setCartItems(cartData);
    toast.success("added to cart");
    
  }

  const updateCartItem=(itemId,quantity)=>{
    let cartData=structuredClone(cartItems)
    cartData[itemId]=quantity
     setCartItems(cartData);
    toast.success("cart updated");
  }

  const removeFromCart=(itemId)=>
  {
        let cartData=structuredClone(cartItems)
        if(cartData[itemId])
        {
          cartData[itemId]-=1;
          if(cartData[itemId]===0)
          {
            delete cartData[itemId];
          }
        }
        toast.success("removed from cart ")
             setCartItems(cartData);

  }
  const value = {
    navigate,
    user,
    setUser,
    isSeller,
    setIsSeller,
    showUserLogin,
    setShowUserLogin,
    products,
    currency,
    addToCart,
    updateCartItem,
    removeFromCart,
    cartItems
  };

  return (
    <AppContext.Provider value={value}>
      {children}
    </AppContext.Provider>
  );
};

export const useAppContext = () => {
  return useContext(AppContext);
};
