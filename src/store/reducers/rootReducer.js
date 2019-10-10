const initialState = { //// pages data above, contains scrollPosions(when leaving the page)  
        main: [], 
        posts: [],
        data: []
};

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_RESULT":
            const { data, flag } = action.payload;
            return {
                ...state,
                [flag]: [...state[flag], data]
            };
    
        default:
           return state;
    };
};

export default rootReducer;