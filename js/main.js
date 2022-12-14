

//du lieu dau vao dang JSON
let dataGlasses = [
    {id:"G1",src:"./img/g1.jpg",virtualImg:"./img/v1.png",brand:"Armani Exchange",name:"Bamboo wood",color:"Brown",price:150,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis ea voluptates officiis?"},
    {id:"G2",src:"./img/g2.jpg",virtualImg:"./img/v2.png",brand:"Arnette",name:"American flag",color:"American flag",price:150,description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. In assumenda earum eaque doloremque, tempore distinctio."},
    {id:"G3",src:"./img/g3.jpg",virtualImg:"./img/v3.png",brand:"Burberry",name:"Belt of Hippolyte",color:"Blue",price:100,description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit."},
    {id:"G4",src:"./img/g4.jpg",virtualImg:"./img/v4.png",brand:"Coarch",name:"Cretan Bull",color:"Red",price:100,description:"In assumenda earum eaque doloremque, tempore distinctio."},
    {id:"G5",src:"./img/g5.jpg",virtualImg:"./img/v5.png",brand:"D&G",name:"JOYRIDE",color:"Gold",price:180,description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Error odio minima sit labore optio officia?"},
    {id:"G6",src:"./img/g6.jpg",virtualImg:"./img/v6.png",brand:"Polo",name:"NATTY ICE",color:"Blue, White",price:120,description:"Lorem ipsum dolor, sit amet consectetur adipisicing elit."},
    {id:"G7",src:"./img/g7.jpg",virtualImg:"./img/v7.png",brand:"Ralph",name:"TORTOISE",color:"Black, Yellow",price:120,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim sint nobis incidunt non voluptate quibusdam."},
    {id:"G8",src:"./img/g8.jpg",virtualImg:"./img/v8.png",brand:"Polo",name:"NATTY ICE",color:"Red, Black",price:120,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Reprehenderit, unde enim."},
    {id:"G9",src:"./img/g9.jpg",virtualImg:"./img/v9.png",brand:"Coarch",name:"MIDNIGHT VIXEN REMIX",color:"Blue, Black",price:120,description:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit consequatur soluta ad aut laborum amet."}
];

import {Glasses} from "./glasses.js";
import {GlassesList} from "./glassesList.js";
// import { Glasses } from "./glasses.js";
// import { GlassesList } from "./glassesList.js";
let glassesList = new GlassesList();
//rut gon cu phap getEle
const getEle = (id) => {
    return document.getElementById(id);
}

//duyet mang, tao cac doi tuong bang cac thuoc tinh, them vao mang doi tuong

const showGlassesList = () => {
    //lay ra bang hien thi cac loai kinh
    let divGlassesList = getEle("vglassesList");

    dataGlasses.map((item) => {
        let gl = new Glasses(item.id, item.src, item.virtualImg,item.brand, item.name, item.color, item.price, item.description);
        glassesList.addGlasses(gl);
    });
    console.log(glassesList);
    divGlassesList.innerHTML = glassesList.renderGlasses();
    // console.log(glassesList);
}

showGlassesList();

const tryOnGlasses= (event) => {
    //lay ra id cua doi tuong duoc click
    //target la noi luu tru thong tin cua cac the duoc click qua su kien event
    let gID = event.target.getAttribute("data-id");

    //duyet vong lap, lay ra doi tuong duoc click thong qua id
    let gObject = new Glasses();
    for (let value of glassesList.glist) {
        if (gID==value.id) {
            gObject = value;
        }
    }
    showInfo(gObject);
}

window.tryOnGlasses = tryOnGlasses; //chuyen ham sang window de co the khai bao ham o bat ki daum, khac phuc type=module cua file main

//show kinh dc chon gan vao mat 
const showInfo = (gObject) =>{
    let divAvatar = getEle("avatar");
    let divInfo = getEle("glassesInfo");

    let status = "";
    if (gObject.status) {
        status = "stocking";
    } else {
        status = "sold out";
    }
    divAvatar.innerHTML = `
        <img id="glasses" src="${gObject.virtualImg}">
    `;
    divInfo.innerHTML = `
        <h5>${gObject.name} - ${gObject.brand} (${gObject.color})</h5>
        <p class="card-text">
            <span class="btn btn-danger btn-sm mr-2">$${gObject.price}</span>
            <span class= "text-success">${status}</span>
        </p>
        <p class="card-text">
            ${gObject.desc}
        </p>
    `;
    divInfo.style.display = "block";

}

const removeGlasses= (isDisplay) => {
    let glasses = getEle("glasses");

    if(glasses!=null) {
        if(isDisplay) {
            glasses.style.opacity = 0.9;
        } else {
            glasses.style.opacity = 0;
        }
    }
}
window.removeGlasses = removeGlasses;
 