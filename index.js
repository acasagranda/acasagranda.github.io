document.addEventListener('DOMContentLoaded', function() {
    // initially set up index page to display home only
    document.querySelector('#puzzle-div').style.display = 'none';
    document.querySelector('#login-div').style.display = 'none';
    document.querySelector('#signup-div').style.display = 'none';
    document.querySelector('#stats-loggedin-div').style.display = 'none';
    document.querySelector('#stats-loggedout-div').style.display = 'none';
    document.querySelector('#nav-loggedout').style.display = 'block';
    document.querySelector('#nav-loggedin').style.display = 'none';
    const lost = document.querySelector('#lost');
    if (lost) {
        lost.style.display = 'none';
    }
    
    // set up home page
    document.querySelector('#home').addEventListener('click', function(){
        document.querySelector('#intro-div').style.removeProperty("display");
        document.querySelector('#puzzle-div').style.display = 'none';
        document.querySelector('#login-div').style.display = 'none';
        document.querySelector('#signup-div').style.display = 'none';
        document.querySelector('#stats-loggedin-div').style.display = 'none';
        document.querySelector('#stats-loggedout-div').style.display = 'none';
        if (username === null){
            document.querySelector('#nav-loggedout').style.display = 'block';
            document.querySelector('#nav-loggedin').style.display = 'none';
        } else {
            document.querySelector('#nav-loggedout').style.display = 'none';
            document.querySelector('#nav-loggedin').style.display = 'block';
        }
        
        if (lost) {
        lost.style.display = 'none';
    }
    });
    document.querySelector('#home2').addEventListener('click', function(){
        document.querySelector('#intro-div').style.removeProperty("display");
        document.querySelector('#puzzle-div').style.display = 'none';
        document.querySelector('#login-div').style.display = 'none';
        document.querySelector('#signup-div').style.display = 'none';
        document.querySelector('#stats-loggedin-div').style.display = 'none';
        document.querySelector('#stats-loggedout-div').style.display = 'none';
        if (username === null){
            document.querySelector('#nav-loggedout').style.display = 'block';
            document.querySelector('#nav-loggedin').style.display = 'none';
        } else {
            document.querySelector('#nav-loggedout').style.display = 'none';
            document.querySelector('#nav-loggedin').style.display = 'block';
        }
        
        if (lost) {
        lost.style.display = 'none';
    }
    });


    // set up signup page
    document.querySelector('#signup').addEventListener('click', function(){
        document.querySelector('#intro-div').style.display = 'none';
        document.querySelector('#puzzle-div').style.display = 'none';
        document.querySelector('#login-div').style.display = 'none';
        document.querySelector('#signup-div').style.display = 'block';
        document.querySelector('#stats-loggedin-div').style.display = 'none';
        document.querySelector('#stats-loggedout-div').style.display = 'none';
        document.querySelector('#nav-loggedout').style.display = 'block';
        document.querySelector('#nav-loggedin').style.display = 'none';
        
        
        if (lost) {
        lost.style.display = 'none';
    }
    });
    document.querySelector('#signup2').addEventListener('click', function(){
        document.querySelector('#intro-div').style.display = 'none';
        document.querySelector('#puzzle-div').style.display = 'none';
        document.querySelector('#login-div').style.display = 'none';
        document.querySelector('#signup-div').style.display = 'block';
        document.querySelector('#stats-loggedin-div').style.display = 'none';
        document.querySelector('#stats-loggedout-div').style.display = 'none';
        document.querySelector('#nav-loggedout').style.display = 'block';
        document.querySelector('#nav-loggedin').style.display = 'none';
        
        
        if (lost) {
        lost.style.display = 'none';
    }
    });
    

    // set up login page
    document.querySelector('#login').addEventListener('click', function(){
        document.querySelector('#intro-div').style.display = 'none';
        document.querySelector('#puzzle-div').style.display = 'none';
        document.querySelector('#login-div').style.display = 'block';
        document.querySelector('#signup-div').style.display = 'none';
        document.querySelector('#stats-loggedin-div').style.display = 'none';
        document.querySelector('#stats-loggedout-div').style.display = 'none';
        document.querySelector('#nav-loggedout').style.display = 'block';
        document.querySelector('#nav-loggedin').style.display = 'none';
        
        
        if (lost) {
        lost.style.display = 'none';
    }
    });
    document.querySelector('#login2').addEventListener('click', function(){
        document.querySelector('#intro-div').style.display = 'none';
        document.querySelector('#puzzle-div').style.display = 'none';
        document.querySelector('#login-div').style.display = 'block';
        document.querySelector('#signup-div').style.display = 'none';
        document.querySelector('#stats-loggedin-div').style.display = 'none';
        document.querySelector('#stats-loggedout-div').style.display = 'none';
        document.querySelector('#nav-loggedout').style.display = 'block';
        document.querySelector('#nav-loggedin').style.display = 'none';
        
        
        if (lost) {
        lost.style.display = 'none';
    }
    });


    // set up stats page
    document.querySelector('#stats').addEventListener('click', function(){
        setup_stats()
    });
    // set up stats page
    document.querySelector('#stats2').addEventListener('click', function(){
        setup_stats()
    });

    // login, logout and setup buttons
    let lsbutton = document.querySelector('#signup-button');
    lsbutton.addEventListener("click", function() {
        signup_button();
        });
    lsbutton = document.querySelector('#login-button');
    lsbutton.addEventListener("click", function() {
        login_button();
        });
    lsbutton = document.querySelector('#logout');
    lsbutton.addEventListener("click", function() {
        username = null;
        const home = document.querySelector('#home');
        home.click();
        });
    
    // links to different sized puzzles
    document.querySelectorAll('.size-link').forEach(div => {
        div.addEventListener('click', function(){
                        puzzle(this.dataset.size);
                    });
    });
});
let username = null;
let mark = 'X';
let moves = [];
let move_set = new Set();
let red_set = new Set();
let start_set = [];
let start_set_marks = [];
let grid_size = 0;
let startup;
const deltas = [[-1,-1,-2,-2],[-1,0,-2,0],[-1,1,-2,2],[0,1,0,2],[1,1,2,2],[1,0,2,0],[1,-1,2,-2],[0,-1,0,-2],[-1,0,1,0],[0,-1,0,1],[-1,-1,1,1],[-1,1,1,-1]];

