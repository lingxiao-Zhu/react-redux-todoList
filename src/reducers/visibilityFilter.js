/**
 * Created by larry on 2017/1/4.
 */
const visibilityFilter = (state = 'SHOW_ALL',action) => {
    switch (action.type) {
        case 'SET_VISIBILITY_FILTER':
            return action.visibilityFilter
        default:
            return state
    }
}

export default visibilityFilter