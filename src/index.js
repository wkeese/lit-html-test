import "lit-html/polyfills/template_polyfill";
import {html, render} from "lit-html";

const h = "Hello", w = "world";

window.runTest = function () {
	render(html`${h} ${w}!`, document.body);
};