'use strict'

import { cursosLionSchool } from "./api-lion-school.js"
import { alunos } from "./alunos.js"

let cursosLion = await cursosLionSchool()
let cursos = cursosLion.curso

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
    cardCurso.onclick = () => (carregarPagina(indice))
    cardCurso.append(divCurso)
    console.log(cardCurso)

    return cardCurso

}

const carregarCurso = () => {
    const container = document.getElementById('cursos')
    const cardCurso = cursos.map(criarCursos)
    console.log(cardCurso)

    container.replaceChildren(...cardCurso)

}

const criarAluno = (alunos, indice, siglaEscolhida) => {


    // if (siglaEscolhida == alunos.sigla) {
    const tituloCurso = document.createElement('h1')
    const titulo = alunos.curso
    tituloCurso.textContent

    const divAluno = document.createElement('div')
    divAluno.classList.add('aluno-turma')

    const cardAluno = document.createElement('a')
    cardAluno.classList.add('aluno')

    const imageAluno = document.createElement('img')
    imageAluno.classList.add('foto-aluno')
    imageAluno.src = `./img/${alunos.foto}`

    const nomeDoAluno = document.createElement('p')
    nomeDoAluno.classList.add('nome-aluno')
    nomeDoAluno.textContent = alunos.nome

    cardAluno.append(imageAluno, nomeDoAluno)
    cardAluno.onclick = () => (carregarAlunos(indice))
    divAluno.append(cardAluno)


    return divAluno
    // }



}

const carregarAlunos = (indice) => {
    const turma = document.getElementById('turma')
    const cardAluno = alunos.map(criarAluno)
    console.log(indice)

    turma.replaceChildren(...cardAluno)
}

const carregarPagina = (indice) => {
    const home = document.getElementById('home')
    const alunos = document.getElementById('alunos')
    const tituloPage = document.createElement('h1')
    const titulo = cursos[indice].nome

    const sigla = cursos[indice].sigla
    tituloPage.textContent = titulo.replace('001 - Técnico em ', '')

    alunos.append(tituloPage)
    console.log(indice)
    const filtro = document.getElementById('filter')



    console.log(tituloPage, sigla)

    home.style.display = 'none'

    alunos.style.display = 'flex'

    filtro.style.display = 'flex'

    carregarAlunos()

}

carregarCurso()