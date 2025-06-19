// import React from "react";
// import { Card, Statistic } from "antd";
// import styles from "./DashboardBlock.module.scss";

// export function DashboardBlock() {
//   return (
//     <Card className={styles.block} title="Задачи">
//       <Statistic title="Активные задачи" value={3} />
//     </Card>
//   );
// }


import React from "react";
import { Card, List, Typography } from "antd";
import styles from "./DashboardBlock.module.scss";

const { Text } = Typography;

const tasks = [
  {
    title: "Тест1",
    description: "Осталось: без срока",
  },
  {
    title: "Тест2",
    description: "Осталось: без срока",
  },
  {
    title: "Тест3",
    description: "Осталось: без срока",
  },
];

export function DashboardBlock() {
  return (
    <Card className={styles.block} title="Задачи">
      <List
        itemLayout="horizontal"
        dataSource={tasks}
        renderItem={(task) => (
          <List.Item>
            <List.Item.Meta
              avatar={<span style={{ fontSize: 20 }}>📄</span>}
              title={<Text strong>{task.title}</Text>}
              description={<Text type="secondary">{task.description}</Text>}
            />
          </List.Item>
        )}
      />
    </Card>
  );
}






