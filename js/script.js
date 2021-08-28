window.addEventListener('DOMContentLoaded', () =>{
    const loaded = document.querySelector('.loader')
   
   
    setTimeout(() => {
        loaded.style.opacity = '0'
        setTimeout(() => {
            loaded.style.display = 'none'
        }, 500);
    }, 3000);

    const choices = document.querySelectorAll('.choice'),
        score = document.querySelector('#score'),
        modal = document.querySelector('.modal'),
        results = document.querySelector('#result'),
        restart = document.querySelector('#restart'),
        scoreBoard = {
            player: 0,
            computer: 0,
            draw: 0
        };

    // Play game

    function play(event) {
        restart.style.display = 'inline-block'
        const playerChoice = event.target.id
        const computerChoice = getComputerChoice()
        const winner = getWinner(playerChoice,computerChoice)
        showWinner(winner, computerChoice)
    }

    // GetComputerChoice
    function getComputerChoice() {
        const rand = Math.random()
        console.log(rand)
        if (rand < 0.34) {
            return 'rock'
        } else if ( rand <= 0.67) {
            return 'paper'
        } else {
            return 'scissors'
        }
    }

    // Get Winner
    function getWinner(p, c) {
        if (c === p) {
            return 'draw'
        } else if (p === 'rock') {
            if (c === 'paper') {
                return 'computer'
            } else {
                return 'player'
            }
        } else if (p === 'paper') {
            if (c === 'scissors') {
                return 'computer'
            } else {
                return 'player'
            }
        } else if (p === 'scissors') {
            if (c === 'rock') {
                return 'computer'
            } else {
                return 'player'
            }
        }
    }

    // Show Winner
    function showWinner(winner, computerChoice) {
        if (winner === 'player') {
            scoreBoard.player++
            results.innerHTML = `
            <h1 class="test-win">You won</h1>
            <i class="fas fa-hand-${computerChoice} fa-10x"></i>
            <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>
            `
        }else if (winner === 'computer') {
            scoreBoard.computer++
            results.innerHTML = `
            <h1 class="test-win">You lose</h1>
            <i class="fas fa-hand-${computerChoice} fa-10x"></i>
            <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>
            `
        }else {
            // scoreBoard.player++
            // scoreBoard.computer++
            results.innerHTML = `
            <h1 class="test-win">It's a draw</h1>
            <i class="fas fa-hand-${computerChoice} fa-10x"></i>
            <p>Computer Chose <strong>${computerChoice.charAt(0).toUpperCase() + computerChoice.slice(1)}</strong></p>
            `
        }
        score.innerHTML = `
            <p> Player: ${scoreBoard.player} </p>
            <p> Computer: ${scoreBoard.computer} </p>
        `
        modal.style.display = "block"    
    }

    // Restart game

    function restartGame() {
        scoreBoard.player = 0
        scoreBoard.computer = 0
        score.innerHTML = `
            <p> Player: ${scoreBoard.player} </p>
            <p> Computer: ${scoreBoard.computer} </p>
        `
    }

    // ClearModel
    function clearModel(event) {
        if (event.target == modal) {
            modal.style.display = "none"
        }
    }

    // Event Listeners
choices.forEach(choice => choice.addEventListener('click', play))
window.addEventListener('click', clearModel)
restart.addEventListener('click', restartGame)

})
