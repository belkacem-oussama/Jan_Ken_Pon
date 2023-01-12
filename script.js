app = {
    init: function()
    {
        console.log('init');
        //Create background
        const appDiv = app.createElement('div', {className:'app'},document.body);

        //Create h1elem
        const h1 = app.createElement('h1', {textContent:'Jan Ken Pon !'}, appDiv)

        //Create screen game
        const screenGame = app.createElement('div',{className:'game'}, appDiv)

        //Create pElem
        const pElement = app.createElement('p',{className:'result'}, screenGame)

        //Create playersChoice
        const choicesDiv = app.createElement('div',{className:'choixJoueur'}, screenGame)

        //Pierre
        const pierreDiv = app.createElement('div',{className:'pierre'}, choicesDiv)
        const pierreButton = app.createElement('button',{className:'pierre',textContent:'✊🏻'}, pierreDiv)
        const listenerPierre = pierreButton.addEventListener('click', function(){console.log('Pierre')})

        //Feuille
        const feuilleDiv = app.createElement('div',{className:'feuille'}, choicesDiv)
        const feuilleButton = app.createElement('button',{className:'feuille',textContent:'✋🏻'}, feuilleDiv)
        const listenerFeuille = feuilleButton.addEventListener('click', function(){console.log('Feuille')})


        //Ciseaux
        const ciseauxDiv = app.createElement('div',{className:'ciseaux'}, choicesDiv)
        const ciseauxButton = app.createElement('button',{className:'ciseaux',textContent:'✌🏻'}, ciseauxDiv)
        const listenerCiseaux = ciseauxButton.addEventListener('click', function(){console.log('Ciseaux')})


        //Reset
        const resetDiv = app.createElement('div',{className:'reset'}, screenGame)
        const resetButton = app.createElement('button',{className:'reset',textContent:'Play again'}, resetDiv)
        const listenerReset = resetButton.addEventListener('click', function(){console.log('Reset')})


    },

    createElement: function(typeElem, options, parentElem)
    {
        const element = document.createElement(typeElem);
        Object.assign(element, options);
        parentElem.appendChild(element);

        return element;
    },

}

document.addEventListener('DOMContentLoaded',app.init);