
const cartReducer = (state, action) => {

    if(action.type === "ADD_TO_CART"){
        let {id, color, amount, product} = action.payload;
        // console.log(product);
        
        let existingProduct = state.cart.find(
            (currItem) => currItem.id == id + color
            );

        if(existingProduct){
            let updatedProduct = state.cart.map((currElem) => {
                if(currElem.id == id + color){
                    let newAmount = currElem.amount + amount;
                    if(newAmount >= currElem.max){
                        newAmount = currElem.max;
                    }
                    return {
                        ...currElem,
                        amount: newAmount
                    }
                }
                else {
                    return currElem;
                }
            });
            return {
                ...state,
                cart: updatedProduct,
            }
        } else{
        let cartProduct = {
            id: id + color,
            name: product.name,
            color,
            amount,
            image: product.image[0].url,
            price: product.price,
            max: product.stock,
            }
        

        return {
        ...state,
        cart: [...state.cart, cartProduct],
     }
        }
    }
    if(action.type === "REMOVE_ITEM"){

        let updatedCart = state.cart.filter(
        (currItem)=> currItem.id !== action.payload
        );
        return {
            ...state,
            cart: updatedCart,
        };
    }

    if(action.type === "CLEAR_CART"){
        return {
            ...state,
            cart: [],
        }
    }
    
    return state;
};

export default cartReducer
