var hints = [{id: "LinIneq30a-h1", type: "hint", dependencies: [], title: "Isolation", text: "We can first isolate the $$absolute$$ value term by using the addition property."}, {id: "LinIneq30a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-4"], dependencies: ["LinIneq30a-h1"], title: "Addition", text: "What number should we add on both sides in order to isolate the $$absolute$$ value term by itself on the left?"}, {id: "LinIneq30a-h3", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["abs(x-2)>=6"], dependencies: ["LinIneq30a-h2"], title: "Addition", text: "What do we get after we add -4 on both sides?", choices: ["$$|x-2| \\\\geq 6$$", "$$|x-2| \\\\geq 10$$", "$$x-2 \\\\geq 10$$"]}, {id: "LinIneq30a-h4", type: "hint", dependencies: ["LinIneq30a-h3"], title: "Absolute Value Inequality", text: "For an algebraic expression X, and $$k>0$$ an $$absolute$$ value inequality is an inequality of the form |X|>=k is equivalent to $$X \\leq -k$$ or $$X \\geq k$$"}, {id: "LinIneq30a-h5", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["x-2<=-6 or x-2>=6"], dependencies: ["LinIneq30a-h4"], title: "Absolute Value Inequality", text: "How can we apply the above principle to our problem?", choices: ["$$x+2 \\\\leq -6$$ or $$x-2 \\\\geq 6$$", "$$x-2 \\\\leq -6$$ or $$-x+2 \\\\geq 6$$", "$$x-2 \\\\leq -6$$ or $$x-2 \\\\geq 6$$"]}, {id: "LinIneq30a-h6", type: "hint", dependencies: ["LinIneq30a-h5"], title: "Simplification", text: "Let's simplify the above two inequalities by using the addition property."}, {id: "LinIneq30a-h7", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["2"], dependencies: ["LinIneq30a-h6"], title: "Addition", text: "What number should we add in order to isolate the variable with its coefficient on the left?"}, {id: "LinIneq30a-h8", type: "scaffold", problemType: "MultipleChoice", answerType: "string", hintAnswer: ["x<=-4 or x>=8"], dependencies: ["LinIneq30a-h7"], title: "Addition", text: "What do we get after we add 2?", choices: ["$$x \\\\leq -4$$ or $$x \\\\geq -8$$", "$$x \\\\leq -4$$ or $$x \\\\geq 4$$", "$$x \\\\leq -4$$ or $$x \\\\geq 8$$"]}, {id: "LinIneq30a-h9", type: "hint", dependencies: ["LinIneq30a-h8"], title: "Interval Notation", text: "(-inf,b] represents all real numbers less than b, including b, and [a,inf)represents all real numbers greater than a, including a."}, ]; export {hints};