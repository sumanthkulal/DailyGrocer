import { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import {dummyProducts} from "../assets/assets"
import toast from "react-hot-toast";
import axios from "axios";

axios.defaults.withCredentials = true;
axios.defaults.baseURL = import.meta.env.VITE_BACKEND_URL;


export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {

  const currency = import.meta.env.VITE_CURRENCY;

  const navigate = useNavigate();
  const [user, setUser] = useState(false);
  const [isSeller, setIsSeller] = useState(false);
  const [showUserLogin,setShowUserLogin]=useState(false);
  const [products,setProducts]=useState([]);
  const [cartItems,setCartItems]=useState({});
  const [searchQuery,setSearchQuery]=useState({})

  const fetchSeller = async () =>{
      try{
            const {data} = await axios.get('/api/seller/is-auth');
            if(data.success)
            {
              setIsSeller(true);
            }
            else{
              setIsSeller(false);
            }
      }catch{
              setIsSeller(false);
      }
  }

  // fetch user auth status user data and cart item
  const fetchUser = async () =>{
      try{
          const {data} = await axios.get('/api/user/is-auth');
          if(data.success)
          {
            setUser(data.user)
            setCartItems(data.user.cartItems)
          }
      }catch(error)
      {
          setUser(null)
      }

  }

  const fetchProducts= async ()=>{
      try{
            const {data} = await axios.get('/api/product/list')
            if(data.success){
              setProducts(data.products)
            }else{
              toast.error(data.messsage)
            }
      }catch(error)
      {
          toast.error(error.messsage)
      }
  }

  useEffect(()=>{
    fetchUser()
    fetchSeller();
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

  const getCartCount=()=>{
    let totalCount=0;
    for(const item in cartItems)
    {
      totalCount+=cartItems[item]
    }
    return totalCount;
  }

  const getCartAmount=()=>{
    let totalAmount=0;

    for(const items in cartItems)
    {
      let itemInfo=products.find((product)=>
        product._id===items
      )
      if(cartItems[items]>0)
      {
        totalAmount+=itemInfo.offerPrice*cartItems[items]
      }
    }
    return Math.floor(totalAmount * 100)/100;
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

  useEffect(() => {
    const updateCart = async () => {
        try {
            // Sends the cart to the backend to be saved in the User model
            await axios.post('/api/cart/update', { cartItems }); 
        } catch (error) {
            if (user) toast.error(error.message);
        }
    }

    // THE FIX: Only sync if a user exists AND the cart is NOT empty.
    // This stops the initial {} from overwriting your DB on refresh.
    if (user && Object.keys(cartItems).length > 0) {
        updateCart();
    }
}, [cartItems, user]);


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
    cartItems,
    searchQuery,
    setSearchQuery,
    getCartAmount,
    getCartCount,
    axios,
    fetchProducts
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
