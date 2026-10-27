
const btnCadastrar = document.getElementById("btnCadastrar");
const btnCancelar = document.getElementById("btnCancelar");
const modal = document.getElementById("modalCadastro");
const form = document.getElementById("formJogo");
const lista = document.getElementById("listarJogos");
const mensagemVazia = document.getElementById("mensagemVazia");

const titulo = document.getElementById("titulo");
const plataforma = document.getElementById("plataforma");
const desenvolvedora = document.getElementById("desenvolvedora");
const imagem = document.getElementById("imagem");
const preco = document.getElementById("preco");

btnCadastrar.addEventListener("click", () => {
    modal.showModal();
});

btnCancelar.addEventListener("click", () => {
    modal.close();
    form.reset();
});

form.addEventListener("submit", (evento) => {
    evento.preventDefault();

    const nomeJogo = titulo.value.trim();
    const nomePlataforma = plataforma.value.trim();
    const nomeDesenvolvedora = desenvolvedora.value.trim();
    const urlImagem = imagem.value.trim();
    const valorPreco = Number(preco.value);

    if (
        !nomeJogo ||
        !nomePlataforma ||
        !nomeDesenvolvedora ||
        !urlImagem ||
        !Number.isFinite(valorPreco) ||
        valorPreco <= 0
    ) {
        alert("Preencha todos os campos corretamente.");
        return;
    }

    const card = document.createElement("article");
    card.classList.add("card-jogo");

    const capa = document.createElement("div");
    capa.classList.add("capa");

    const img = document.createElement("img");
    img.src = urlImagem;
    img.alt = `Capa do jogo ${nomeJogo}`;
    img.loading = "lazy";

    img.addEventListener("error", () => {
        img.remove();
        capa.textContent = "Imagem indisponível";
    }, { once: true });

    capa.appendChild(img);

    const info = document.createElement("div");
    info.classList.add("info-jogo");

    const nome = document.createElement("h3");
    nome.textContent = nomeJogo;

    const consoleJogo = document.createElement("p");
    consoleJogo.textContent = `Plataforma: ${nomePlataforma}`;

    const empresa = document.createElement("p");
    empresa.textContent = `Desenvolvedora: ${nomeDesenvolvedora}`;

    const valor = document.createElement("strong");
    valor.classList.add("preco");
    valor.textContent = valorPreco.toLocaleString("pt-BR", {
        style: "currency",
        currency: "BRL"
    });

    info.append(nome, consoleJogo, empresa, valor);
    card.append(capa, info);

    lista.appendChild(card);

    mensagemVazia.hidden = true;

    form.reset();
    modal.close();
});
