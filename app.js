
var model = {
    currentCat: null,
    cats: [
       { name:'Cato', 
        image:'img/cat_b.jpg',
        click: 0,
              
       },

      { name:'Gato', 
        image:'img/cat2.jpg',
        click: 0,
        
        },

        {name:'Mato', 
        image:'https://r.hswstatic.com/w_907/gif/tesla-cat.jpg',
        click: 0,
        
       },

        {name:'Zlato', 
        image:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4NUg90aJh3gM6zchd5OQMxDighSXpvg4xYY5kM1JnHY83cU2Z',
        click: 0,
       
       },

        {name:'Nato', 
        image:'https://boygeniusreport.files.wordpress.com/2017/01/cat.jpg?quality=98&strip=all&w=782',
        click: 0,
       
        }
    ]
  }
var octopus = {
  init: function(){
    model.currentCat= model.cats[0];
    listView.init();
    catView.init();
  },
  getCats: function(){
    return model.cats;
  },
  getCurrent: function(){
    return model.currentCat;
  },
  setCurrent: function(cat){
    model.currentCat = cat;
  },
  incrementer: function(){
    model.currentCat.click++;
    catView.render();
  }
}

var listView = {

  init:function(){
   this.catList = document.querySelector('.catList') ;  
   this.render();
   
  },
  render: function(){
    var cats = octopus.getCats();
    let  cat, el;
    
    for (let i=0; i<cats.length; i++ ) {
      cat = cats[i];
      
      el = document.createElement('li');
    
      el.setAttribute('class', `${cat.name}-name`);
      el.textContent = `${cat.name}`;
     
      el.addEventListener('click', (function(catCopy){
        return function(){
          octopus.setCurrent(catCopy);
          catView.render();
        };
      })(cat));
     this.catList.append(el);

     
    };
  }

}
 var catView = {
   init: function(){
    this.seeMeow = document.querySelector(".seeMeow");
    this.p = document.querySelector('.info');
    this.img = document.querySelector('.cat-img');
    this.img.addEventListener('click', function(){
      
         octopus.incrementer();
      
    });
    this.render();
   },

   render: function(){
     let current = octopus.getCurrent();
    
     this.p.innerHTML = `${current.name} was clicked: ${current.click} time(s)`;
     this.img.setAttribute('src', current.image);
     this.img.setAttribute('alt',current.name);
    
   



   }

 };

octopus.init();