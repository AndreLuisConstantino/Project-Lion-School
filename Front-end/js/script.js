'use strict'

import { cursosLionSchool, alunosDoCursoLionSchool, statusAlunoLion } from "./api-lion-school.js"
import { alunos } from "./alunos.js"


// carregar curso
let cursosLion = await cursosLionSchool()
let cursos = cursosLion.curso

let statusAluno = statusAlunoLion()

const criarCursos = (cursos, indice) => {

    // endpoint - 1
    const cardCurso = document.createElement('a')
    cardCurso.classList.add('curso')

    const divCurso = document.createElement('div')
    divCurso.classList.add('area')

    const imageCurso = document.createElement('img')
    imageCurso.classList.add('image-figure')
    imageCurso.src = `./img/${cursos.icone}`

    const nomeDoCurso = document.createElement('p')
    nomeDoCurso.classList.add('nome-curso')
    nomeDoCurso.textContent = cursos.sigla

    divCurso.append(imageCurso, nomeDoCurso)
    cardCurso.onclick = () => {

        carregarPagina(indice)
    }
    cardCurso.append(divCurso)
    return cardCurso

}

const carregarCurso = () => {
    const container = document.getElementById('cursos')
    const cardCurso = cursos.map(criarCursos)


    container.replaceChildren(...cardCurso)

}

const criarAluno = (alunosCurso) => {

    const divAluno = document.createElement('div')
    divAluno.classList.add('aluno-turma')

    const cardAluno = document.createElement('a')
    cardAluno.classList.add('aluno')

    const imageAluno = document.createElement('img')
    imageAluno.classList.add('foto-aluno')
    imageAluno.src = `./img/${alunosCurso.foto}`

    const nomeDoAluno = document.createElement('p')
    nomeDoAluno.classList.add('nome-aluno')
    nomeDoAluno.textContent = alunosCurso.nome

    // const alunosCor = alunosCurso.

    cardAluno.append(imageAluno, nomeDoAluno)
    divAluno.append(cardAluno)

    return divAluno

}

const carregarAlunos = async (sigla, titulo) => {
    const alunos = document.getElementById('alunos')

    const tituloPage = document.createElement('h1')
    tituloPage.classList.add('titulo-curso')
    const tituloCurso = titulo

    tituloPage.textContent = tituloCurso.substring(6)

    console.log(tituloPage)

    let alunosDoCurso = await alunosDoCursoLionSchool(sigla)
    let alunosCurso = alunosDoCurso.alunos

    const turma = document.getElementById('turma')
    const cardAluno = alunosCurso.map(criarAluno)


    turma.replaceChildren(...cardAluno)
    alunos.append(tituloPage, turma)
}

const carregarPagina = (indice) => {
    const home = document.getElementById('home')
    const alunos = document.getElementById('alunos')
    const filtro = document.getElementById('filter')

    home.style.display = 'none'
    alunos.style.display = 'flex'
    filtro.style.display = 'flex'




    const sigla = cursos[indice].sigla
    const titulo = cursos[indice].nome
    carregarAlunos(sigla, titulo)



}

carregarCurso()