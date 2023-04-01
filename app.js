const leftSlide=document.querySelector('.left-container');
const rightSlide=document.querySelector('.right-container');
const slideCount= document.querySelectorAll('.right-container div').length;
const upBtn=document.querySelector('.up');
const downBtn=document.querySelector('.down');
rightSlide.style.top=`-${(slideCount-1)*100}vh`;  //-400vh
const righttopValue=-(slideCount-1)*100;
const lefttopValue=0;
let activeSlide=0;  
console.log(rightSlide.style.top);                             // as=1       
upBtn.addEventListener('click', slide);
downBtn.addEventListener('click', slide);
function slide(e){
    if(e.target.classList.contains('up'))
    {
        activeSlide++;
        if(activeSlide<slideCount)
        {
            leftSlide.style.top=`-${activeSlide*100}vh`;
            rightSlide.style.top=`${righttopValue+(activeSlide*100)}vh`;
            // console.log(rightSlide.style.top);
        }
        else{
            leftSlide.style.top=`0vh`;
            rightSlide.style.top=`${righttopValue}vh`;
            activeSlide=0;
        }
    }
    if(e.target.classList.contains('down'))                     
    {
        activeSlide--;                  
        if(activeSlide>=0)
        {                 
            // console.log(temp);                        
            leftSlide.style.top=`-${activeSlide*100}vh`;
            rightSlide.style.top=`${righttopValue+(activeSlide*100)}vh`;
            console.log(rightSlide.style.top + " "+ activeSlide);
        }
        else{
            leftSlide.style.top=`-${(slideCount-1)*100}vh`;
            rightSlide.style.top=`0vh`;
            activeSlide=4;
        }
    }
}
