/**
 * @name ShowPP
 * @description Lets you click users avatars on their profile page to view a bigger version in your browser.
 * @version 1.0
 * @author s0ca
 * @website https://s0ca.site
 * @source https://github.com/s0ca/ShowPP/blob/main/ShowPP.js
 */

 module.exports = class linkProfilePicture {
    stop(){}
    start() {
      document.addEventListener("click", LinkProfilePicture, true);
      this.stop = document.removeEventListener.bind(document, "click", LinkProfilePicture, true);
      function LinkProfilePicture({ target }) {
        if (target.classList.contains("avatar-3QF_VA") && target.parentElement?.parentElement?.classList.contains("header-S26rhB")) {
          window.open(target.querySelector("img").src.replace(/(?:\?size=\d{3,4})?$/, "?size=4096"), "_blank");
        }
      }
    }
  }; 
  
