const arenas = document.querySelector('.arenas');

const player1 = {
    name: 'Scorpion',
    hp: 50,
    img: "http://reactmarathon-api.herokuapp.com/assets/scorpion.gif",
    weapon: ['axe', 'rifle'],
    attack: function (){
        console.log(player1.name+'Fight...')
    }

}

const player2 = {
    name: 'Akira',
    hp: 100,
    img: 'http://reactmarathon-api.herokuapp.com/assets/sonya.gif',
    weapon: ['axe', 'rifle'],
    attack: function (){
        console.log(player1.name+'Fight...')
    }
}




function createPlayer1(name,hp,img){
    const $player1 = document.createElement('div')
    const $progressbar = document.createElement('div')
    const $character = document.createElement('div')
    const $life = document.createElement('div')
    const $name = document.createElement('div')
    const $img = document.createElement('img')

    $player1.classList.add('player1')
    $progressbar.classList.add('progressbar')
    $character.classList.add('character')
    $life.classList.add('life')
    $name.classList.add('name')
    
    arenas.appendChild($player1)
    $player1.appendChild($progressbar)
    $player1.appendChild($character)
    $progressbar.appendChild($life)
    $progressbar.appendChild($name)
    $character.appendChild($img)


    $life.style.width = hp + '%'
    $name.innerText = name
    $img.src = img

}

function createPlayer2(name,hp,img){
    const $player2 = document.createElement('div')
    const $progressbar = document.createElement('div')
    const $character = document.createElement('div')
    const $life = document.createElement('div')
    const $name = document.createElement('div')
    const $img = document.createElement('img')

    $player2.classList.add('player2')
    $progressbar.classList.add('progressbar')
    $character.classList.add('character')
    $life.classList.add('life')
    $name.classList.add('name')
    
    arenas.appendChild($player2)
    $player2.appendChild($progressbar)
    $player2.appendChild($character)
    $progressbar.appendChild($life)
    $progressbar.appendChild($name)
    $character.appendChild($img)
    
    $life.style.width = hp + '%'
    $name.innerText = name
    $img.src = img

}



createPlayer1(player1['name'],player1['hp'],player1['img'])
createPlayer2(player2['name'],player2['hp'],player2['img'])




