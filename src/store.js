import { createStore } from 'redux';
import { DECREMENT, INCREMENT, RESET } from './actions';

const initState = {
    count: 0
}

const reducer = (state = initState, action) => {
    switch (action.type) {
        case INCREMENT:
            return { count: state.count + 1 }
        case DECREMENT:
            return { count: state.count - 1}
        case RESET:
            return { count: 0 }
        default:
            return state
    }
}

export const store = createStore(reducer);
