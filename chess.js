//import * as Moves1 from './Moves.js';


//To store the section (box for individual piece) in array.
let s = [];

    let arr = [];
            let arr2 = [];
                        

//Stores key of individual pieces -> ex -> pawn(1 or 11(for black)).
let pieces = [];

//To check if it is selected piece or next move
let currentSquare = 'selected';

//Global x , y for (cordination in 2d array of *selected piece)
let x = null;
let y = null;

//Same as x , y (but for cumputer move)
let x2;
let y2;


let nextMove = 1;

let  rotated = false;
let icon = [];

//Determine the next  turn
let Turn = 'white';

  let nextpiece = [];
        let highest = [];
        let index  = 0;
        let currntpiece = [];
        currntpiece = [];
        nextpiece = [];


//the numbers here shows the key of that perticuler piece.
//icon stores the images according to there key.
icon[1] = 'Images/Chess_plt60.png';
icon[11] = 'Images/pawn-black.png';
icon[3] =  'Images/knight-white.png';               
icon[13] =  'Images/knight-black.png';   
icon[5] =    'Images/rook-white.png';
icon[15] =  'Images/rook-black.png';
icon[10] =  'Images/king-white.png';
icon[20] = 'Images/king-black.png';
icon[4] = 'Images/bishop-white.png';               
icon[14] =  'Images/bishop-black.png';  
icon[9] = 'Images/queen-white.png';
icon[19] = 'Images/queen-black.png';



function changeTurn()
{
  Turn = Turn == 'white' ? 'black' : 'white'; 
}

let value;
function boardValid(x , y )
{
  if(pieces[x][y] === null || pieces[x][y] < 11)  
    return false;

  for(let i = 0 ; i < 8 ; i++)
  {
    for(let j = 0 ; j < 8 ; j++)
    {
      
      //console.log(`cancapcher : ${canCapcher(x , y , i , j)}`);
       //console.log(`movevalidation : ${moveValidation(x , y , i , j)}`);
      if(moveValidation(x , y , i , j) && canCapcher(x , y , i , j) )
      {
        if(pieces[i][j] == null)
        {
          value = 0;
        }
        else
        {
           value = pieces[i][j];
        }
       
        return true;
      }
    }
  }

  return false;

}




function canCapcher(x , y , i , j)
{
    if(pieces[i][j] == null)
    {
      return true;
    }
    else if(pieces[x][y] > 10)
    {
      if(pieces[i][j] < 11)
      {
        return true;
      }
      else
      {
        return false;
      }
    }
    else
    {
      if(pieces[i][j] > 10)
      {
        return true;
      }
      else
      {
        return false;
      }
    }
}




function sign(value)
{
  if(value > 0)
  {
    return 1;
  }
  else if(value < 0)
  {
    return -1;
  }
  else
  {
    return 0;
  }
}







//check if the path is clear or not for bishop , rook , queen.
function isPathClear(x , y , i , j )
{
  
  
      let x2 = x;
      let y2 = y;
      let DX;
      let DY;

                  //condition for bishop-path check.
                  if(pieces[x][y] == 4 || pieces[x][y] == 14  || pieces[x][y] == 19 || pieces[x][y] == 9)
                  {
                         DX = (x - i) > 0 ? 1 : -1;
                         DY = (y - j) > 0 ? 1 : -1;

                         
                          x2  -= DX;
                          y2 -= DY;

                        while(x2 != i  && y2 != j)
                        {
     
                          if(pieces[x2][y2] != null)
                          { 
          
                            return false;
                          }

                          x2  -= DX;
                          y2 -= DY;
                        }

                         return true;

                  }
                  //condition for Rook-path check.
                  else if(pieces[x][y] == 5 || pieces[x][y] == 15 || pieces[x][y] == 19 || pieces[x][y] == 9)
                  {
                      DX = sign( x - i);
                     DY = sign( y - j);



                              x2  -= DX;
                          y2 -= DY;



                      while(x2 != i || y2 != j)
                        {
        
                          if(pieces[x2][y2] != null)
                          {
                            return false;
                          }

                             x2  = x2 - DX;
                          y2 -= DY;

                        }
                        
                         return true;

                     
                  }
                  else
                  {
                      
                  }

                 
                  
                  
                    while(x2 != i && y2 != j)
                    {
                      x2  = x2 - DX;
                      y2 -= DY;

                    
                     
                      if(pieces[x2][y2] != null)
                      {
                        return false;
                      }
                    }

                    

                    return true;



}

