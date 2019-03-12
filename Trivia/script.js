$(document).ready(function() {
    $.get("https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple", triviaGame);

    function triviaGame(data) {
    	// for (let key in data) {
    	// 	console.log(data);
    	// 	for (let i=0; i<data[key].length; i++) {
    	// 		let question = data[key][].question;
    	// 	}
    	// }    	
        $("button").click(function() {
            $(this).after(`<p style="margin-left: 25px;">${data.question}</p>`)
        })
    };
});