import React from "react";
import {Input, InputGroup, InputRightElement, Select} from "@chakra-ui/react";
import {useDispatch} from "react-redux";

const FirstInputGroup = ({handleFormEl, selectedCurrency1, select1, input1, currencyAmount1}) => {
    const dispatch = useDispatch();
    return (
        <InputGroup width="auto" mr="7">
            <Input pr='3.5rem' variant="filled" ref={input1} placeholder="Enter amount:" value={currencyAmount1} onChange={(e) => dispatch(handleFormEl({type: "INPUT1", value: e.target.value}))} />
            <InputRightElement width="30">
                <Select h="10" variant="filled" borderColor="blackAlpha.200" ref={select1} value={selectedCurrency1} onChange={(e) => dispatch(handleFormEl({type: "SELECT1", value: e.target.value}))}>
                    <option value="UAH">UAH</option>
                    <option value="USD">USD</option>
                    <option value="EUR">EUR</option>
                </Select>
            </InputRightElement>
        </InputGroup>
    )
}

export default FirstInputGroup;