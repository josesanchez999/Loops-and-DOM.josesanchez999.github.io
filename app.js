const names = ["Nate", "Jose", "Buzz", "Kevin", "Legend", "Teo"]

for(name of names){
    if(name === 'Nate'){
        console.log('Nate is the best Call Of Duty player.');
    }
}
let loading = 0;
while (loading < 100){
    console.log("Website is still loading but Kevin is a bot 100%.")
    loading++;
};

const text = document.querySelector(".title");
const changeColor= document.querySelector(".changeColor");

changeColor.addEventListener('click', function(){
    text.classList.toggle("change");

});


const userList = document.querySelectorAll(".name-list li");
const listInput = document.querySelector(".list-input");
const addListBtn = document.querySelector(".addListBtn");

addListBtn.addEventListener('click', function(){
    const newLi = document.createElement('LI');
    const liContent = document.createTextNode(listInput.value);

    newLi.appendChild(liContent);

    userList[0].appendChild(newLi);
});