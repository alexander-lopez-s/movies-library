import postHandler from "../handlers/postHandler.js";
import dom from "../dom.js";

const postEvent = () => {
    dom.formButton.addEventListener('click', () => {
  
      postHandler();
    })
}

export default postEvent;