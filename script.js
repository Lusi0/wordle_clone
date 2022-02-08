// get a random word from const words
function getRandomWord() {
    return words[Math.floor(Math.random() * words.length)];
    }

const myrandomword = getRandomWord();

console.log(myrandomword);

const boxes = document.querySelectorAll(".box");

// clear the text in all of the boxes
function clearBoxes() {
    // loop through all of the boxes
    boxes.forEach(box => {
        // select the div with a class of box_content 
        selected = box.querySelector(".box_content")
        // select the header in the div
        selected.innerHTML = "";
    });
}

clearBoxes();

num = 0;
total = 0;
row = 1;
word = "";
winner = false;



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
            }

            if (num == 5 && words.includes(word)) {
                // reset the number
                
                // increment the row

                // for boxes total - total + 5 add id "tried"
                j = 0;
                tempword = myrandomword.split("");
                for (i = total - num; i < total; i++) {
                    // check to see if the current box matches any letters in the word
                    if (word[j] == myrandomword[j]) {
                        boxes[i].classList.add("correct");
                        // remove one object that is equal to word[j] from tempword
                        tempword.splice(tempword.indexOf(word[j]), 1);
                    } else if (myrandomword.split("").includes(word[j]) && tempword.includes(word[j])) {
                        boxes[i].classList.add("goodtried");
                        tempword.splice(tempword.indexOf(word[j]), 1);
                    }
                    else {
                    boxes[i].classList.add("tried");
                    }
                    j++
                }

                num = 0;
                word = "";
                row++;
                
                // if the row is greater than the number of boxes, reset the row
                
                if (row > 6) {
                    row = 6;
                }
                
            }
        }
    }
    console.log(total,num);

});

document.addEventListener("keydown", function(event) {
        // if the key pressed is backspace clear the box that corresponds to num and decrement num
    if (winner != true) {
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

            console.log(total,num);
            // remove the last letter from the word
            word = word.slice(0, -1);
            }
            
        }
    }
});