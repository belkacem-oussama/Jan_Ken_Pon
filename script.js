const app = {
    player: null,
    resultElem: null,
    computer: null,
    pElement: null,
    userScore : 0,
    computerScore : 0,

    init: function()
    {
        //Create background
        const appDiv = app.createElement('div', {className:'app'},document.body);

        //Create h1elem
        const h1 = app.createElement('h1', {textContent:'JAN KEN PON !'}, appDiv)

        //Create screen game
        const screenGame = app.createElement('div',{className:'game'}, appDiv)

        //Create pElem
        let pEleme = app.pElement = app.createElement('div',{className:'result'}, screenGame)

        //2 élément en plus 1 pc 1 player
        app.computer = app.createElement('div',{className:'computer'},pEleme)
        app.player = app.createElement('div',{className:'player'},pEleme)

        //Create playersChoice
        const choicesDiv = app.createElement('div',{className:'choixJoueur'}, screenGame)

        //Pierre
        const pierreDiv = app.createElement('div',{className:'pierre'}, choicesDiv)
        const imagePierre = pierreDiv.textContent
        const pierreButton = app.createElement('button',{className:'pierre',textContent:'✊🏻'}, pierreDiv)
        const listenerPierre = pierreButton.addEventListener('click', function () {app.displayElement(pierreButton); app.displayElementOrdi(); app.playGame()})

        //Feuille
        const feuilleDiv = app.createElement('div',{className:'feuille'}, choicesDiv)
        const feuilleButton = app.createElement('button',{className:'feuille',textContent:'✋🏻'}, feuilleDiv)
        const listenerFeuille = feuilleButton.addEventListener('click', function () {app.displayElement(feuilleButton); app.displayElementOrdi(); app.playGame()})

        //Ciseaux
        const ciseauxDiv = app.createElement('div',{className:'ciseaux'}, choicesDiv)
        const ciseauxButton = app.createElement('button',{className:'ciseaux',textContent:'✌🏻'}, ciseauxDiv)
        const listenerCiseaux = ciseauxButton.addEventListener('click', function () {app.displayElement(ciseauxButton); app.displayElementOrdi(); app.playGame()})
        
        //Score
        const userScoreElem = app.createElement('div', { className: 'user-score', textContent: `Vous: ${app.userScore}` }, app.pElement);
        const computerScoreElem = app.createElement('div', { className: 'computer-score', textContent: `Ordinateur: ${app.computerScore}` }, app.pElement);
        
        //Result
        app.resultElem = document.createElement('p');
        const parentElem = document.querySelector('.game');
        parentElem.appendChild(app.resultElem);

        //Reset button
        const resetButton = app.createElement('button', { className: 'reset', textContent: 'Reset' }, appDiv);
        resetButton.addEventListener('click', app.resetGame);
    },

    createElement: function(typeElem, options, parentElem)
    {
        const element = document.createElement(typeElem);
        Object.assign(element, options);
        parentElem.appendChild(element);

        return element;
    },

    displayElement: function(element)
    {
        app.player.textContent = element.textContent
    },

    displayElementOrdi: function() 
    {
        const options = ['✊🏻', '✋🏻', '✌🏻'];
        const randomIndex = Math.floor(Math.random() * options.length);
        const randomOption = options[randomIndex];
        app.computer.innerHTML = randomOption;
    },
    
    playGame: function() {
        // code for playing the game
        const userChoice = app.player.textContent;
        const computerChoice = app.computer.textContent;
    
        if (userChoice === computerChoice) {
            app.resultElem.textContent = "Egalité !";
        } else if (userChoice === "✊🏻" && computerChoice === "✌🏻" ||
                   userChoice === "✋🏻" && computerChoice === "✊🏻" ||
                   userChoice === "✌🏻" && computerChoice === "✋🏻") {
            app.resultElem.textContent = "Vous avez gagné !";
            app.userScore++; // update user score
            document.querySelector('.user-score').textContent = `Vous: ${app.userScore}`; // update user score element
        } else {
            app.resultElem.textContent = "Vous avez perdu !";
            app.computerScore++; // update computer score
            document.querySelector('.computer-score').textContent = `Ordinateur: ${app.computerScore}`; // update computer score element
        }
    },

    resetGame: function() {
        app.userScore = 0;
        app.computerScore = 0;
        app.player.textContent = "";
        app.computer.textContent = "";
        app.resultElem.textContent = "";
        document.querySelector('.user-score').textContent = `Vous: ${app.userScore}`;
        document.querySelector('.computer-score').textContent = `Ordinateur: ${app.computerScore}`;
    }
    
}

document.addEventListener('DOMContentLoaded',app.init);