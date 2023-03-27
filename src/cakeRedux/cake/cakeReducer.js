import { BUY_CAKE } from "./cakeType";

const intialSate = {
    _N_O_CAKES:10
}

const cakeReducer = (state=intialSate, action) =>{
    switch(action.type){
        case BUY_CAKE: 
            return{
                ...state,
                _N_O_CAKES:state._N_O_CAKES - 1
            }
        default: return state;
    }
}

export default cakeReducer;