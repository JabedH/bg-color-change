// function bgchang(){
//     let bg = document.getElementById('background');
//     let colors = ['red', 'green', 'blue'];
//     const colorIndex = parseInt(Math.random()*colors.length)
//     bg.style.backgroundColor = colors[colorIndex]
// }
function bgchang(){
    let bg = document.getElementById('background');
    let colors = ['red','blue', 'green'];
    const colorIndex = parseInt(Math.random()*colors.length);
    bg.style.backgroundColor = colors[colorIndex]
}