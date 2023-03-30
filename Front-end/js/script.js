'use strict'

import { cursos } from "../recursos/cursos.js"
import { alunos } from "../recursos/alunos.js"

console.log(alunos[9].curso[0].sigla)


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

    return cardCurso

}

const carregarCurso = () => {
    const container = document.getElementById('cursos')
    const cardCurso = cursos.map(criarCursos)

    container.replaceChildren(...cardCurso)

}

const criarAluno = () => {

    const si = 'RDS'

    alunos.forEach(function (aluno) {

        if (aluno.curso[0].sigla == si) {

            console.log(aluno.nome)

            const cardAluno = document.createElement('a')
            cardAluno.classList.add('aluno')


            const imageAluno = document.createElement('img')
            imageAluno.classList.add('foto-aluno')
            imageAluno.src = `../img/${aluno.foto}`

            const nomeDoAluno = document.createElement('p')
            nomeDoAluno.classList.add('nome-aluno')
            nomeDoAluno.textContent = aluno.nome

            cardAluno.append(imageAluno, nomeDoAluno)

            cardAluno.onclick = () => ((carregarAlunos(indice)))
            console.log(cardAluno)


        }
        return card

    })

}

const carregarAlunos = () => {
    const turma = document.getElementById('turma')
    const cardAluno = alunos.map(criarAluno)


    turma.replaceChildren(...cardAluno)
}

const carregarPagina = (titulo) => {
    const home = document.getElementById('home')
    const alunos = document.getElementById('alunos')
    const filtro = document.getElementById('filter')


    home.style.display = 'none'

    alunos.style.display = 'flex'
    filtro.style.display = 'flex'

    carregarAlunos()

}

carregarCurso()