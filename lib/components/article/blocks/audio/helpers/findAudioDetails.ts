export default function findAudioDetails(elem: ParseElement) {
  const audioObj = {
    imgSrc: "",
    audioSrc: "",
    audioTitle: "",
  };
  if (!elem?.children) return audioObj;
  const image = elem.children.find(
    (child) => child.name === "img"
  ) as ParseElement;

  audioObj.imgSrc = image?.attributes?.src || "";

  const audioChildren = elem.children as ParseElement[];

  const audioContainer = audioChildren.find(
    (child) => child.attributes.class == "kg-audio-player-container"
  );

  if (!audioContainer) return audioObj;

  const audioContainerChildren = audioContainer.children as ParseElement[];
  const audioSrc =
    audioContainerChildren?.find((child) => child.name == "audio")?.attributes
      ?.src || "";

  const audioTitleObj = audioContainerChildren?.find(
    (child) => child.attributes.class === "kg-audio-title"
  )?.children[0] as ParseText;

  audioObj.audioSrc = audioSrc;
  audioObj.audioTitle = audioTitleObj.data;

  return audioObj;
}
