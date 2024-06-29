
setInterval(() => {
    let d = new Date();
    let time = d.toLocaleTimeString();
    let date = d.toLocaleDateString();
    document.querySelector(".Time").innerHTML = time;
    document.querySelector(".Date").innerHTML = date;
},1000)



