const player1 = 'x';
const player2 = 'o';

const imgPlayer1 = 'x';
const imgPlayer2 = 'o';

var curPlayer = player1;
var curimgPlayer = imgPlayer1;

var result = [];
var Que = [];

function GenTable(num){ //generate table
    Que = []; // clear queue for replay
    $('#size').val(num);
    let idOfpos = setID(num);
    $('#curPlay').removeClass('RemoveClass');
    $('#curPlay').html('Turn Player '+curPlayer);
    if(!empty(num)){ //check undifind value
        $('#tablex').empty();
        for (let i = 0; i < num; i++) {
            $('#tablex').append('<tr>');
            for (let ii = 0; ii < num; ii++) {
                let strOfdiv = 'status'+idOfpos[i][ii].toString();
                let strOfTd = 'td'+idOfpos[i][ii].toString();
                $('#tablex').append('<td class="td-box"><input type="text" id="'+idOfpos[i][ii].toString()+'" onclick="playgame(this)" class="borderNone"><div id="'+strOfdiv+'"></div></td>');
            }
            $('#tablex').append('</tr>');
        }
        $('#tableHis').addClass('RemoveClass');
        $('#btnReplay').removeClass('RemoveClass');
    }else{
        alert('Your number is uncorrect!')
    }
    $('#msg').empty();
    $('#msg').append('Tic Tac Toe');
    return result = GenCaseWinX(num),gameTemble = GenGameTable(num); // set result case win
}

function checkWin() {
    let tmpArr = [];
    let Que = 1;
    for(let i =0; i < gameTemble.length; i++){ // push queue result of curPlayer
        if(curPlayer == gameTemble[i]){
            tmpArr.push(i);
        }
    }
    let StatusCase = '';
    let return_win = false;
    let return_tie = false;
    // for(const [index , win] of winCon.entries()){
    for(const [index , win] of result.entries()){ // check case win
        let mycheck = true;
        StatusCase = '';
        //check win case
        win.forEach(innerWin => {
            if(tmpArr.indexOf(innerWin) > -1){ // ถ้ามี Case ชนะ return Win Cse
                mycheck = mycheck && true;
            }else{
                mycheck = mycheck && false;
            }
        })
        //check tie case
        var count = 0;
        for (let ii = 0; ii < gameTemble.length; ii++) {
            if(gameTemble[ii] == 'x' || gameTemble[ii] == 'o'){
                count++
                if(count == gameTemble.length){ // ถ้าจำนวนการเล่นเท่ากับจำนวนตาราง return Tie Case
                    return_tie = true;
                    break;
                }
            }
            if(return_tie){
                break;
            }
        }
        if(mycheck){
            return_win = true;
            break;
        }
    }
    return {
        return_win: return_win,
        return_tie: return_tie
    }
}

function endGame() {
    $('#curPlay').addClass('RemoveClass');
    $('#msg').html('Player ' +curPlayer + ' Win!!');
    // $('input').prop('disabled',true);
    let Total = $('#gentable').val();
    let TotalArr = setID(Total);
    for (let i = 0; i < $('#gentable').val(); i++) { //disable input in table
        for (let ii = 0; ii < $('#gentable').val(); ii++) {
            let indexOfTotal = '#'+TotalArr[i][ii].toString();
            $(indexOfTotal).prop('disabled',true);
        }
    }
}

function swapturn(btn) {
    // set id for element html
    let id_position = '#status'+btn.id.toString();
    let id = '#'+btn.id.toString();

    gameTemble[btn.id] = curPlayer; // push curPlayer to array gameTemble
    Que.push(btn.id); // push Queue to array for Replay
    btn.disabled = true; // Disable input whene click table
    $(id).addClass('RemoveClass'); // remove input tag on table
    $(id_position).addClass('textCen'); // set position center on table
    $(id_position).html(curimgPlayer); // push curPlayer to element
    let gameStatus = checkWin(); // check win or tie

    breakme: { // skip state whene return_win and return_tie equal true
        if (gameStatus.return_win){
            endGame();
            alert('Player ' +curPlayer + ' Win!!');
            $('#inputQue').val(Que); // push queue to input tag element for replay
            $('#status').val(curPlayer); // push curPlayer on table
            $('#h5').html('Player ' +curPlayer + ' Win!!');
            $('#tableHis').removeClass('RemoveClass'); // show form save replay
            $('#btnReplay').addClass('RemoveClass');
            $('#btnGen').html('Play Again');
            break breakme;
        }
        if (gameStatus.return_tie){
            endGame();
            alert('Player Tie !!'); 
            $('#inputQue').val(Que); // push queue to input tag element for replay
            $('#status').val('Tie'); // push curPlayer on table
            $('#h5').html('Player Tie !!');
            $('#tableHis').removeClass('RemoveClass'); // show form save replay
            $('#btnReplay').addClass('RemoveClass');
            $('#btnGen').html('Play Again');
            break breakme;
        }
    }
    curPlayer = curPlayer == player1 ? player2 : player1; // switch player
    curimgPlayer = curimgPlayer == imgPlayer1 ? imgPlayer2 : imgPlayer1; // switch player
    $('#curPlay').html('Turn Player '+curPlayer);
    if(gameStatus.return_win){
        curPlayer = player1;
        curimgPlayer = imgPlayer1;
    }
    if(gameStatus.return_tie){
        curPlayer = player1;
        curimgPlayer = imgPlayer1;
    }
}

function playgame(e) {
    // e.preventDefault();
    swapturn(e);
}

async function AutoPlay(arr) { //async function for set time replay
    let sumNumber = parseInt($('#gentable').val()**2);
    if(curPlayer!='x'){ // reset CurPlayer when resubmit replay
        curPlayer = player1;
    }
    $('#msg-status').addClass('RemoveClass');
    $('#msg-wait').show();
    SetDisable($('#gentable').val());
    // $('#msg-wait').html('waiting...!');
    $('#msg-wait').removeClass('RemoveClass');
    
    for (let i = 0; i < arr.length; i++) { // append curPlayer to table replay 
        let id_position = '#status'+arr[i].toString();
        let id = '#'+arr[i].toString();
        $(id).addClass('RemoveClass');
        $(id_position).addClass('textCen');
        
        let delayres = await delay(2000); //await delay

        $(id_position).html(curPlayer); // append curPlayer
        curPlayer = curPlayer == player1 ? player2 : player1; // switch player
        curimgPlayer = curimgPlayer == imgPlayer1 ? imgPlayer2 : imgPlayer1; // switch player
        // console.log(arr[i]);
    }
    curPlayer = curPlayer == player1 ? player2 : player1;
    $('#msg-status').show();
    $('#msg-wait').hide();
    $('#msg-status').removeClass('RemoveClass');
    $('#btnPlay').html('Replay Again');
}

function SetDisable(num) {
    // set disable table
    let TotalArr = setID(num);
    for (let i = 0; i < num; i++) { //disable input in table
        for (let ii = 0; ii < num; ii++) {
            let indexOfTotal = '#'+TotalArr[i][ii].toString();
            $(indexOfTotal).prop('disabled',true);
            let id_position = '#status'+TotalArr[i][ii].toString();
            $(id_position).html('');
        }
    }
}