function moveValidationPawn(x , y , i , j)
{

 
  
  if(pieces[x][y] == 1)
  {
      
      if(x == 1)
          {
              if((x == i - 2 && y == j && (pieces[i][j] == null && pieces[i - 1][j] == null)) || ((x == i - 1 && y == j && pieces[i][j] == null )|| (x == i - 1  && (y == j - 1 || y ==  j +1) && pieces[i][j] != null) ) )
              {
                return true;
              }
              else
              {
                return false;
              }
              
          }
          else if((x == i - 1 && y == j && pieces[i][j] == null )|| (x == i - 1  && (y == j - 1 || y ==  j +1) && pieces[i][j] != null))
          {
                 //  Rotate();
                   
                  return  true;
          }
        
          else
          {
            return false;
          }
  }
  else
  {
   
          if(x == 6)
          {
              if((x == i + 2 && y == j && (pieces[i][j] == null && pieces[i + 1][j] == null)) || ((x == i + 1 && y == j && pieces[i][j] == null )|| (x == i + 1  && (y == j - 1 || y ==  j +1) && pieces[i][j] != null) ))
              {
              
                return true;
              }
              else
              {
               
                return false;
              }
              
          }

          else if((x == i + 1 && y == j && pieces[i][j] == null )|| (x == i + 1  && (y == j - 1 || y ==  j +1) && pieces[i][j] != null) )
          {
                 //  Rotate();
                     console.log("true")
                  return  true;
          }
        
          else
          {
              console.log("false")
            return false;
          }
  }
}

function moveValidationKnight(x , y , i , j)
{
        if( ((i == x - 1 || i == x + 1) &&  (j ==  y + 2 || j == y -2))  || ((i == x - 2 || i == x + 2) &&  (j ==  y + 1 || j == y -1)))
        {
         // Rotate();
           
          return true;
        }
        else
        {
          return false;
        }
}

function moveValidationRook(x , y , i , j)
{
      
        if((x == i || y == j ) && isPathClear(x , y , i , j))
        {
             //Rotate();
            
          return true;
        }
        else
        {
          return false;
        }
}

function moveValidationQueen(x , y , i , j)
{

    
          if(moveValidationBishop(x ,  y , i , j) || moveValidationRook(x , y , i , j))
          {
            return true;
          }
          else
          {
            false;
          }
}

function moveValidationKing(x , y , i , j)
{
    if( (i == x +1 || i == x - 1 || i == x) && (j == y +1 || j == y - 1 || y == j))
    {
      return true;
    }
    else
    {
      return false;
    }
}




function moveValidationBishop(x , y , i , j)
{


                if(Math.abs(x - i) == Math.abs(y - j) )
                {
                
                    if(isPathClear(x , y , i , j) && canCapcher(x , y , i , j))
                    {

                        return true;         
                    }
                    else
                    {                 
                      return false;
                    }

             
                }
                else
                {
                  return false;
                }

}





function moveValidation(x , y , i , j)
{
  
      if(!canCapcher(x , y , i , j))
      {
        return false;
      }
      else if(Turn == 'white' && pieces[x][y] <= 10)
      {  
              if(pieces[x][y] == 1)
              {
              
           
                return moveValidationPawn(x , y , i , j);
              }
              else if(pieces[x][y] == 4)
              {
                  return moveValidationBishop(x , y , i , j);
              }
              else if(pieces[x][y] == 5)
              {
                  return moveValidationRook(x , y , i , j);
              }
              else if(pieces[x][y] == 3)
              {
                return moveValidationKnight(x , y , i , j)
              }
              else if(pieces[x][y] == 9)
              {
                return moveValidationQueen(x , y , i , j);
              }
              else if(pieces[x][y] == 10)
              {
                return moveValidationKing(x , y , i , j);
              }
              else
              {
               
              }
      }

      else if(pieces[x][y] >10)
      {
              if(pieces[x][y] == 11)
              {
                  
                if(moveValidationPawn(x , y , i , j))
                {
                  return true;
                }
                else
                {
                  return false;
                }

              }
              else if(pieces[x][y] == 14)
              {  
                return moveValidationBishop(x , y , i , j);
              }
              else if(pieces[x][y] == 15)
              {
                return moveValidationRook(x , y , i , j);
              }
              else if(pieces[x][y] == 13)
              {
                return moveValidationKnight(x  , y , i , j);
              }
              else if(pieces[x][y] == 19)
              {
                return moveValidationQueen(x , y , i , j);
              }
              else if(pieces[x][y] == 20)
              {
                return moveValidationKing(x , y , i , j);
              }
              else
              {
               
              }
      }
    }



  function Rotate() 
  {
        const board = document.querySelector('.con');
        const squares = document.querySelectorAll('.con section');

        if (!rotated) 
        {
            board.style.transform = 'rotate(180deg)';
            squares.forEach(sq => sq.style.transform = 'rotate(180deg)');
          } 
        else 
        {
            board.style.transform = 'rotate(0deg)';
            squares.forEach(sq => sq.style.transform = 'rotate(0deg)');
        }

        rotated = !rotated;
  }




