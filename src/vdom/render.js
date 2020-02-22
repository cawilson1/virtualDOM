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
  if (children.length > 0) {
    for (const child of children) {
      try {
        console.log("child", child);
        const $child = render(child);
        console.log("$child", $child, child, "children", children, "last", $el);
        $el.appendChild(
          document.createElement(
            child.tagName === undefined ? "div" : child.tagName
          )
        );
        $el.setAttribute("class", "test2");
        console.log("el", $el);
      } catch (error) {
        console.log("final", $el);
        console.error(error);

        return $el;
      }
    }
  } else {
    console.log("here");
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
