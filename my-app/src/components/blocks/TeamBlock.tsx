import React from "react";
import { Card, List, Avatar, Typography } from "antd";

const team = [
  // пустой массив, чтобы проверить сообщение
  // { name: "Алексей", position: "Frontend" },
  // { name: "Мария", position: "Designer" },
];

export default function TeamBlock() {
  return (
    <Card title="Моя команда" style={{ borderRadius: 12 }}>
      <List
        itemLayout="horizontal"
        dataSource={team}
        locale={{ emptyText: <Typography.Text type="secondary">Сотрудники не найдены</Typography.Text> }}
        renderItem={(member) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar>{member.name[0]}</Avatar>}
              title={member.name}
              description={member.position ?? "Должность не указана"}
            />
          </List.Item>
        )}
      />
    </Card>
  );
}
