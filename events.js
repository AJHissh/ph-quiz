const incorrect = document.querySelectorAll('.incorrect');
const correct = document.querySelector('.correct');



function turnGreen() {
    correct.style.backgroundColor = 'green';
    document.querySelector('.ChoiceNotif').innerHTML = 'Correct! :)';
}

correct.addEventListener('click', turnGreen);

function turnRed() {
    for (let i = 0; i < incorrect.length; i++) {
        incorrect[i].addEventListener('click', function() {
            incorrect[i].style.backgroundColor = 'red';
            document.querySelector('.ChoiceNotif').innerHTML = 'Incorrect! :(';
            var timeout = setTimeout(function(){turnRed()},10);
        })}

}


function inputChoice() {
    document.querySelector('.submit-button').addEventListener('click', function() {
        let input = document.querySelector('.free-resp');
        if (input.value === 'THE PEACEFUL REVOLUTION') {
            input.style.backgroundColor = 'green';
            document.querySelector('.ChoiceNotifTwo').innerHTML = 'Correct! :)';
        } else {
            input.style.backgroundColor = 'red';
            document.querySelector('.ChoiceNotifTwo').innerHTML = 'Incorrect! :(';
        }
    });
}

turnRed();
inputChoice();

