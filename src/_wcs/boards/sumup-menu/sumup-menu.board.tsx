import React from "react";
import { createBoard } from "@wixc3/react-board";
import { SumupMenu } from "../../../components/sumup-menu/sumup-menu";

export default createBoard({
  name: "SumupMenu",
  Board: () => (
    <SumupMenu
      items={[
        {
          icon: "timeline-line-chart",
          selected: true,
          text: "Overview",
        },
        {
          icon: "properties",
          selected: false,
          text: "Transactions",
          
        },
        {
          icon: "credit-card",
          selected: false,
          text: "Cards",
          
        },
      ]}
    />
  ),
});
