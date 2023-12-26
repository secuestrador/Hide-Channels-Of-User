/**
 * @name hideUserChannels
 * @author secuestrador
 * @description A BetterDiscord plugin used to hide voice channels where a blacklisted username is detected
 * @version 0.0.1
 */

module.exports = class YourPlugin {
    start() {
      var namesToDetect = [`qt`, `wi'`, `satin`];

      var elements = document.getElementsByClassName('usernameFont__71dd5');
  
      for (var i = 0; i < elements.length; i++) {
          var currentElement = elements[i];
          var username = currentElement.textContent.trim();
  
          if (namesToDetect.includes(username)) {
              var fifthParent = getNthParent(currentElement, 5);
              if (fifthParent) {
                  fifthParent.style.display = 'none';
              }
          }
      }
  
      function getNthParent(element, n) {
          for (var i = 0; i < n; i++) {
              if (element.parentNode) {
                  element = element.parentNode;
              } else {
                  return null;
              }
          }
          return element;
      }
    } 

    stop() {
    }
}