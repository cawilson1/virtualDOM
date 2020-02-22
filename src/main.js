import createElement from "./vdom/createElement";
import render from "./vdom/render";
import mount from "./vdom/mount";

const createVApp = count =>
  createElement("div", {
    attrs: {
      id: "app",
      dataCount: count
    },
    children: [
      String(count), //each dom node has two nodes, text (this one) and element (below)
      createElement("p", {
        attrs: {
          id: "none"
          //src: "https://media.giphy.com/media/6bBVmOPLsLZ3G/giphy.gif"
        }
      })
    ]
  });

let count = 0;
const vApp = createVApp(count);
const $app = render(vApp);

mount($app, document.getElementById("app"));

console.log($app);
