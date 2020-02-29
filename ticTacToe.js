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

function winCheck(xPos, yPos)
{
    console.log(game);
    let count=1;
    let valueOfCell=game[xPos][yPos];
    let i=xPos;
    let j=yPos;

    // console.log(game[i][j+1]);
    while(game[i][j+1]===valueOfCell && game[i][j+1]<size)  //check hang ngang (trai sang phai).
     {
         count++;
         confirmWinner(count, 3);
         j++;
     }
     i=xPos;
     j=yPos;

     // console.log(game[i][j-1]);
     while (game[i][j-1]===valueOfCell && game[i][j-1]<size) //check hang ngang (phai sang trai).
     {
         count++;
         confirmWinner(count, 3);
         j--;
     }
    i=xPos;
    j=yPos;

    // console.log(game[i+1][j]);
    while (game[i+1][j]===valueOfCell && game[i+1][j]<size) //check hang doc (tren xuong duoi).
    {
        count++;
        confirmWinner(count, 3);
        i++;
    }
    i=xPos;
    j=yPos;

    // console.log(game[i-1][j]);
    while (game[i-1][j]===valueOfCell && game[i-1][j]<size)     //check hang doc (duoi len tren)
    {
        count++;
        confirmWinner(count, 3);
        i--;
    }
    i=xPos;
    j=yPos;

    // console.log(game[i+1][j+1]);
    while (game[i+1][j+1]===valueOfCell && game[i+1][j+1]<size) //check hang cheo (trai xuong phai).
    {
        count++;
        confirmWinner(count, 3);
        i++;
        j++;
    }
    i=xPos;
    j=yPos;

    // console.log(game[i-1][j-1]);
    while (game[i-1][j-1]===valueOfCell && game[i-1][j-1]<size)     //check hang cheo (phai len trai).
    {
        count++;
        confirmWinner(count, 3);
        i--;
        j--;
    }

    // console.log(game[i-1][j-1]);
    while (game[i+1][j-1]===valueOfCell && game[i+1][j-1]<size)     //check hang cheo (phai xuong trai).
    {
        count++;
        confirmWinner(count, 3);
        i++;
        j--;
    }

    // console.log(game[i-1][j+1]);
    while (game[i-1][j+1]===valueOfCell && game[i-1][j+1]<size)     //check hang cheo (trai len phai).
    {
        count++;
        confirmWinner(count, 3);
        i--;
        j++;
    }
}

function confirmWinner(count, number)
{
    if (count===number)
    {
        setTimeout(function(){ alert("Win"); }, 500)
        return;
    }
}
