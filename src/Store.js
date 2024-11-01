import {createSlice,configureStore} from '@reduxjs/toolkit';
// import Nonveg from './Nonveg';
// import Veg from './Veg';

const productsSlice = createSlice({
    name:'Products',
    initialState:{
        Veg:[
            {name:'Tomato',price:600.90},
            {name:'potato',price:809.00},
            {name:'Bendakaya',price:302.00}
        ],
        Nonveg:[
            {name:'Chiken',price:300},
            {name:'Fish',price:400}
        ]
    },
    reducers:{}
});





const cartSlice = createSlice(
    {
        name:'cart',
        initialState:[],
        reducers:
        {
            addTocart:(state,action)=>
                {
                const status = state.find(item=>item.name === action.payload.name)
                if(status)
                {
                    status.quantity +=1; 
                }
                else{
                    state.push({...action.payload,quantity:1});
                    
                }
            },

            increment:(state,action)=>{
                const item = state.find(item=>item.name === action.payload.name)
                if(item && item.quantity > 0)
                {
                    {item.quantity += 1;}
                }
                else{return state.filter(item=>item.name != action.payload.name);}
            },

            decrement:(state,action)=>{
                const item = state.find(item=>item.name === action.payload.name)
                if(item && item.quantity > 1)
                {
                    {item.quantity -= 1;}
                }
                else{return state.filter(item=>item.name != action.payload.name);}
            },
            remove:(state,action)=>{
                const item = state.find(item=>item.name === action.payload.name)
                if(item)
                {
                    return state.filter(item=>item.name !== action.payload.name);
                }

            
            }
        }
});


const store = configureStore({
    reducer:
    {
        Products:productsSlice.reducer,
        cart:cartSlice.reducer,
    }
})
export default store;
export const {addTocart,decrement,increment,remove} = cartSlice.actions;

