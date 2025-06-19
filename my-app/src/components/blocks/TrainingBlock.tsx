import React from "react";
import { Card } from "antd";

export default function TrainingBlock() {
  const hasTrainings = true;
  return hasTrainings ? <Card title="Руководители">Загрузка...</Card> : null;
}