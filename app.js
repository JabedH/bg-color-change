// function bgChange(){
//     const bg = document.getElementById('background')
//     let colors = ['#2980B9','#17A589', '#BDC3C7',];
//     const colorIndex = parseInt(Math.random()*colors.length)
//     bg.style.backgroundColor = colors[colorIndex]
// }


function bgChange() {
    let hexNumbers = [
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9",
      "A",
      "B",
      "C",
      "D",
      "F",
    ];
    let hexColorCode = "";
    for (var i = 0; i < 6; i++) {
      let randomIndex = Math.floor(Math.random() * hexNumbers.length);
      hexColorCode += hexNumbers[randomIndex];
    }
    let colors = '#'+ hexColorCode; 
    const bg = document.getElementById('background')
    bg.style.backgroundColor =  colors
  }
 
// let colors = ['#2980B9','#17A589', '#BDC3C7',];