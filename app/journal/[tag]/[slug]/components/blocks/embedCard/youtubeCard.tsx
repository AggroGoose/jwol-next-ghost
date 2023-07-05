export default function YoutubeCard({ elem }: { elem: ParseElement }) {
  const iFrame = elem.children?.find(
    (child) => child.name == "iframe"
  ) as ParseElement;
  if (!iFrame) return <></>;
  const srcTitle = iFrame.attributes.title || "";

  return (
    <figure className="kg-card kg-embed-card">
      <div className="kg-youtube-card">
        <iframe
          width="560"
          height="315"
          src={iFrame.attributes.src}
          title={srcTitle}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </figure>
  );
}
