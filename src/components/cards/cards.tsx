import React from "react";
import styles from "./cards.module.scss";
import { Statistics } from "../statistics/statistics";
import { SwitchComposite } from "../switch-composite/switch-composite";
import { Card, Divider } from "@blueprintjs/core";
import { CreditCard, CardInformation } from "../credit-card/credit-card";

export interface CardsProps {
  className?: string;
  balancePrice?: number;
  incomePrice?: number;
  expensesPrice?: number;
  cardInfo: CardInformation;
}

export const Cards: React.FC<CardsProps> = ({
  expensesPrice,
  incomePrice,
  balancePrice,
  cardInfo,
}) => {
  return (
    <div className={styles.root}>
      <Card className={styles.outline}>
        <p className={styles.title}>Cards</p>
        <div className={`${styles.layout} ${styles.content}`}>
          <div className={styles["left"]}>
            <CreditCard cardInfo={cardInfo}></CreditCard>
          </div>
          <Divider color="E8E8E8" className={styles.divider}></Divider>
          <div className={styles["right"]}>
            <Statistics price={balancePrice} type="balance" />
            <Statistics price={incomePrice} type="income" />
            <Statistics price={expensesPrice} type="expenses" />
            <SwitchComposite />
          </div>
        </div>
      </Card>
    </div>
  );
};
