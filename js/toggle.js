  // Plus/Minus Toggle
function toggle_plus(id) {
    var f = document.getElementById(id);
    f.classList.toggle("showplus");
    f.classList.toggle("showminus");
}

// Toggle to show and hide content below the link
function toggle_visibility(id) {
   var e = document.getElementById(id);
   if(e.style.display == 'block') {
      e.style.display = 'none';
   } else {
      e.style.display = 'block';
   }
}