// set up puzzle page
function puzzle(size) {
    start_set = [];
    document.querySelector('#intro-div').style.display = 'none';
    document.querySelector('#lost').style.display = 'block';
    document.querySelector('#intro-div').style.display = 'none';
    document.querySelector('#login-div').style.display = 'none';
    document.querySelector('#signup-div').style.display = 'none';
    document.querySelector('#stats-loggedin-div').style.display = 'none';
    document.querySelector('#stats-loggedout-div').style.display = 'none';
    moves = [];
    move_set = new Set();
    red_set = new Set();
    grid_size = size;
    mark = 'X';
    const puzzle_div = document.querySelector('#puzzle-div');
    puzzle_div.style.removeProperty("display");
    const puzzle_div2 = document.createElement('div');
    puzzle_div2.setAttribute('id','puzzle-div2');
    puzzle_div.innerHTML = "";
    puzzle_div.appendChild(puzzle_div2);
    const info_div = document.createElement('div');
    info_div.setAttribute('id', 'info');
    info_div.innerHTML = "Choose current mark:"
    const button_div = document.createElement('div');
    button_div.setAttribute('id', 'xo');
    info_div.appendChild(button_div);
    const xbutton = document.createElement('button');
    xbutton.setAttribute('id','xbutton');
    xbutton.innerHTML = "X";
    xbutton.style.backgroundColor = "lightgreen";
    xbutton.addEventListener("click", function() {
        change_button("X");
        });
    const obutton = document.createElement('button');
    obutton.setAttribute('id','obutton');
    obutton.innerHTML = "O";
    obutton.style.backgroundColor = "white";
    obutton.addEventListener("click", function() {
        change_button("O");
        });
    button_div.appendChild(xbutton);
    button_div.appendChild(obutton);
    const back_button_div = document.createElement('div');
    back_button_div.setAttribute('id','back-button-div');
    const back_button = document.createElement('button');
    back_button_div.appendChild(back_button);
    back_button.className = "back normal";
    back_button.innerHTML = "Go back a move";
    back_button.addEventListener("click", back_one_move);
    const restart_button_div = document.createElement('div');
    restart_button_div.setAttribute('id', 'restart-button-div');
    const restart_button = document.createElement('button');
    restart_button.className = "restart normal";
    restart_button_div.appendChild(restart_button);
    restart_button.innerHTML = "Restart this puzzle";
    restart_button.addEventListener("click", function() {
        setup_grid(true);
        });
    info_div.appendChild(back_button_div);
    info_div.appendChild(restart_button_div);
    puzzle_div2.appendChild(info_div);
    const grid_div = document.createElement('div');

    // set up actual puzzle grid
    grid_div.setAttribute('id','grid-div');
    const table = document.createElement('table');
    table.setAttribute('id','puzzle-table');
    const tbody = document.createElement('tbody')
    table.appendChild(tbody);
    for (let row=0; row<size; row++) {
        const row_part = document.createElement('tr');
        for (let col=0; col<size; col++) {
            const col_part = document.createElement('td');
            col_part.className = "cell";
            col_part.dataset.row = row.toString();
            col_part.dataset.col = col.toString();
            col_part.addEventListener('mouseleave', () => {
                col_part.style.cursor = 'default';
            });
            col_part.style.opacity = '0';

            // calculate font size based on puzzle size
            let fs = (80 - 5 * size)/20;
            col_part.style.fontSize = fs + "vw";
            let ps = 8 * fs / 15 + .7;
            col_part.style.paddingLeft = ps + "vw";
            col_part.style.paddingRight = ps + "vw";
            row_part.appendChild(col_part);
            const mark_in_cell = document.createElement('div');
            mark_in_cell.className = "inside-cell";
            mark_in_cell.innerHTML = "N";
            col_part.appendChild(mark_in_cell);
        }
        tbody.appendChild(row_part);
    }
    grid_div.appendChild(table);
    const back_button_div2 = document.createElement('div');
    back_button_div2.setAttribute('id','back-button-div2');
    const back_button2 = document.createElement('button');
    back_button_div2.appendChild(back_button2);
    back_button2.className = "back normal";
    back_button2.innerHTML = "Go back a move";
    back_button2.addEventListener("click", back_one_move);
    const restart_button_div2 = document.createElement('div');
    restart_button_div2.setAttribute('id', 'restart-button-div2');
    const restart_button2 = document.createElement('button');
    restart_button2.className = "restart normal";
    restart_button_div2.appendChild(restart_button2);
    restart_button2.innerHTML = "Restart this puzzle";
    restart_button2.addEventListener("click", function() {
        setup_grid(true);
        });
    puzzle_div2.appendChild(grid_div);
    puzzle_div2.appendChild(back_button_div2);
    puzzle_div2.appendChild(restart_button_div2);
    start_set = [];
    start_set_marks = [];

    // get starting setup for next puzzle
    fetch(`https://acasagranda.pythonanywhere.com/makepuzzle/${size}`)
    .then(response => response.json())
    .then(start => {
        start.forEach (cell => {   
            start_set.push(cell.row + '*' + cell.col);
            start_set_marks.push(cell.row + '*' + cell.col + '*' + cell.mark);
        });
        setup_grid(false);       
        for (let row=0; row<size; row++) {
            r = row.toString();
            for (let col=0; col<size; col++) {
                c = col.toString();
                if (!start_set.includes(r + '*' + c)) {
                    let current_cells = document.querySelectorAll(`[data-row="${r}"][data-col="${c}"]`);
                    current_cells[0].addEventListener('mouseenter', () => {
                        current_cells[0].style.cursor = 'pointer';
                        })
                    const thisr = r;
                    const thisc = c;
                    current_cells[0].addEventListener("click", function() {
                        make_mark(thisr,thisc);
                        });
                }
            }
        }
    });
    
}

