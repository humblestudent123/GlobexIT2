import React, { useEffect, useState } from "react";
import styles from "./DraggableBlocksContainer.module.scss";
import {
  DndContext,
  closestCenter,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  SortableContext,
  useSortable,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { CSS } from "@dnd-kit/utilities";

const BLOCK_ORDER_KEY = "blockOrder";

// Вспомогательный компонент для сортируемых блоков
function SortableItem({ id, children }: { id: string; children: React.ReactNode }) {
  const { attributes, listeners, setNodeRef, transform, transition } = useSortable({ id });

  const style = {
    transform: CSS.Transform.toString(transform),
    transition,
  };

  return (
    <div ref={setNodeRef} style={style} {...attributes} {...listeners}>
      {children}
    </div>
  );
}

interface DraggableBlocksContainerProps {
  children: React.ReactNode[];
}

export function DraggableBlocksContainer({ children }: DraggableBlocksContainerProps) {
  const defaultOrder = React.Children.map(children, (_, index) => `block-${index}`) || [];
  const [order, setOrder] = useState<string[]>(() => {
    const saved = localStorage.getItem(BLOCK_ORDER_KEY);
    return saved ? JSON.parse(saved) : defaultOrder;
  });

  const sensors = useSensors(useSensor(PointerSensor));

  useEffect(() => {
    localStorage.setItem(BLOCK_ORDER_KEY, JSON.stringify(order));
  }, [order]);

  const handleDragEnd = (event: any) => {
    const { active, over } = event;
    if (active.id !== over?.id) {
      const oldIndex = order.indexOf(active.id);
      const newIndex = order.indexOf(over.id);
      const newOrder = arrayMove(order, oldIndex, newIndex);
      setOrder(newOrder);
    }
  };

  // Привязываем блоки к id
  const blockMap = React.Children.toArray(children).reduce((acc, child, index) => {
    acc[`block-${index}`] = child;
    return acc;
  }, {} as Record<string, React.ReactNode>);

  return (
    <DndContext sensors={sensors} collisionDetection={closestCenter} onDragEnd={handleDragEnd}>
      <SortableContext items={order} strategy={verticalListSortingStrategy}>
        <div className={styles.container}>
          {order.map((id) => (
            <SortableItem key={id} id={id}>
              {blockMap[id]}
            </SortableItem>
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
}
