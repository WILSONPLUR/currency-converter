import {useEffect, useRef, useState} from "react";
import {Flex, Input, Select, Box, InputGroup, InputRightElement} from "@chakra-ui/react";

function App() {
    /*Refs*/
  const input1 = useRef();
  const input2 = useRef();
  const select1 = useRef();
  const select2 = useRef();
  /*Refs*/
  const [selectedCurrency1, setSelectedCurrency1] = useState("UAH");
  const [selectedCurrency2, setSelectedCurrency2] = useState("USD");
  const [currencyAmount1, setCurrencyAmount1] = useState("");
  const [currencyAmount2, setCurrencyAmount2] = useState("");
  const fetchByInput1 = async () => {
    const res = await fetch(`https://api.apilayer.com/exchangerates_data/convert?to=${selectedCurrency2}&from=${selectedCurrency1}&amount=${currencyAmount1} `, {
      method: "GET",
      redirect: "follow",
      headers: {
        "apikey": process.env.REACT_APP_API_KEY
      }
    })
    const data = await res.json();
    console.log(data);
    data.success ? setCurrencyAmount2(data.result) : setCurrencyAmount2("");
  }
  const fetchByInput2 = async () => {
      const res = await fetch(
          `https://api.apilayer.com/exchangerates_data/convert?to=${selectedCurrency1}&from=${selectedCurrency2}&amount=${currencyAmount2} `,
          {
          method: "GET",
          redirect: "follow",
          headers: {
              "apikey": process.env.REACT_APP_API_KEY
          }
      })
      const data = await res.json();
      console.log(data);
      data.success ? setCurrencyAmount1(data.result) : setCurrencyAmount1("");
  }
  useEffect(() => {
    const delayDebounceFunction = setTimeout(() => {
      if(document.activeElement === input1.current) {
          fetchByInput1();
      }
      else if(document.activeElement === input2.current) {
          fetchByInput2();
      }
      else if(document.activeElement === select1.current) {
          fetchByInput1();
      }
      else if(document.activeElement === select2.current) {
          fetchByInput2();
      }
    }, 1000);
    return () => clearTimeout(delayDebounceFunction);
  }, [currencyAmount1, currencyAmount2, selectedCurrency1, selectedCurrency2])
  return (
      <Box bg="#63B3ED" p="3">
          <Flex justifyContent="center">
              <InputGroup width="auto" mr="7">
                  <Input pr='3.5rem' variant="filled" ref={input1} placeholder="Enter amount:" value={currencyAmount1} onChange={(e) => setCurrencyAmount1(e.target.value)} />
                  <InputRightElement width="30">
                      <Select h="10" variant="filled" borderColor="blackAlpha.200" ref={select1} value={selectedCurrency1} onChange={(e) => setSelectedCurrency1(e.target.value)}>
                          <option value="UAH">UAH</option>
                          <option value="USD">USD</option>
                          <option value="EUR">EUR</option>
                      </Select>
                  </InputRightElement>
              </InputGroup>
              <InputGroup width="auto" mr="7">
                  <Input placeholder="Enter amount:" pr='3.5rem' variant="filled" ref={input2} value={currencyAmount2} onChange={(e) => setCurrencyAmount2(e.target.value)} />
                  <InputRightElement width="30">
                      <Select h="10"  variant="filled" borderColor="blackAlpha.200" ref={select2} value={selectedCurrency2} onChange={(e) => setSelectedCurrency2(e.target.value)}>
                          <option value="USD">USD</option>
                          <option value="UAH">UAH</option>
                          <option value="EUR">EUR</option>
                      </Select>
                  </InputRightElement>
              </InputGroup>
          </Flex>
      </Box>

  );
}

export default App;
