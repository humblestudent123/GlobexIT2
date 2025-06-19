import React from "react";
import { Layout, /*Button*/ } from "antd";
import styles from "./MainLayout.module.scss";

const { Header, Content } = Layout;

export default function MainLayout({ children, /*userRole*/ }: { children: React.ReactNode; /*userRole: string*/ }) {
  return (
    <Layout>
      <Header className={styles.header}>
        {/* {userRole === "developer" && <Button type="primary">Интерфейс разработчика</Button>} */}
      </Header>
      <Content className={styles.content}>{children}</Content>
    </Layout>
  );
}

