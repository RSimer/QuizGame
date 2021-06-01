var quizArray = [

    {
            title: "Am I going to pass this class",
            choices: ["yes", "no" ,"eh, probably", "not this one"],
            answer: "eh, probably"

    },
   
    {
            title: "when using an excel function, whats the worst way to get the square root of a number",
            choices: ["sqrt", "^.05" ,"#/#", "There is no worst way, also this is a coding class"],
            answer: "^.05"

    },

    {
            title: "Whats the capital of Taiwan" ,
            choices: ["Taipei", "Bangkok", "New Taipei City", "Tainan City"],
            answer: "Taipei"

    },
    {
            title: "a function does not work without:",
            choices: ["brackets", "curly brackets", "back-ticks", "Parentheses"],
            answer: "Parentheses"

    },
    {
            title: "what element number is Helium" ,
            choices: ["1","2","3","4"],
            answer: "2"

    },
];


localStorage.setItem("quizArray", JSON.stringify(quizArray));
