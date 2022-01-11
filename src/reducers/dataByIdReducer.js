const dataByid = (state = [],action) => {
    switch (action.type) {
        case 'DATA BY ID':
            return action.payload    
        default:
            return state    
    }
}
export default dataByid