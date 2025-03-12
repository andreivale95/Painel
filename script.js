async function carregarDados() {
    const url = "https://script.google.com/macros/s/SEU_SCRIPT_ID/exec"; // Substitua pela URL gerada no Google Apps Script

    try {
        const resposta = await fetch(url);
        const dados = await resposta.json();

        document.getElementById("titulo").innerText = dados.titulo;
        document.getElementById("horario").innerText = dados.horario;
        document.getElementById("nivel-rio-valor").innerText = dados.nivel_rio + "m";
        document.getElementById("variacao").innerText = dados.variacao;

        document.getElementById("bens-total").innerText = "R$ " + dados.bens_total.toLocaleString("pt-BR");
        document.getElementById("ocorrencias-total").innerText = dados.ocorrencias_total;
        document.getElementById("familias-total").innerText = dados.familias_total;
        document.getElementById("pessoas-total").innerText = dados.pessoas_total;

        document.getElementById("bens-diario").innerText = "R$ " + dados.bens_diario.toLocaleString("pt-BR");
        document.getElementById("ocorrencias-diario").innerText = dados.ocorrencias_diario;
        document.getElementById("familias-diario").innerText = dados.familias_diario;
        document.getElementById("pessoas-diario").innerText = dados.pessoas_diario;
    } catch (error) {
        console.error("Erro ao carregar os dados:", error);
    }
}

// Chamar a função ao carregar a página
window.onload = carregarDados;
