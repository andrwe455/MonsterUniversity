function showinputs(role){

  if(role == 'student'){
    fetch('/getAcademicPrograms').then(res => res.json()).then(data =>{
      console.log(data)
      const aditionalInputs = document.getElementById('aditionalInputs')

      const academicProgramContainer = document.createElement('div')
      academicProgramContainer.classList.add('col-4', 'form-group')

      const academicProgramlabel = document.createElement('label')
      academicProgramlabel.innerText ='Academic program'

      const academicProgramSelect = document.createElement('select')
      academicProgramSelect.classList.add('form-control')
      academicProgramSelect.name = 'AcademicProgram'
      academicProgramSelect.required = true

      const academicDegreeContainer = document.createElement('div')
      academicDegreeContainer.classList.add('col-4', 'form-group')

      const academicDegreelabel = document.createElement('label')
      academicDegreelabel.innerText ='Academic degree'

      const academicDegreeSelect = document.createElement('select')
      academicDegreeSelect.classList.add('form-control')
      academicDegreeSelect.name = 'AcademicDegree'
      academicDegreeSelect.required = true

      data.programs.forEach(program => {
        const option = document.createElement('option')
        option.value = program.name
        option.innerText = program.name
        academicProgramSelect.appendChild(option)
      })

      const option2 = document.createElement('option')
      option2.value = 'Professional'
      option2.innerText = 'Professional'
      academicDegreeSelect.appendChild(option2)

      const option3 = document.createElement('option')
      option3.value = 'Technical'
      option3.innerText = 'Technical'
      academicDegreeSelect.appendChild

      const option4 = document.createElement('option')
      option4.value = 'Technologist'
      option4.innerText = 'Technologist'
      academicDegreeSelect.appendChild(option4)

      const option5 = document.createElement('option')
      option5.value = 'Master'
      option5.innerText = 'Master'
      academicDegreeSelect.appendChild(option5)

      const option6 = document.createElement('option')
      option6.value = 'Doctorate'
      option6.innerText = 'Doctorate'
      academicDegreeSelect.appendChild(option6)


      academicDegreeSelect.appendChild(option3)
      academicDegreeSelect.appendChild(option4)
      academicDegreeSelect.appendChild(option5)
      academicDegreeSelect.appendChild(option6)
      

      academicProgramContainer.appendChild(academicProgramlabel)
      academicProgramContainer.appendChild(academicProgramSelect)

      aditionalInputs.appendChild(academicProgramContainer)
      academicDegreeContainer.appendChild(academicDegreelabel)
      academicDegreeContainer.appendChild(academicDegreeSelect)

      aditionalInputs.appendChild(academicDegreeContainer)

    })
  } else if(role == 'manager'){
    const aditionalInputs = document.getElementById('aditionalInputs')

    const jobTitleContainer = document.createElement('div')
    jobTitleContainer.classList.add('col-4', 'form-group')
    
    const jobTitlelabel = document.createElement('label')
    jobTitlelabel.innerText ='Job title'

    const jobTitleInput = document.createElement('input')
    jobTitleInput.classList.add('form-control')
    jobTitleInput.name = 'JobTitle'
    jobTitleInput.required = true

    jobTitleContainer.appendChild(jobTitlelabel)
    jobTitleContainer.appendChild(jobTitleInput)

    aditionalInputs.appendChild(jobTitleContainer)

    const facultyContainer = document.createElement('div')
    facultyContainer.classList.add('col-4', 'form-group')

    const facultylabel = document.createElement('label')
    facultylabel.innerText ='Faculty'

    const facultyInput = document.createElement('input')
    facultyInput.classList.add('form-control')
    facultyInput.name = 'faculty'

    facultyContainer.appendChild(facultylabel)
    facultyContainer.appendChild(facultyInput)

    aditionalInputs.appendChild(facultyContainer)

  }
}