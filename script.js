


function getTodaysWord() {
    //get the day month and year and put them into a string formatted as YYYY-MM-DD
    var today = new Date();
    var dd = today.getDate();
    var mm = today.getMonth()+1; //January is 0!
    var yyyy = today.getFullYear();
    
    today =   mm + yyyy + dd;
    // convert the string to a number
    today = parseInt(today);
    // use today as a seed to get a random word from the array
    return words[today % words.length];
}

function getRandomWord() {
    // get a random word from the array
    return words[Math.floor(Math.random() * words.length)];
}

let myrandomword = getTodaysWord();



const boxes = document.querySelectorAll(".box");

const boxes_special = document.querySelectorAll(".box_special");

// clear the text in all of the boxes
function clearBoxes() {
    // loop through all of the boxes
    boxes.forEach(box => {
        // select the div with a class of box_content 
        selected = box.querySelector(".box_content")
        // select the header in the div
        
    });
}

clearBoxes();

// check if user is on mobile

num = 0;
total = 0;
row = 1;
word = "";
winner = false;
loser = false;
practice_mode = false;

letters = "abcdefghijklmnopqrstuvwxyz";

letter_wrong = [];
letter_right = [];
letter_wrong_index = [];

// for box in boxes_special
update_helper = function() {
    for (j = 0; j < letters.length; j++) {
        // select the box that corresponds to the number
        selected = boxes_special[j].querySelector(".box_content");
        // put the letter in the box
        
        letter = letters[j];

        selected.innerHTML = letter;
        // increment the total

        // if the letter is in letter wrong
        if (letter_right.includes(letter)) {
            selected.classList.add("correct");
        } else if (letter_wrong_index.includes(letter)) {
            selected.classList.add("goodtried");
        } else if (letter_wrong.includes(letter)) {
            selected.classList.add("tried");
        } else {
            selected.classList.add("unguessed");
        }

        
    }
}

answers = [
];

saved = document.cookie.split("; "); 

for (i = 0; i < saved.length; i++) {
    saved[i] = saved[i].split("=")[1];
}
if (saved[0] != undefined) {
for (i = 0; i < saved.length; i++) {
    for (j = 0; j < saved[i].length; j++) {
        // select the box that corresponds to the number
        selected = boxes[total].querySelector(".box_content");
        // put the letter in the box
        selected.innerHTML = saved[i][j];
        // increment the total
        num++;
        total++;
        word += saved[i][j];
    }
    l = 0;
                tempword = myrandomword.split("");
                tempanswers = ["w","w","w","w","w"];
                // for (k = total - num; k < total; k++) {
                //     // check to see if the current box matches any letters in the word
                //     if (word[l] == myrandomword[l]) {
                //         boxes[k].classList.add("correct");
                //         // append "g" to tempanwers
                //         tempanswers.push("c");
                //         letter_right.push(word[l]);
                //         // remove one object that is equal to word[l] from tempword

                //         tempword.splice(tempword.indexOf(word[l]), 1);
                //     } else if (myrandomword.split("").includes(word[l]) && tempword.includes(word[l])) {
                //         boxes[k].classList.add("goodtried");
                //         tempanswers.push("y");
                //         tempword.splice(tempword.indexOf(word[l]), 1);
                //         letter_wrong_index.push(word[l]);
                //     }
                //     else {
                //     tempanswers.push("w");
                //     boxes[k].classList.add("tried");
                //     letter_wrong.push(word[l]);
                //     }
                //     l++

                // }

                l = 0;
                for (k = total - num; k < total; k++) {
                    if (word[l] == myrandomword[l]) {
                        boxes[k].classList.add("correct");
                        // append "g" to tempanwers
                        tempanswers[l] = "c";

                        letter_right.push(word[l]);
                        
                        // remove one object that is equal to word[j] from tempword

                        tempword.splice(tempword.indexOf(word[l]), 1);
                    }

                    l++
                }
                l = 0;
                for (k = total - num; k < total; k++) {
                    if (myrandomword.split("").includes(word[l]) && tempword.includes(word[l])) {
                        boxes[k].classList.add("goodtried");
                        tempanswers[l] = "y";
                        tempword.splice(tempword.indexOf(word[l]), 1);
                        letter_wrong_index.push(word[l]);
                    }
                    else {
                    boxes[k].classList.add("tried");
                    letter_wrong.push(word[l]);
                    }
                    l++
                }
                
                answers.push(tempanswers);
                num = 0;
                word = "";
                row++;
}
if (saved[saved.length - 1] == myrandomword) {
    winner = true;
    on();
    console.log("winner");
}
if (row >6){
    loser = true;
    on();
}
}

