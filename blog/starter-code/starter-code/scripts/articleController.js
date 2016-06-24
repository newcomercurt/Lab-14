(function(module) {
  var articlesController = {};

  Article.createTable();  // Ensure the database table is properly initialized

  articlesController.index = function(ctx, next) {
    articleView.index(ctx.articles);
  };

  // COMMENT: What does this method do?  What is it's execution path?
  // This method takes in a ctx(part of page.js) parameter and a next function and then it creates a
  // variable articleData which stores a function that will take an article and attach it to the ctx object with a key of articles
  // Then it calls the method next which I think is passed the ctx object as a parameter.
  articlesController.loadById = function(ctx, next) {
    var articleData = function(article) {
      ctx.articles = article;
      next();
    };

    // The function findWhere is called and passed 'id' as a parameter. ctx.parms is a part of page.js so the ctx.params.id is the id number that was displayed on the URL, and the articleData method  we created in our articlesController.loadById is passed.
    Article.findWhere('id', ctx.params.id, articleData);
  };

  // COMMENT: What does this method do?  What is it's execution path?
  //This method is similar to the above method. It also takes in a ctx(part of page.js) parameter and a next function and then it //creates a variable authorData which stores a function that takes articlesByAuthor parameter. It will then attach articlesByAuthor to the //ctx object with the key of articles. Then it calls the method next which I think is passed the ctx object as a parameter.
  articlesController.loadByAuthor = function(ctx, next) {
    var authorData = function(articlesByAuthor) {
      ctx.articles = articlesByAuthor;
      next();
    };
  // The function findWhere is called and passed 'author'. ctx.parms is a part of page.js so the ctx.params.authorNameis the category that //was displayed on the URL, and the authorData method  we created in our articlesController.loadByAuthor is passed. The .replace('+', ' ')
  //part of the method takes the plus signs and replaces them with whitespace.
    Article.findWhere('author', ctx.params.authorName.replace('+', ' '), authorData);
  };

  // COMMENT: What does this method do?  What is it's execution path?
  //This method is similar to the above method. It also takes in a ctx(part of page.js) parameter and a next function and then it creates a //variable categoryData which stores a function that takes articlesInCategory parameter. It will then attach articlesInCategory to the ctx //object with the key of articles. Then it calls the method next which I think is passed the ctx object as a parameter.
  articlesController.loadByCategory = function(ctx, next) {
    var categoryData = function(articlesInCategory) {
      ctx.articles = articlesInCategory;
      next();
    };
    // The function findWhere is called and passed 'category' parameter. ctx.parms is a part of page.js so the ctx.params.categoryName is the // category that was displayed on the URL, and the categoryData method  we created in our articlesController.loadBycateogry is passed.
    Article.findWhere('category', ctx.params.categoryName, categoryData);
  };

  // COMMENT: What does this method do?  What is it's execution path?
    //This method is similar to the above methods. It also takes in a ctx(part of page.js) parameter and a next function and then it //creates a variable articleData which stores a function that takes allArticles parameter. It will then attach Article.all to the ctx //object with the key of articles. Then it calls the method next which I think is passed the ctx object as a parameter. If there is something in the Article.all it will assign it to the ctx object with key of articels. If there isn't will run the Article.fetchAll method and pass it the articleData method.
  articlesController.loadAll = function(ctx, next) {
    var articleData = function(allArticles) {
      ctx.articles = Article.all;
      next();
    };

    if (Article.all.length) {
      ctx.articles = Article.all;
      next();
    } else {
      Article.fetchAll(articleData);
    }
  };

  module.articlesController = articlesController;
})(window);
