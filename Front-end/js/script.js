'use strict'

import { cursosLionSchool, alunosDoCursoLionSchool, statusAlunoLion } from "./api-lion-school.js"

let cursosLion = await cursosLionSchool()
let cursos = cursosLion.curso

let sair = document.getElementById('sair')

const criarCursos = (cursos, indice) => {

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

const criarAluno = (alunosCurso, indice) => {

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

    console.log(alunosCurso.status)

    if (alunosCurso.status == 'Finalizado') {
        divAluno.style.backgroundColor = '#E5B657'

    }

    cardAluno.append(imageAluno, nomeDoAluno)
    divAluno.append(cardAluno)
    divAluno.onclick = () => {
        carregarAluno(indice)
        console.log(alunosCurso.nome)
    }

    return divAluno

}

const carregarAluno = () => {

}

const carregarAlunos = async (sigla, titulo) => {
    let finalizado = document.getElementById('finalizado')
    let status = document.getElementById('todos')
    let cursando = document.getElementById('cursando')


    const alunos = document.getElementById('alunos')

    const tituloPage = document.createElement('h1')
    tituloPage.classList.add('titulo-curso')
    const tituloCurso = titulo

    tituloPage.textContent = tituloCurso.substring(6)

    let alunosDoCurso = await alunosDoCursoLionSchool(sigla)
    let alunosCurso = alunosDoCurso.alunos

    const turma = document.getElementById('turma')
    const cardAluno = alunosCurso.map(criarAluno)

    finalizado.onclick = async () => {
        let statusAluno = await statusAlunoLion('Finalizado')
        let alunoStatus = statusAluno.alunos

        const cardAluno = alunoStatus.map(function (aluno) {
            if (aluno.sigla == sigla) {
                const card = criarAluno(aluno)
                return card
            }
        })

        const CardAlunoFinalizado = cardAluno.filter(function (alunoFinalizado) {
            return alunoFinalizado !== undefined;
        });

        turma.replaceChildren(...CardAlunoFinalizado)
        alunos.append(tituloPage, turma)

    }

    cursando.onclick = async () => {
        const turma = document.getElementById('turma')
        const statusAluno = await statusAlunoLion('Cursando')
        const alunoStatus = statusAluno.alunos

        const cardAluno = alunoStatus.map(function (aluno) {
            if (aluno.sigla == sigla) {
                const card = criarAluno(aluno)
                return card
            }
        })

        const CardAlunoCursando = cardAluno.filter(function (alunoCursando) {
            return alunoCursando !== undefined;
        });

        turma.replaceChildren(...CardAlunoCursando)
        alunos.append(tituloPage, turma)

    }

    status.onclick = () => {
        const cardAluno = alunosCurso.map(criarAluno)
        turma.replaceChildren(...cardAluno)
        alunos.append(tituloPage, turma)
        console.log(alunos)
    }

    turma.replaceChildren(...cardAluno)
    alunos.append(tituloPage, turma)
}

const carregarPagina = (indice) => {
    const home = document.getElementById('home')
    const alunos = document.getElementById('alunos')
    const filtro = document.getElementById('filter')


    home.style.display = 'none'
    alunos.style.display = 'flex'
    sair.textContent = 'Voltar'
    sairEVoltarPagina(sair)
    filtro.style.display = 'flex'

    const sigla = cursos[indice].sigla
    const titulo = cursos[indice].nome
    carregarAlunos(sigla, titulo)

}

const sairEVoltarPagina = (estado) => {
    let sair = document.getElementById('sair')

    sair.onclick = () => {
        if (estado.textContent == 'Sair') {
            window.close()
        } else {

        }

    }
}


carregarCurso()
sairEVoltarPagina(sair)