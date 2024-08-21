    $("button.check").click(function bottom(){
        var input1 = document.querySelector("#yourname").value;
        var firstLetterSlice1 = input1.slice(0,1);
        var firstLetterCapital1 = firstLetterSlice1.toUpperCase();
        var lastLetters1 = input1.slice(1, input1.length);
        var lastLettersToLower1 = lastLetters1.toLowerCase();
        var userName = firstLetterCapital1 + lastLettersToLower1;
    
        var input2 = document.querySelector("#lovername").value;
        var firstLetterSlice2 = input2.slice(0,1);
        var firstLetterCapital2 = firstLetterSlice2.toUpperCase();
        var lastLetters2 = input2.slice(1, input2.length);
        var lastLettersToLower2 = lastLetters2.toLowerCase();
        var loverName = firstLetterCapital2 + lastLettersToLower2;
        var lineOfCode = userName + " and " + loverName;

        var randomNumber = Math.floor(Math.random()*100);
       if(randomNumber <= 30) {
            $("h1").text( lineOfCode + "💗love's💗 score is " + randomNumber + "%, your love is like oil and water");
        } else if(randomNumber >30 && randomNumber <= 70){
            $("h1").text( lineOfCode + " 💗love's💗 score is " + randomNumber + "%");
        } else{
            $("h1").text( lineOfCode + " 💗love's💗 score is " + randomNumber + "% don't miss it," + " your love is like butter and cheese ");
        }
        })
    $("button.reset").click(function h(){
        $("h1").text("Calculate your 💕love score");
    })







