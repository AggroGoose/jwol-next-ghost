export default function YoutubeCard({ block }: { block: LexicalEmbed }) {
  const screen = block.url.match(
    /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/
  );
  if (!screen) return null;
  const id = screen[2];
  const url = `https://www.youtube.com/embed/${id}`;

  return (
    <figure className="my-3 block-main rounded-xl overflow-hidden cshadow-flip">
      <div className="relative w-full pt-[56.5%]">
        <iframe
          width="560"
          height="315"
          className="absolute left-0 top-0 w-full h-full"
          src={url}
          title={block.metadata.title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>
    </figure>
  );
}
