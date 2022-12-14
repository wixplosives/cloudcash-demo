import React from "react";
import { createBoard } from "@wixc3/react-board";
import { Cards } from "../../../components/cards/cards";

export default createBoard({
  name: "Standard Card",
  Board: () => (
    <Cards
      incomePrice={1500}
      expensesPrice={350}
      balancePrice={28}
      cardInfo={{
        cardHolder: "Omer Kenet",
        company: "Wix",
        expiryDate: "06/25",
      }}
    />
  ),
  environmentProps: {
    canvasHeight: 364,
    canvasWidth: 597,
    windowWidth: 938,
    canvasBackgroundColor: "#ffffff",
  },
});
