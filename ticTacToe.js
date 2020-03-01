let game=[];
let size;
function drawBoard(input)
{
    size = input;
    let table="<table>";
    let i,j;

    for (i=0; i<size; i++)
    {
        table=table+"<tr>";
        game[i]=[];
        for (j=0;j<size; j++)
        {
            game[i][j]=-1;
            table=table+"<td onclick='changeCondition(this,"+i+","+j+")'>&nbsp;";
        }
        table=table+"</tr>";
    }
    table=table+"</table>";
    document.getElementById("ticTacToe").innerHTML=table;
}
let status="X";

function changeCondition(cell, xPos, yPos)
{
    if (cell.innerText.trim().length>0)
    {
        return;
    }
    cell.innerHTML=status;
    if (status==="X")
    {
        game[xPos][yPos]=1;
        status="O";
    }
    else
    {
        game[xPos][yPos]=0;
        status="X";
    }
    winCheck(xPos, yPos);
}

let countHorizontal = 1;
let countVertical = 1;
let countDiagonalRightToLeft = 1;
let countDiagonalLefToRight = 1;
let draw=1;

function winCheck(xPos, yPos)
{
    // console.log(game);
    countHorizontal = 1;
    countVertical = 1;
    countDiagonalRightToLeft = 1;
    countDiagonalLefToRight = 1;
    let valueOfCell = game[xPos][yPos];
    let i = xPos;
    let j = yPos;

    while (game[i][j + 1] === valueOfCell && game[i][j + 1] < size)  //check hang ngang (trai sang phai).
    {
        countHorizontal++;
        confirmWinner(countHorizontal, 3);
        j++;
    }
    i = xPos;
    j = yPos;
    while (game[i][j - 1] === valueOfCell && game[i][j - 1] < size) //check hang ngang (phai sang trai).
    {
        countHorizontal++;
        confirmWinner(countHorizontal, 3);
        j--;
    }
    i = xPos;
    j = yPos;
    try
    {
        while (game[i + 1][j] === valueOfCell && game[i + 1][j] < size) //check hang doc (tren xuong duoi).
        {
            countVertical++;
            confirmWinner(countVertical, 3);
            i++;
        }
    } catch (e)
    {

    }
    i = xPos;
    j = yPos;
    try
    {
        while (game[i - 1][j] === valueOfCell && game[i - 1][j] < size)     //check hang doc (duoi len tren)
        {
            countVertical++;
            confirmWinner(countVertical, 3);
            i--;
        }
    }
    catch (e)
    {

    }
    i = xPos;
    j = yPos;
    try
    {
        while (game[i+1][j+1]===valueOfCell && game[i+1][j+1]<size) //check hang cheo (trai xuong phai).
        {
            countDiagonalLefToRight++;
            confirmWinner(countDiagonalLefToRight, 3);
            i++;
            j++;
        }
    }
    catch (e)
    {

    }
    i=xPos;
    j=yPos;
    try
    {
        while (game[i-1][j-1]===valueOfCell && game[i-1][j-1]<size)     //check hang cheo (phai len trai).
        {
            countDiagonalLefToRight++;
            confirmWinner(countDiagonalLefToRight, 3);
            i--;
            j--;
        }
    }
    catch (e)
    {

    }
    i=xPos;
    j=yPos;
    try
    {
        while (game[i+1][j-1]===valueOfCell && game[i+1][j-1]<size)     //check hang cheo (phai xuong trai).
        {
            countDiagonalRightToLeft++;
            confirmWinner(countDiagonalRightToLeft, 3);
            i++;
            j--;
        }
    }
    catch (e)
    {

    }
    i=xPos;
    j=yPos;
    try
    {
        while (game[i-1][j+1]===valueOfCell && game[i-1][j+1]<size)     //check hang cheo (trai len phai).
        {
            countDiagonalRightToLeft++;
            confirmWinner(countDiagonalRightToLeft, 3);
            i--;
            j++;
        }
    }
    catch (e)
    {

    }
    draw ++;
}

function confirmWinner(count, number)
{
    if (count===number)
    {
        setTimeout(function(){ alert("Win"); }, 200);
        return;
    }
    if(draw===number*number)
    {
        setTimeout(function(){ alert("Draw"); }, 200);
        return;
    }
}

function resetGame()
{
    drawBoard(size);
}