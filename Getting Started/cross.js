//Globals
var currentTextInput;
var puzzelArrayData;
//Loads the Crossword
function initializeScreen(){
  var puzzelTable = document.getElementById("puzzel");
  puzzelArrayData = preparePuzzelArray();
  for ( var i = 0; i < puzzelArrayData.length ; i++ ) {
    var row = puzzelTable.insertRow(-1);
    var rowData = puzzelArrayData[i];
    for(var j = 0 ; j < rowData.length ; j++){
      var cell = row.insertCell(-1);
      if(rowData[j] != 0){
        var txtID = String('txt' + '_' + i + '_' + j);
        cell.innerHTML =
      '<input type="text" class="inputBox" maxlength="1" style="text-transform: lowercase" ' + 'id="' + txtID + '" onfocus="textInputFocus(' + "'" + txtID + "'"+ ')">';
      }else{
        cell.style.backgroundColor  = "white";
      }
    }
  }
  addHint();
}
//Adds the hint numbers
function addHint(){
  document.getElementById("txt_0_4").placeholder = "1";     // index      0,4 row : 0 col : 4
  document.getElementById("txt_2_2").placeholder = "2";     // index
  document.getElementById("txt_7_6").placeholder = "3";     // index
  document.getElementById("txt_9_4").placeholder = "4";     // index
}
//Stores ID of the selected cell into currentTextInput
function textInputFocus(txtID123){
  currentTextInput = txtID123;
}
//Returns Array
function preparePuzzelArray(){
var items = 
      [ 
              [    0,    0,    0,    0, '구', '영', '서',    0,    0,    0],
              [    0,    0,    0,    0, '영',    0,    0,    0,    0,    0],
              [    0,    0, '구', '영', '서',    0,    0,    0,    0,    0],
              [    0,    0, '영',    0,    0,    0,    0,    0,    0,    0],
              [    0,    0, '서',    0,    0,    0,    0,    0,    0,    0],
              [    0,    0,    0,    0,    0,    0,    0,    0,    0,    0],
              [    0,    0,    0,    0,    0,    0,    0,    0,    0,    0],
              [    0,    0,    0,    0,    0,    0, '구',    0,    0,    0],
              [    0,    0,    0,    0,    0,    0, '영',    0,    0,    0],
              [    0,    0,    0,    0, '구', '영', '서',    0,    0,    0],
              [    0,    0,    0,    0,    0,    0,    0,    0,    0,    0],
      ];
return items;
}
//Clear All Button
function clearAllClicked(){
  currentTextInput = '';
  var puzzelTable = document.getElementById("puzzel");
  puzzelTable.innerHTML = '';
    initializeScreen();
}
//Check button
function checkClicked(){
  for ( var i = 0; i < puzzelArrayData.length ; i++ ) {
    var rowData = puzzelArrayData[i];
    for(var j = 0 ; j < rowData.length ; j++){
      if(rowData[j] != 0){
        var selectedInputTextElement = document.getElementById('txt' + '_' + i + '_' + j);
        if(selectedInputTextElement.value != puzzelArrayData[i][j]){
          selectedInputTextElement.style.backgroundColor = 'black';       //틀림
          
        }else{
          selectedInputTextElement.style.backgroundColor = 'white';       //맞음
        }
      }
    }
  }
}
//Clue Button
function clueClicked(){
  if (currentTextInput != null){
    var temp1 = currentTextInput;
    var token = temp1.split("_");
    var row = token[1];
    var column = token[2];
    document.getElementById(temp1).value = puzzelArrayData[row][column];
    //checkClicked();
  }
}
//Solve Button
function solveClicked(){
  if (currentTextInput != null){
    var temp1 = currentTextInput;
    var token = temp1.split("_");
    var row = token[1];
    var column = token[2];
    
    // Print elements on top
    for(j = row; j >= 0; j--){
      if(puzzelArrayData[j][column] != 0){
        document.getElementById('txt' + '_' + j + '_' + column).value = puzzelArrayData[j][column];
        }else break;
    }
    // Print elements on right
    for(i = column; i< puzzelArrayData[row].length; i++){
      if(puzzelArrayData[row][i] != 0){
        document.getElementById('txt' + '_' + row + '_' + i).value = puzzelArrayData[row][i];
        }else break;
    }
    
    // Print elements below
    for(m = row; m< puzzelArrayData.length; m++){
      if(puzzelArrayData[m][column] != 0){
        document.getElementById('txt' + '_' + m + '_' + column).value = puzzelArrayData[m][column];
        }else break;
    }
    // Print elements on left
    for(k = column; k >= 0; k--){
      if(puzzelArrayData[row][k] != 0){
        document.getElementById('txt' + '_' + row + '_' + k).value = puzzelArrayData[row][k];
        }else break;
    }
    // Done!
    
  }
}