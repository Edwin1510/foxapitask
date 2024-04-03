const apiUrl = "https://randomfox.ca/floof/";

const imageArea = document.getElementById("fox-image");
const overlay = document.getElementById("overlay");



const loadFoxImage = ({ image }) => {
  imageArea.innerHTML = "";
   const imgElement = document.createElement("img");
   imgElement.src = image;
   imageArea.appendChild(imgElement);
   overlay.style.display = "none";
 
};



const getRandomFox = async () => {
 overlay.style.display = "flex";
  const response = await fetch(apiUrl);
  const data = await response.json();

  loadFoxImage(data);
  
};

getRandomFox();