// set up grid marks
function setup_grid(restart) {
    if (restart === true){
        moves = [];
        move_set = new Set();
        red_set = new Set();
        for (let row=0; row<grid_size; row++) {
            let r = row.toString();
            for (let col=0; col<grid_size; col++) {
                let c = col.toString();
                let curr = document.querySelectorAll(`[data-row="${r}"][data-col="${c}"]`);
                let inside_curr = curr[0].children[0];
                inside_curr.innerHTML = "N";
                curr[0].style.opacity = '0';
                curr[0].style.color = "black";
                
            }
        }
    }
    start_set_marks.forEach (cell => {   
        const rcm = cell.split("*");
        const curr = document.querySelectorAll(`[data-row="${rcm[0]}"][data-col="${rcm[1]}"]`);
        const inside_cell = curr[0].children[0];
        if (rcm[2] === 'B') {
            curr[0].style.backgroundColor = "black";
            inside_cell.innerHTML = "N";
        } else {
            inside_cell.innerHTML = rcm[2];
        }
        curr[0].style.opacity = '1';
        curr[0].addEventListener('mouseenter', () => {
            curr[0].style.cursor = 'not-allowed';
            })
    })
    }


// change mark based on user's selection
function change_button(green) {
    mark = green;
    xbutton = document.querySelector('#xbutton');
    obutton = document.querySelector('#obutton');
    if (green === 'X') {
        xbutton.style.backgroundColor = "lightgreen";
        obutton.style.backgroundColor = "white";
    } else {
        obutton.style.backgroundColor = "lightgreen";
        xbutton.style.backgroundColor = "white";
    }  
}

