// Get Object.assign().
import "@babel/polyfill";

// Get template polyfill (only needed on IE).
import { initTemplatePolyfill } from "lit-html/polyfills/template_polyfill";
console.log("initializing template polyfill");
initTemplatePolyfill();
console.log("initialized");

import {html, render} from "lit-html";

const h = "Hello", w = "world";

window.runTest = function () {
	render(html`${h} ${w}!`, document.body);
};