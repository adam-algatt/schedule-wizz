//set current date in header
$('#date').text(moment().format('dddd, MMMM Do YYYY'));
// array holding standard work day hours
let divIds = ['9', '10', '11', '12', '13', '14', '15', '16', '17'];
const scheduleContainer = $('#schedule');
// count to ensure schedule rows are only inserted in the schedule container once
let count = 0;

function setTense() {
  let tense;
let currentTime = (moment().format('H'));

divIds.forEach((id, index) => {
  let timeDifference =  Number(divIds[index]) - currentTime; 
  // sets tense for color coding (on first run of setTense)
    if (timeDifference > 0) {
    tense = "future"
  } else if (timeDifference < 0) {
    tense = "past"
  } else {
   tense = "present"
  }

if (count === 0) {
  scheduleContainer.append(`<div id=${tense} class="row col-12 border border-dark px-0 rounded">
  <div id="time-${divIds[index]}" class="col-2 text-center my-auto">
    ${divIds[index]}:00
  </div>
  <textarea id="notes-${divIds[index]}" class="col-9 border-left border-right border-dark p-1" >
  </textarea>
    <button id="${divIds[index]}" type="button" class="btn border-0 col-1 saveBtn hover-shadow mx-auto py-1 px-2">
      💾
    </button>
    </div>`)
    $(`#notes-${divIds[index]}`).val(localStorage.getItem(`notes-${divIds[index]}`));
}else{
  $('.row').each(function(index, value){
    let button = $(value).children('button');
    let buttonId = $(button).attr('id');
    // tense stored as .row div id attribute
    let currentTense = this.id; 
   let updatedTimeDifference = buttonId - currentTime;
  //changes tense for color coding after initial run of setTense()
   if (updatedTimeDifference > 0 && currentTense !== "future") {
      $(this).removeAttr('id');
      $(this).attr('id', 'future'); 
    } else if (updatedTimeDifference < 0 && currentTense !== "past") {
      $(this).removeAttr('id');
      $(this).attr('id', 'past'); 
    } else if (updatedTimeDifference === 0 && currentTense !== "present") {
      $(this).removeAttr('id');  
      $(this).attr('id', 'present');  
    } else {
    }
  })
}

})
count++
}

// event listener to handle all child buttons of schedule container
scheduleContainer.on('click', 'button', function(e) {
  const siblingTextareaId = `notes-${this.id}`
  let textarea = $(e.target).siblings('textarea');
  let note = $(textarea).val();
  localStorage.setItem(siblingTextareaId, note);
})

// on document ready call set tense and add 30 second interval for calls
$(document).ready(() => {
setTense();
// run setTense every half minute to color code schedule section if need be
setInterval(setTense, 30000 );
})



