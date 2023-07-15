import Date from "@/lib/components/helpers/date";
import Link from "next/link";

export default function PostDetails({
  updated_at,
  created_at,
  tags,
}: {
  updated_at: string;
  created_at: string;
  tags: Array<{
    id: string;
    name: string;
    slug: string;
  }>;
}) {
  return (
    <div className="article_side_details">
      <h2 className="article_side_details--head">Post Details</h2>
      <hr />
      <p className="article_side_details--date">
        <strong>Updated: </strong>
        <Date dateString={updated_at} />
      </p>
      <p className="article_side_details--date">
        <strong>Published: </strong>
        <Date dateString={created_at} />
      </p>
    </div>
  );
}