update_helper();

// when key is pressed if it is a letter put it into the box that corresponds to num
document.addEventListener("keypress", function(event) {
    // if the key pressed is a letter and key is not enter
    if (winner != true) {
        if (event.key.match(/[a-z]/i) && event.key != "Enter" && event.key != "Backspace") {
            if (num < 5) {
                // select the box that corresponds to the number
                selected = boxes[total].querySelector(".box_content");
                // put the letter in the box
                selected.innerHTML = event.key;
                // increment the number
                num++;
                // increment the total
                total++;
                // if the number is less than the number of boxes, reset the number
                word += event.key;
            }
        }
        // if the key pressed is enter
        if (event.key == "Enter") {
            if (word === myrandomword) {
                winner = true;
                on();
            }

            if (num == 5 && (words.includes(word) || weird.includes(word))) {
                // reset the number
                
                // increment the row

                // for boxes total - total + 5 add id "tried"
                
                // make the cookie expire at 12:00am the next day
                day = new Date();
                day.setDate(day.getDate() + 1);
                // set the time to 12:00am
                day.setHours(0,0,0,0);
                my_cookie = "row" + row + "=" + word + "; expires="+ day;
                if (practice_mode == false) {
                document.cookie = my_cookie;
                }

                j = 0;
                tempword = myrandomword.split("");
                tempanswers = ["w","w","w","w","w"];

                

                

                
                // for (i = total - num; i < total; i++) {
                //     // check to see if the current box matches any letters in the word
                //     if (word[j] == myrandomword[j]) {
                //         boxes[i].classList.add("correct");
                //         // append "g" to tempanwers
                //         tempanswers.push("c");

                //         letter_right.push(word[j]);
                        
                //         // remove one object that is equal to word[j] from tempword

                //         tempword.splice(tempword.indexOf(word[j]), 1);
                //     } else if (myrandomword.split("").includes(word[j]) && tempword.includes(word[j])) {
                //         boxes[i].classList.add("goodtried");
                //         tempanswers.push("y");
                //         tempword.splice(tempword.indexOf(word[j]), 1);
                //         letter_wrong_index.push(word[j]);
                //     }
                //     else {
                //     tempanswers.push("w");
                //     boxes[i].classList.add("tried");
                //     letter_wrong.push(word[j]);
                //     }
                //     j++

                // }

                j = 0;
                for (i = total - num; i < total; i++) {
                    if (word[j] == myrandomword[j]) {
                        boxes[i].classList.add("correct");
                        // append "g" to tempanwers
                        tempanswers[j] = "c";

                        letter_right.push(word[j]);
                        
                        // remove one object that is equal to word[j] from tempword

                        tempword.splice(tempword.indexOf(word[j]), 1);
                    }

                    j++
                }
                j = 0;
                for (i = total - num; i < total; i++) {
                    if (myrandomword.split("").includes(word[j]) && tempword.includes(word[j])) {
                        boxes[i].classList.add("goodtried");
                        tempanswers[j] = "y";
                        tempword.splice(tempword.indexOf(word[j]), 1);
                        letter_wrong_index.push(word[j]);
                    }
                    else {  
                    boxes[i].classList.add("tried");
                    letter_wrong.push(word[j]);
                    }
                    j++
                }

                
                answers.push(tempanswers);
                num = 0;
                word = "";
                row++;
                
                // if the row is greater than the number of boxes, reset the row
                
            }

            update_helper();
            if (row > 6){
                loser = true;
                on();
            }

        }
    }


});

