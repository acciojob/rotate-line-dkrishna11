//your JS code here. If required.
let dynamicStyles = null;

function addAnimation(body) {
  if (!dynamicStyles) {
    dynamicStyles = document.createElement('style');
    dynamicStyles.type = 'text/css';
    document.head.appendChild(dynamicStyles);
  }

  dynamicStyles.sheet.insertRule(body, dynamicStyles.length);
}

addAnimation(`
      @keyframes move-eye { 
         from {
          transform: translateX(-50%) rotate(0deg);
         }
        to {
           transform: translateX(-50%) rotate(360deg);
        }
      }
    `);



var element = document.createElement("div");
element.IdName = "line";
element.style.height = "2px";
element.style.width = "200px";
element.style.backgroundColor = "black";
element.style.animation = "4s linear infinite move-eye";
element.style.position="absolute";
element.style.top="50%";
element.style.left="50%";

document.body.appendChild(element);