import { Add_Users } from "./actions";
import { initialData } from "./reduStore";

export const reducer=(state=initialData,action)=>{
    switch(action.type){
        case Add_Users:
            return {...action.payload};

            default:
                return state;
    }
}