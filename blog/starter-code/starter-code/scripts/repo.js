(function(module) {//creates iife that encloses the rest of the code in the document
  var repos = {};//declares an empty object repos which will be populated below.

  repos.all = [];//a key of repos that is an empty array.

  repos.requestRepos = function(callback) {//method to get repos from gihub
    $.get('/github/user/repos' + '?per_page=100' + '&sort=updated')//ajax request to get users repos
    .done(function(data, message, xhr) { repos.all = data; })//when call is done, this takes the data from github and puts it into the empty array all =[];
    .done(callback);//this callback runs as a parameter for our request repos method. I am not 100% what this is doing.
  };

  repos.with = function(attr) {//creates a method .within our repos object that takes a parameter of attr
    return repos.all.filter(function(repo) { return repo[attr]; });//this fitlers out the repos that don't match the specifed attr.
  };

  module.repos = repos;//this allows repos to be accessible outside of the iife
})(window);

// - How does `$.get()` differ from `$.getJSON()` and `$.ajax()`?
//$.get(), $.getJSON() and $.ajax all pretty much accomplish the same thing however there differences are in their parameters and layouts.
// - What happens due to the two chained $.done() functions?
// The first .done takes the data from github and plugs it into the array. Not entirely clear what second one is doing.
//   - How many `.done()` callbacks run?
//     - If no callbacks run, why not?
//     - If one runs, which one runs, and what determines that?
//     - If both callbacks run, what order do they run in? Does that order ever change - if so, under what conditions?
// Both callbacks run, and they run in order. I am not sure if the order will ever change and I am not 100% on what the second callback is accomplishing.
// - Describe how `repos.with()` works:
// Ansered above but it populates our array within the repos object with repos that have a specifid attr.
// - What is `repos.all`?
// repos.all is our array that we populate with out github repos after our ajax request.
// - What does `.filter()` do in general, and what does it do specifically in this code?
///filter() runs a function on every item in an array and returns a new array with the original array items that have met conditions. In our example the returned array is populated with repos that have met the attr passed in our .with method.
// - What is the anonymous function's param `repo`?
//it is a singular object within our repos array.
// - What is `repo[attr]`?
//repo[atrr] checks to see if a repo that has the specific attr that was specified in the repos.with method.
// - What does `repos.all.filter` return?
//a new array that has the repos with with the specified attr.
