"use client";

import { addDays } from "date-fns";
import { Calendar } from "../ui/calendar";
import { Card, CardContent } from "../ui/card";

const start = new Date(2023, 5, 5);

export function CardsCalendar() {
  return (
    <Card className="max-w-[260px] @max-3xl:grid @max-3xl:max-w-full @max-3xl:place-content-center">
      <CardContent className="p-1">
        <Calendar
          numberOfMonths={1}
          mode="range"
          defaultMonth={start}
          selected={{
            from: start,
            to: addDays(start, 8),
          }}
        />
      </CardContent>
    </Card>
  );
}
