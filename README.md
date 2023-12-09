# Project Title

BBY21's Recycling Game

## 1. Project Description

This browser-based web application helps and educates users on how to properly recycle by turning recycling into a 
fun and easy-to-play game.

## 2. Names of Contributors

- Le Thi Thu Phuong: The project manager of this project
- Soomin Jeong: Excited to see our first project come together
- Kiet Ngo: Student with a passion for playing and making games

## 3. Technologies and Resources Used

- HTML, CSS, JavaScript
- Firebase 8.0 (BAAS - Backend as a Service)
- FireStores
- Font awesome
- Google Fonts
- iStock images
- Sweet Alert
- Bootstrap

## 4. Complete setup/installation/usage

State what a user needs to do when they come to your project. How do others start using your code or application?
Here are the steps ...

- Try to play our game
- Try to understand the importance of recycling
- Search for the proper recycling regulations of BC

## 5. Known Bugs and Limitations

Here are some known bugs:

- When the user clicks the log out button, there should be a confirmation asking the user if they are sure they wanted to log out, but it just automatically logs out without confirmation.
- If the user have history of accessing our web page, they sometimes don't get to see the updated version of our app because of the cache history.
- The timer should pause when the pop-up appears in our gameplay, but it doesn't/

## 6. Features for Future

What we'd like to build in the future:

- User profile (being able to add profile photo, edit user names, etc)
- Make the leaderboard get filtered by age so that little kids can participate and engage with people that are in similar age
- Make the timer function in our gameplay to pause

## 7. Contents of Folder

Content of the project folder:

```
 Top-level of project folder:
├── .gitignore               # Git ignore file
├── 404.html                 # The page that gets displayed when a 404 error occurs
├── about_us.html            # The page where we explain a little bit about team
├── game.html                # The actual gameplay page
├── index.html               # This page is what users see when they first uses our url
├── landing.html             # The page that directs users when they click "START GAME" from the index page
├── leaderboard.html         # Where users can see who got the highest score
├── learn_more.html          # Where we summarized the reason why recycling is importand and what the local(Canada, BC) regulations are
├── login.html               # The login/signup page
├── savedata.html            # Where the user's game history gets saved (they need to be logged in to see the histories)
├── share.html               # The page that lets users share our app
└── README.md

It has the following subfolders and files:
├── .git                     # Folder for git repo
├── audio                    # Folder for audio
    /background_music.mp3
    /correct_sound.mp3
    /incorrect_sound.mp3
├── img                      # Folder for images
    ├── itmes                # Folder for item images
        /blah.jpg
        /aluminum_foils.png
        /apple_core.png
        /banana_peel.png
        /bottle_cap.png
        /bottle.png
        /candy_wrapper.png
        /cardboard_box.png
        /cereal_box.png
        /coffee_cup.png
        /disposable_cutlery.png
        /eggshells.png
        /envelope.png
        /leaves.png
        /magazines.png
        /milk_container.png
        /pizza_box.png
        /plastic_bag.png
        /receipt.png
        /shampoo_bottle.png
        /straw.png
        /tea_bags.png
        /toilet_paper_roll.png
        /toothbrush.pn
    /black_bin.png
    /blue_bin.png
    /favicon.png
    /green_bin.png
    /grey_bin.png
    /index_main_img.jpg
    /index.png
    /learnmore_main_img.jpg
    /login_avatar.png
    /login_main_img.jpg
    /logo.png
    /profile1.png
    /profile2.png
    /profile3.png
    /share_main_img/png
    /test.jpg
    /yellow_bin.png
├── scripts                  # Folder for javaScript files
    /firebase.js 
    /funfact.js 
    /game.js 
    /items.js 
    /leaderboard.js 
    /savedata.js 
    /script.js 
    /share.js 
    /skeleton.js 
    /sound.js 
    /start.js 
    /timer.js
├── styles                   # Folder for styles
    /about_us.css            
    /footer.css
    /games.css
    /header.css
    /leaderboard.css
    /learn_more.css
    /login.css
    /pop_up.css
    /reset.css
    /savedata.css
    /share.css
    /style.css
├── text                    # Folder for navbar and footer skeleton
    /footer.html
    /navbar_after_login.html
    /navbar_before_login.html
├── video                   # Folder for navbar and footer skeleton
    /Tutorial video.mp4     # Tutorial video on how to play our game
```
