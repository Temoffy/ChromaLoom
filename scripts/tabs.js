//Timothy H., feb 2025
//class project ChromaLoom

//handles the 2 tab layers, credit to https://www.w3schools.com/howto/howto_js_tabs.asp for the starting point
function openTab(tabsetName, tabName) {
    var tabGroup, oldTabs, activeTab;
  
    //don't touch any other tab systems!
    tabGroup = document.getElementById(tabsetName);

    // unselect all buttons and hide content
    oldTabs = tabGroup.getElementsByClassName("active "+tabsetName);
    while (oldTabs.length>0) {//for (var i = 0; i < tabLinks.length; i++) {
        oldTabs[0].className = oldTabs[0].className.replace(" active", "");
    }

    // Show the right tab contents and select the button
    activeTab = tabGroup.getElementsByClassName(tabName);//[0].className += " active";
    for (var i = 0; i < activeTab.length; i++) {
        activeTab[i].className = activeTab[i].className += " active";
    }
}