var hints = [{id: "domain21a-h1", type: "hint", dependencies: [], title: "Define the Domain", text: "A square root function is undefined when the expression under the square root is negative. So, let's start by setting the expression under the sqare root to greater than or equal to zero. Then we know every value that makes this true is the domain of the function."}, {id: "domain21a-h2", type: "hint", dependencies: ["domain21a-h1"], title: "Inequality", text: "Set the value in the square root to being greater than equal to 0 and solve the inequality. In other words, solve for $$x-2 \\geq 0$$"}, {id: "domain21a-h3", type: "scaffold", problemType: "TextBox", answerType: "arithmetic", hintAnswer: ["[2,inf)"], dependencies: ["domain21a-h2"], title: "Domain", text: "What is the domain in interval notation?", choices: ["[-2,inf)", "$$-2\\\\infty$$", "[2,inf)", "$$-infinf$$"]}, ]; export {hints};