function getMajorPiece(value , i)
{
    let arr = [5 , 3 , 4 , 10 , 9, 4 , 3 , 5];

    if(value < 9)
    {
        return arr[i];
    }
    else
    {
        return arr[i] + 10;
    }
}


function move(box , i , j)
{
      if(pieces[x][y] == null)
      {
        currentSquare  = 'selected';
      }
      else
      {
            if(moveValidation( x , y , i , j) && canCapcher(x , y , i , j)) 
            {  
            
              changeTurn();
                 s[i][j].style.backgroundImage = `url(${icon[pieces[x][y]]})`;
                 pieces[i][j] = pieces[x][y];
                s[x][y].style.backgroundImage = "";
                pieces[x][y] = null;
              currentSquare  ='selected';
            }
            else
            {
              currentSquare = 'selected';
            }

      }

      
     
     
     

    }
   

function setPiece(i , j)
{
      if(s[i][j].value >= 8 && s[i][j].value < 16 || s[i][j].value >= 48 && s[i][j].value < 56 )
      {

            if(s[i][j].value  < 16)
            {
              pieces[i][j] = 1;
              return "Images/Chess_plt60.png";  
            }
            else
            {
                pieces[i][j] = 11;
                return "Images/pawn-black.png";
            }
            
      }     
      else if(s[i][j].value >= 0 && s[i][j].value < 8 || s[i][j].value >= 56 && s[i][j].value < 64 )
      {
              pieces[i][j] = getMajorPiece(s[i][j].value , j);
              return `${icon[pieces[i][j]]}`;
      }
      else
      {
              return " ";
      }
}



function setColor(i , j)
{
  if((i + j) % 2 == 0)
  {
    return "#4A6A84";
  }
  else
  {
    return "#C7D4DC"
  }
}


function creatBoard()
{ 
    let num = 0;
    let html = ``;

    for(let i = 0 ; i < 64 ; i ++)
    {
      html += `<section class = "I${i}"></section>`;
    }

    for(let i = 0 ; i < 8 ; i++)
    {
      pieces[i] = [];
    }

    document.querySelector('.con').innerHTML = html;



    for(let i = 0 ; i < 8 ; i ++)
    {
        s[i] = [];
      for(let j = 0 ; j < 8 ; j++)
      {
        s[i][j] = document.querySelector(`.I${num}`);
        s[i][j].value = num;
        num++;
      }
    }

    
  for(let i = 0 ; i < 8 ; i ++)
    {
      for(let j = 0 ; j < 8 ; j++)
      {
        s[i][j].style.backgroundColor = `${setColor(i , j)}`;
        s[i][j].style.backgroundImage =  `url(${setPiece(i , j)})`;

      }
    }




    Rotate();
}

function computervalid()
{
    for(let i = 0 ; i < 8 ; i++)
    {
      for(let j = 0 ; j < 8 ; j++)
      {
          if(moveValidation(x , y , i , j))
          {
            return true;
          }

          
      }
    }

    return false;
}

let arr3 = [];