// print new mark in grid
function make_mark(row,col,already_in_move_set=false) {
    let current_cells = document.querySelectorAll(`[data-row="${row}"][data-col="${col}"]`);
    // take current mark temporarily out of red set
    red_set.delete(row + '*' + col);

    // show mark and add move to moves list and move_set
    if (current_cells[0] && !already_in_move_set){
        const inside_cell = current_cells[0].children[0];
        current_cells[0].style.opacity = '1';
        inside_cell.innerHTML = mark;
        moves.push(row + '*' + col + '*' + mark);
        move_set.add(row + '*' + col);
    }
    // if there are already red cells, check each red cell to see if new move changed that
    if (red_set) {
        let temp_red = new Set();
        red_set.forEach(red => {
            const rc = red.split("*");
            temp_red = new Set([...temp_red,...check_grid(rc[0],rc[1])]);
        })
        red_set = new Set(temp_red);
    }
    // check to be sure new move doesn't make a contradiction
    if (current_cells[0]){
        red_set = new Set([...red_set,...check_grid(row,col)]);
    }

    // check for win
    if ((red_set.size === 0) && (move_set.size + start_set.length === grid_size * grid_size)){
            const puzzle_table = document.querySelector('#puzzle-table');
            puzzle_table.style.backgroundColor = "lightgreen";
            const puzzle_div = document.querySelector('#puzzle-div2');  
            const div1 = document.createElement('div');  
            const con = document.createElement('p');
            con.style.fontSize = "1.8em";
            con.style.textAlign = "center";
            con.innerHTML = "CONGRATULATIONS!";
            const solved = document.createElement('p');
            solved.style.fontSize = "1em";
            solved.style.textAlign = "center";
            solved.innerHTML = "This puzzle is solved.";
            back_buttons = document.querySelectorAll('.back');
            back_buttons.forEach(back => {
                back.removeEventListener('click', back_one_move);
            });
            restart_buttons = document.querySelectorAll('.restart');
            restart_buttons.forEach(restart => {
                restart.innerHTML = "New Puzzle";
                restart.removeEventListener('click', setup_grid);
                restart.addEventListener("click", function() {
                    puzzle(grid_size);
                });
            });
            const break1 = document.createElement('br');
            div1.appendChild(con);
            div1.appendChild(break1);
            div1.appendChild(solved);
            puzzle_div.appendChild(div1);
            if (username != null){
                fetch('https://acasagranda.pythonanywhere.com/winnerpuzzle', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json', // Important: tells the server you're sending JSON
                    },
                    body: JSON.stringify({
                        username: username,
                        gridsize: grid_size,
                    }),
                })
                .then(response => response.text())
                .then(result => {
                    console.log(result);
                })
            }
    }
}

