//My information
const firstChoices = ['The Teacher', 'The Neighbor', 'The Fish', 'I', 'The Tiger'];
const secondChoices = ['Ran', 'Swam', 'Leaped', 'Cried', 'Flew'];
const thirdChoices = ['Up a Mountain', 'Under the Water', 'During the Test', 'While Eating', 'In the Desert'];
const fourthChoices = ["In the Summer", "In the Winter", "In the Fall", "In the Spring", "In the Past"];
const fifthChoices = ["On a Boat", "On a Bed", "On a Car", "On a Hill", "On a Roof"];
//Idea is to store last index to be able to print out the choices at the end
let lastSelectedOne = '';
let lastSelectedTwo = '';
let lastSelectedThree = '';
let lastSelectedFour = '';
let lastSelectedFive = '';
//To keep track of what the user is currently on
let choiceOneIndex = 0;
let choiceTwoIndex = 0;
let choiceThreeIndex = 0;
let choiceFourIndex = 0;
let choiceFiveIndex = 0;

//this is the function that will take the parameters thelist for all choices in the lists, index for current index in the list, and lastchoice for last selected choice
function cycleChoices(theLists, index, lastChoice) {
   //getting html element
    const selectedChoice = document.getElementById('selectedChoice').querySelector('p');
   //here i am getting the string based on the index 
    const currentChoice = theLists[index];
   //updating my html with last selected 
    selectedChoice.textContent = `> ${currentChoice}`;
    // here we can cycle through the array and use % to restart to loop at 0 index.  Thank you mdn :)
    index = (index + 1) % theLists.length;
    return index;
}

// Here i am selecting the select button inside of my  html by using id tags with js getElementById
//Am i then using event listener for the click 
//and then i am passing my function which will return a updats number for my variables


