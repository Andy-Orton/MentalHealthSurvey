var header = `<tr>
    <th>Over the last 2 weeks, how often have you been bothered by any of the following problems?</th>
    <th>Not at all</th>
    <th>Several days</th>
    <th>More than half the days</th>
    <th>Nearly every day</th>
</tr>`
var tableQuestions = [
    "1. Feeling nervous, anxious or on edge",
    "2. Not being able to stop or control worrying",
    "3. Worrying too much about different things",
    "4. Trouble Relaxing",
    "5. Being so restless that it is hard ot sit still",
    "6. Becoming easily annoyed irritable",
    "7. Feeling afraid as if something awful might happen"
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
            $('body').append(`<div id = "result"><p>Your Score = ${sum}</p><p>Scores similar to yours generally indicate a possibility of mild anxiety.<br>These results are not a diagnosis and are only verifiable by a licensed mental health professional or medical doctor.</p></div>  `)
        }
        else if(sum >= 5 && sum <= 9){
            $('body').append(`<div id = "result"><p>Your Score = ${sum}</p><p>Scores similar to yours generally indicate a possibility of moderate anxiety.  <br>These results are not a diagnosis and are only verifiable by a licensed mental health professional or medical doctor.</p></div>  `)
        }
        else if(sum >= 10 && sum <= 14){
            $('body').append(`<div id = "result"><p>Your Score = ${sum}</p><p>Scores similar to yours generally indicate a possibility of moderately severe anxiety.  <br>These results are not a diagnosis and are only verifiable by a licensed mental health professional or medical doctor. </p></div>  `)
        }
        else if(sum >= 16 && sum <= 27){
            $('body').append(`<div id = "result"><p>Your Score = ${sum}</p><p>Scores similar to yours generally indicate a possibility of severe anxiety.  <br>These results are not a diagnosis and are only verifiable by a licensed mental health professional or medical doctor. </p></div>  `)
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


