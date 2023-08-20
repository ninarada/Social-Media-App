<?php
require_once("DatabaseAccess.php");

function getPostsFromDb(){
    // execute query and get posts data from the Posts table in the database
	 return getDbAccess()->executeQuery("SELECT * FROM Posts;");
}

function loadComments($postID){
    return getDbAccess()->executeQuery("SELECT * FROM Comments WHERE PostID = '$postID'");
}

// generate html code for posts using data from the database
function generatePostsHtml(){
    $html = "";

    $posts = getPostsFromDb();

    foreach($posts as $post){
        // get values of the columns in the table in order 
        $id = $post[0];
        $username = $post[1];
        $imageUrl = $post[2];
        $description = $post[3];
        $liked = $post[4];
        $likes = $post[5];
        $bookmarked = $post[6];
        $bookmarks = $post[7];

        $heartClass = $liked == '1' ? "fa-heart" : "fa-heart-o";
        $bookmarkClass = $bookmarked == '1' ? "fa-bookmark" : "fa-bookmark-o";

        $comments = loadComments($id);

        // html template filled with data
        $html .= "<article class='post' data-post-id='$id'>
                    <h4><span class='post-username-label'>$username</span>  <i class='fa $bookmarkClass bookmark-icon clickable-icon'></i> <span class='post-bookmarks'>$bookmarks</span></h4>
                    <img src='$imageUrl' alt='$username'/>
                    <p>$description</p>
                    <i class='fa $heartClass heart-icon clickable-icon'></i>
                    <span class='post-likes'>$likes</span>
                    <p class='comments-label'>Komentari:</p>";

        foreach($comments as $comment) {
            $commentID = $comment[0];
            $commentUsername = $comment[1];
            $commentDescription = $comment[2];
            $commentPostID = $comment[3];

            $html .= "<article class='comment' data-comment-id='$commentID'>
                        <span class='post-username-label'>$commentUsername</span>
                        <span>$commentDescription</span>
                    </article>";
        }
                    
        
        $html .=  "<button class='comment-btn' post-comment-id='$id'>comment</button>
                </article>";
    }

    return $html;
}

function togglePostLike($id, $liked, $likes){
    getDbAccess()->executeQuery("UPDATE Posts SET Liked='$liked', Likes='$likes' WHERE ID='$id';");
}

function togglePostBookmark($id, $bookmarked, $bookmarks){
    getDbAccess()->executeQuery("UPDATE Posts SET Bookmarked='$bookmarked', Bookmarks='$bookmarks' WHERE ID='$id';");

}

function addPost($imageUrl, $description){
    getDbAccess()->executeInsertQuery("INSERT INTO Posts VALUES ('0', '@AnaAnic', '$imageUrl', '$description', '0', '0', '0', '0');");
}

function addComment($description, $postID){
    getDbAccess()->executeInsertQuery("INSERT INTO Comments VALUES ('0', '@AnaAnic', '$description', '$postID');");
}