function computerMove() {
 
    setTimeout(() => {
      

      
        let a = 0;
        let  b = 0;
                               
        

        if(  currentSquare == 'selected')
        {


          
                  if(Tmoves < 5)
                  {

                          
                        switch(OponentMove)
                        {

                        
                          case "e4":
                            MoveIndex = 0;
                            break;

                          case "d4":
                              MoveIndex = 1;
                            break;
                          
                            case "f3":
                              MoveIndex = 2;
                            break;

                          case "c4":
                            MoveIndex = 3;
                            break;

                          case "b3":
                            MoveIndex = 4;
                            break;

                          default:
                              MoveIndex = 0;
                            break;
                        }

                        //alert(MoveIndex);
                       
                        let yF = 7 - ((predefineMoves[MoveIndex][0][Tmoves][0].charCodeAt(0) - 'a'.charCodeAt(0) + 1) - 1);
                        let xF = parseInt(predefineMoves[MoveIndex][0][Tmoves][1]) - 1;
                          Tmoves++;

                        // alert(MoveIndex)
                          s[xF][yF].style.border = "2px solid rgb(255, 0, 0)";
                          Turn = 'black';  
                         // alert(`${xF} , ${yF}`);
                          //alert(Tmoves)
                         s[xF][yF].click();
                        

                        


                  }
                  else
                  {
                         arr = [];
                          arr2 = [];
                          arr3 = [];
                          x2 = Math.floor(Math.random() * 8);
                            y2 = Math.floor(Math.random() * 8);
       
                          while((pieces[x2][y2] == null || pieces[x2][y2] < 11) )
                          {
                              x2 = Math.floor(Math.random() * 8);
                              y2 = Math.floor(Math.random() * 8);         
                          } 

                         
                          for(let i = 0 ; i < 8 ; i++)
                          {
                            for(let j = 0 ; j < 8 ; j++)
                            {
                               
                              if(pieces[i][j] > 10 && boardValid(i , j))
                              {

                                //alert(`${i} , ${j}`)
                                 arr3.push(value);
                                arr.push(i);
                                arr2.push(j);

                                value = 0;

                              }
                             
                                
                            }
                          }

                          let max = 0;
                          let index = 0;
                          for(let i = 0 ; i < arr3.length ; i++)
                          {
                              if(arr3[i] > max)
                              {
                                max = arr3[i];
                                index = i;
                              }

                          }

                           

                           rand = index;
                           
                           x2 = arr[rand];
                            y2 = arr2[rand];   


                          if((pieces[x2][y2] == null || pieces[x2][y2] < 11 )  || index == 0)
                          {
                            while(((pieces[x2][y2] == null || pieces[x2][y2] < 11) ) || computervalid(x2 , y2) )
                            {
                                x2 = Math.floor(Math.random() * 8);
                                y2 = Math.floor(Math.random() * 8);         
                            } 
                          }



                          if(arr.length == 0)
                          {
                            alert("No match found");
                            return;
                            
                          }


                           //let rand = Math.floor(Math.random() * arr.length );
                            
                           //alert(arr.length);
                          //alert(rand);
                          
                          //alert(arr[rand]);
                          //alert(arr2[rand]);
                         
 
                          s[x2][y2].style.border = "2px solid rgb(255, 0, 0)";

                           Turn = 'black';   
                          s[x2][y2].click();
                  }

                         
        }
          else
          {


                if(Tmoves < 6)
                {
                       
                        let yS = 7 - ((predefineMoves[MoveIndex][1][Tmoves - 1][0].charCodeAt(0) - 'a'.charCodeAt(0) + 1) - 1);
                        let xS = parseInt(predefineMoves[MoveIndex][1][Tmoves - 1][1]) - 1;
                       //alert(`${xS} , ${yS}`);
                         //alert(Tmoves)
                        s[xS][yS].click();
                      
                }
                else
                {
                      value = 0;
                      let I = [];
                      let J = [];

                      let ca = 0;

                     for(let i = 0 ; i < 8 ; i++)
                      {
                        for(let j = 0 ; j < 8 ; j++)
                        {
                          
                          //console.log(`cancapcher : ${canCapcher(x , y , i , j)}`);
                          //console.log(`movevalidation : ${moveValidation(x , y , i , j)}`);
                          if(moveValidation(x , y , i , j) && canCapcher(x , y , i , j) )
                          {
                             I[ca] = i;
                              J[ca] = j;
                              ca++;

                          }
                        }
                      }

                      

                    

                      let index = 0;
                      let max = 0;
                      for(let i = 0 ; i < I.length ; i++)
                      {
                        if(pieces[I[i]][J[i]] > max)
                          {
                            max = pieces[I[i]][J[i]];
                            index = i;
                          }
                        
                      }
                      

                  
                              x2 = Math.floor(Math.random() * 8);
                              y2 = Math.floor(Math.random() * 8);

                             
                           
                            while(!moveValidation(x , y , x2 , y2) )
                            {
                                x2 = Math.floor(Math.random() * 8);
                                y2 = Math.floor(Math.random() * 8);

                        
                                
                            }

                          
                              Turn = 'black';  
                                    
                            s[I[index]][J[index]].click();
                }
                      
          }
        
    }, 500);  
}

