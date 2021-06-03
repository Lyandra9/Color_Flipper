let usedN = [
    0,
    1,
    2,
    3,
    4
]

function changeBack() {
 
    const colors = [
        'red',
        'green',
        '#009945',
        "#DFFF00",
        "#FF7F50",
        '#9FE2BF',
        '#6495ED',

    ]
    min = Math.ceil(1);
    max = Math.floor(6);
   
    let i = Math.floor(Math.random() * (max - min)) + min;

    if(i == usedN[usedN.length -1]) {
        i += 1 
        document.body.style.backgroundColor = colors[i];
    } else {
        document.body.style.backgroundColor = colors[i];
    }

    let color = colors[i];
    document.getElementById('title').innerHTML = `The background color is ${color}`

    usedN.push(i);
    usedN.shift();


}