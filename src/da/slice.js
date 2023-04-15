import {createSlice} from '@reduxjs/toolkit'

const toolkit = createSlice({
    name: 'toolkit',
    initialState:{
        count: [],
    },
    reducers:{
        addToList(state, inputs){
            state.count.push({id: Math.random(), text: inputs.payload})
            console.log(state.count)
        },
        deleteFromList(state, _id){ //serializable error
            console.log(_id.payload.target.id)
            state.count = state.count.filter((el)=>el.id != _id.payload.target.id)
        }
    }
})

export default toolkit.reducer
export const {addToList, deleteFromList} = toolkit.actions