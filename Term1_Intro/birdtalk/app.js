var button = document.getElementById("button");

var vowels = ['A', 'E', 'I', 'O', 'U'];

var resultArray = [];


button.onclick = (e) => {
    var input = document.getElementById("input-box").value;
    input = input.toUpperCase();

    for (var inputIndex = 0; inputIndex < input.length; inputIndex++) {
        for (var vowelsIndex = 0; vowelsIndex < vowels.length; vowelsIndex++) {
            if (input[inputIndex] === vowels[vowelsIndex]) {
                resultArray.push(input[inputIndex]);
            }
        }
    }

    var birdTalk = (resultArray.join('') + "UUU");

    document.getElementById("bird-talk").innerHTML = birdTalk;
}