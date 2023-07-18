export default function Header2({ elem }: { elem: ParseElement }) {
  const headContainer = elem.children[0] as ParseText;
  const content = headContainer.data;

  return <h2>{content}</h2>;
}
