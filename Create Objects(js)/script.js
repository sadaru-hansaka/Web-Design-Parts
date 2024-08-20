class Box {
    constructor(id, content, color) {
      this.id = id;
      this.content = content;
      this.color = color;
    }
  
    createBox() {
      // Create a div element for the box
      const boxElement = document.createElement('div');
      boxElement.id = this.id;
      boxElement.style.backgroundColor = this.color;
      boxElement.style.border = '1px solid black';
      boxElement.style.padding = '10px';
      boxElement.style.margin = '10px';
      boxElement.innerText = this.content;
      
      boxElement.innerText = `Name: ${this.id}\nAge: ${this.content}\nTelephone: ${this.color}`;
  
      // Append the box to the body (or any other container)
      document.body.appendChild(boxElement);
    }
};



// document.addEventListener('DOMContentLoaded', (event) => {
    
//     // Create instances of the Box class
//     const box1 = new Box('box1', 'This is the content of Box 1', 'lightblue');
    
//     // Add the boxes to the webpage
//     box1.createBox();
// });
  
const searchbtn = document.querySelector('.submit_btn');
const userName = document.getElementById('user_name');
const userAge = document.getElementById('user-age');
const userTel = document.getElementById('user_number');

searchbtn.addEventListener("click", (event)=>{
  event.preventDefault();
  const usName =  userName.value;
  const usAge =  userAge.value;
  const usTe =  userTel.value;

  const box1 = new Box(usName, usAge, usTe);
    
    // Add the boxes to the webpage
  box1.createBox();
});
