import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/frontend_assets/assets";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {
    const [cartItems, setCartitems] = useState({})

    useEffect(() => {
        const storedCartItems = localStorage.getItem("cartItems");
        if (storedCartItems) {
        setCartitems(JSON.parse(storedCartItems));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
        console.log(cartItems)
    }, [cartItems])

    const addToCart = (itemId) => {
        if(!cartItems[itemId]){
            setCartitems((prev)=>({...prev, [itemId]:1}))
        }
        else {
            setCartitems((prev) => {
                if (prev[itemId] >= 100) {
                    alert("Maximum quantity reached (100)");
                    return prev; 
                }
                return { ...prev, [itemId]: prev[itemId] + 1 };
            });
        }
    }

    // const removeFromCart = (itemId) => {
    //     setCartitems((prev)=>({...prev,[itemId]:prev[itemId] - 1}))
    // }

    const removeFromCart = (itemId) => {
        setCartitems((prev) => {
        if (prev[itemId] === 1) {
            const updatedCart = { ...prev };
            delete updatedCart[itemId];
            return updatedCart;
        } else {
            return { ...prev, [itemId]: prev[itemId] - 1 };
        }
        });
    };


    const contextValue = {
        food_list,
        cartItems,
        setCartitems,
        addToCart,
        removeFromCart
    }

    // useEffect(()=> {
    //     console.log(cartItems)
    // },[cartItems])

    return(
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;