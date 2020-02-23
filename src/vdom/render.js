const renderElem = ({ tagName, attrs, children }) => {
  const $el = document.createElement(tagName);
  //set attributes
  for (const [k, v] of Object.entries(attrs)) {
    //gets array of all entries in the object
    $el.setAttribute(k, v);
  }
  //set children
  for (const child of children) {
    const $child = render(child);
    $el.appendChild($child);
  }

  return $el;
};

const render = vNode => {
  if (typeof vNode === "string") {
    return document.createTextNode(vNode);
  } else {
    return renderElem(vNode);
  }
};

export default render;
