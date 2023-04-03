'use strict'

export const cursosLionSchool = async () => {
    const url = 'https://api-lion-school.cyclic.app/v1/lion-school/cursos'

    const response = await fetch(url)
    const data = await response.json()
    console.log(data)

    return data

}

export const alunosDoCursoLionSchool = async (siglaCurso) => {

    const url = `https://api-lion-school.cyclic.app/v1/lion-school/alunos?curso=${siglaCurso}`

    const response = await fetch(url)
    const data = await response.json()
    console.log(data)

    return data

}

export const alunosDeTodosCursos = async () => {
    const url = `https://api-lion-school.cyclic.app/v1/lion-school/alunos`

    const response = await fetch(url)
    const data = await response.json()
    console.log(data)

    return data
}

export const statusAlunoLion = async (status) => {

    const url = `https://api-lion-school.cyclic.app/v1/lion-school/alunos?status=${status}`

    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
}

alunosDoCursoLionSchool('DS')
alunosDeTodosCursos()