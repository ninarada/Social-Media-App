/* Get all elements with class heart-icon */
const heartIcons = document.querySelectorAll('.post .heart-icon');
for (let i = 0; i < heartIcons.length; i++) {
	const heartIcon = heartIcons[i];
	// add an event listener to each heart icon and define what happens on a click event
	heartIcon.addEventListener('click', handleHeartIconClick);
}

async function handleHeartIconClick(e) {
	// add and remove fa-heart and fa-heart-o classes depending on which one is currently present
	const heartIcon = e.currentTarget; // clicked heart icon
    const heartContainer = heartIcon.parentElement;
    
	const post = heartIcon.closest('.post');
	const postId = post.getAttribute('data-post-id');
    var likeEl = heartContainer.querySelector('.post-likes');
    var likes = likeEl.textContent;
    
	const isCurrentlyLiked = heartIcon.classList.contains('fa-heart');
    if(!isCurrentlyLiked) {
        likes = parseInt(likes, 10)+1;
    } else {
        likes = parseInt(likes, 10)-1;
    }

	try {
		const serverResponse = await fetch(
			`API.php?action=togglePostLike&id=${postId}&liked=${isCurrentlyLiked ? 0 : 1}&likes=${likes}`
		);
		const responseData = await serverResponse.json();

		if (!responseData.success) {
			throw new Error(`Error liking post: ${responseData.reason}`);
		}

		if (!isCurrentlyLiked) {
			// if heart is 'empty'
			heartIcon.classList.remove('fa-heart-o');
			heartIcon.classList.add('fa-heart');
            likeEl.innerHTML = likes;
		} else {
			heartIcon.classList.remove('fa-heart');
			heartIcon.classList.add('fa-heart-o');
            likeEl.innerHTML = likes;
		}
	} catch (error) {
		throw new Error(error.message || error);
	}
}

/* Get all elements with class bookmark-icon */
const bookmarkIcons = document.querySelectorAll('.post .bookmark-icon');
for (let i = 0; i < bookmarkIcons.length; i++) {
	const bookmarkIcon = bookmarkIcons[i];
	// add an event listener to each bookmark icon and define what happens on a click event
	bookmarkIcon.addEventListener('click', handleBookmarkIconClick);
}

async function handleBookmarkIconClick(e) {
	// add and remove fa-bookmark and fa-bookmark-o classes depending on which one is currently present
	const bookmarkIcon = e.currentTarget; // clicked bookmark icon
	const bookmarkContainer = bookmarkIcon.parentElement;

	const post = bookmarkIcon.closest('.post');
	const postId = post.getAttribute('data-post-id');
    var bookmarkEl = bookmarkContainer.querySelector('.post-bookmarks');
    var bookmarks = bookmarkEl.textContent;

	const isCurrentlyBookmarked = bookmarkIcon.classList.contains('fa-bookmark');

	if(!isCurrentlyBookmarked) {
        bookmarks = parseInt(bookmarks, 10)+1;
    } else {
        bookmarks = parseInt(bookmarks, 10)-1;
    }

	try {
		const serverResponse = await fetch(
			`API.php?action=togglePostBookmark&id=${postId}&bookmarked=${isCurrentlyBookmarked ? 0 : 1}&bookmarks=${bookmarks}`
		);
		const responseData = await serverResponse.json();

		if (!responseData.success) {
			throw new Error(`Error bookmarking post: ${responseData.reason}`);
		}

		if (!isCurrentlyBookmarked) {
			// if bookmark is 'empty'
			bookmarkIcon.classList.remove('fa-bookmark-o');
			bookmarkIcon.classList.add('fa-bookmark');
			bookmarkEl.innerHTML = bookmarks;
		} else {
			bookmarkIcon.classList.remove('fa-bookmark');
			bookmarkIcon.classList.add('fa-bookmark-o');
			bookmarkEl.innerHTML = bookmarks;
		}
	} catch (error) {
		throw new Error(error.message || error);
	}
}

/* Dynamically create posts */
const addPostButton = document.querySelector('#add-post-button');

// Arrow function, runs when user clicks on addPostButton
addPostButton.addEventListener('click', async (e) => {
	const imageUrl = prompt('Unesi url slike', 'images/panda.png');
	if (!imageUrl) {
		return;
	}

	const description = prompt('Unesi opis', 'Dobar dan!');
	if (!description) {
		return;
	}

	try{
		const serverResponse = await fetch(`API.php?action=addPost&imageUrl=${imageUrl}&description=${description}`);
		const responseData = await serverResponse.json();
		
		if(!responseData.success){
			
			throw new Error(`Error while adding post: ${responseData.reason}`);
		}

		const postTemplate = document.querySelector('#post-template');
		// Creates an element based on template
		const postElement = document.importNode(postTemplate.content, true);

		// Fill the created post with content
		postElement.querySelector('img').src = imageUrl;
		postElement.querySelector('p').textContent = description;
		console.log(imageUrl);

		// add event listeners to necessary places
		postElement.querySelector('.heart-icon').addEventListener('click', handleHeartIconClick);
		postElement.querySelector('.bookmark-icon').addEventListener('click', handleBookmarkIconClick);
		//postElement.querySelector('.comment-icon').addEventListener('click', handleHeartIconClick);

		// Add the post to the DOM in the post container
		const postsContainer = document.querySelector('#posts-container');
		
		postsContainer.appendChild(postElement);
	}
	catch(error){
		throw new Error(error.message || error);
	}
	
});


