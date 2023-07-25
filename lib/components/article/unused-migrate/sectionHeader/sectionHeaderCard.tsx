/*
export default function SectionHeaderCard({ elem }: { elem: ParseElement }) {
  const elemChildren = elem.children as ParseElement[];
  const headerSection = elemChildren?.find((child) =>
    child.attributes?.class?.includes("card-header")
  );
  const headerSectionContent = headerSection?.children[0] as ParseText;
  const subheaderSection = elemChildren?.find((child) =>
    child.attributes?.class?.includes("card-subheader")
  )?.children[0] as ParseText;

  if (!headerSection) return null;

  return (
    <div className={elem.attributes?.class}>
      <h2
        className="kg-header-card-header"
        id={headerSection.attributes?.id || "genid_header"}
      >
        {headerSectionContent.data}
      </h2>
      {subheaderSection && (
        <h3 className="kg-header-card-subheader">{subheaderSection.data}</h3>
      )}
    </div>
  );
}
*/
