const container = document.querySelector('.container');
const catList = document.createElement('ol');
catList.setAttribute('class', 'catList');
container.appendChild(catList);
const seeMeow = document.createElement('div');
seeMeow.setAttribute('class',"seeMeow");


class Cat {
  constructor(name,image) {
    this.name = name;
    this.image = image;
    this.click = 0;
    this.score = `${this.name} was clicked: ${this.click} time(s)`;
    this.reachImg = 0;
    this.reachCat=0;
    this.reachScore= 0;

  }

  makeHTML() {
    let catName = document.createElement('li');
    catName.setAttribute('class',`${this.name}`);
    catName.innerHTML= `${this.name}`;
    catList.appendChild(catName);
   

    this.reachCat= document.querySelector(`.${this.name}`);
    this.reachCat.addEventListener('click', this.seeCat.bind(this));
   
    
  }
  seeCat() {
    console.log(this);
    seeMeow.innerHTML= "";
    
    let score = document.createElement('p');
    score.setAttribute('class',`${this.name}-score`);
    score.innerHTML= this.score;
    let pic = document.createElement('img');
    pic.setAttribute('src', this.image);
    pic.setAttribute('alt', this.name);
    pic.setAttribute('class',`${this.name}-img`);
    seeMeow.appendChild(score);
    seeMeow.appendChild(pic);
    container.appendChild(seeMeow);
    this.reachImg = document.querySelector(`.${this.name}-img`);
    this.reachScore= document.querySelector(`.${this.name}-score`);
    this.reachImg.addEventListener('click', this.clickCount.bind(this));

  }
  clickCount() {

    this.click++;
    this.score = `${this.name} was clicked: ${this.click} time(s)`;
    this.reachScore.textContent = this.score;
  }


}

const cat1 = new Cat('Cato', 'img/cat_b.jpg');
const cat2 = new Cat('Gato', 'img/cat2.jpg');
const cat3 = new Cat('Mato', 'https://r.hswstatic.com/w_907/gif/tesla-cat.jpg');
const cat4 = new Cat('Zlato', 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4NUg90aJh3gM6zchd5OQMxDighSXpvg4xYY5kM1JnHY83cU2Z');
const cat5 = new Cat('Nato', 'https://boygeniusreport.files.wordpress.com/2017/01/cat.jpg?quality=98&strip=all&w=782');
const cats = [];
cats.push(cat1, cat2, cat3, cat4, cat5);
cats.forEach(cat => {
  cat.makeHTML();
});
