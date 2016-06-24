(function(module) {//iife to hide below function
  var aboutController = {};//creates empty object aboutController

  aboutController.index = function() {//creates an index key in aboutController that runs the repos.requestRepos() method and passes it the
    //repoView.index method. if I understand correctly, this method uses our other methods that have been exported out of their iife and is used to run our ajax request
    //and render those repos to the page.
    repos.requestRepos(repoView.index);
  };

  module.aboutController = aboutController;//exports aboutController out of iife
})(window);
