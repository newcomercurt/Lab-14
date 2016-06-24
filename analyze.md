## Super Cool Analysis Assignment

Worth 10 points. You can work on this lab solo or in a pair.

In a new copy (or branch) of today's blog starter code, add comments that explain the following items:

1. routes.js: Comment each `page()` call.(DONE)
   - Example analysis of line 5:
   - To understand `page()` calls that contain more than one callback (most of the other page() calls contain more than one callback), you can read [this](https://visionmedia.github.io/page.js/#pagepath-callback-callback-).
2. articleContoller.js (likely the hardest part of this lab) (DONE)
   - In detail, explain how .findWhere() works, and how the call in line 27 works. Explain where the `authorName` part of `ctx.params.authorName.replace('+', ' ')` comes from.
   - Explain how these are related (+1 E.C.)
     - The `page()` call in routes.js:15
     - The parameter `ctx` in lines 6, 7, 21, &amp; 23.
     Note: You can read [this](https://visionmedia.github.io/page.js/#context) to learn about the purpose and usage of `ctx`.
3. repo.js(DONE)
  - Write a comment(s) for each line of code.
  - Copy the following questions into new, empty comments blocks in the appropriate places in the starter code, and append your answers in the comment blocks:
    - How does `$.get()` differ from `$.getJSON()` and `$.ajax()`?
    - What happens due to the two chained $.done() functions?
      - How many `.done()` callbacks run?
        - If no callbacks run, why not?
        - If one runs, which one runs, and what determines that?
        - If both callbacks run, what order do they run in? Does that order ever change - if so, under what conditions?
  - Describe how `repos.with()` works:
    - What is `repos.all`?
    - What does `.filter()` do in general, and what does it do specifically in this code?
    - What is the anonymous function's param `repo`?
    - What is `repo[attr]`?
    - What does `repos.all.filter` return?
4. repoView.js: Write a comment for each line of code. Include explanations of each piece of the chained calls in lines 7 and 8, and how `respos.with()` applies `render()` inside `map()`, and, semantically, what `repos.with()` returns.(DONE)
5. aboutController.js: Write a comment for each line of code.(DONE)

In your answers to the items above, when you describe functions declarations, describe them in terms of their purpose, parameters, and return values:
- Describe the expected data type(s) of each parameter and each returned value.
- When you analyze a function call, describe semantically, the function's inputs and outputs.
  - Example: "Function `foo()` takes in a string that is used as a key to access values in an array of objects, and it returns an array of strings where each string is an article's title." is a much better ansewr than "Function `foo()` has one parameter and returns an array."

Please regularly `git a-c-p` your copy of the starter code in your own repo (use a branch) as you fill in comments for the items above.

## Submit
Please submit these items in Canvas:

1. URL for your final GitHub PR.
2. Answers to these questions:
   - Did you analyze solo or in a pair? If you paired, who did you pair with?
   - How long did this lab take?
   - What was most challenging?
   - What was most rewarding?
