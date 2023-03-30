var openmnEl = document.getElementById('menubtn');
let closemnEl = document.getElementById('menuclose');
let navEl = document.getElementById('nav');
let listEl = document.getElementById('list');
//when max-width <=768
function menuDisplay(){
    openmnEl.style.display = 'flex';
    openmnEl.style.justifyContent = 'flex-end';
    listEl.style.display = 'none';
    closemnEl.style.display = 'none';
}
//when openmnEl is clicked
function openmnElClick(){
    openmnEl.style.display = 'none';
    closemnEl.style.display = 'flex';
    navEl.style.display = 'block';
    listEl.style.display = 'block';
};
//when closemnEl is clicked
function closemnElClick(){
    openmnEl.style.display = 'flex';
    closemnEl.style.display = 'none';
    navEl.style.display = 'flex';
    listEl.style.display = 'none';
};

//when max-width > 768 or above Breakpoint(BP)
function AboveBP(){
    openmnEl.style.display = 'none';
    closemnEl.style.display = 'none';
    listEl.style.display = 'flex';
    navEl.style.display = 'flex';
};

//1.when page is resized
window.addEventListener('resize', function(){
    if (this.window.innerWidth <= 768){
        menuDisplay();
        openmnEl.addEventListener('click', function(){
            openmnElClick();
        });
        closemnEl.addEventListener('click', function(){
          closemnElClick(); 
        })
    }else{
       AboveBP();
        
    }
})
// 2. when the pages loads
window.addEventListener('load', function(){
    if (this.window.innerWidth <= 768){
        menuDisplay();
        
        openmnEl.addEventListener('click', function(){
            openmnElClick();
        });
        closemnEl.addEventListener('click', function(){
           closemnElClick();
        });
    }else{
       AboveBP();
    }
});

