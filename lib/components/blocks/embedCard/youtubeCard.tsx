export default function YoutubeCard({ elem }: { elem: BlockEmbedCard }) {
  return (
    <figure className="block_embed">
      <div className="block_embed_youtube">
        <iframe
          width="560"
          height="315"
          src={elem.url}
          title={elem.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </figure>
  );
}
