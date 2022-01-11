const updateReducer = (state = {update: false, payload: {} } ,action) => {
    switch (action.type) {
        case 'PREPARE UPDATE':
            return action.payload 
        default:
            return state
    }
}

export default updateReducer