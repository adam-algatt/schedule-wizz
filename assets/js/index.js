
//set current date in header
let divIds = ['9', '10', '11', '12', '13', '14', '15', '16'];
const divContainer = $('#hour-container');
const scheduleContainer = $('#schedule');
$('#date').text(moment().format('dddd, MMMM Do YYYY'));

$(document).ready(() => {
let currentTime = moment().format('H');
divIds.forEach((id, index) => {
  let timeDifference =  Number(divIds[index]) - currentTime; 
  let tense;
  // move tense id set to separate function that can be called at intervals
  //so that the colors correlate with time if app is left open
  if (timeDifference > 0) {
    tense = "future"
  } else if (timeDifference < 0) {
    tense = "past"
  } else {
   tense = "present"
  }
  console.log(tense);
  
  // console.log(id);
  // if divIds[index] - currentTime < 0 
  
  scheduleContainer.append(`<div id=${tense} class="row col-12 border border-dark px-0">
  <div id=${divIds[index]} class="col-2">
    ${divIds[index]}:00
  </div>
  <div class="col-9 border-left border-right border-dark">
    stuff

  </div>
    <button id="save-button" type="button " class="btn border-0 saveBtn hover-shadow mx-auto py-1 px-2">
      💾
    </button>
    </div>`)
    $('.col-2').each(function () {
   let time = parseInt(this.id, 10);
  //  console.log(this);
  //  if (time - currentTime < 0) {
  // this.attr('time', 'past')  
  // } else if (time - currentTime > 0) {
  //   this.attr('time', 'future')  
  //  } else {
  //   this.attr('time', 'present') 
  //  }
    })
  
})
})
// console.log(currentTime);
//generate list items 
// 8 hr workday 09:00, 10:00, 11:00, ... 13:00;





// var createTask = function (taskText, taskDate, taskList) {
//     // create elements that make up a task item
//     var taskLi = $("<li>").addClass("list-group-item");
//     var taskSpan = $("<span>")
//       .addClass("badge badge-primary badge-pill")
//       .text(taskDate);
//     var taskP = $("<p>")
//       .addClass("m-1")
//       .text(taskText);
  
//     // append span and p element to parent li
//     taskLi.append(taskSpan, taskP);
  
//     // append to ul list on the page
//     $("#list-" + taskList).append(taskLi);
//   };

