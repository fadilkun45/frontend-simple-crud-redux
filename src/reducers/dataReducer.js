const initialState = {
    data: [],
    isLoading: true,
    isError: false
}

const dataReducer = (state = initialState  ,action) => {
    switch (action.type) {
        case 'FETCH DATA' :
            return action.payload
        case 'POST DATA' :
            return action.payload
        case 'DELETE DATA' :
            return action.payload
        case 'FETCH DATA BY ID':
            return action.payload
        default:
                return state
    }
}

export default dataReducer