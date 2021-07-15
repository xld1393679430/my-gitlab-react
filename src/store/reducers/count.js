/** @format */

const initialState = {
  num: 0,
}

const count = (state = initialState, action) => {
  switch (action.type) {
    case 'add':
      return {
        ...initialState,
        num: state.num + 1,
      }
    case 'minus':
      return {
        ...initialState,
        num: state.num - 1,
      }
    default:
      return state
  }
}

export default count
