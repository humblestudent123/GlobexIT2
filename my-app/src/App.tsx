import React, { Suspense } from "react";
import MainLayout from "./layouts/MainLayout";
import styles from "./App.module.scss";
import { DashboardBlock } from "./components/blocks/DashboardBlock";
import { DraggableBlocksContainer } from "./components/DraggableBlocksContainer";

const TrainingBlock = React.lazy(() => import("./components/blocks/TrainingBlock"));
const TeamBlock = React.lazy(() => import("./components/blocks/TeamBlock"));

export default function App() {
  const userRole = "developer";

  return (
    <MainLayout userRole={userRole}>
      <div className={styles.container}>
        <DashboardBlock />
        <DraggableBlocksContainer>
          <Suspense fallback={<div>Загрузка блока "Обучение"...</div>}>
            <TrainingBlock />
          </Suspense>
          <Suspense fallback={<div>Загрузка блока "Моя команда"...</div>}>
            <TeamBlock />
          </Suspense>
        </DraggableBlocksContainer>
      </div>
    </MainLayout>
  );
}
