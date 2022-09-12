import React from "react";
import {Input, InputGroup, InputRightElement, Select} from "@chakra-ui/react";
import {useDispatch} from "react-redux";

const SecondInputGroup = ({handleFormEl, input2, select2, currencyAmount2, selectedCurrency2}) => {
    const dispatch = useDispatch();
    return (
        <InputGroup width="auto" mr="7">
            <Input placeholder="Enter amount:" pr='3.5rem' variant="filled" ref={input2} value={currencyAmount2} onChange={(e) => dispatch(handleFormEl({type: "INPUT2", value: e.target.value}))} />
            <InputRightElement width="30">
                <Select h="10"  variant="filled" borderColor="blackAlpha.200" ref={select2} value={selectedCurrency2} onChange={(e) => dispatch(handleFormEl({type: "SELECT2", value: e.target.value}))}>
                    <option value="USD">USD</option>
                    <option value="UAH">UAH</option>
                    <option value="EUR">EUR</option>
                </Select>
            </InputRightElement>
        </InputGroup>
    )
};

export default SecondInputGroup;