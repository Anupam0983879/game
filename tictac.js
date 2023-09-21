let box2 = document.querySelectorAll('.box')
let flag = 0;
let div1 = document.querySelector('.one')
let div2 = document.querySelector('.two')
let div3 = document.querySelector('.three')
let div4 = document.querySelector('.four')
let div5 = document.querySelector('.five')
let div6 = document.querySelector('.six')
let div7 = document.querySelector('.seven')
let div8 = document.querySelector('.eight')
let div9 = document.querySelector('.nine')
let winner2 = document.querySelector('#winner')
let score = 0
let turn = "X"
let pointX = document.querySelector('#x-table')
let btn = document.querySelector('#btn')
let playerTing = new Audio('playerTing.mp3')
let gameOver = new Audio('gameover.mp3')
let xscore = document.querySelector('#x-table')
let Oscore = document.querySelector('#o-table')
let x = 0
let o = 0
let fullScreen = document.querySelector('#full-screen')

box2.forEach((elem) => {
    elem.addEventListener('click', function (e) {

        if (elem.innerHTML == "") {
            elem.innerHTML = turn;
            turn == 'X' ? turn = "O" : turn = "X"
            playerTing.play();
            winner();

        }

    })
    paused();
    function winner() {
        if (div1.innerHTML == div2.innerHTML && div2.innerHTML == div3.innerHTML && div1.innerHTML != "" && div2.innerHTML != "" && div3.innerHTML != "") {
            winner2.innerHTML = `Winner are the : ${div1.innerHTML}`
         
            gameOver.play()
            div1.innerHTML == 'X' ? x++ : o++
            setTimeout(() => {
                reset()
            }, 300)
            pointsTable();

        }
        else if (div4.innerHTML == div5.innerHTML && div5.innerHTML == div6.innerHTML && div4.innerHTML != "" && div5.innerHTML != "" && div6.innerHTML != "") {
            winner2.innerHTML = `${div4.innerHTML}`
            div5.innerHTML == 'X' ? x++ : o++
            winner2.innerHTML = `Winner are the : ${div4.innerHTML}`
            playerTing.pause()
            pointsTable();
            gameOver.play()
            setTimeout(() => {
                reset()
            }, 500)


        }
        else if (div7.innerHTML == div8.innerHTML && div8.innerHTML == div9.innerHTML && div7.innerHTML != "" && div8.innerHTML != "" && div9.innerHTML != "") {
            winner2.innerHTML = `${div4.innerHTML}`
            winner2.innerHTML = `Winner are the : ${div7.innerHTML}`
            playerTing.pause()
            div7.innerHTML == 'X' ? x++ : o++
            gameOver.play()
            pointsTable();
            setTimeout(() => {
                reset()
            }, 500)

        }
        else if (div1.innerHTML == div4.innerHTML && div4.innerHTML == div7.innerHTML && div1.innerHTML != "" && div4.innerHTML != "" && div7.innerHTML != "") {
            winner2.innerHTML = `${div4.innerHTML}`
            div1.innerHTML == 'X' ? x++ : o++
            winner2.innerHTML = `Winner are the : ${div7.innerHTML}`
            playerTing.pause()
            pointsTable();
            gameOver.play()
            setTimeout(() => {
                reset()
            }, 500)

        }
        else if (div2.innerHTML == div5.innerHTML && div5.innerHTML == div8.innerHTML && div2.innerHTML != "" && div5.innerHTML != "" && div8.innerHTML != "") {
            winner2.innerHTML = `${div4.innerHTML}`
            winner2.innerHTML = `Winner are the : ${div8.innerHTML}`
            playerTing.pause()
            pointsTable();
            div2.innerHTML == 'X' ? x++ : o++
            gameOver.play()
            setTimeout(() => {
                reset()
            }, 500)

        }
        else if (div3.innerHTML == div6.innerHTML && div6.innerHTML == div9.innerHTML && div3.innerHTML != "" && div6.innerHTML != "" && div9.innerHTML != "") {
            winner2.innerHTML = `${div4.innerHTML}`
            winner2.innerHTML = `Winner are the : ${div9.innerHTML}`
            playerTing.pause()
            pointsTable();
            div3.innerHTML == 'X' ? x++ : o++
            gameOver.play()
            setTimeout(() => {
                reset()
            }, 500)

        }
        else if (div1.innerHTML == div5.innerHTML && div5.innerHTML == div9.innerHTML && div1.innerHTML != "" && div5.innerHTML != "" && div9.innerHTML != "") {
            winner2.innerHTML = `${div9.innerHTML}`
            winner2.innerHTML = `Winner are the : ${div9.innerHTML}`
            playerTing.pause()
            pointsTable();
            div1.innerHTML == 'X' ? x++ : o++
            gameOver.play()
            setTimeout(() => {
                reset()
            }, 500)

        }
        else if (div3.innerHTML == div5.innerHTML && div5.innerHTML == div7.innerHTML && div3.innerHTML != "" && div5.innerHTML != "" && div7.innerHTML != "") {
            winner2.innerHTML = `${div7.innerHTML}`
            winner2.innerHTML = `Winner are the : ${div9.innerHTML}`
            playerTing.pause()
            div7.innerHTML == 'X' ? x++ : o++
            gameOver.play()
            pointsTable();
            setTimeout(() => {
                reset()
            }, 500)

        }
        else if (div1.innerHTML != "" && div2.innerHTML != "" && div3.innerHTML != "" &&
            div3.innerHTML != "" && div6.innerHTML != "" && div9.innerHTML != "" &&
            div7.innerHTML != "" && div8.innerHTML != "" && div9.innerHTML != "") {
            fullScreen.style.transform = 'scale(1)'
            setTimeout(() => {
                fullScreen.style.transform = 'scale(0)'
            }, 1500);
            reset();
        }
    }
    btn.addEventListener('click', function (params) {
        reset();

    })
    function reset() {
        box2.forEach((e) => {
            e.innerHTML = "";
            winner2.innerHTML = `Winner are the : ${div4.innerHTML}`
        })
    }
    function pointsTable() {
        xscore.innerHTML = ` X score is : ${x}`
        Oscore.innerHTML = ` O score is : ${o}`

    }
    function paused() {
        playerTing.pause()
        
        
    }





})

