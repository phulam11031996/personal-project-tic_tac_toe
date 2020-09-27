var board = ['0','1','2','3','4','5','6','7','8']
var i = 0
var ox = ''

$('button').click(function(){
    if (check_win(board) || i === 9){
        $('.who_win').text('Please click reset to play again')     
    } else {
        var index = $('button').index(this)
        if (board[index] === 'X' || board[index] === 'O'){
            $('h3').text('Can\'t rewrite board!')
        } else {
            if (i%2 == 0){
                ox = 'X'
                $('.who_win').text('Player 2\'s turn! You are \'O\'')
                i++
            } else {
                ox = 'O'
                $('.who_win').text('Player 1\'s turn! You are \'X\'')
                i++
            }

            
            $('button').eq(index).text(ox)
            board[index] = ox

            if (check_win(board)){
                $('.who_win').text('There is a winner')        
            }
            if (i == 9 && check_win(board) == false){
                $('.who_win').text('There is no winner')  
            }
            console.log(i)
        }
    }
})

$('.reset').click(function(){
    $('button').text('')
    $('.who_win').text('Player 1\'s turn! You are \'X\'')
    board = ['0','1','2','3','4','5','6','7','8']
    i = 0
})

function clear_board(){
    for (var i = 0; i < 9; i++) {
        board[i] = i
    }
}

function check_win(board){
    if ((board[0] === board[1] && board[0] === board[2]) ||
        (board[3] === board[4] && board[3] === board[5]) ||
        (board[6] === board[7] && board[6] === board[8]) ||
        (board[0] === board[3] && board[0] === board[6]) ||
        (board[1] === board[4] && board[1] === board[7]) ||
        (board[2] === board[5] && board[2] === board[8]) ||
        (board[0] === board[4] && board[0] === board[8]) ||
        (board[6] === board[4] && board[6] === board[2])){
        return true
    }
    return false
}