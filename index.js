let produtos = [
    {
        nome: "Processador ryzen 5 5600g",
        preco: 1500
    },
    {
        nome: "Placa mãe B450m PRO S",
        preco: 560
    },
    {
        nome: "Memoria Ram 2x8 3600hz",
        preco: 400
    },
    {
        nome: "Fonte Corsair 650w",
        preco: 377
    },
    {
        nome: "Air cooler Darkai ARGB",
        preco: 200
    }
]

//

function criandoProduct(prod){
    let button = "Finalizar compra"

    let tagMain         = document.createElement("main");
    let tagH1           = document.createElement("h1")
    let tagItem         = document.createElement("p")
    let tagValor        = document.createElement("p")
    let tagUl           = document.createElement("ul");
    let tagTotal        = document.createElement("p")
    let tagPrecoTotal   = document.createElement("p")
    let tagButton       = document.createElement("button")

    tagButton.innerText         = button
    tagH1.innerText             = "virtual technology market"
    tagItem.innerText           = "Item"
    tagValor.innerText          = "Valor"
    tagTotal.innerText          = "Total"
    


    tagMain.appendChild(tagH1)
    tagMain.appendChild(tagItem)
    tagMain.appendChild(tagItem)
    tagMain.appendChild(tagValor)
    tagMain.appendChild(tagValor)
    tagMain.appendChild(tagUl)
    tagMain.appendChild(tagTotal)
    tagMain.appendChild(tagPrecoTotal)
    tagMain.appendChild(tagButton)

    let soma = 0

    for(let i = 0; i < prod.length; i++){
        soma += prod[i].preco
        let nome    = prod[i].nome
        let preco   = prod[i].preco

        let tagLi       = document.createElement("li")
        let tagDiv      = document.createElement("div");
        let tagNome     = document.createElement("p")
        let tagPreco    = document.createElement("p")
        
        
        tagNome.innerHTML   = `<strong>${nome}</strong>`
        tagPreco.innerText  = `R$ ${preco},00`

        tagUl.appendChild(tagLi)
        tagLi.appendChild(tagDiv)
        tagDiv.appendChild(tagNome)
        tagDiv.appendChild(tagPreco)

    } 

    tagPrecoTotal.innerText     = `R$ ${soma},00`

    return tagMain
}
let meusProdutos = criandoProduct(produtos)

let body = document.querySelector("body")
body.appendChild(meusProdutos)




