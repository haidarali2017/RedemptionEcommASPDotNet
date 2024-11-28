
function SwapImage(ObjectID, AppendText, ImagePathAppend) {
   var ObjLeft = document.getElementById('left' + ObjectID);
   ObjLeft.style.background = "url(" + ImagePathAppend + "Images/tab-button-main/" + AppendText + "left.png)";

   var ObjRight = document.getElementById('right' + ObjectID);
   ObjRight.style.background = "url(" + ImagePathAppend + "Images/tab-button-main/" + AppendText + "right.png)";

   var ObjCenter = document.getElementById('center' + ObjectID);
   ObjCenter.style.background = "url(" + ImagePathAppend + "Images/tab-button-main/" + AppendText + "center.png)";
}
function GetElementTop(eSrc) {
   var iTop = 0;
   var eParent;
   eParent = eSrc;
   while (eParent.tagName.toUpperCase() != "BODY") {
      iTop += eParent.offsetTop;
      eParent = eParent.offsetParent;
   }
   return iTop;
}
function GetElementLeft(eSrc) {
   var iLeft = 0;
   var eParent;
   eParent = eSrc;
   while (eParent.tagName.toUpperCase() != "BODY") {
      iLeft += eParent.offsetLeft;
      eParent = eParent.offsetParent;
   }
   return iLeft;
}

var buttonToDisable = null;
function DisableButton(btn) {
   buttonToDisable = btn;
   setTimeout("if(buttonToDisable!=null){ buttonToDisable.disabled=true; }", 100);
}