import { createAsyncThunk } from "@reduxjs/toolkit"
import { createSlice } from "@reduxjs/toolkit";
import axios from "axios"

const restaurantSlice = createSlice({
    name: 'restaurantSlice',
    // here we have to call api to fetch restaurant details and store its value to initial state
    // state
    // api call is an asynchronous fn, it uses promise
    // promise has 3 states, so inside initial state we have to set a key for all 3 stages
    initialState: {
        loading: false, // pending state
        allRestaurant: [], // fulfilled state
        searchRestaurants: [],
        error: "" // rejected state
    },
    // in normal case we use reducers to define actions, but in the case of async fns we have to place actions inside extraReducers
    extraReducers: (builder) => {
        // builder hold result from thunk
        builder.addCase(fetchRestaurant.pending, (state, action) => {
            state.loading = true;
        })
        builder.addCase(fetchRestaurant.fulfilled, (state, action) => {
            state.loading = false;
            state.allRestaurant = action.payload;
            state.searchRestaurants = action.payload;
            state.error = ""
        })
        builder.addCase(fetchRestaurant.rejected, (state, action) => {
            state.loading = false;
            state.allRestaurant = "";
            state.error = action.error.message;
        })
    },
    reducers: {
        searchRestaurant: (state, action) => {
            state.allRestaurant.restaurants = state.searchRestaurants.restaurants.filter(item => item.neighborhood.toLowerCase().includes(action.payload))
        }
    }
})

// api calls are implemented using thunk
export const fetchRestaurant = createAsyncThunk('restaurantList/fetchRestaurant', () => {
    const result = axios.get('./restaurant.json').then(response => response.data)
    console.log(result)
    return result;
})
export default restaurantSlice.reducer;
export const { searchRestaurant } = restaurantSlice.actions;