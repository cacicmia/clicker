container = document.querySelector('.container');
class Cat {
  constructor(name,image) {
    this.name = name;
    this.image = image;
    this.click = 0;
    this.score = `Clicks to ${this.name}: ${this.click}`;
    this.reachImg = 0;
    this.reachScore= 0;

  }

  makeHTML() {
    let catDiv = document.createElement('div');
    catDiv.setAttribute('class', 'catDiv');
    let score = document.createElement('p');
    score.setAttribute('class',`${this.name}-score`);
    score.innerHTML= this.score;
    let pic = document.createElement('img');
    pic.setAttribute('src', this.image);
    pic.setAttribute('alt', this.name);
    pic.setAttribute('class',this.name);
    catDiv.append(score);
    catDiv.append(pic);
    container.append(catDiv);
    this.reachImg = document.querySelector(`.${this.name}`);
    this.reachScore = score;
    this.reachImg.addEventListener('click', this.clickCount.bind(this));

  }
  clickCount() {

    this.click++;
    this.reachScore.textContent = this.score;
  }


}

const cat1 = new Cat('Cato', 'img/cat_b.jpg');
const cat2 = new Cat('Gato', 'img/cat2.jpg');
const cats = [];
cats.push(cat1, cat2);
cats.forEach(cat => {
  cat.makeHTML();
});
