// When accordion item (heading) is clicked:
// it will get an active state (class with bolded text)
// it will display the extended text
// it will remove the show-text  class from any other accordion item that was clicked previously
//      if they have any 


const questionClick = document.getElementsByClassName('heading'); 

function accordion () {
    for (let i = 0; i < questionClick.length; i++) {
       let item = questionClick[i];
    }
    alert(item);
}



item.addEventListener('click', function (){
    accordion();
})