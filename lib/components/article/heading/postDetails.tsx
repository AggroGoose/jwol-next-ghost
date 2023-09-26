import DateParse from "../../helpers/date";

export default function PostDetails({
  created_at,
  updated_at,
}: {
  created_at: string;
  updated_at: string;
}) {
  return (
    <div className="flex md:justify-between gap-2 max-md:flex-col w-[--blog-width] self-center">
      <p>
        <strong className="text-subtle-flip2">Posted:</strong>{" "}
        <DateParse dateString={created_at} />
      </p>
      <p>
        <strong className="text-subtle-flip2">Updated:</strong>{" "}
        <DateParse dateString={updated_at} />
      </p>
    </div>
  );
}
