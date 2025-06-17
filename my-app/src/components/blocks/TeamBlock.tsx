import React from "react";
import { Card, List, Avatar } from "antd";

const team = [
  { name: "Алексей", position: "Frontend" },
  { name: "Мария", position: "Designer" },
];

export default function TeamBlock() {
  return (
    <Card title="Моя команда">
      <List
        itemLayout="horizontal"
        dataSource={team}
        renderItem={(member) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar>{member.name[0]}</Avatar>}
              title={member.name}
              description={member.position}
            />
          </List.Item>
        )}
      />
    </Card>
  );
}
