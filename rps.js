//what to improve
//1. get a new header image so the text can be read more easily
//2. make a scoreboard
//3. indicate with "win" or "tie" who won or lost
//4. have the "you're a phony" text cycle through different funny phrases

$(document).ready(function() {

    var donald = false;
    var hillary = false;
    var date = new Date();
    //var hours = date.getHours();
    var you = 0;
    var enemy = 0;
    var donaldCount = 0;
    var hillaryCount = 0;
    var computerChoice;
    //console.log("Hours: " + hours);
    // if (hours < 12) {
    //     $("#visible").html("Good morning! Choose your player.");
    // } else if (hours < 17) {
    //     $('#visible').html("Good afternoon! Choose your player.");
    // } else {
    //     $("#visible").html("Good evening! Choose your player.");
    // }
    
    var roc = function() { console.log("it should say 'rock..."); $('#rps').html("Rock..."); }
    var pap = function() { $('#rps').html("Paper..."); }
    var sci = function() { $('#rps').html("Scissors..."); }
    var shoo = function() { $('#rps').html("Shoot!"); }
    
    //this function reenables all buttons and returns the pictures to their original
    var enableRPS = function() {
        $('body').css("pointer-events", "auto");
        $('.donald').css("pointer-events", "auto");
        $('.hillary').css("pointer-events", "auto");
        $("#donaldChoice").html("");
        $("#hillaryChoice").html("");
        $('#rps').html("");
        donaldPic();
        hillaryPic();
    }
    
    //testing this
    var computer = function() {
        computerChoice = Math.random();
        if (computerChoice < 0.34) {
        	computerChoice = "rock";
        } else if(computerChoice <= 0.67) {
        	computerChoice = "paper";
        } else {
        	computerChoice = "scissors";
        } console.log("Computer: " + computerChoice);
        return computerChoice;
    }
    
    var shoot = function() {
        console.log("shoot function called");
        $('body').css("pointer-events", "none");
        setTimeout(roc, 400);
        setTimeout(pap, 1000);
        setTimeout(sci, 1600);
        setTimeout(shoo, 2200);
    };
    
    var RPSfadeOut = function() {
        $('.rock').fadeOut();
        $('.paper').fadeOut();
        $('.scissors').fadeOut();
        $('#2of3').fadeOut();
    }
    
    var RPSfadeIn = function() {
        $('.rock').fadeIn();
        $('.paper').fadeIn();
        $('.scissors').fadeIn();
        $('#2of3').fadeIn();
        
    }
    
    var donaldPic = function() {
        $('.donald').show();
        $('.donaldPaper').hide();
        $('.donaldScissors').hide();
        $('.donaldRock').hide();
    }
    
    var donaldRock = function() {
        $('.donald').hide();
        $('.donaldPaper').hide();
        $('.donaldScissors').hide();
        $('.donaldRock').show();
        $('#donaldChoice').html("Rock");
    }
    var donaldPaper = function() {
        $('.donald').hide();
        $('.donaldPaper').show();
        $('.donaldScissors').hide();
        $('.donaldRock').hide();
        $('#donaldChoice').html("Paper");
    }
    var donaldScissors = function() {
        $('.donald').hide();
        $('.donaldPaper').hide();
        $('.donaldScissors').show();
        $('.donaldRock').hide();
        $('#donaldChoice').html("Scissors");
    }
    
    var hillaryPic = function() {
        $('.hillary').show();
        $('.hillaryRock').hide();
        $('.hillaryPaper').hide();
        $('.hillaryScissors').hide();
        
    }
    var hillaryRock = function() {
        $('.hillary').hide();
        $('.hillaryRock').show();
        $('.hillaryPaper').hide();
        $('.hillaryScissors').hide();
        $('#hillaryChoice').html("Rock");
    }
    var hillaryPaper = function() {
        $('.hillary').hide();
        $('.hillaryRock').hide();
        $('.hillaryPaper').show();
        $('.hillaryScissors').hide();
        $('#hillaryChoice').html("Paper");
    }
    var hillaryScissors = function() {
        $('.hillary').hide();
        $('.hillaryRock').hide();
        $('.hillaryPaper').hide();
        $('.hillaryScissors').show();
        $('#hillaryChoice').html("Scissors");
    }
    
    var disable = function() {
        donaldCount = 0;
        hillaryCount = 0;
        donaldPic();
        hillaryPic();
        $("#donaldCount").html(donaldCount);
        $("#hillaryCount").html(hillaryCount);
        $("#donaldChoice").html("");
        $("#hillaryChoice").html("");
        $('#hidden').hide();
        $('.hillary').css("box-shadow", "0 0 0 0 black");
        $('.donald').css("box-shadow", "0 0 0 0 black");
        $("#visible").html("Choose your player");
        $('#rps').hide();
        $('#2of3').html("");
        console.log("disable function called");
    };
    
    var showRPS = function() {
        console.log('showRPS function called');
        $('#rps').show();
        $('#2of3').html('Best 2 out of 3');
        $('#hidden').show();
    };
    
    var score = function() {
        $("#donaldCount").html(donaldCount);
        $('#hillaryCount').html(hillaryCount);
    }
    
    var gameOver = function() {
        console.log("gameOver function called");
        if (you === 2 && donald) {
            $("#winningPres").attr("src","donald-wins.jpg");
            $('.modal-title').html("Congratulations Donald! You are now the POTUS!")
            $("#myModal").modal();
            disable();
        }
        else if (you === 2 && hillary) {
            $("#winningPres").attr("src","clinton-wins.JPG");
            $('.modal-title').html("Congratulations Hillary! You are now the POTUS!")
            $("#myModal").modal();
            disable();
        }
        else if (enemy === 2 && donald) {
            $("#winningPres").attr("src","clinton-wins.JPG");
            $('.modal-title').html("Sorry Donald! Hillary is now the POTUS!")
            $("#myModal").modal();
            disable();
        }
        else if (enemy === 2 && hillary) {
            $("#winningPres").attr("src","donald-wins.jpg");
            $('.modal-title').html("Sorry Hillary! Donald is now the POTUS!")
            $("#myModal").modal();
            disable();
        }
    };
    
    var presidentClick = function() {
        setTimeout(showRPS, 800);
        you = 0;
        enemy = 0;
        donaldCount = 0;
        hillaryCount = 0;
        $("#donaldCount").html(donaldCount);
        $("#hillaryCount").html(hillaryCount);
    };
    
    
    $('.donald').click(function() {
        presidentClick();
        $("#visible").html("You're a phony and a fraud!");
        $('.donald').css("box-shadow", "0px 0px 10px 6px #003777");
        $('.donaldRock').css("box-shadow", "0px 0px 10px 6px #003777");
        $('.donaldPaper').css("box-shadow", "0px 0px 10px 6px #003777");
        $('.donaldScissors').css("box-shadow", "0px 0px 10px 6px #003777");
        $('.hillary').css("box-shadow", "0 0 0 0 black");
        $('.hillaryRock').css("box-shadow", "0 0 0 0 black");
        $('.hillaryPaper').css("box-shadow", "0 0 0 0 black");
        $('.hillaryScissors').css("box-shadow", "0 0 0 0 black");
        donald = true;
        hillary = false;
        
    });
    
    $('.hillary').click(function() {
        presidentClick();
        $("#visible").html("Liars never win!");
        $('.hillary').css("box-shadow", "0px 0px 10px 6px #003777");
        $('.hillaryRock').css("box-shadow", "0px 0px 10px 6px #003777");
        $('.hillaryPaper').css("box-shadow", "0px 0px 10px 6px #003777");
        $('.hillaryScissors').css("box-shadow", "0px 0px 10px 6px #003777");
        $('.donald').css("box-shadow", "0 0 0 0 black");
        $('.donaldRock').css("box-shadow", "0 0 0 0 black");
        $('.donaldPaper').css("box-shadow", "0 0 0 0 black");
        $('.donaldScissors').css("box-shadow", "0 0 0 0 black");
        hillary = true;
        donald = false;
    });
    
    
    
    $('.rock').click(function() {
        shoot();
        RPSfadeOut();
        setTimeout(RPSfadeIn, 5000);
        setTimeout(enableRPS, 5000);
        var userChoice = "rock";
        computer();
        
        if(donald) {
            setTimeout(donaldRock, 2200);
        } else {
            setTimeout(hillaryRock, 2200);
        }
    
        if (userChoice === computerChoice)
        {
            if (donald){
                setTimeout(hillaryRock, 2200);
            }
            else {
                setTimeout(donaldRock, 2200);
            }
            
        }
        else if(computerChoice === "scissors")
        {
            you += 1;
            if (donald){
                setTimeout(hillaryScissors, 2200);
                donaldCount +=1;
            }
            else {
                setTimeout(donaldScissors, 2200);
                hillaryCount +=1;
            }
        }
        else
        {
            enemy += 1;
            console.log(enemy);
            if (donald){
                setTimeout(hillaryPaper, 2200);
                hillaryCount +=1;
            }
            else {
                setTimeout(donaldPaper, 2200);
                donaldCount +=1;
            }
        }
        setTimeout(score, 2200);
        setTimeout(gameOver, 4500);
    });
    
    $('.paper').click(function() {
        shoot();
        RPSfadeOut();
        setTimeout(RPSfadeIn, 5000);
        setTimeout(enableRPS, 5000);
        computer();
        var userChoice = "paper";
        
        if (donald) {
            setTimeout(donaldPaper, 2200);
        } else {
            setTimeout(hillaryPaper, 2200);
        }
        
        if(computerChoice === "paper") 
        {
            if (donald){
                setTimeout(hillaryPaper, 2200);
            }
            else {
                setTimeout(donaldPaper, 2200);
            }
        }
        else if(computerChoice === "rock")
        {
            you += 1;
            if (donald){
                setTimeout(hillaryRock, 2200);
                donaldCount += 1;
            }
            else {
                setTimeout(donaldRock, 2200);
                hillaryCount += 1;
            }
        }
        else
        {
            enemy += 1;
            if (donald){
                setTimeout(hillaryScissors, 2200);
                hillaryCount += 1;
            }
            else {
                setTimeout(donaldScissors, 2200);
                donaldCount += 1;
            }
        }
        setTimeout(score, 2200)
        setTimeout(gameOver, 4500);
    });
    
    $('.scissors').click(function() {
        shoot();
        RPSfadeOut();
        setTimeout(RPSfadeIn, 5000);
        setTimeout(enableRPS, 5000);
        computer();
        var userChoice = "scissors";
        
        if (donald) {
            setTimeout(donaldScissors, 2200);
        } else {
            setTimeout(hillaryScissors, 2200);
        }
        
        if(computerChoice === "scissors")
        {
            if (donald){
                setTimeout(hillaryScissors, 2200);
            }
            else {
                setTimeout(donaldScissors, 2200);
            }
        }
        else if(computerChoice === "rock")
        {
            enemy += 1;
            if (donald){
                setTimeout(hillaryRock, 2200);
                hillaryCount += 1;
            }
            else {
                setTimeout(donaldRock, 2200);
                donaldCount += 1;
            }
        }
        else
        {
            you += 1;
            if (donald){
                setTimeout(hillaryPaper, 2200);
                donaldCount += 1;
            }
            else {
                setTimeout(donaldPaper, 2200);
                hillaryCount += 1;
            }
        }
        $('#donaldCount').delay(5000).queue(function(n){
            $(this).html(donaldCount);
        });
        setTimeout(score, 2200);
        setTimeout(gameOver, 4500);
    });
});