import { createContext, useEffect, useState } from "react";
import { food_list } from "../assets/frontend_assets/assets";

export const StoreContext = createContext(null)

const StoreContextProvider = (props) => {
    const [cartItems, setCartitems] = useState({})
    const deliveryFee = 45;
    const serviceFee = 3;

    useEffect(() => {
        const storedCartItems = localStorage.getItem("cartItems");
        if (storedCartItems) {
        setCartitems(JSON.parse(storedCartItems));
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("cartItems", JSON.stringify(cartItems));
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

    const deleteFromCart = (itemId) => {
        setCartitems((prev) => {
            const updatedCart = { ...prev };
            delete updatedCart[itemId];
            return updatedCart;

        });
    };

    const clearCart = () => {
        setCartitems({});
    };


    // const getTotalCartAmount = () => {
    //     let totalAmount = 0;

    //     for (const item in cartItems) {
    //         const itemInfo = food_list.find((product) => product._id === item);

    //         if (itemInfo) { 
    //             totalAmount += itemInfo.price * cartItems[item];
    //         }
    //     }
    //     return totalAmount;
    // };

    const getTotalCartAmount = () => {
        let totalAmount = 0;

        Object.entries(cartItems).forEach(([itemId, quantity]) => {
            const itemInfo = food_list.find((product) => product._id === itemId);
            if (itemInfo) {
            totalAmount += itemInfo.price * quantity;
            }
        });

        return totalAmount;
    };



    const contextValue = {
        food_list,
        cartItems,
        setCartitems,
        addToCart,
        removeFromCart,
        deleteFromCart,
        clearCart,
        getTotalCartAmount,
        deliveryFee,
        serviceFee

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