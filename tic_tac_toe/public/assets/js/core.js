function empty(e) {
    switch (e) {
      case "":
      case 0:
      case "0":
      case null:
      case false:
      case typeof(e) == "undefined":
        return true;
      default:
        return false;
    }
  }

function setID(num){
    let border = [];
    let table = [];
    let valueOfkey = num**2;
    let numOfkey = num**2;
    for(let x =0 ; x < num;x++){
        for(let y = 0 ; y<num;y++){
            table.push(valueOfkey-numOfkey);
            numOfkey--;
        };
        border.push(table);
        table = [];
    };
    return border;
}

function GenCaseWinX(req) {
  let winCaseX = [];
  let SubValue = [];
  let valueOfkey = req**2;
  let numOfkey = req**2;
  for(let x =0 ; x < req;x++){
    for(let y = 0 ; y<req;y++){
        SubValue.push(valueOfkey-numOfkey);
        numOfkey--;
    };
    winCaseX.push(SubValue);
    SubValue = [];
  };
  let resultAll = winCaseX;
  let Diagonal = GenCaseWinDiagonal(winCaseX,req);
  GenCaseWinY(winCaseX);
  for (let i = 0; i < Diagonal.length; i++) {
    winCaseX.push(Diagonal[i])
    
  }
  return winCaseX;
}

function GenCaseWinY(req) {
  let winCaseY = [];
  let data = [];

  for(let x = 0; x< req.length ;x++){
      for(let y =0; y < req.length; y++){
      data.push(req[y][x])
      }
      winCaseY.push(data);
      data=[];
  }

  for (let i = 0; i < winCaseY.length; i++) {
    req.push(winCaseY[i]);
  }
  return req;

}


function GenCaseWinDiagonal(reqArr,num) {
  let result = [];
  // Case #1
  let winCaseDiagonal1 = [];
  for (let i = 0; i < num; i++) {
    winCaseDiagonal1.push(reqArr[i][i]);
  }
  // Case #2
  let winCaseDiagonal2 = [];
  for (let i = 0; i < num; i++) {
    winCaseDiagonal2.push(reqArr[i][(num-1)-i]);
  }
  result.push(winCaseDiagonal1);
  result.push(winCaseDiagonal2);
  return result;
}

function GenGameTable(req) {
  let gameTemble = [];
  let MaxValue = req**2;
  for (let i = 0; i < MaxValue; i++) {
    gameTemble.push(i);
  }
  return gameTemble
}

function delay(delayInms) {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve(2);
    }, delayInms);
  });
}


