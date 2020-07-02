function reducer(state= {}, action: any){
    switch(action.type){
        case "COLLABORATOR_SUMMARY_FETCH_SUCCEEDED": return action.payload;
        default: return state;
    }
}

export default reducer;
