import React, {useRef, useEffect} from "react";
import {Box, Flex} from "@chakra-ui/react";
import FirstInputGroup from "./FirstInputGroup";
import SecondInputGroup from "./SecondInputGroup";
import {fetchByInput1, fetchByInput2, handleFormElement} from "../features/converter/converterSlice";
import {useDispatch, useSelector} from "react-redux";

const Header = () => {
    const input1 = useRef();
    const input2 = useRef();
    const select1 = useRef();
    const select2 = useRef();
    const dispatch = useDispatch();
    const
        {
            selectedCurrency1,
            selectedCurrency2,
            currencyAmount2,
            currencyAmount1,
        } = useSelector((state) => state);
    useEffect(() => {
        const delayDebounceFunction = setTimeout(() => {
            if(document.activeElement === input1.current) {
                dispatch(fetchByInput1({fromCurrency: selectedCurrency1, toCurrency: selectedCurrency2, amount: currencyAmount1}))
            }
            else if(document.activeElement === input2.current) {
                dispatch(fetchByInput2({fromCurrency: selectedCurrency2, toCurrency: selectedCurrency1, amount: currencyAmount2}))
            }
            else if(document.activeElement === select1.current) {
                dispatch(fetchByInput1({fromCurrency: selectedCurrency1, toCurrency: selectedCurrency2, amount: currencyAmount1}))
            }
            else if(document.activeElement === select2.current) {
                dispatch(fetchByInput2({fromCurrency: selectedCurrency2, toCurrency: selectedCurrency1, amount: currencyAmount2}))
            }
        }, 200);
        return () => clearTimeout(delayDebounceFunction);
    }, [currencyAmount1, currencyAmount2, selectedCurrency1, selectedCurrency2])
    return (
        <Box bg="#63B3ED" p="3">
            <Flex justifyContent="center">
                <FirstInputGroup
                    select1={select1}
                    input1={input1}
                    handleFormEl={handleFormElement}
                    currencyAmount1={currencyAmount1}
                    selectedCurrency1={selectedCurrency1}
                />
                <SecondInputGroup
                    select2={select2}
                    input2={input2}
                    handleFormEl={handleFormElement}
                    currencyAmount2={currencyAmount2}
                    selectedCurrency2={selectedCurrency2}
                />
            </Flex>
        </Box>
    )
}

export default Header;
