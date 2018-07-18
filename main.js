function getfile(file,callback){
  var xhr = new XMLHttpRequest();
  xhr.overrideMimeType("application/json");
  xhr.open("GET",file,true);
  xhr.onreadystatechange = function(){
    if(xhr.readyState === 4 && xhr.status == "200"){
      callback(xhr.responseText);
    }
  };
xhr.send();
}
getfile("data.json",function(text) {
  var data = JSON.parse(text);
  console.log(data);
  details(data.basics);
  career(data.Careerobjective);
})
var child = document.querySelector(".childone");
function details(det){
  var img = document.createElement("img");
  img.src = det.image;
  child.appendChild(img);
  var name = document.createElement("h3");
  name.textContent = det.name;
  child.appendChild(name);
  var phoneno = document.createElement("h3");
  phoneno.textContent = det.phoneno;
  child.appendChild(phoneno);
  var mail = document.createElement("a");
  mail.href = "mailto:hellosmiley.143@gmail.com"
  mail.textContent = det.email;
  child.appendChild(mail);
  var address = document.createElement("h3");
  address.textContent = "Address";
  child.appendChild(address);
  var address = document.createElement("hr");
  child.appendChild(address);
  var address = document.createElement("h2");
  address.textContent = det.address;
  child.appendChild(address);
}
var child2 = document.querySelector(".childtwo");
function career(careerinfo){
  var address = document.createElement("h3");
  address.textContent = "Career Objective";
  child2.appendChild(address);
  var address = document.createElement("hr");
  child2.appendChild(address);
  var add = document.createElement("p");
  add.textContent = careerinfo.info;
  child2.appendChild(add);
}
