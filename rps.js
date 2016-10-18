$(document).ready(function() {

    var donald = false;
    var hillary = false;
    var date = new Date();
    var hours = date.getHours();
    var you = 0;
    var enemy = 0;
    var donaldCount = 0;
    var hillaryCount = 0;
    var computerChoice;
    console.log("Hours: " + hours);
    if (hours < 12) {
        $("#visible").html("Good morning! Choose your player.");
    } else if (hours < 17) {
        $('#visible').html("Good afternoon! Choose your player.");
    } else {
        $("#visible").html("Good evening! Choose your player.");
    }
    
    var roc = function() { $('#rps').html("Rock..."); }
    var pap = function() { $('#rps').html("Paper..."); }
    var sci = function() { $('#rps').html("Scissors..."); }
    var shoo = function() { $('#rps').html("Shoot!"); }
    
    var enableRPS = function() {
        $('body').css("pointer-events", "auto");
        $('#rps').html("Choose again!");
        $('.donald').attr("src", "donald-trump.jpg");
        $('.hillary').attr("src", "hillary-clinton-thumbs-up.jpg")
    }
    
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
        $('#visible').html("...")
        console.log("shoot function called");
        $('body').css("pointer-events", "none");
        roc();
        setTimeout(pap, 750);
        setTimeout(sci, 1500);
        setTimeout(shoo, 2250);
    };
    
    var hideRockAndPaper = function() {
        $('.rock').css("opacity", 0);
        $('.paper').css("opacity", 0);
    };
    
    var showRockAndPaper = function() {
        $('.rock').css("opacity", 1);
        $('.paper').css("opacity", 1);
    };
    
    var hideRockAndScissors = function() {
        $('.rock').css("opacity", 0);
        $('.scissors').css("opacity", 0);
    };
    
    var showRockAndScissors = function() {
        $('.rock').css("opacity", 1);
        $('.scissors').css("opacity", 1);
    };
    
    var hidePaperAndScissors = function() {
        $('.paper').css("opacity", 0);
        $('.scissors').css("opacity", 0);
    };
    
    var showPaperAndScissors = function() {
        $('.paper').css("opacity", 1);
        $('.scissors').css("opacity", 1);
    };
    
    var donaldRock = function() { $('.donald').attr('src', 'donald-rock.jpeg'); $('#visible').html("Donald chose rock!"); }
    var donaldPaper = function() { $('.donald').attr('src', 'donald-paper.png'); $('#visible').html("Donald chose paper!"); }
    var donaldScissors = function() { $('.donald').attr('src', 'donald-scissors.jpg'); $('#visible').html("Donald chose scissors!"); }
    var hillaryRock = function() { $('.hillary').attr('src', 'hillary-rock.jpg'); $('#visible').html("Hillary chose rock!"); }
    var hillaryPaper = function() { $('.hillary').attr('src', 'hillary-paper.jpg'); $('#visible').html("Hillary chose paper!"); }
    var hillaryScissors = function() { $('.hillary').attr('src', 'hillary-scissors.jpg'); $('#visible').html("Hillary chose scissors!"); }
    
    var disable = function() {
        donaldCount = 0;
        hillaryCount = 0;
        $('.donald').attr('src', 'donald-trump.jpg');
        $('.hillary').attr('src', 'hillary-clinton-thumbs-up.jpg');
        $("#donaldCount").html(donaldCount);
        $("#hillaryCount").html(hillaryCount);
        $('#hidden').hide();
        $('.hillary').css("box-shadow", "0 0 0 0 black");
        $('.donald').css("box-shadow", "0 0 0 0 black");
        $("#visible").html("Choose your player.");
        $('#rps').hide();
        console.log("disable function called");
    };
    
    var showRPS = function() {
        console.log('showRPS function called');
        $('#rps').show().html("Let the games begin!");
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
        $("#visible").html("You're a phony and a fraud! Good luck.");
        $("#enemyName").html("Hillary");
        $('.donald').css("box-shadow", "0px 0px 10px 5px #003777");
        $('.hillary').css("box-shadow", "0 0 0 0 black");
        donald = true;
        hillary = false;
        
    });
    
    $('.hillary').click(function() {
        presidentClick();
        $("#visible").html("Liars never win! You can still try though.");
        $("#enemyName").html("Donald");
        $('.hillary').css("box-shadow", "0px 0px 10px 5px #003777");
        $('.donald').css("box-shadow", "0 0 0 0 black");
        hillary = true;
        donald = false;
    });
    
    
    
    $('.rock').click(function() {
        shoot();
        hidePaperAndScissors();
        setTimeout(showPaperAndScissors, 6000);
        setTimeout(enableRPS, 6000);
        var userChoice = "rock";
        computer();
        
        if(donald) {
            setTimeout(donaldRock, 2250);
        } else {
            setTimeout(hillaryRock, 2250);
        }
    
        if (userChoice === computerChoice)
        {
            if (donald){
                setTimeout(hillaryRock, 2250);
            }
            else {
                setTimeout(donaldRock, 2250);
            }
            
        }
        else if(computerChoice === "scissors")
        {
            you += 1;
            if (donald){
                setTimeout(hillaryScissors, 2250);
                donaldCount +=1;
            }
            else {
                setTimeout(donaldScissors, 2250);
                hillaryCount +=1;
            }
        }
        else
        {
            enemy += 1;
            console.log(enemy);
            if (donald){
                setTimeout(hillaryPaper, 2250);
                hillaryCount +=1;
            }
            else {
                setTimeout(donaldPaper, 2250);
                donaldCount +=1;
            }
        }
        setTimeout(score, 2250);
        setTimeout(gameOver, 4500);
    });
    
    $('.paper').click(function() {
        shoot();
        hideRockAndScissors();
        setTimeout(showRockAndScissors, 6000);
        setTimeout(enableRPS, 6000);
        computer();
        var userChoice = "paper";
        
        if (donald) {
            setTimeout(donaldPaper, 2250);
        } else {
            setTimeout(hillaryPaper, 2250);
        }
        
        if(computerChoice === "paper") 
        {
            if (donald){
                setTimeout(hillaryPaper, 2250);
            }
            else {
                setTimeout(donaldPaper, 2250);
            }
        }
        else if(computerChoice === "rock")
        {
            you += 1;
            if (donald){
                setTimeout(hillaryRock, 2250);
                donaldCount += 1;
            }
            else {
                setTimeout(donaldRock, 2250);
                hillaryCount += 1;
            }
        }
        else
        {
            enemy += 1;
            if (donald){
                setTimeout(hillaryScissors, 2250);
                hillaryCount += 1;
            }
            else {
                setTimeout(donaldScissors, 2250);
                donaldCount += 1;
            }
        }
        setTimeout(score, 2250)
        setTimeout(gameOver, 4500);
    });
    
    $('.scissors').click(function() {
        shoot();
        hideRockAndPaper();
        setTimeout(showRockAndPaper, 6000);
        setTimeout(enableRPS, 6000);
        computer();
        var userChoice = "scissors";
        
        if (donald) {
            setTimeout(donaldScissors, 2250);
        } else {
            setTimeout(hillaryScissors, 2250);
        }
        
        if(computerChoice === "scissors")
        {
            if (donald){
                setTimeout(hillaryScissors, 2250);
            }
            else {
                setTimeout(donaldScissors, 2250);
            }
        }
        else if(computerChoice === "rock")
        {
            enemy += 1;
            if (donald){
                setTimeout(hillaryRock, 2250);
                hillaryCount += 1;
            }
            else {
                setTimeout(donaldRock, 2250);
                donaldCount += 1;
            }
        }
        else
        {
            you += 1;
            if (donald){
                setTimeout(hillaryPaper, 2250);
                donaldCount += 1;
            }
            else {
                setTimeout(donaldPaper, 2250);
                hillaryCount += 1;
            }
        }
        $('#donaldCount').delay(6000).queue(function(n){
            $(this).html(donaldCount);
        });
        setTimeout(score, 2250);
        setTimeout(gameOver, 4500);
    });
});