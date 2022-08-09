import React from "react";
import { createBoard } from "@wixc3/react-board";
import { Cards } from "../../../src/components/cards/cards";

export default createBoard({
  name: "Mobile",
  Board: () => (
    <Cards
      incomePrice={1500}
      outcomePrice={350}
      balancePrice={20}
      cardInfo={{
        cardHolder: "Omer Kenet ",
        company: "Wix",
        expiryDate: "06/23",
        premium: false,
      }}
    />
  ),
  environmentProps: {
    windowWidth: 444,
    canvasBackgroundColor: "#ffffff",
    windowHeight: 772,
  },
});