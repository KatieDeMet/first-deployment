const buttons = document.querySelectorAll('.myButton')
const langButton = document.getElementById('langButton')
const devButton = document.getElementById('devButton')
const infoButton = document.getElementById('infoButton')
const displayContainer = document.getElementById('displayContainer')
const baseURL = ""


const displayText = (event) => {
    let id = event.target.id
    displayContainer.innerHTML = ``
    if(id === 'langButton') {
        axios.get(baseURL+'/katie/languages')
            .then(res => {
                let newPara = document.createElement('p')
                newPara.innerHTML = res.data
                newPara.classList.add("buttonPara")
                displayContainer.appendChild(newPara)
            })
            .catch(err => console.log(err))
    } else if (id === 'devButton') {
        axios.get('http://localhost:7272/katie/devops')
            .then(res => {
                let newPara = document.createElement('p')
                newPara.innerHTML = res.data
                newPara.classList.add("buttonPara")
                displayContainer.appendChild(newPara)
            })
            .catch(err => console.log(err))
    } else if(id === 'infoButton') {
        axios.get('http://localhost:7272/katie/more')
            .then(res => {
                let newPara = document.createElement('p')
                newPara.innerHTML = res.data
                newPara.classList.add("buttonPara")
                displayContainer.appendChild(newPara)  
            })
            .catch(err => console.log(err))
    } else {
        alert("Something went wrong")
    }
}

langButton.addEventListener('click', displayText)
devButton.addEventListener('click', displayText)
infoButton.addEventListener('click', displayText)
// for (let i = 0; i < buttons.length; i++) {
//     buttons[i].addEventListener('click', displayText);
// }