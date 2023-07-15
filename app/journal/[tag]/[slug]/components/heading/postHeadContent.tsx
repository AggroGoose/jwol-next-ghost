import Date from "@/lib/components/helpers/date";
import PrimaryTag from "./primaryTag";

export default function PostHeadContent({
  title,
  excerpt,
  created_at,
  reading_time,
  primary_tag,
}: {
  title: string;
  excerpt: string;
  created_at: string;
  reading_time: number;
  primary_tag: {
    id: string;
    name: string;
    slug: string;
  };
}) {
  return (
    <div className="article__head_content">
      <PrimaryTag primary_tag={primary_tag} />
      <h1>{title}</h1>
      <p className="article__head_content--meta">
        <Date dateString={created_at} />
        {` | ${reading_time} Minute Read`}
      </p>
    </div>
  );
}
