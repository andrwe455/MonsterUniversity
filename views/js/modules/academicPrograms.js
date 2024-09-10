function loadPrograms(selectedElement){
    
    const cookies = getcookies()

    if(!cookies['academic_programs']){
        fetch('/academic-programs').then(response => response.json()).then(data => { 
            document.cookie = `academic_programs=${JSON.stringify(data)}`
            let programsElement = document.getElementById('Programas')
            for (let i= programsElement.childElementCount; i>1; i--){
                programsElement.removeChild(programsElement.childNodes[i-1])
            }
            data[selectedElement].forEach(element => {
                let option = document.createElement('option')
                option.value = element
                option.text = element
                programsElement.appendChild(option)
            })
        })
    }else{
        let programsElement = document.getElementById('Programas')
        for (let i= programsElement.childElementCount; i>1; i--){
            programsElement.removeChild(programsElement.childNodes[i])
        }
        JSON.parse(cookies['academic_programs'])[selectedElement].forEach(element => {
            let option = document.createElement('option')
            option.value = element
            option.text = element
            programsElement.appendChild(option)
        })
    }
}