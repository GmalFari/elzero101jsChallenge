let container = document.createElement("div");
container.className="contain";


let myScript = document.getElementById("js");

let headerPage =  document.createElement("header");
let mainDiv = document.createElement("div");
mainDiv.className="container";

// appends to header


//logo
let divLogo = document.createElement("div");
divLogo.className = "logo";
let logo = document.createElement("h1");
let logoContent = document.createTextNode("Development");
logo.appendChild(logoContent);
divLogo.appendChild(logo);
mainDiv.appendChild(divLogo);
headerPage.appendChild(mainDiv);

let nav = document.createElement("nav");
nav.id ="navbar";
let ul = document.createElement("ul");
ul.id = "unorder";

//text content
let home =document.createTextNode("home");
let about = document.createTextNode("about");
let services = document.createTextNode("services");
let news = document.createTextNode("news");

// navigation bar
for(i=1;i<5;i++){
    let li = document.createElement("li");
    let ancor = document.createElement("a");
    ancor.style.cssText = "padding:5px 20px !important;text-decoration:none;";

    
    ancor.href="#";
    if (i === 1){
        ancor.appendChild(home);
    }else if (i === 2){
        ancor.appendChild(about);
    }else if (i === 3){
        ancor.appendChild(services);
    }else if (i === 4){
        ancor.appendChild(news);
    }

    // ancor.appendChild(ancorContent);
    li.appendChild(ancor);
    ul.appendChild(li);

}
nav.appendChild(ul);
mainDiv.appendChild(nav);
headerPage.appendChild(mainDiv);
console.log(ul.children[0].children[0].children[0]);

// //style
mainDiv.style.cssText="display:flex; justify-content:space-between;align-items:center";
divLogo.style.cssText="color:blue; font-size: 12px; font-weight:bold";
nav.style.cssText = "flex:1";
ul.style.cssText = "display:flex; flex:1; justify-content:flex-end;align-items:center; list-style:none;";

container.appendChild(headerPage);



let mainSection = document.createElement("main");
mainSection.style.cssText = "border:10px solid #DDD; \
display: grid;\
 grid-template-columns: repeat(3,1fr);\
 grid-template-rows: repeat(5,auto);\
 gap: 10px 10px;background-color: #DDD;"



 //create content section

for(i=1;i<=15;i++){
        
    let section = document.createElement("section");
    section.style.cssText="background-color:#fff;\
                           text-align:center";
    let head2 = document.createElement("h2");
    let p = document.createElement("p");


    let headNode = document.createTextNode(`${i}`);
    let pNode = document.createTextNode("product");

    head2.appendChild(headNode);
    section.appendChild(head2);

    p.appendChild(pNode);
    section.appendChild(p);
    mainSection.appendChild(section);
}



container.appendChild(mainSection);




//append 



//footer

let footer = document.createElement("footer");
footer.style.cssText ="background-color:#219679;width:100%;height:80px";
let footerContent = document.createElement("div");
footerContent.style.cssText = "text-align:center;padding-top:30px";

let copyRight = document.createTextNode("CopyRight 2022");

footerContent.appendChild(copyRight);
footer.appendChild(footerContent);

container.appendChild(footer);
myScript.before(container);
