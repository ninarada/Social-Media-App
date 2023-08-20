<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8"/>
    <title>PZI - Domaći Rad</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" href="styles/font-awesome.min.css"/>
    <link rel="stylesheet" href="styles/style.css"/>
    <link
      href="https://fonts.googleapis.com/css2?family=Sora:wght@500&display=swap"
      rel="stylesheet"
    />
    <template id='post-template'>
      <article class='post' data-post-id=''>
        <h4><span class='post-username-label'></span> <i class='fa fa-bookmark-o bookmark-icon clickable-icon'></i> <span class='post-bookmarks'></span> </h4>
        <img src='' alt=''/>
        <p></p>
        <i class='fa fa-heart-o heart-icon clickable-icon'></i>
        <span class='post-likes'></span>
        <p class='comments-label'>Komentari:</p>
        <button class='comment-btn' post-comment-id=''>comment</button>
      </article>
    </template>
    <template id='comment-template'>
      <article class='comment' data-comment-id=''>
        <span class='comment-username-label'></span>
        <span></span>
      </article>
    </template>
  </head>
  <body>
    <header>
      <span>Domaći Rad</span>
      <span>PZI</span>
      <span>@AnaAnic</span>
    </header>

    <main>
      <div id='container'>
        <div id='user-container'>
            <img src="images/cat.png"/>
            <h3>Ana Anić</h3>
            <h4>@AnaAnic</h4>
            <p> Student FESB-a<br><br>Pratitelji: 12<br><br>Prati: 23</p>
        </div>
        <div id="posts-container">
          <button id="add-post-button">Dodaj novi post</button>
            <?php 
            require_once("php/posts.php");
            echo(generatePostsHtml());
            ?>
        </div>
      </div>
    </main>
    <footer>
      Copyright Nina Rađa @FESB 2023 PZI
    </footer>
    <script src="scripts/posts.js"></script>
    <script src="scripts/comments.js"></script>
  </body>
</html>
