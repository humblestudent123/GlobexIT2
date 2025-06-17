import React from "react";
import { Card } from "antd";

export default function TrainingBlock() {
  const hasTrainings = true;
  return hasTrainings ? <Card title="Обучение">Список активных обучений...</Card> : null;
}