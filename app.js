function pesquisar() {
    let section = document.getElementById("resultados-pesquisa");
    let campoPesquisa = document.getElementById
    ("campo-pesquisa").value;

    if (campoPesquisa == "") {
        section.innerHTML = "Busca vazia, digite algo para pesquisar"
        return
    }
    campoPesquisa = campoPesquisa.toLowerCase()
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descricao = dado.descricao.toLowerCase()
        tags = dado.tags.toLowerCase()
        cores = dado.cores.toLowerCase()

        if (titulo.includes(campoPesquisa)||descricao.includes(campoPesquisa) || tags.includes(campoPesquisa) ||
        cores.includes(campoPesquisa))
            {
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${dado.titulo}</a>
                </h2>
                <p class="descriçao-meta">${dado.descricao}</p>
                <p class="descricao-meta">Suas cores são ${dado.cores}</p>
            </div>`;
            }
       
    }
    if (!resultados) {
        resultados = "<p> Resultado inexistente</p>"
    }
    section.innerHTML = resultados;
}
