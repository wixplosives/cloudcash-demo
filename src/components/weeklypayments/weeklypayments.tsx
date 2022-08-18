import React from "react";
import styles from "./weeklypayments.module.scss";
import { ProgressBar } from '@blueprintjs/core';

export interface WeeklypaymentsProps {
    className?: string;
}

export const Weeklypayments: React.FC<WeeklypaymentsProps> = ({ className }) => {
    return <div className={styles.root}>
        <ProgressBar animate={false} intent="primary" stripes={false} value={0.3} />
        <div className={styles.title}>
            Weeklypayments</div></div>;
};
