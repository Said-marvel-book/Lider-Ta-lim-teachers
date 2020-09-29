var pods = document.getElementById("podstav");
var counter = 0;
var imgslide = document.querySelector(".slide");
var nav = document.querySelector(".nav");
var tup = document.querySelector(".tup");
var sle = document.querySelector(".sled")
var photos =[
    {size:[450, 450], text:"Наша Ольга Юрьевна. Учительница по истории вошедшая в историю!", sled: "", transform: "rotate(0deg)"},
    {size:[450, 450], text:"Ёдгора Рахматуллаевна. И Моцарт позавидовал. ", sled: "", transform: "rotate(0deg)"},
    {size:[450, 450], text:"Ustozimiz muxlislar olomonidan tabriklar bilan kengash fonida", sled: " ", transform: "rotate(0deg)"},
    {size:[450, 450], text:"Эксперт. И не в одной области.", sled: " ", transform: "rotate(0deg)"},
    {size:[250, 450], text:"Наргиза Мирзахашимовна молекулам всем, нос утрёт", sled: " Любой кто урок пропустит с ума сойдёт.", transform: "rotate(0deg)"},
    {size:[450, 450], text:"Что-то болит? Иди к Людмиле Николаевне. Голова, нога, рука, живот и всё остальное!", sled: " ", transform: "rotate(0deg)"},
    {size:[450, 500], text:"Ольга Владимировна точно знает, что кофе который у неё в руке мужского рода", sled: " ", transform: "rotate(0deg)"},
    {size:[450, 450], text:"Феруза Насыровна. Пифагор услышал и в гробу перевернулся", sled: " ", transform: "rotate(0deg)"},
    {size:[330, 450], text:"Феруза Ассадулаевна ", sled: " ", transform: "rotate(0deg)"},
    {size:[310, 500], text:"Камила Адхамовна самая... Фотография сама за себя говорит", sled: " ", transform: "rotate(0deg)"},
    {size:[450, 450], text:"Наша любимая Малика Пулатовна. Вездесущий завуч.", sled: " ", transform: "rotate(0deg)"},
    {size:[450, 450], text:"Максим Евгеньевич. Неостановимая сила. ", sled: " ", transform: "rotate(0deg)"},
    {size:[450, 450], text:"Феруза Наримановна. Бизнес-леди, бабушка, директор школы и отличный человек. Ни для кого не секрет она супергерой.", sled: " ", transform: "rotate(0deg)"},
    {size:[380, 470], text:"Do you speak English? Yes, we are. All thanks to Miss Linara", sled: "", transform: "rotate(0deg)"},
    {size:[330, 450], text:"", sled: " ", transform: "rotate(0deg)"},
    {size:[600, 450], text:"", sled: " ", transform: "rotate(0deg)"},
    {size:[450, 450], text:"", sled: " ", transform: "rotate(0deg)"},
    {size:[350, 450], text:"", sled: " ", transform: "rotate(0deg)"},
];
var strr = document.querySelector(".strr");
strr.addEventListener("click", next);
var strl = document.querySelector(".strl");
strl.addEventListener("click", prev);
function next(){
    if(counter == 18){
        imgslide.setAttribute("src", "img/0.jpg");
        imgslide.style.width = photos[0].size[0] + "px";
        imgslide.style.height = photos[0].size[1] + "px";
        tup.textContent = photos[0].text;
        sle.textContent = photos[0].sled;
        tup.style.color = photos[0].color;
        counter=0;
        imgslide.style.transform = photos[0].transform;
        pods.textContent = counter+1;
        imgslide.addEventListener("click", bolshe);
    }else{
        counter++;
        imgslide.setAttribute("src", "img/" + counter+ ".jpg");
        console.log(counter);
        imgslide.style.width = photos[counter].size[0] + "px";
        imgslide.style.height = photos[counter].size[1] + "px";
        tup.textContent = photos[counter].text;
        sle.textContent = photos[counter].sled;
        tup.style.color = photos[counter].color;
        imgslide.style.transform = photos[counter].transform;
        pods.textContent = counter+1;
        imgslide.addEventListener("click", bolshe);
}
}
function prev(){
    if(counter == 0){
        counter = 51;
        imgslide.setAttribute("src", "img/" + counter +".jpg");
        imgslide.style.width = photos[counter].size[0] + "px";
        imgslide.style.height = photos[counter].size[1] + "px";
        tup.textContent = photos[51].text;
        sle.textContent = photos[51].sled;
        tup.style.color = photos[51].color;
        imgslide.style.transform = photos[51].transform;
        pods.textContent = counter+1;
        console.log(counter);
        imgslide.addEventListener("click", bolshe);
    }else{
        counter--;
        imgslide.setAttribute("src", "img/" + counter +".jpg");
        imgslide.style.width = photos[counter].size[0] + "px";
        imgslide.style.height = photos[counter].size[1] + "px";
        pods.textContent = counter+1;
        imgslide.style.transform = photos[counter].transform;
        tup.textContent = photos[counter].text;
        sle.textContent = photos[counter].sled;
        tup.style.color = photos[counter].color;
        console.log(counter);
        imgslide.addEventListener("click", bolshe);
    }
}
imgslide.addEventListener("click", bolshe);
imgslide.addEventListener("contextmenu", menshe);
function bolshe(){
    imgslide.style.height = photos[counter].size[1] + 10 + "px";
    imgslide.style.width = photos[counter].size[0] + 10 + "px";
    photos[counter].size[0] += 10;
    photos[counter].size[1] += 10;
    imgslide.addEventListener("click", bolshe);
    imgslide.addEventListener("contextmenu", menshe);
}
function menshe(){
    if(photos[counter].size[0] < 30 || photos[counter].size[1] < 30){
        
    }else{
    imgslide.style.height = photos[counter].size[1] - 10 + "px";
    imgslide.style.width = photos[counter].size[0] - 10 + "px";
    photos[counter].size[0] -= 10;
    photos[counter].size[1] -= 10;
    imgslide.addEventListener("click", bolshe);
    imgslide.addEventListener("contextmenu", menshe);
    }
}