phoneObject = {
    iphone: {
        brand: "Iphone",
        model: "13 Pro Max",
        camera: "13 MegaPixel , 4K Video 60fps",
        storage: 512,
        display: "HDR 10 + Dolby Digital",
        pic : "./Iphone/1.jpg",

    },
    samsung: {
        brand: "Samsung",
        model: "S21 Ultra 5G",
        camera: "108 MegaPixel 8K Video 60fps",
        storage: 512,
        display: "HDR 10",
        pic : "./Samsung/1.jpg",
    },
    vivo: {
        brand: "Vivo",
        model: "X70 Pro Plus",
        camera: "Zies Camera 108 MegaPixel 8K Video 60fps",
        storage: 256,
        display: "HDR 10",
        pic : "./Vivo/1.jpg",
    },
    oppo : {
        brand: "Oppo",
        model: "Oppo Reno 8 Pro",
        camera: "108 MegaPixel 6K Video 60fps",
        storage: 256,
        display: "HDR 10",
        pic : "./Oppo/1.jpg",
    }
    ,
    realme : {
        brand: "Realme",
        model: "Realme 9 Pro 5G",
        camera: "108 MegaPixel 8K Video 60fps",
        storage: 128,
        display: "HDR 10",
        pic : "./Realme/1.jpg",
    }

}
var brandHeading = document.getElementById("brandHeading"); //heading of Brand
var phoneImg = document.getElementById("phoneImg"); // Image Tage of Brand
var htmlList = document.getElementsByClassName("htmlList")
var brand = document.getElementById("brand");
var model = document.getElementById("model");
var mainBox = document.getElementById("mainBox");
var nextPage = document.getElementById("nextPage");
function sub(){


    nextPage.className = "show";
    console.log(phoneObject[brand.value]);

    // console.log(brand.value);
    // console.log(model.value);
    brandHeading.innerHTML = phoneObject[brand.value].brand;
    htmlList[0].innerHTML = phoneObject[brand.value].model;
    htmlList[1].innerHTML = phoneObject[brand.value].camera;
    htmlList[2].innerHTML = phoneObject[brand.value].storage;
    htmlList[3].innerHTML = phoneObject[brand.value].display;
    phoneImg.src = phoneObject[brand.value].pic;



    // mainBox.style.display = "none";
    mainBox.className = "hide";

    brand.value = "";
    model.value = "";
    return false;
    
}

function clickbrand(e){
    // console.log(e.innerHTML);
    brand.value = e.innerHTML;
}

function clickmodel(e){
    // console.log(e.innerHTML);
    model.value = e.innerHTML;
}
    
function searchAgain(){
    nextPage.className = "hide";
    mainBox.className = "show";
}