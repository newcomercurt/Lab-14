page('/',
  articlesController.loadAll,
  articlesController.index);//when the index page of our site is navigated to, the articles.controller.loadAll and articlesController.index is called which will show all the articles.

page('/about', aboutController.index);//from Example*Because of line 42 in index.html, when the user clicks the "About" nav item, the URL "end-bit" changes to '/about', and this line maps that URL to the callback `aboutController.index`, which causes GitHub repo info to be retrieved and displayed. This line's mapping connects the user action of "I click on 'About'" to the visual result of "I now see GitHub repo info."*

page('/article/:id',
  articlesController.loadById,
  articlesController.index);//when the user uses a url that has both the article route and specfic id. It will run the articlesContoller.loadById method and the articlesContoller.index will run. The route would have the id included after the /article/

// Redirect home if the default filter option is selected:
page('/category', '/');
page('/author', '/');

page('/author/:authorName',
  articlesController.loadByAuthor,
  articlesController.index); //this page will make use of the author filter and display all the articles written by a specific author.

page('/category/:categoryName',
  articlesController.loadByCategory,
  articlesController.index);////this will make use of the category filter and display all the articles that have that category.

page();//initializes our routes with page.js
