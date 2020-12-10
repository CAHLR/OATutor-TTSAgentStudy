var hints = [{id: "poly7a-h1", type: "hint", dependencies: [], title: "First Terms", text: "First, find the product of the two first terms."}, {id: "poly7a-h2", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["6x^2"], dependencies: ["poly7a-h1"], title: "First Terms", text: "What is 2x*3x?"}, {id: "poly7a-h3", type: "hint", dependencies: ["poly7a-h2"], title: "Outside Terms", text: "Now, find the product of the two outside terms."}, {id: "poly7a-h4", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["6x"], dependencies: ["poly7a-h3"], title: "Outside Terms", text: "What is 2x*3?"}, {id: "poly7a-h5", type: "hint", dependencies: ["poly7a-h4"], title: "Inside Terms", text: "Next, find the product of the two inside terms."}, {id: "poly7a-h6", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-54x"], dependencies: ["poly7a-h5"], title: "Inside Terms", text: "What is -18*3x?"}, {id: "poly7a-h7", type: "hint", dependencies: ["poly7a-h6"], title: "Last Terms", text: "Finally, find the product of the two last terms."}, {id: "poly7a-h8", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-54"], dependencies: ["poly7a-h7"], title: "Last Terms", text: "What is -18*3?"}, {id: "poly7a-h9", type: "hint", dependencies: ["poly7a-h8"], title: "Combine Like Terms", text: "Now that we have the terms foiled out, we can combine like terms. The $$x^2$$ and constant terms cannot be simplified futher, but the coeffecients of the x terms can be added together to simplify the x value."}, {id: "poly7a-h10", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["-48x"], dependencies: ["poly7a-h9"], title: "Combine Like Terms", text: "What is 6x-54x?"}, {id: "poly7a-h11", type: "hint", dependencies: ["poly7a-h10"], title: "Simplified Expression", text: "The last step is to write out the expression as a sum of all of the values: $$6x^2-48x-54$$"}, ]; export {hints};