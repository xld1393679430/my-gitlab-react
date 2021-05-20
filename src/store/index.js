import { createStore } from 'redux';

const initialState = {
    count: 0
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case 'add':
            return {
                ...initialState,
                count: state.count + 1
            }
        case 'minus':
            return {
                ...initialState,
                count: state.count - 1
            }
        default:
            return initialState
    }
}

const store = createStore(
    reducer,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )

export {
    initialState,
    store
}