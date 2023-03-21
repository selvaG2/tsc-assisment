//own api
interface Color {
    "color": string,
    "code": string
}

function getColour(): Promise<Color[]> {
    return fetch('./color.json')
        .then(res => res.json())
        .then(res => {
            return res as Color[]
        })
}

getColour()
    .then(color => {
        console.log(color.map(u =>("Color name : "+u.color+" "+"Color code "+u.code)));
    })

//fake api

fetch('https://jsonplaceholder.typicode.com/todos/1')
      .then(response => response.json())
      .then(json => console.log(json))