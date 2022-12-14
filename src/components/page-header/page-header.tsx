import React from "react";
import styles from "./page-header.module.scss";
import { MembershipIndicator } from "../membership-indicator/membership-indicator";
import { Text } from "@blueprintjs/core";

export interface PageHeaderProps {
  className?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ className }) => {
  return (
    <div className={styles.root}>
      <div
        className={`${styles.headerContainer} ${styles.headerContainer} ${styles.moreSpecific}`}
      >
        <div>
          <Text className={styles.pageHeader}>Weekly sumup</Text>
          <Text className={styles.pageSubHeader}>
            Get summary of your weekly online transactions here.
          </Text>
        </div>
        <MembershipIndicator
          notificationsIndication
          userType="Account admin"
          envelopeIndication={true}
          userName="Andrew"
        />
      </div>
    </div>
  );
};
