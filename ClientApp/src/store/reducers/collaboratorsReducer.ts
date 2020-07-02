function reducer(state= [], action: any){
    switch(action.type){
        case "COLLABORATORS_FETCH_SUCCEEDED": return action.payload;
        default: return state;
    }
}

export default reducer;