// checking grid for contradictions
function check_grid(row,col) {
    let red = new Set()
    const r = parseInt(row);
    const c = parseInt(col);
    const curr = document.querySelectorAll(`[data-row="${row}"][data-col="${col}"]`);
    curr[0].style.color = "black";
    const inside_curr = curr[0].children[0];
    deltas.forEach(delta => {
        r1 = (r + delta[2]).toString();
        c1 = (c + delta[3]).toString();
        const one = document.querySelectorAll(`[data-row="${r1}"][data-col="${c1}"]`);
        if (one[0]) {
            const inside_one = one[0].children[0];
            r2 = (r + delta[0]).toString();
            c2 = (c + delta[1]).toString();
            const two = document.querySelectorAll(`[data-row="${r2}"][data-col="${c2}"]`);
            if (two[0]) {
                const inside_two = two[0].children[0];
                if ((inside_curr.innerHTML === inside_one.innerHTML) && (inside_curr.innerHTML === inside_two.innerHTML)) {
                    red.add(row + '*' + col);
                    red.add(r1 + '*' + c1);
                    red.add(r2 + '*' + c2);
                    curr[0].style.color = "red";
                    one[0].style.color = "red";
                    two[0].style.color = "red";
                }
            }
        }
    })
    return red
}

// back up a move
function back_one_move() {
    // take move off moves list
    let move = moves.pop();
    let other_move = move.slice(0,-1);
    if (move.slice(-1) == 'X'){
        other_move += 'O';
    } else {
        other_move += 'X';
    }
    // if the same cell wasn't in a previos move set back to N
    if (!moves.includes(move) && !moves.includes(other_move)) {
        const rc = move.split("*");
        move_set.delete(rc[0] + '*' + rc[1]);
        const curr = document.querySelectorAll(`[data-row="${rc[0]}"][data-col="${rc[1]}"]`);
        const inside_curr = curr[0].children[0];
        inside_curr.innerHTML = "N";
        curr[0].style.opacity = '0';
        curr[0].style.color = "black";
        red_set.delete(rc[0] + '*' + rc[1]);
        make_mark(grid_size,grid_size);
    // otherwise set back to next previos move
    } else {
        let found_move = "";
        for (let i = moves.length - 1; i >= 0; i--) {
            found_move = moves[i];
            if (found_move === move || found_move == other_move) {
                const rc = found_move.split("*");
                const curr = document.querySelectorAll(`[data-row="${rc[0]}"][data-col="${rc[1]}"]`);
                const inside_curr = curr[0].children[0];
                inside_curr.innerHTML = rc[2];
                curr[0].style.opacity = '1';
                make_mark(rc[0],rc[1],true);
                break;
            }
        }
        if (!moves.includes(move)) {
            move_set.delete(move);
        }
    }
}


