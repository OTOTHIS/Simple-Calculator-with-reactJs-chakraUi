/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */

import { Box, Grid, Input } from "@chakra-ui/react";
import Gritem from "./grdItem";
import { useRef, useState } from "react";

const App = () => {
  const arr = [
    "AC",
    "DEL",
    "/",
    1,
    2,
    3,
    "*",
    4,
    5,
    6,
    "+",
    7,
    8,
    9,
    "-",
    ".",
    0,
    "=",
  ];
  const [val, setVal] = useState("");
  const inputVal = useRef("");
  const handleClick = (message) => {
    if (message === "=") {
      setVal(String(eval(val)).replace(/[=]/, "a"));
    } else if (message === "AC") {
      setVal("");
    } else if (message === "DEL") {
      let result = inputVal.current.value.split("");
      result.pop(); // Remove the last character
      result = result.join(""); // Join the remaining characters

      setVal(result);
    } else {
      setVal((prev) => String(prev) + String(message));
    }
  };

  return (
    <Box
     
      bgGradient="linear(to-l, #7928CA, #FF0080)"
      height="100vh"
      display={"grid"}
      placeItems={"center"}
    >
      <center>
        <Input
          border="none"
          outline="none"
          userSelect="none"
          ref={inputVal}
          defaultValue={val}
          size="lg"
          my="5"
          color="white"
          fontSize="2xl"
        />

        <Grid
          templateRows="repeat(2, 1fr)"
          templateColumns="repeat(4, 60px)"
          gap={2}
        >
          {arr.map((value, i) => (
            <Gritem key={i} data={value} clickMe={handleClick} />
          ))}
        </Grid>
      </center>
    </Box>
  );
};

export default App;
