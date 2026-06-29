document.body.style.display = "flex";
document.body.style.justifyContent = "center";
document.body.style.alignItems = "center";
document.body.style.height = "100vh";
document.body.style.margin = "0";
document.body.style.gap = "50px";
document.body.style.color = "#FFFFFF";
document.body.style.fontFamily = "Arial";
document.body.style.backgroundColor = "#0B0F19";


let names = ["Laptop", "Mouse", "Keyboard", "Monitor"];

let prices = [80000, 5000, 6000, 45000];

let images = [ "laptop.jpg","mouse.jpg","keyboard.jpg","monitor.jpg"];

const container = document.createElement("div");

container.style.display = "flex";
container.style.justifyContent = "space-around";
container.style.alignItems = "center";
container.style.gap = "20px";
container.style.flexWrap = "wrap";
container.style.backgroundColor = "#0B0F19";
container.style.width = "100%";
container.style.padding = "20px";


document.body.appendChild(container);

for(let i =0; i< names.length; i++)
{
    let card = document.createElement("div");

    card.style.width = "220px";
    card.style.padding = "15px";
    card.style.backgroundColor = "#51a1d6";
    card.style.borderRadius = "10px";
    card.style.border = "2px solid black";
    card.style.textAlign = "center";
    card.style.display = "flex";
    card.style.flexDirection = "column";
    card.style.boxShadow = "0px 10px 30px #525354";
    card.style.transition = "all 0.3s ease";

    let image = document.createElement("img");
    image.setAttribute("src",images[i]);

    image.style.width = "200px";
    image.style.height = "160px";
    image.style.borderRadius = "15px";
    image.style.objectFit = "cover";

    let title = document.createElement("h2");
    title.innerText = names[i];
    title.style.fontWeight = "800";

    let price = document.createElement("p");
    price.innerText = `Rs. ${prices[i]}`;
    price.style.backgroundColor = "#2e5e72";
    price.style.padding = "2px";
    price.style.borderRadius = "10px";


    let button = document.createElement("button");
    button.innerText = "Buy Now";
    button.style.border = "none";
    button.style.fontSize = "1rem";
    button.style.fontWeight = "700";
    button.style.backgroundColor = "#ffffff"
    button.style.padding = "10px"
    button.style.width = "100%";
    button.style.cursor = "pointer";

    button.addEventListener("click", () =>
    {
        if(button.innerText === "Buy Now")
        {
            button.innerText = "✓ Added to Cart";
            button.style.backgroundColor = "green";
            button.style.color = "white";
        }
        else
        {
            button.innerText = "Buy Now";
            button.style.backgroundColor = "white";
            button.style.color = "black";
        }
    });

    card.append(image,title,price,button);
    
    container.appendChild(card);
}