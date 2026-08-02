"use client";

import { Button } from "@heroui/react";

import { Icon } from "@/components/common/Icon";
import { EVENT_FILTER_CHANGE_EVENT } from "@/components/sections/EventExplorer";

interface EventFilterShortcutProps {
  filter: string;
}

export function EventFilterShortcut({ filter }: EventFilterShortcutProps) {
  const activateFilter = () => {
    window.dispatchEvent(
      new CustomEvent(EVENT_FILTER_CHANGE_EVENT, { detail: filter }),
    );
  };

  return (
    <Button
      className="w-fit rounded-xl"
      variant="outline"
      onPress={activateFilter}
    >
      {filter}
      <Icon className="size-4" name="calendar" />
    </Button>
  );
}
