"use client";

import { Plus } from "lucide-react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardAction,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

function ChipSVG() {
  return (
    <svg
      enableBackground="new 0 0 132 92"
      viewBox="0 0 132 92"
      xmlns="http://www.w3.org/2000/svg"
      className="w-14"
    >
      <title>Chip</title>
      <rect
        x="0.5"
        y="0.5"
        width="131"
        height="91"
        rx="15"
        className="fill-accent stroke-accent"
      />
      <rect
        x="9.5"
        y="9.5"
        width="48"
        height="21"
        rx="10.5"
        className="fill-accent stroke-accent-foreground"
      />
      <rect
        x="9.5"
        y="61.5"
        width="48"
        height="21"
        rx="10.5"
        className="fill-accent stroke-accent-foreground"
      />
      <rect
        x="9.5"
        y="35.5"
        width="48"
        height="21"
        rx="10.5"
        className="fill-accent stroke-accent-foreground"
      />
      <rect
        x="74.5"
        y="9.5"
        width="48"
        height="21"
        rx="10.5"
        className="fill-accent stroke-accent-foreground"
      />
      <rect
        x="74.5"
        y="61.5"
        width="48"
        height="21"
        rx="10.5"
        className="fill-accent stroke-accent-foreground"
      />
      <rect
        x="74.5"
        y="35.5"
        width="48"
        height="21"
        rx="10.5"
        className="fill-accent stroke-accent-foreground"
      />
    </svg>
  );
}

export function AccountOverview() {
  return (
    <Card className="shadow-xs">
      <CardHeader className="items-center">
        <CardTitle>My Cards</CardTitle>
        <CardDescription>
          Your card summary, balance, and recent transactions in one view.
        </CardDescription>
        <CardAction>
          <Button size="icon" variant="outline">
            <Plus className="size-4" />
          </Button>
        </CardAction>
      </CardHeader>
    </Card>
  );
}
