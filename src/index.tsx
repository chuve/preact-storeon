import { h, Component, render } from "preact";

import { Hello } from "./components/Hello";

render(
  <Hello compiler="TypeScript" framework="Preact" />,
  document.getElementById("example")
);
