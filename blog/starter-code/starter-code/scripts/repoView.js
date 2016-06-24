(function(module) {//iife to hide our code
  var repoView = {};//empty object is created to be populated below

  var ui = function() {//creates a ui function
    var $about = $('#about'); //creates a jquery object that contains the value of the dom element with an about id, easier to use this selector late.

    $about.find('ul').empty();//uses our jquery object to find ul that have an id of about and empties them.
    $about.show().siblings().hide();//uses our jquery object to show the id #about section and hide the siblings of it.
  };

  var render = function(repo) { //creates our render function with repo as a parameter
    return $('<li>')//creates a list item that will contain a hyperlink that has the repo name.
      .html('<a href="' + repo.html_url + '">' + repo.full_name + '</a>');//the contents of the li are changed to contain the hyperlink and repo info from github.
  };

  repoView.index = function() {//repoview object is given an index key which is a method
    ui();//the ui function from above is called.

    $('#about ul').append( //our ul elements that are contained within the elements that have the about id are selected to be appended.
      repos.with('forks_count').map(render)//this is what is being appended. The repos that contain 'forks_count' are put into a new array and tare then passed the render
      //function which will append our repos with forks_count to the dom.
    );
  };

  module.repoView = repoView;//lets our repoview function be exported out of the iife
})(window);
