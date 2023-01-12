//console.log("RUNNING SCRIPT");

window.addEventListener("load", () => {
  //console.log("GETTING PARENT");

  var parentID = "iconsParent";

  setTimeout(() => {
    //
    /*   const parent = document.getElementById(parentID);
     */
    const parent = document.querySelector("#" + parentID);
    //console.log("w:" + parent.offsetWidth, " h:" + parent.offsetHeight);

    if (parent != null) {
      for (let index = 1; index <= 20; index++) {
        var id = "icon--" + index;
        animateIcon(id, 50, 1);
      }
      for (let index = 1; index <= 10; index++) {
        var id = "icon--fore--" + index;
        animateIcon(id, 300, 0);
      }
    } else {
      console.log("Parent ID: #" + parentID + " not found");
    }
  }, 200);
});

function animateIcon(id, maxSize = 200, fallOff = 0.75) {
  var parent = document.getElementById("iconsParent");

  //initial values
  var location = getNewLocation(
    parent.offsetWidth,
    parent.offsetHeight,
    maxSize,
    fallOff
  );
  //get duration
  var t =
    randSeed(2, 20 / (location.size < 50 ? location.size / 500 : 1)) * 1000; // milliseconds
  //mount new div
  const icondiv = document.createElement("img");
  icondiv.id = id;
  icondiv.src = "/icons/" + location.icon;
  const text = document.createTextNode(location.icon);
  with (icondiv) {
    /* 
    style.transform =
      "translate(" + location.startx + "px," + location.starty + "px)";
    */

    style.width = location.size * 0.5 + "px";
    style.height = location.size * 0.5 + "px";
    //style.backgroundImage = "url(/icons/" + location.icon + ")";
    style.left = location.startx + "px";
    style.top = location.starty + "px";
    style.fontSize = location.size + "px";
    style.color = location.color;
    style.fill = location.color;
    style.filter = location.filter;
    style.opacity = 0;
    style.transitionProperty = "opacity, rotate, width, height, left, top";
    style.transitionDuration =
      t * 0.5 +
      "ms," +
      Math.max(t, t * (location.size / 100)) +
      "ms," +
      t +
      "ms," +
      t +
      "ms," +
      t +
      "ms," +
      t +
      "ms";

    //style.transition = "left "+t;
    /*   style.transition =
      "opacity 2s," + "translate " + t + "ms cubic-bezier(.9,.13,.91,.11)";
   */
  }

  //icondiv.appendChild(text);

  setTimeout(() => {
    parent.appendChild(icondiv);
    //

    //animate after 200ms
    var icon = parent.querySelector("#" + id);
    setTimeout(() => {
      with (icon) {
        style.width = location.size + "px";
        style.height = location.size + "px";
        style.top = randSeed(50, 100) + "px";
        style.left = randSeed(50, 100) + "px";
        style.opacity = 1;
        style.rotate = location.rotation + "deg";
      }
      //Opacity back to 0
      setTimeout(() => {
        icon.style.opacity = 0;
      }, t * 0.25);
      //Size back to 0
      /*     setTimeout(() => {
      icon.style.fontSize = "12px";
    }, t * 0.5); */
      //reset
      setTimeout(() => {
        icon.remove();
        animateIcon(id);
      }, t);
    }, randSeed(100, 500));
  }, randSeed(0, 5000));
}

function randSeed(a, b) {
  const seed = Math.random();
  const result = Math.floor(seed * (b - a + 1)) + a;
  //sconsole.log("seed: " + seed, "range: " + range, "result: " + result);
  return result;
}

function getNewLocation(
  width = 1000,
  height = 1000,
  maxSize = 200,
  fallOff = 0.75
) {
  const iconsList = [
    "chat.svg",
    "table_view.svg",
    "assignment.svg",
    "folder_open.svg",
    "analytics.svg",
    "monitoring.svg",
    "groups.svg",
    "badge_premium.svg",
    "home.svg",
  ];
  //const maxSize = maxSize;

  const x = randSeed(50, width);
  const y = randSeed(50, height);
  const size = randSeed(32, maxSize);
  const rotation = (randSeed(0, 2) >= 1 ? 1 : -1) * randSeed(0, 360);
  const color = size > maxSize * fallOff ? "#4cfdb0" : "#254857";
  const filter =
    size > maxSize * fallOff
      ? "invert(78%) sepia(87%) saturate(361%) hue-rotate(81deg) brightness(105%) contrast(98%)"
      : "invert(21%) sepia(11%) saturate(2594%) hue-rotate(153deg) brightness(94%) contrast(81%)";
  const icon = iconsList[randSeed(0, iconsList.length - 1)];

  const result = {
    startx: x,
    starty: y,
    size: size,
    rotation: rotation,
    color: color,
    filter: filter,
    icon: icon,
  };
  return result;
}
