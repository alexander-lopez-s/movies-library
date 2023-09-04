import postHandler from "../handlers/postHandler.js";
import dom from "../dom.js";

const postEvent = () => {
    dom.formButton.addEventListener('click', (e) => {
      e.preventDefault();
      postHandler();
    })
}

export default postEvent;