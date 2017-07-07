// START JAVASCRIPT PAPER, STONE, SCISSORS

/* var compare = function (choix1, choix2)
{
    if (choix1 === choix2)
    {
        return "Egalité!";
    }
    else
    {
        if(choix1 === "Pierre")
        {
            if(choix2 === "Feuille")
            {
               return "La Feuille bat la Pierre. Vous avez perdu.";
            }
            else
            {
                return "La Pierre bat le Ciseau. Vous avez gagné.";

            }
        }
        else
        {
            if(choix1 === "Feuille")
                {
                     if(choice2 === "Pierre")
                        {
                             return "La Feuille bat la Pierre. Vous avez gagné.";
                        }
            else
                {
                return "Le Ciseau bat la Pierre. Vous avez perdu.";               }

                }
    if(choix1 === "Ciseau")
                {
                     if(choix2 === "Pierre")
                        {
                             return "La Pierre bat le Ciseau. Vous avez perdu.";
                        }
            else
                {
                return "Le Ciseau bat la Pierre. Vous avez gagné.";               }

                }
        }
    }



};
var r = function(user)
{
    while(user < 0 | user >3)
    {user = prompt("Pierre, Feuille, Ciseaux ?");
    }

    if(user === "Pierre")
    user = "Pierre";

    else
    {
        if(user === "Feuille")
        {user = "Pierre";}
        else
        {user = "Ciseau";}
    };
    console.log("Vous avez choisi: " + user);

    computerChoice = Math.random()
    if(computerChoice <= 0.33)
    {
        computerChoice = "Pierre";
    }
    else
    {
        if(computerChoice > 0.33 && computerChoice <=0.66)
        {computerChoice = "Pierre";}
        else
        {computerChoice = "Ciseau";}
    }

    console.log("ordinateur choisi: "+computerChoice)
    console.log(compare(user, computerChoice));
    if(user===computerChoice)
    {
        userChoice = user;
        return "Pierre";}

};


var userChoice = prompt("Pierre, Feuille, Ciseaux")
var computerChoice;

var a = r(userChoice);
if(a === "Pierre")
{//console.log("Pierre");
while(userChoice === computerChoice)
{
    var a = prompt("Egalité. Rejouons! Pierre, Feuille, Ciseaux.")
    var b = r(a);
    if(b !== "Pierre")
    {break;}
}
}

// END JAVASCRIPT PAPER, STONE, SCISSORS
