import type { DatePoint } from "@/api/profile";

function Point({ point }: { point: DatePoint }) {
  return point.datetime ? <time dateTime={point.datetime}>{point.label}</time> : point.label;
}

export function DateRange({ start, end }: { start: DatePoint; end: DatePoint }) {
  return (
    <>
      <Point point={start} /> — <Point point={end} />
    </>
  );
}