document.addEventListener("keydown", function(event) {
        // if the key pressed is backspace clear the box that corresponds to num and decrement num
    if (winner != true && loser != true) {
        if (event.key == ("Backspace")) {
            // if total-1 is divisible by 5
            if (total % 5 != 0 || num != 0) {
                selected = boxes[total-1].querySelector(".box_content");
            selected.innerHTML = "";
            
            

            if (num-1 < 0) {
                num = 0
            } 
            else {
                num--;
                total--;
            }
            if (total < 0) {
                total = 0
            }

            // remove the last letter from the word
            word = word.slice(0, -1);
            }
            
        }
    }
});


function on() {
    document.getElementById("overlay").style.display = "block";
}

function on2() {
    document.getElementById("overlay2").style.display = "block";
}

document.getElementById("borble").onclick = function() {
    if (winner == true || loser == true) {
        on();
    } else {
        on2();
    }
}

document.getElementById("button").onclick = function() {
    if (winner == true && loser != true) {
        // date string formatted as DD-MM-YYYY
        var today = new Date();
        var dd = today.getDate();
        var mm = today.getMonth()+1; //January is 0!
        var yyyy = today.getFullYear();
        if (dd<10) {
            dd = '0'+dd;
        }
        if (mm<10){
            mm = '0'+mm;
        }
        date = dd+ "-"+mm+"-"+yyyy;
        
        // get row and subtract it by 1
        myrow = row - 1; 

        temp_text = "https://borble.netlify.app/ "+date+ " " + myrow +"/6";
        for (i = 0; i < answers.length; i++) {
            temp_text += "\n";
            for (j = 0; j < answers[i].length; j++) {
                if ( answers[i][j] === "c") {
                    temp_text += "🟩";
                } else if (answers[i][j] === "w"){
                    temp_text += "⬛";
                } else {
                    temp_text += "🟨";
                }
            }
            
        }
        // copy temp_text to clipboard
        navigator.clipboard.writeText(temp_text);
    }
    if (loser == true) {
            // date string formatted as DD-MM-YYYY
            var today = new Date();
            var dd = today.getDate();
            var mm = today.getMonth()+1; //January is 0!
            var yyyy = today.getFullYear();
            if (dd<10) {
                dd = '0'+dd;
            }
            if (mm<10){
                mm = '0'+mm;
            }
            date = dd+ "-"+mm+"-"+yyyy;
            
            // get row and subtract it by 1
            myrow = row - 1; 
    
            temp_text = "https://borble.netlify.app/ "+date + " X/6";
            for (i = 0; i < answers.length; i++) {
                temp_text += "\n";
                for (j = 0; j < answers[i].length; j++) {
                    if ( answers[i][j] === "c") {
                        temp_text += "🟩";
                    } else if (answers[i][j] === "w"){
                        temp_text += "⬛";
                    } else {
                        temp_text += "🟨";
                    }
                }
                
            }
            // copy temp_text to clipboard
            navigator.clipboard.writeText(temp_text);
    }
}
  
// when div with id overlay is clicked
document.getElementById("overlay").onclick = function() {
    
    // hide the overlay
    document.getElementById("overlay").style.display = "none";
    // clear the boxes

}

document.getElementById("overlay2").onclick = function() {
    
    // hide the overlay
    document.getElementById("overlay2").style.display = "none";
    // clear the boxes

}




// reset the game
document.getElementById("reset").onclick = function() {
    if (winner == true || loser == true) {
        // hide the overlay
        document.getElementById("overlay").style.display = "none";
        // clear the boxes
        for (i = 0; i < boxes.length; i++) {
            selected = boxes[i].querySelector(".box_content");
            boxes[i].classList.remove("tried");
            boxes[i].classList.remove("goodtried");
            boxes[i].classList.remove("correct");
            selected.innerHTML = "";
        }
        myrandomword = getRandomWord();
        
        //document.cookie.split(";").forEach(function(c) { document.cookie = c.replace(/^ +/, "").replace(/=.*/, "=;expires=" + new Date().toUTCString() + ";path=/"); });

        // reset the num
        num = 0;
        // reset the word
        word = "";
        // reset the row
        row = 1;
        // reset the total
        total = 0;
        // reset the answers
        answers = [];
        // reset the winner
        winner = false;
        // reset the loser
        loser = false;
        
        practice_mode = true;
    }
}


