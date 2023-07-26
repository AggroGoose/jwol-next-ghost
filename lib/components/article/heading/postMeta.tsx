import Date from "@/lib/components/helpers/date";

export default function PostMeta({
  created_at,
  updated_at,
  reading_time,
}: {
  created_at: string;
  updated_at: string;
  reading_time: number;
}) {
  return (
    <div className="article_meta">
      <p>
        <strong>Published: </strong>
        <em>
          <Date dateString={created_at} />
        </em>{" "}
        | <strong>Last Updated: </strong>
        <em>
          <Date dateString={updated_at} />{" "}
        </em>
        |{" "}
        <span className="article_meta--readtime">{`${reading_time} minute read`}</span>
      </p>
    </div>
  );
}
