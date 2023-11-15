    const facebookBtn = document.querySelector(".facebook-btn");
    const twitterBtn  = document.querySelector(".twitter-btn");
    const redditBtn   = document.querySelector(".reddit-btn");

    function share(){
        let postUrl = document.location.href;
        let postTittle = encodeURI("Hi evryone, please check our app");

        facebookBtn.setAttribute("href", 
        `https://www.facebook.com/sharer.php?u=${postUrl}`);
    

        twitterBtn.setAttribute("href", 
        `https://twitter.com/share?url=${postUrl}&text=${postTittle}`);

        redditBtn.setAttribute("href",
        `https://reddit.com/submit?url=${postUrl}&title=${postTittle}`);

    }

    share();