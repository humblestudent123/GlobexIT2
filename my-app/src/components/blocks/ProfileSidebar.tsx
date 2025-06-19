import React from "react";
import { Avatar, Typography, Menu, Divider } from "antd";
import styles from "./ProfileSidebar.module.scss";

const { Text } = Typography;

export default function ProfileSidebar() {
  return (
    <div className={styles.sidebar}>
      <div className={styles.avatarBlock}>
        <Avatar
          size={100}
          src=""
        />
        <Text strong className={styles.fullName}>
          Поняев Никита Иванович
        </Text>
        <Text type="secondary" className={styles.role}>Разработчик</Text>
      </div>

      <Menu mode="vertical" className={styles.menu} selectable={false}>
        <Menu.Item key="training">Обучение</Menu.Item>
        <Menu.Item key="vacation">Отпуск</Menu.Item>
        <Menu.Item key="docs">Документы</Menu.Item>
        <Menu.Item key="adaptation">Адаптация</Menu.Item>
      </Menu>

      <Divider />

      <div className={styles.infoBlock}>
        <Text type="secondary">Команда</Text>
        <Text>Я, и только я</Text>

        <Text type="secondary">Компания</Text>
        <Text>ГлобэксАйТи</Text>

        <Text type="secondary">Email</Text>
        <Text>my-email.com</Text>
      </div>

      <Divider />

      <div className={styles.exit}>
        <Text type="danger">Выход</Text>
      </div>
    </div>
  );
}
