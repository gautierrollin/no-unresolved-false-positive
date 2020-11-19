import Bowser from "bowser";
import { nanoid } from "nanoid";

const browser = Bowser.getParser(window.navigator.userAgent);
console.log(browser.getBrowser());

export default () => nanoid();
