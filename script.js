document.addEventListener("DOMContentLoaded", function(event) {

    document.getElementById('add-new-question').addEventListener('click', function() {
        console.log('new')
        modal.style.display = "block";

    })

    // Get the modal
    var modal = document.getElementById("myModal");
    // Get the <span> element that closes the modal
    var span = document.getElementsByClassName("close")[0];



    // When the user clicks on <span> (x), close the modal
    span.onclick = function() {
        modal.style.display = "none";
    }

    // // When the user clicks anywhere outside of the modal, close it
    // window.onclick = function(event) {
    //     if (event.target == modal) {
    //         modal.style.display = "none";
    //     }
    // }
    const addQuestion = document.getElementById('add-question')
    const questionText = document.getElementById('question-text')
    const a = document.getElementById('a')
    const b = document.getElementById('b')
    const c = document.getElementById('c')
    const d = document.getElementById('d')

    var questions = new Array()
    addQuestion.addEventListener('click', function() {
        var choices = new Array()
        let choiceA = {
            text: a.value,
            title: 'a',
            true: true
        }
        let choiceB = {
            text: b.value,
            title: 'b',
            true: true
        }
        let choiceC = {
            text: c.value,
            title: 'c',
            true: true
        }
        let choiceD = {
            text: d.value,
            title: 'd',
            true: true
        }
        choices.push(choiceA)
        choices.push(choiceB)
        choices.push(choiceC)
        choices.push(choiceD)

        let question = {
            questionText: questionText.value,
            choices: choices,
            corectAnswer: 'a',
        }
        questions.push(question)
        console.log(questions)
    })




});