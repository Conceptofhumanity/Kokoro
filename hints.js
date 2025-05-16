// it's called hint 2 because hint 1 linked to the minesweeper hint page.
function hint2() {
    const button = document.getElementsByClassName("btn2")[0];
    button.textContent = "Hmm. Wait. Let me think a second.";
    
    setTimeout(() => {
        button.textContent = "Oh! If this helps, the last time I worked on this, I was in the attic. Don't question me. It's true. ";
        
        setTimeout(() => {
            button.textContent = "I don't know. i just really think you should look outside the box. so to speak.";
        }, 5000);

            setTimeout(() => {
                button.textContent = "Really? taking this long? Wow. I thought I was clear. Its the title of the page. Up there ^";
            }, 60002);
        
    }, 2000);
}

function hint3() {
    const button = document.getElementsByClassName("btn3")[0];
    button.textContent = "Okay, thinking.";
    setTimeout(() => {
        button.textContent = "alright. got it. maybe. nope, don't got it, i need a sec.";
    }, 2000);

        setTimeout(() => {
            button.textContent = "I forgot. Sigh. My memory is like a rollercoaster, but if it was all lows.";
        }, 3000);
}

function hint4() {
    const button = document.getElementsByClassName("btn4")[0];
    setTimeout(() => {
        button.textContent = "Okay. Hint time. Uhm. Give me a second.";
    }, 1000);
        setTimeout(() => {
            button.textContent = "Okay. You know what? I'm heading to the CSS. That's where I think best.";
        }, 3000);
            setTimeout(() => {
                button.textContent = "Seeing as you're still here, I feel the need to clarify: The CSS is accessible through pressing f12"

            }, 10000);
                setTimeout(() => {
                    button.textContent = "Then, you click sources, at the top. Then, styles.css. It should be in the left column.";
                 }, 6000);
}

function hint5() {
    const button = document.getElementsByClassName("btn5")[0];
    setTimeout(() => {
        button.textContent = "the idea is simple. theres that neato font. and ill tell you right now, it contains the password.";
    }, 1000);
        setTimeout(() => {
            button.textContent = "you don't know how to actually get the password? well thats a you problem. speaking of problems..."
        }, 3000);
            setTimeout(() => {
                button.textContent = "here's a tip for copying quotes from things with weird fonts! copy it into your searchbar, and then copy it from THERE into your paper. it will look normal."
            }, 5000);
                    setTimeout(() => {
                        button.textContent = "that does become unfortunate, sometimes, when i want to use a font generator or something for a funky font of my own."
                    }, 10000);

function hint6() {
    const button = document.getElementsByClassName("btn6")[0];
    setTimeout(() => {
        button.textContent = "okay this is a rough one ill be honest. you may have noticed the background is a different color."
    }, 1000);
        setTimeout(() => {
            button.textContent = "colors can mean a lot of things. they have names, they have several types of codes, rgb, hex, whatever."
        }, 3000);
            setTimeout(() => {
                button.textContent = "these codes, then, can have meanings of their own. numbers can mean myriad things. dates, identification numbers, 39 means miku."
            }, 5000);
                setTimeout(() => {
                    button.textContent = "did you know that each pokemon has its own 4 digit number?"
                }, 10000);
