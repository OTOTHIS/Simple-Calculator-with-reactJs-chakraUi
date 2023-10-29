/* eslint-disable react/prop-types */
import { Button, GridItem } from "@chakra-ui/react";

const Gritem = ({ data, clickMe }) => {
  return (
    <GridItem
      height={"70px"}
      boxShadow='2xl'
      rounded='xl'
      colSpan={data === "=" || data === "AC" ? 2 : 1}
      bg="papayawhip"
    >
      <Button  p='6' rounded='xl' height="100%" width={"100%"} onClick={() => clickMe(data)}>
        {data}
      </Button>
    </GridItem>
  );
};

export default Gritem;
