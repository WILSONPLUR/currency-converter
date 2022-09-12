import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {ChakraProvider} from "@chakra-ui/react";
/*import MainContextWrapper from "./context/MainContext";*/
import {Provider} from "react-redux";
import {store} from "./app/store";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <ChakraProvider>
        <React.StrictMode>
            <Provider store={store}>
                <App />
            </Provider>
        </React.StrictMode>
    </ChakraProvider>

);