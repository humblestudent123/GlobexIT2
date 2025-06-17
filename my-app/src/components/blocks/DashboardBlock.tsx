import React from "react";
import { Card, Statistic } from "antd";
import styles from "./DashboardBlock.module.scss";

export function DashboardBlock() {
  return (
    <Card className={styles.block} title="Дашборд">
      <Statistic title="Активные задачи" value={12} />
    </Card>
  );
}