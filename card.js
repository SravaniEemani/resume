(function () {
  function loadJson(file,callback) {
  var rawFile=new XMLHttpRequest();
  rawFile.overrideMimeType("application/json");
  rawFile.open("GET",file,true);
  rawFile.onreadystatechange = function() {
    if (rawFile.readyState === 4 & rawFile.status == "200"){
  callback(rawFile.responseText);
    }
  }
  rawFile.send(null);

  }
  loadJson("data.json",function(text) {
    var data=JSON.parse(text);
    console.log(data);
    pro(data.profile)
  });
  function pro(Pro){
    var mainDiv=document.querySelector(".mainDIV");
    for (var i in Pro){
    var card=document.createElement("div");
    card.classList.add("card");
    mainDiv.appendChild(card)
    var image=document.createElement("img");
    image.src="images/download.png";
    card.appendChild(image);
    var h1=document.createElement("h1");
    h1.textContent=Pro[i].name;

    var h3=document.createElement("h3");
     h3.textContent=Pro[i].clgname;
     card.appendChild(h3);
     var h4=document.createElement("h4");
     h4.textContent=Pro[i].PhNo;
     card.appendChild(h4)
     var h4=document.createElement("h4");
     h4.textContent=Pro[i].Email;
     card.appendChild(h4);
     var a=document.createElement("a");
     a.href="resume.html";
     card.appendChild(a);
     a.appendChild(h1);
     

   }
   }
})();
