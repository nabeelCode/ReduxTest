const count={
    value:0
}

export const reducerCounter=(state=count,action)=>{
    switch(action.type){
        case 'increase' :
            return {value:++state.value}
        case 'decrease':
            return {value:--state.value}
        default:
            return state
    }
}