function findbestMove(a , b)
{
  let movevalue = [];
  let pieceToMove = [];
  let piecevalue;
  pieceToMove = [];
  for(let i = 0 ; i < 8 ; i++)
  {
 
    for(let j = 0 ; j < 8 ; j++)
    {
      if(moveValidation(a , b , i , j) && canCapcher(a , b , i , j))
      {
        if(pieces[i][j] == undefined)
        {
            piecevalue = 0;
        }
        else
        {
         piecevalue = pieces[i][j];
        }
       
        //alert(piecevalue)
        
        movevalue.push(piecevalue);
        pieceToMove.push([i , j]);
        //alert(pieceToMove);
      }
    }
  }

  let index = 0;
    let max = 0;

    //alert(movevalue);
   // alert(pieceToMove);

  for(let i = 0 ; i  < movevalue.length ; i++)
  {
    if(movevalue[i] > max)
    {
      max = movevalue[i];
      index = i;
    }
  }

  //alert(movevalue);
  //alert(index);
  //alert(pieceToMove[index]);
  //alert(max);
  //alert(pieceToMove[index]);
  //alert(pieceToMove[index]);
  console.log(pieceToMove[index]);
  return pieceToMove[index];
}




let variations = [
  {
    whiteMove: "e4",
    fromSquares: ["c7", "d7", "f8", "e7", "b8"],
    toSquares:   ["c6", "d5", "f5", "e6", "d7"]
  },
  {
    whiteMove: "d4",
    fromSquares: ["d7", "c7", "g8", "d5", "c8"],
    toSquares:   ["d5", "c6", "f6", "c4", "f5"]
  },
  {
    whiteMove: "Nf3",
    fromSquares: ["d7", "g8", "e7", "c8", "b8"],
    toSquares:   ["d5", "f6", "e6", "d6", "d7"]
  },
  {
    whiteMove: "c4",
    fromSquares: ["c7", "b8", "g7", "f8", "d7"],
    toSquares:   ["c5", "c6", "g6", "g7", "d6"]
  },
  {
    whiteMove: "b3",
    fromSquares: ["e7", "b8", "d7", "e5", "d8"],
    toSquares:   ["e5", "c6", "d5", "d6", "e7"]
  }
];

let predefineMoves = [];
predefineMoves = [];
predefineMoves = [];

predefineMoves = [ [["c7", "d7", "e7","f8" , "b8"] , ["c6", "d5", "e6" , "d6" , "d7"]] ,  [["d7", "c7", "g8", "d5", "c8"] ,  ["d5", "c6", "f6", "c4", "f5"]] ,  [ ["d7", "g8", "e7", "c8", "b8"] , ["d5", "f6", "e6", "d6", "d7"]] , [["c7", "b8", "g7", "f8", "d7"] , ["c5", "c6", "g6", "g7", "d6"]] ,  [ ["e7", "b8", "d7", "f8", "d8"] , ["e5", "c6", "d5", "d6", "e7"]]];


let Tmoves = 0;
let MoveIndex = 0;
let OponentMove;

