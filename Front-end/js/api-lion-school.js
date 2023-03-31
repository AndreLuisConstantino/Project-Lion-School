'use strict'

export const cursosLionSchool = async () =>{
    const url = 'https://api-lion-school.cyclic.app/v1/lion-school/cursos'

    const response = await fetch(url)
    const data = await response.json()
    console.log(data)
    
    return data

}

export const alunosDoCursoLionSchool = async (siglaCurso) =>{
    
}