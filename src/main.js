import createElement from "./vdom/createElement";
import render from "./vdom/render";
import mount from "./vdom/mount";
import diff from "./vdom/diff";

const createVApp = count =>
  createElement("div", {
    attrs: {
      id: "app",
      dataCount: count
    },
    children: [
      createElement("input"),
      String(count), //each dom node has two nodes, text (this one) and element (below)
      createElement("p", {
        attrs: {
          id: "wow"
        },
        children: [
          String("test"), //each dom node has two nodes, text (this one) and element (below)
          ...Array.from({ length: count }, () =>
            createElement("img", {
              attrs: {
                id: `image${count}`,
                src: "https://media.giphy.com/media/6bBVmOPLsLZ3G/giphy.gif"
              }
            })
          )
        ]
      })
    ]
  });

let count = 0;
let vApp = createVApp(count);
const $app = render(vApp);

let $rootEl = mount($app, document.getElementById("app"));

setInterval(() => {
  count++;
  const vNewApp = createVApp(count);
  //const vNewApp = createVApp(Math.floor(Math.random() * 5));
  const patch = diff(vApp, vNewApp);
  $rootEl = patch($rootEl);
  vApp = vNewApp;
}, 1000);

console.log("$app", $app);
