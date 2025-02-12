const overlay = document.getElementById("overlay");
const popup = document.getElementById("popup");
const body = document.body;
// Function to show the popup
function openPopup(title,desc,img,linkArray) {
    generateLinks(linkArray);
    popup.style.display = "block";
    overlay.style.display = "block";
    document.getElementById("popup-title").innerText = title;
    document.getElementById("popup-desc").innerText = desc;
    document.getElementById("popup-img").src = img;
    body.classList.add("no-scroll");
}

function closePopup() {
    popup.style.display = "none";
    overlay.style.display = "none";
    body.classList.remove("no-scroll");
}


function showTab(index) {
    let tabs = document.querySelectorAll(".tab");
    let contents = document.querySelectorAll(".tab-content");
    
    tabs.forEach(tab => tab.classList.remove("active"));
    contents.forEach(content => content.classList.remove("active"));
    
    tabs[index].classList.add("active");
    contents[index].classList.add("active");
}

// Function to generate list
function generateLinks(linkArray) {
    const list = document.getElementById("link-list");
    list.innerHTML = "";
    
    linkArray.forEach(link => {
        const a = document.createElement("a");
        a.href = link.url;
        a.textContent = link.text;
        a.classList.add("popup-link");
        a.target = "_blank"
        list.appendChild(a);
    });
}