function computerMove1() 
 {
    setTimeout(() => 
      { 



              if(currentSquare == 'selected')
              {

                  if(Tmoves < 5)
                  {

                          
                        switch(OponentMove)
                        {

                        
                          case "e4":
                            MoveIndex = 0;
                            break;

                          case "d4":
                              MoveIndex = 1;
                            break;
                          
                            case "f3":
                              MoveIndex = 2;
                            break;

                          case "c4":
                            MoveIndex = 3;
                            break;

                          case "b3":
                            MoveIndex = 4;
                            break;

                          default:
                              MoveIndex = 0;
                            break;
                        }

                        //alert(MoveIndex);
                       
                        let yF = 7 - ((predefineMoves[MoveIndex][0][Tmoves][0].charCodeAt(0) - 'a'.charCodeAt(0) + 1) - 1);
                        let xF = parseInt(predefineMoves[MoveIndex][0][Tmoves][1]) - 1;
                          Tmoves++;

                        // alert(MoveIndex)
                          s[xF][yF].style.border = "2px solid rgb(255, 0, 0)";
                          Turn = 'black';  
                         // alert(`${xF} , ${yF}`);
                          //alert(Tmoves)
                         s[xF][yF].click();
                        

                        


                  }
                  else
                  {
                         let count = 0;
                        for(let i = 0 ; i  < 8 ; i++)
                        {
                          for(let j = 0 ;  j < 8 ; j++)
                          {
                            if(pieces[i][j] > 10 && pieces[i][j] != null)
                            {
                              if(boardValid(i , j))
                              {
                                //alert(`${i}  , ${j}`);
                                  
                                currntpiece[count] = [i , j];
                                nextpiece[count] = findbestMove(i , j);
                                //console.log(pieces[nextpiece[count][0]][nextpiece[count][1]]);
                                count++;
                                }
                              else
                              {

                              }
                            }

                          }
                    }

          
            

            //alert(nextpiece);

              

                    let max = 0 ;
                
                    
                    //alert(nextpiece[0][0]);
                    //alert(nextpiece[0][1]);
                    for(let i = 0 ; i  < nextpiece.length ; i++)
                    {

                      if(pieces[nextpiece[i][0]][nextpiece[i][1]] == undefined)
                      {
                        highest = 0;
                      }
                      else
                      {
                          highest = pieces[nextpiece[i][0]][nextpiece[i][1]];
                      }
                    
                      if(highest[i] > max)
                      {
                        max = highest[i];
                        index = i;
                      }
                    }

                      

                          if(max == 0)
                          {
                            index = Math.floor(Math.random() * nextpiece.length); 
                              
                            //alert(index);
                          }

                        

                  
                          
                          //alert(currntpiece[index]);
                          //alert(nextpiece[index]);

                        s[currntpiece[index][0]][currntpiece[index][1]].style.border = "2px solid rgb(255, 0, 0)";
                        Turn = 'black';         
                        s[currntpiece[index][0]][currntpiece[index][1]].click();
                        }
                 
        }
        else
        {
                if(Tmoves < 6)
                {
                       
                        let yS = 7 - ((predefineMoves[MoveIndex][1][Tmoves - 1][0].charCodeAt(0) - 'a'.charCodeAt(0) + 1) - 1);
                        let xS = parseInt(predefineMoves[MoveIndex][1][Tmoves - 1][1]) - 1;
                       //alert(`${xS} , ${yS}`);
                         //alert(Tmoves)
                        s[xS][yS].click();
                      
                }
                else
                {
                    s[nextpiece[index][0]][nextpiece[index][1]].click();
                }
              
        }
     

         


      }
        
    , 500); 
}






function Start()
{
  
  for(let i = 0 ; i < 8 ; i ++)
  {

    for(let j = 0 ; j < 8 ; j++)
    {

    
      s[i][j].addEventListener('click', () => {

      
        if(OponentMove == undefined && currentSquare == 'next')
        {
            let fileCharCode = 'a'.charCodeAt(0) + (7 - j);
            let file = String.fromCharCode(fileCharCode)
            let rank = i + 1;

           
          OponentMove = file + rank;
           //alert(OponentMove)

            

        
        }
        if(Turn == 'white')
        {
              if(currentSquare  == 'selected')
              {
                x = i;
                  y = j;

                  currentSquare ='next';
                  s[x][y].style.border = "2px solid rgb(255, 0, 0)";
              }
              else if(currentSquare == 'next')
              {
                if(i != x || j != y)
                { 

                  move(s[i][j] , i , j);
                    
                }

                s[x][y].style.border = "";

               currentSquare = 'selected';

                 
                  computerMove();
              

              }
              else
              {
                
              }
        }
        else
        {
              if(currentSquare == 'selected')
              {
                
                x = i;
                  y = j;

                  currentSquare = 'next';
                  s[x][y].style.border = "2px solid rgb(255, 0, 0)";
                  computerMove();
              }
              else if( currentSquare == 'next')
              {
                


                
                if(i != x || j != y)
                { 

                  move(s[i][j] , i , j);
                    
                }

                s[x][y].style.border = "";

               currentSquare = 'selected'
              

              }
              else
              {

              }
        }
        
  
    });
    }
  }

}