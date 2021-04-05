const cups = document.querySelectorAll('.cup')
const litre = document.getElementById('litre');
const percent  = document.querySelector('.percentage');
const bigcup = document.querySelector('.bigcup');

const remained = document.querySelector('.remained');

updateCup()
cups.forEach((cup,idx) =>{
    cup.addEventListener('click',() => fillcup(idx));
})

function fillcup(idx){
    if(cups[idx].classList.contains('fill') && !cups[idx+1].classList.contains('.fill')){
        idx--
    }
    cups.forEach((cup,index)=>{

        if(index <= idx){
            cup.classList.add('fill');
        }
        else{
            cup.classList.remove('fill');
        }
    })
    updateCup()
}

function updateCup(){

    const fullcups =document.querySelectorAll('.cup.fill').length;
    const totalcups = document.querySelectorAll('.cup').length;
    if(fullcups === 0){

        bigcup.classList.remove('fill');
        percent.innerHTML =` `;
        percent.style.height = `${((fullcups /totalcups)*350)}px`;
        remained.style.display ='block';
        remained.innerHTML=`${2-(fullcups /totalcups)*2}L <br><small>Remained</small>`;
    }
    else{

        if(fullcups === totalcups){
            bigcup.classList.add('fill');
            remained.innerHTML=`<small>Congratulations !!! You have finished your daily goal<img src="images/celeb.svg"></small>`;
            percent.innerHTML =` `;
            percent.style.height = `${((fullcups /totalcups)*350)}px`;
        }
        else{
            remained.style.display ='block';
            remained.innerHTML=`${2-(fullcups /totalcups)*2}L <br><small>Remained</small>`;
            percent.style.display='flex';
            percent.style.height = `${((fullcups /totalcups)*350)}px`;
            percent.innerHTML =`<h3>${(fullcups /totalcups)*100}%</h3>`;
        }
}

}