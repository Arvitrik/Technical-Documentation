// SHOW TAB CONTENT ON MOUSE OVER

// TWO PARAMETERS - EVENT, TAB LANGUAGE
function showCode(evt, codeLang) {
  let i;

  const tabLinks = document.getElementsByClassName("tabLinks");
  const tabContent = document.getElementsByClassName("tabContents");

  // Remove active from all tabs
  for (i = 0; i < tabLinks.length; i++) {
    tabLinks[i].className = tabLinks[i].className.replace("active", "");
  }

  //   Remove tab Content
  for (i = 0; i < tabContent.length; i++) {
    tabContent[i].style.display = "none";
  }

  //   for Active tab, display the tab content
  evt.currentTarget.className += " active";
  document.getElementById(codeLang).style.display = "block";
}