function setup_stats() {
    document.querySelector('#intro-div').style.display = 'none';
    document.querySelector('#login-div').style.display = 'none';
    document.querySelector('#signup-div').style.display = 'none';
    document.querySelector('#puzzle-div').style.display = 'none';
    if (username === null){
        document.querySelector('#stats-loggedin-div').style.display = 'none';
        document.querySelector('#stats-loggedout-div').style.display = 'block';
    } else {
        document.querySelector('#stats-loggedin-div').style.display = 'block';
        document.querySelector('#stats-loggedout-div').style.display = 'none';
    }
    if (lost) {
        lost.style.display = 'none';
    }
    
    let tablediv;
    if (username === null){
        tablediv = document.querySelector('#stattable-loggedout');
    } else {
        tablediv = document.querySelector('#stattable-loggedin'); 
    }
    tablediv.innerHTML = "";
    tablediv.setAttribute('style', 'overflow: auto;')
    const table = document.createElement('table');
    tablediv.appendChild(table);
    table.setAttribute('id','stat-table');
    const tbody = document.createElement('tbody')
    table.appendChild(tbody);
    let row_part = document.createElement('tr');
    let col_part = document.createElement('th');
    col_part.textContent = "";
    row_part.appendChild(col_part);
    if (username != null){
        col_part = document.createElement('th');
        col_part.textContent = "Puzzles";
        row_part.appendChild(col_part);
    }
    col_part = document.createElement('th');
    col_part.textContent = "High Scores";
    col_part.setAttribute('colspan', '3'); 
    col_part.style.backgroundColor = "lightgreen";
    row_part.appendChild(col_part);
    tbody.appendChild(row_part);
    row_part = document.createElement('tr');
    col_part = document.createElement('th');
    col_part.setAttribute('style', 'white-space: nowrap;');
    col_part.textContent = "Grid Size";
    row_part.appendChild(col_part);
    if (username != null){
        col_part = document.createElement('th');
        col_part.textContent = "Solved";
        row_part.appendChild(col_part);
    }
    for (let i=1; i<=3; i++){
        col_part = document.createElement('th');
        col_part.textContent = i;
        row_part.appendChild(col_part);
    }
    
    tbody.appendChild(row_part);
    fetch(`https://acasagranda.pythonanywhere.com/stats`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json', // Important: tells the server you're sending JSON
        },
        body: JSON.stringify({
            username: username,
        }),
    })
    .then(response => response.json())
    .then(stats => {  
        for (let row=4; row<11; row++){
            let tablerow = document.createElement('tr');
            let tablecol = document.createElement('td');
            tablecol.setAttribute('style', 'white-space: nowrap;');
            tablecol.textContent = row + " x " + row;
            tablerow.appendChild(tablecol);
            if (username != null){
                tablecol = document.createElement('td');
                tablecol.textContent = stats['number_solved'][row.toString()]
                tablerow.appendChild(tablecol);
            }
            for (let i=0; i<3; i++){
                tablecol = document.createElement('td');
                tablecol.setAttribute('style', 'padding: 2%;');
                tablecol.setAttribute('style', 'white-space: nowrap;');
                tablecol.textContent = stats['high_scorer'][row.toString()][i] + ": " + stats['high_scores'][row.toString()][i];
                tablerow.appendChild(tablecol);
                if (stats['high_scorer'][row.toString()][i] === username) {
                    tablecol.style.color = 'chartreuse';
                } else {
                    tablecol.style.color = 'black';
                }
            }
            tbody.appendChild(tablerow);
        };
    });  
}

function signup_button(){
    const un = document.querySelector('#signup-username');
    const message = document.querySelector('#signup-message');
    if (!un.value){
        message.innerHTML = "Please Enter a Username";
        return
    }
    const pass1 = document.querySelector('#signup-password');
    const pass2 = document.querySelector('#signup-password2');
    if (pass1.value != pass2.value){
        message.innerHTML = "Passwords don't match.";
        return
    }

    fetch('https://acasagranda.pythonanywhere.com/signup', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Important: tells the server you're sending JSON
            },
            body: JSON.stringify({
                username: un.value,
                password: pass1.value,
            }),
        })
        .then(response => response.text())
        .then(result => {
            if (result === 'OK'){
                username = un.value;
                document.querySelector('#nav-loggedin').style.display = 'block';
                document.querySelector('#nav-loggedout').style.display = 'none';
                un.value = "";
                pass1.value = "";
                pass2.value = "";
                message.innerHTML = "";
                const home = document.querySelector('#home');
                home.click();
            } else {
                message.innerHTML = result;
                return
            }
        })
}

function login_button(){
    const un = document.querySelector('#login-username');
    const message = document.querySelector('#login-message');
    const pass = document.querySelector('#login-password');

    fetch('https://acasagranda.pythonanywhere.com/loginpuzzle', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json', // Important: tells the server you're sending JSON
            },
            body: JSON.stringify({
                username: un.value,
                password: pass.value,
            }),
        })
        .then(response => response.text())
        .then(result => {
            if (result === 'OK'){
                username = un.value;
                document.querySelector('#nav-loggedin').style.display = 'block';
                document.querySelector('#nav-loggedout').style.display = 'none';
                un.value = "";
                pass.value = "";
                message.innerHTML = "";
                const home = document.querySelector('#home');
                home.click();
            } else {
                message.innerHTML = result;
                return
            }
        })
}
