import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";

const initialState = {
    selectedCurrency1: "UAH",
    selectedCurrency2: "USD",
    currencyAmount1: "",
    currencyAmount2: "",
}

export const fetchByInput1 = createAsyncThunk(
    "converter/fetchByInput1",
    async({fromCurrency, toCurrency, amount}, thunkApi) => {
        const myHeaders = new Headers();
        myHeaders.append("apikey", process.env.REACT_APP_API_KEY);
        const reqOpts = {
            method: "GET",
            redirect: "follow",
            headers: myHeaders
        }
        const res = await fetch(`https://api.apilayer.com/fixer/convert?to=${toCurrency}&from=${fromCurrency}&amount=${amount}`, reqOpts);
        const data = await res.json();
        return data;
    }
)

export const fetchByInput2 = createAsyncThunk(
    "converter/fetchByInput2",
    async({fromCurrency, toCurrency, amount}, thunkApi) => {
        const myHeaders = new Headers();
        myHeaders.append("apikey", process.env.REACT_APP_API_KEY);
        const reqOpts = {
            method: "GET",
            redirect: "follow",
            headers: myHeaders
        }
        const res = await fetch(`https://api.apilayer.com/fixer/convert?to=${toCurrency}&from=${fromCurrency}&amount=${amount}`, reqOpts);
        const data = await res.json();
        return data;
    }
)

const converterSlice = createSlice({
    name: "converterSlice",
    initialState,
    reducers: {
        handleFormElement: (state, {payload}) => {
            switch(payload.type) {
                case "SELECT1":
                    state.selectedCurrency1 = payload.value;
                    console.log(state.selectedCurrency1);
                    break;
                case "SELECT2":
                    state.selectedCurrency2 = payload.value;
                    break;
                case "INPUT1":
                    state.currencyAmount1 = payload.value;
                    break;
                case "INPUT2":
                    state.currencyAmount2 = payload.value;
                    break;
            }
        }
    },
    extraReducers: {
        [fetchByInput1.fulfilled]: (state, {payload}) => {
            state.currencyAmount2 = payload.result;
        },
        [fetchByInput2.fulfilled]: (state, {payload}) => {
            state.currencyAmount1 = payload.result;
        }
    }
})

export const converterReducer = converterSlice.reducer;
export const {handleFormElement} = converterSlice.actions;
