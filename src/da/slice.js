import {createSlice} from '@reduxjs/toolkit'

const toolkit = createSlice({
    name: 'toolkit',
    initialState:{
        count: 0,
    },
    reducers:{
        increment(state){
            state.count = state.count +=1 
            console.log('2')
        },
        decrement(state){
            state.count = state.count -=1
            console.log("123456")
        }
    }
})

export default toolkit.reducer
export const {increment, decrement} = toolkit.actions