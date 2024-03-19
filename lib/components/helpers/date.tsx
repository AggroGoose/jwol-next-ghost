import { parseISO, format, formatDistance } from "date-fns";

export default function DateParse({
  dateString,
  relative = false,
}: {
  dateString: string | Date;
  relative?: boolean;
}) {
  if (!dateString) return;

  let date: Date;
  if (typeof dateString === "string") {
    date = parseISO(dateString);
  } else {
    date = dateString;
  }
  const now = Date.now();

  if (relative)
    return (
      <time
        dateTime={
          typeof dateString === "string"
            ? `${dateString}`
            : dateString.toUTCString()
        }
      >
        {formatDistance(now, date, { includeSeconds: true }) + " ago"}
      </time>
    );
  return (
    <time
      dateTime={
        typeof dateString === "string"
          ? `${dateString}`
          : dateString.toUTCString()
      }
    >
      {format(date, "LLLL	d, yyyy")}
    </time>
  );
}
