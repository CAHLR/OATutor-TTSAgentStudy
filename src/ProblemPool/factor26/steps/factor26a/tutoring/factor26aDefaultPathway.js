var hints = [{id: "factor26a-h1", type: "hint", dependencies: [], title: "Perfect Square Trinomial", text: "A perfect square trinomial has the form $$a^2+2ab+b^2$$"}, {id: "factor26a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["7"], dependencies: ["factor26a-h1"], title: "Square Root of 49", text: "What is the square root of 49?"}, {id: "factor26a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["12"], dependencies: ["factor26a-h2"], title: "Square Root of 144", text: "What is the square root of 144?"}, {id: "factor26a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["168"], dependencies: ["factor26a-h3"], title: "2ab", text: "What is the product 2ab?"}, {id: "factor26a-h5", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["Yes"], dependencies: ["factor26a-h4"], title: "Classifying the Expression", text: "Is the expression a perfect square trinomial?", choices: ["Yes", "No"]}, {id: "factor26a-h6", type: "hint", dependencies: ["factor26a-h5"], title: "Factoring a Perfect Square Trinomial", text: "A difference of squares with the form $$a^2+2ab+b^2$$ can be factored as $${\\left(a+b\\right)}^2$$"}, ]; export {hints};