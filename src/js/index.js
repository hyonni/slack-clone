import main from "./main.js";
import _ from "lodash";

import css from "../scss/style.scss";
import resetCss from "../scss/reset.scss";

const root = document.querySelector('#wrap');

const init = ()=> {
    setSideMenu();
    setContents();
}

const setSideMenu = ()=> {
    const section = document.createElement('section');
    section.classList.add('channel-menu');

    root.appendChild(section);
}

const setContents = ()=> {
    const section = document.createElement('section');
    section.classList.add('chatting-content');

    root.appendChild(section);
}


init();
