export function replaceSection(
  document: string,
  section: string,
  content: string,
): string {
  if (!hasSection(document, section)) {
    throw new Error(`no section with tag "${section}" found in the document`);
  }

  const startComment = toMarkerComment(section, "start");
  const endComment = toMarkerComment(section, "end");

  const contentStartIndex = document.indexOf(startComment) +
    startComment.length;
  const contentEndIndex = document.indexOf(endComment) - 1;

  return document.slice(0, contentStartIndex) + "\n" + content +
    document.slice(contentEndIndex);
}

export function clearSection(document: string, section: string): string {
  if (!hasSection(document, section)) {
    throw new Error(`no section with tag "${section}" found in the document`);
  }

  const startComment = toMarkerComment(section, "start");
  const endComment = toMarkerComment(section, "end");

  const contentStartIndex = document.indexOf(startComment) +
    startComment.length;
  const contentEndIndex = document.indexOf(endComment) - 1;

  return document.slice(0, contentStartIndex) + document.slice(contentEndIndex);
}

export function hasSection(document: string, section: string): boolean {
  const startComment = toMarkerComment(section, "start");
  const endComment = toMarkerComment(section, "end");

  return document.includes(startComment) && document.includes(endComment);
}

function toMarkerComment(tag: string, marker: string): string {
  return `<!-- ${tag} ${marker} -->`;
}
