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
  loadJson("resume.json",function(text) {
    var data=JSON.parse(text);
    console.log(data);
    leftData(data.profile);
    console.log(data.Education);
    Education(data.Education);

  });

  var left=document.querySelector(".leftDiv");
  console.log(left);
  var right=document.querySelector(".righDiv");

  function leftData(laftDetails){

    var image=document.createElement("img");
    image.src=laftDetails.Image;
    image.alt="Profile Image";
    left.appendChild(image);

    var name=document.createElement("h2");
    name.textContent=laftDetails.name;
    left.appendChild(name);

    var branch=document.createElement("h2");
    branch.textContent=laftDetails.Branch;
    left.appendChild(branch);

    var phno=document.createElement("h2");
    phno.textContent=laftDetails.PhNo;
    left.appendChild(phno);

    var Email=document.createElement("h2");
    Email.textContent=laftDetails.gmail;
    left.appendChild(Email);

    var co=document.createElement("h2");
    co.textContent="Career Object";
    right.appendChild(co);
    right.appendChild(document.createElement("hr"));

    var codata=document.createElement("p");
    codata.textContent=laftDetails.careerobject;
    right.appendChild(codata);


  }
  //create Educational  Details
  function Education(edu){
    var
educational=document.createElement("h3");
educational.textContent="Education Information";
right.appendChild(educational);
right.appendChild(document.createElement("hr"));
for(i in edu){
  let h3=document.createElement("h3");
  h3.textContent=edu[i].degree;
  right.appendChild(h3);

  let ul=document.createElement("ul");
  right.appendChild(ul);

  //create list's li1,li2,li3,li4
let li1=document.createElement("li");
li1.textContent="collage : "+edu[i].college;
ul.appendChild(li1);

let li2=document.createElement("li");
li2.textContent="Branch : "+edu[i].Branch;
ul.appendChild(li2);

let li3=document.createElement("li");
li3.textContent="Marks : "+edu[i].Marks;
ul.appendChild(li3);

let li4=document.createElement("li");
li4.textContent="Education completion : "+edu[i].endDate;
ul.appendChild(li4);

}
  }
  function skills(skill)
  {
    var sk=document.createElement("h1");
    sk.textContent="skills"
    right.appendChild(sk);
    right.appendChild(document.createElement("hr"));
    var p=document.createElement("p");
    p.textContent=skills.os;
    right.appendChild(p);

    var p1=document.createElement("p");
    p1.textContent=skills.ps;
    right.appendChild(p1);

  }
