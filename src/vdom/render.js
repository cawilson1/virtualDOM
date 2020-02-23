const renderElem = ({ tagName, attrs, children }) => {
  const $el = document.createElement(tagName);
  console.log("tagname", tagName);
  //set attributes
  for (const [k, v] of Object.entries(attrs)) {
    //gets array of all entries in the object
    console.log(k, "and", v);
    $el.setAttribute(k, v);
  }
  console.log("$el minus child", $el);
  //set children
  console.log(children.length);
  for (const child of children) {
    const $child = render(child);
    $el.appendChild($child);
  }

  console.log("before return", $el);
  return $el;
};

const render = vNode => {
  console.log("firstvnode", vNode);
  if (typeof vNode === "string") {
    console.log("string", vNode);
    return document.createTextNode(vNode);
  } else {
    console.log("node", vNode);
    return renderElem(vNode);
  }
};

export default render;
