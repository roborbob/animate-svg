const parser = new DOMParser();
const newDocument = parser.parseFromString(context, "image/svg+xml")
let svg = newDocument.getElementsByTagName("svg");