import React from "react";
import styles from "./weekly-payments.module.scss";
import { ProgressBar } from '@blueprintjs/core';

export interface WeeklyPaymentsProps {
    className?: string;
}

export const WeeklyPayments: React.FC<WeeklyPaymentsProps> = ({ className }) => {
    return <div className={styles.root}>
        <ProgressBar animate={false} stripes={false} intent="primary" value={0.3} />
        <div className={styles.content}>
            <div className={styles.title}>
                Text</div>330$ / 450$</div></div>;
};
