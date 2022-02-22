export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const RESET = 'RESET';

// const fetchDataFromApi = () => {

//     return []
// }

// const getUserData = async () => { // async action creator

//     const userData = await fetchDataFromApi()
//     return { type: 'USER', payload: userData }
// }

export const increment = () => ({ type: INCREMENT })
export const decrement = () => ({ type: DECREMENT })
export const reset = () => ({ type: RESET })