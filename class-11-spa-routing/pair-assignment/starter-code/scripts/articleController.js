(function(module) {
  var articlesController = {};

  // done: Create the `articles` table when the controller first loads, with the code that used to be in index.html:
  Article.createTable();
  // done: Setup a function that kicks off the fetching and rendering of articles, using the same
  // code that used to be in index.html.
  // Also be sure to hide all the main section elements, and reveal the #articles section:
  articlesController.index = function() {
    $('#about').hide();
    Article.fetchAll(articleView.initIndexPage);
    $('#articles').show();
    console.log('load articleIndex');

  };

  module.articlesController = articlesController;
})(window);
