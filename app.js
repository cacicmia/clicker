const cat = document.querySelector('.cat');
const score = document.querySelector('.score');
let i=0;
cat.addEventListener('click', count);
function count() {
i++;
score.textContent = `Score: ${i}`;
}
