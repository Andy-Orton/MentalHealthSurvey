var header = `<tr>
    <th>Over the last 2 weeks, how often have you been bothered by any of the following problems?</th>
    <th>Not at all</th>
    <th>Several days</th>
    <th>More than half the days</th>
    <th>Nearly every day</th>
</tr>`
var tableQuestions = [
    "1. Little interest or pleasure doing things",
    "2. Feeling down, depressed, or hopeless",
    "3. Trouble falling or staying asleep, or sleeping too much",
    "4. Feeling tired or having little energy",
    "5. Poor appetite or overeating",
    "6. Feeling bad about yourself -- or that you are a failure or have let yourself or your family down",
    "7. Trouble concentrating on things, such as reading the newspaper or watching the television",
    "8. Moving or speaking so slowly that other people could have noticed? or the opposite -- being so fidgety or restless that you have been moving around a lot more than usual",
    "9. Thoughts that you would be better off dead or hurting yourself in some way"
];


$(function(){
    $("thead").append(header)
    for (i in tableQuestions){
        $("tbody").append(`
        <tr>
            <td>
                ${tableQuestions[i]}
            </td>
            <td class = "clickable">
                <input type = "radio" name = "question${i}" value = 0> 0
            </td>
            <td class = "clickable">
                <input type = "radio" name = "question${i}" value = 1> 1
            </td>
            <td class = "clickable">
                <input type = "radio" name = "question${i}" value = 2> 2
            </td>
            <td class = "clickable">
                <input type = "radio" name = "question${i}" value = 3> 3
            </td> 
        </tr>`)
    }

    $("button").click(function(){
        $("#warning").css("display", "none")
        $("main").css("display", "inline")
        $("footer").css("display", "block")
    })

    $('#submit').click(function(e){
        e.preventDefault();
        if($('input:checked').size == 0){
            console.log("hi")
        }
        $('#result').remove()
        var sum = $.map($('input:checked'), (elem, i) => elem.value).reduce((a, b) => parseInt(a) + parseInt(b))
        if(sum <= 5){
            $('body').append(`<div id = "result"><p>Your Score: ${sum}</p><p>Scores similar to yours generally indicate a possibility of minor depression.<br>These results are not a diagnosis and are only verifiable by a licensed mental health professional or medical doctor.</p></div>  `)
        }
        else if(sum >= 5 && sum <= 9){
            $('body').append(`<div id = "result"><p>Your Score: ${sum}</p><p>Scores similar to yours generally indicate a possibility of moderate depression.  <br>These results are not a diagnosis and are only verifiable by a licensed mental health professional or medical doctor.</p></div>  `)
        }
        else if(sum >= 10 && sum <= 14){
            $('body').append(`<div id = "result"><p>Your Score: ${sum}</p><p>Scores similar to yours generally indicate a possibility of moderately severe depression.  <br>These results are not a diagnosis and are only verifiable by a licensed mental health professional or medical doctor. </p></div>  `)
        }
        else if(sum >= 16 && sum <= 27){
            $('body').append(`<div id = "result"><p>Your Score: ${sum}</p><p>Scores similar to yours generally indicate a possibility of severe depression.  <br>These results are not a diagnosis and are only verifiable by a licensed mental health professional or medical doctor. </p></div>  `)
        }
    })

    $('.clickable').click(function(e){        
        let child = e.target.childNodes[1];
        if (!child) {
            child = e.target;
        }
        $(`[name=${child.name}]`).parent().css("background-color", "white");
        child.checked = true;
        $(child).parent().css("background-color", "lightgrey");
    });
})


