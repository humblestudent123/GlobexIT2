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
import { Card, List, Avatar } from "antd";
import styles from "./DashboardBlock.module.scss";

const tasks = [
  {
    title: "Завершить ревью кода",
    icon: "https://cdn-icons-png.flaticon.com/512/3306/3306153.png",

  },
  {
    title: "Обновить документацию",
    icon: "https://cdn-icons-png.flaticon.com/512/3468/3468376.png",
  },
  {
    title: "Проверить тесты на CI",
    icon: "https://cdn-icons-png.flaticon.com/512/1828/1828919.png",
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
              avatar={<Avatar src={task.icon} />}
              title={task.title}
            />
          </List.Item>
        )}
      />
    </Card>
  );
}
