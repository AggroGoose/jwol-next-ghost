import { parseISO, format, formatDistance } from "date-fns";

export default function DateParse({
  dateString,
  relative = false,
}: {
  dateString: string;
  relative?: boolean;
}) {
  if (!dateString) return;

  const date = parseISO(dateString);
  const now = Date.now();

  if (relative)
    return (
      <time dateTime={dateString}>
        {formatDistance(now, date, { includeSeconds: true }) + " ago"}
      </time>
    );
  return <time dateTime={dateString}>{format(date, "LLLL	d, yyyy")}</time>;
}
