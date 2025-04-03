document.addEventListener("DOMContentLoaded", function () {
    function makeEditable(elementSelector) {
        const element = document.querySelector(elementSelector);

        if (!element) return;  

        element.addEventListener("click", function () {
            if (element.querySelector("input")) return; 

            const input = document.createElement("input");
            input.type = "text";
            input.value = element.textContent.trim();
            input.classList.add("input-edit");

            element.textContent = "";
            element.appendChild(input);
            input.focus();

            input.addEventListener("blur", () => finalizeEdit(element, input));
            input.addEventListener("keydown", (event) => {
                if (event.key === "Enter") finalizeEdit(element, input);
            });
        });
    }

    function finalizeEdit(element, input) {
        element.textContent = input.value.trim() || "0"; 
    }

    const elementSelectors = [
        ".code-number", ".date-number",
        "#no-maquina", "#linha-produto", "#rendimento", "#no-amostra", "#observacao",
        "#info-maquina", "#info-linha-produto", "#info-rendimento", "#info-no-amostra", "#info-observacao",
        "#id-maquina", "#id-largura1", "#id-largura2", "#id-largura3", "#id-altura-disco",
        "#id-marca", "#id-tubular1", "#id-tubular2", "#id-tubular3", "#id-roda", "#id-engrenagem", "#id-lfa", "#id-frontura",
        "#id-modelo", "#id-gramatura1", "#id-gramatura2", "#id-gramatura3", "#id-roda-2", "#id-engrenagem-2", "#id-lfa-2", "#id-puxador-a",
        "#id-tipo", "#id-gramatu1", "#id-gramatu2", "#id-gramatu3", "#id-roda-3", "#id-engrenagem-3", "#id-lfa-3", "#id-puxador-b",
        "#id-diametro", "#id-rendimento", "#id-rendimento-2", "#id-rendimento-3", "#id-roda-4", "#id-engrenagem-4", "#id-lfa-4", "#id-escala",
        "#id-finura", "#id-malha", "#id-malha-2", "#id-obs", "#id-roda-5", "#id-engrenagem-5", "#id-lfa-5", "#id-cruzamento",
        "#id-qtde", "#id-coluna", "#id-coluna-2", "#id-data", "#id-roda-6", "#id-engrenagem-6", "#id-lfa-6", "#id-posicao-alimentador",
        "#id-alimentador", "#id-espessura", "#id-espessura-2", "#id-largura-alargador", "#id-alimentador-deslig", "#id-ponto-central", "#id-largura-enrolo", "#id-composicao",
        "#id-Cor", "#id-cones", "#id-titulo", "#id-codigo", "#id-dtex", "#id-composicao-fio", "#id-cones-rap", "#id-lfa-rap", "#id-percentual", "#id-consumo-real", "#id-observacoes-fio",
        "#id-voltas", "#id-Cor-2", "#id-cones-2", "#id-titulo-2", "#id-codigo-2", "#id-dtex-2", "#id-composicao-fio-2", "#id-cones-rap-2", "#id-lfa-rap-2", "#id-percentual-2", "#id-consumo-real-2", "#id-observacoes-fio-2",
        "#id-rpm", "#id-Cor-3", "#id-cones-3", "#id-titulo-3", "#id-codigo-3", "#id-dtex-3", "#id-composicao-fio-3", "#id-cones-rap-3", "#id-lfa-rap-3", "#id-percentual-3", "#id-consumo-real-3", "#id-observacoes-fio-3",
        "#id-eficiencia", "#id-Cor-4", "#id-cones-4", "#id-titulo-4", "#id-codigo-4", "#id-dtex-4", "#id-composicao-fio-4", "#id-cones-rap-4", "#id-lfa-rap-4", "#id-percentual-4", "#id-consumo-real-4", "#id-observacoes-fio-4",
        "#id-qtde-tecido", "#id-Cor-5", "#id-cones-5", "#id-titulo-5", "#id-codigo-5", "#id-dtex-5", "#id-composicao-fio-5", "#id-cones-rap-5", "#id-lfa-rap-5", "#id-percentual-5", "#id-consumo-real-5", "#id-observacoes-fio-5",
        "#id-peso-padrao", "#id-Cor-6", "#id-cones-6", "#id-titulo-6", "#id-codigo-6", "#id-dtex-6", "#id-composicao-fio-6", "#id-cones-rap-6", "#id-lfa-rap-6", "#id-percentual-6", "#id-consumo-real-6", "#id-observacoes-fio-6",
        "#id-metros", "#id-cor-7", "#id-cones-7", "#id-titulo-7", "#id-codigo-7", "#id-dtex-7", "#id-composicao-fio-7", "#id-cones-rap-7", "#id-lfa-rap-7", "#id-percentual-7", "#id-consumo-real-7", "#id-observacoes-fio-7",
        "#id-cor-8", "#id-cones-8", "#id-titulo-8", "#id-codigo-8", "#id-dtex-8", "#id-composicao-fio-8", "#id-cones-rap-8", "#id-lfa-rap-8", "#id-percentual-8", "#id-consumo-real-8", "#id-observacoes-fio-8",
        "#id-tecido-tirado", "#id-lfa-1-1", "#id-lfa-1-2", "#id-lfa-1-3", "#id-lfa-1-4", "#id-lfa-1-5", "#id-lfa-1-6", "#id-lfa-7", "#id-lfa-8", "#id-lfa-9", "#id-lfa-10", "#id-lfa-11", "#id-lfa-12", "#id-lfa-13", "#id-lfa-14",
        "#id-lfa-15", "#id-lfa-16", "#id-lfa-17", "#id-lfa-18", "#id-lfa-19", "#id-lfa-20", "#id-lfa-21", "#id-lfa-22", "#id-lfa-23", "#id-lfa-24", "#id-lfa-25", "#id-lfa-26", "#id-lfa-27", "#id-lfa-28", "#id-lfa-29", "#id-lfa-30",
        "#id-lfa-31", "#id-lfa-32", "#id-lfa-33", "#id-lfa-34", "#id-lfa-35", "#id-lfa-36", "#id-lfa-37", "#id-lfa-38", "#id-lfa-39", "#id-lfa-40", "#id-lfa-41", "#id-lfa-42", "#id-lfa-43", "#id-lfa-44", "#id-lfa-45", "#id-lfa-46",
        "#id-lfa-47", "#id-lfa-48",
        "#id-ifa-2-1", "#id-ifa-2-2", "#id-ifa-2-3", "#id-ifa-2-4", "#id-ifa-2-5", "#id-ifa-2-6", "#id-ifa-2-7", "#id-ifa-2-8", "#id-ifa-2-9", "#id-ifa-2-10", "#id-ifa-2-11", "#id-ifa-2-12", "#id-ifa-2-13",
        "#id-ifa-2-14", "#id-ifa-2-15", "#id-ifa-2-16", "#id-ifa-2-17", "#id-ifa-2-18", "#id-ifa-2-19", "#id-ifa-2-20", "#id-ifa-2-21", "#id-ifa-2-22", "#id-ifa-2-23", "#id-ifa-2-24", "#id-ifa-2-25", "#id-ifa-2-26", "#id-ifa-2-27",
        "#id-ifa-2-28", "#id-ifa-2-29", "#id-ifa-2-30", "#id-ifa-2-31", "#id-ifa-2-32", "#id-ifa-2-33", "#id-ifa-2-34", "#id-ifa-2-35", "#id-ifa-2-36", "#id-ifa-2-37", "#id-ifa-2-38", "#id-ifa-2-39", "#id-ifa-2-40", "#id-ifa-2-41",
        "#id-ifa-2-42", "#id-ifa-2-43", "#id-ifa-2-44", "#id-ifa-2-45", "#id-ifa-2-46", "#id-ifa-2-47", "#id-ifa-2-48",
        "#id-fita-1-1", "#id-fita-1-2", "#id-fita-1-3", "#id-fita-1-4", "#id-fita-1-5", "#id-fita-1-6", "#id-fita-1-7", "#id-fita-1-8", "#id-fita-1-9", "#id-fita-1-10", "#id-fita-1-11", "#id-fita-1-12", "#id-fita-1-13", "#id-fita-1-14",
        "#id-fita-1-15", "#id-fita-1-16", "#id-fita-1-17", "#id-fita-1-18", "#id-fita-1-19", "#id-fita-1-20", "#id-fita-1-21", "#id-fita-1-22", "#id-fita-1-23", "#id-fita-1-24", "#id-fita-1-25", "#id-fita-1-26", "#id-fita-1-27", "#id-fita-1-28",
        "#id-fita-1-29", "#id-fita-1-30", "#id-fita-1-31", "#id-fita-1-32", "#id-fita-1-33", "#id-fita-1-34", "#id-fita-1-35", "#id-fita-1-36", "#id-fita-1-37", "#id-fita-1-38", "#id-fita-1-39", "#id-fita-1-40", "#id-fita-1-41", "#id-fita-1-42",
        "#id-fita-1-43", "#id-fita-1-44", "#id-fita-1-45", "#id-fita-1-46", "#id-fita-1-47", "#id-fita-1-48",
        "#id-fita-2-1", "#id-fita-2-2", "#id-fita-2-3", "#id-fita-2-4", "#id-fita-2-5", "#id-fita-2-6", "#id-fita-2-7", "#id-fita-2-8", "#id-fita-2-9", "#id-fita-2-10", "#id-fita-2-11", "#id-fita-2-12", "#id-fita-2-13", "#id-fita-2-14", "#id-fita-2-15",
        "#id-fita-2-16", "#id-fita-2-17", "#id-fita-2-18", "#id-fita-2-19", "#id-fita-2-20", "#id-fita-2-21", "#id-fita-2-22", "#id-fita-2-23", "#id-fita-2-24", "#id-fita-2-25", "#id-fita-2-26", "#id-fita-2-27", "#id-fita-2-28", "#id-fita-2-29", "#id-fita-2-30",
        "#id-fita-2-31", "#id-fita-2-32", "#id-fita-2-33", "#id-fita-2-34", "#id-fita-2-35", "#id-fita-2-36", "#id-fita-2-37", "#id-fita-2-38", "#id-fita-2-39", "#id-fita-2-40", "#id-fita-2-41", "#id-fita-2-42", "#id-fita-2-43", "#id-fita-2-44", "#id-fita-2-45",
        "#id-fita-2-46", "#id-fita-2-47", "#id-fita-2-48",
        "#id-fios-1-1", "#id-fios-1-2", "#id-fios-1-3", "#id-fios-1-4", "#id-fios-1-5", "#id-fios-1-6", "#id-fios-1-7", "#id-fios-1-8", "#id-fios-1-9", "#id-fios-1-10", "#id-fios-1-11", "#id-fios-1-12", "#id-fios-1-13", "#id-fios-1-14", "#id-fios-1-15", "#id-fios-1-16", 
        "#id-fios-1-17", "#id-fios-1-18", "#id-fios-1-19", "#id-fios-1-20", "#id-fios-1-21", "#id-fios-1-22", "#id-fios-1-23", "#id-fios-1-24", "#id-fios-1-25", "#id-fios-1-26", "#id-fios-1-27", "#id-fios-1-28", "#id-fios-1-29", "#id-fios-1-30", "#id-fios-1-31",
        "#id-fios-1-32", "#id-fios-1-33", "#id-fios-1-34", "#id-fios-1-35", "#id-fios-1-36", "#id-fios-1-37", "#id-fios-1-38", "#id-fios-1-39", "#id-fios-1-40", "#id-fios-1-41", "#id-fios-1-42", "#id-fios-1-43", "#id-fios-1-44", "#id-fios-1-45", "#id-fios-1-46", "#id-fios-1-47", "#id-fios-1-48",  
        "#id-fios-2-1", "#id-fios-2-2", "#id-fios-2-3", "#id-fios-2-4", "#id-fios-2-5", "#id-fios-2-6", "#id-fios-2-7", "#id-fios-2-8", "#id-fios-2-9", "#id-fios-2-10", "#id-fios-2-11", "#id-fios-2-12", "#id-fios-2-13", "#id-fios-2-14", "#id-fios-2-15", "#id-fios-2-16", "#id-fios-2-17",
        "#id-fios-2-18", "#id-fios-2-19", "#id-fios-2-20", "#id-fios-2-21", "#id-fios-2-22", "#id-fios-2-23", "#id-fios-2-24", "#id-fios-2-25", "#id-fios-2-26", "#id-fios-2-27", "#id-fios-2-28", "#id-fios-2-29", "#id-fios-2-30", "#id-fios-2-31", "#id-fios-2-32", "#id-fios-2-33", "#id-fios-2-34", 
        "#id-fios-2-35", "#id-fios-2-36", "#id-fios-2-37", "#id-fios-2-38", "#id-fios-2-39", "#id-fios-2-40", "#id-fios-2-41", "#id-fios-2-42", "#id-fios-2-43", "#id-fios-2-44", "#id-fios-2-45", "#id-fios-2-46", "#id-fios-2-47", "#id-fios-2-48",  
        "#id-fios-3-1", "#id-fios-3-2", "#id-fios-3-3", "#id-fios-3-4", "#id-fios-3-5", "#id-fios-3-6", "#id-fios-3-7", "#id-fios-3-8", "#id-fios-3-9", "#id-fios-3-10", "#id-fios-3-11", "#id-fios-3-12", "#id-fios-3-13", "#id-fios-3-14", "#id-fios-3-15", "#id-fios-3-16", "#id-fios-3-17", 
        "#id-fios-3-18", "#id-fios-3-19", "#id-fios-3-20", "#id-fios-3-21", "#id-fios-3-22", "#id-fios-3-23", "#id-fios-3-24", "#id-fios-3-25", "#id-fios-3-26", "#id-fios-3-27", "#id-fios-3-28", "#id-fios-3-29", "#id-fios-3-30", "#id-fios-3-31", "#id-fios-3-32", "#id-fios-3-33", "#id-fios-3-34", 
        "#id-fios-3-35", "#id-fios-3-36", "#id-fios-3-37", "#id-fios-3-38", "#id-fios-3-39", "#id-fios-3-40", "#id-fios-3-41", "#id-fios-3-42", "#id-fios-3-43", "#id-fios-3-44", "#id-fios-3-45", "#id-fios-3-46", "#id-fios-3-47", "#id-fios-3-48",

        "#id-ponto-1-1", "#id-ponto-1-2", "#id-ponto-1-3", "#id-ponto-1-4", "#id-ponto-1-5", "#id-ponto-1-6", "#id-ponto-1-7", "#id-ponto-1-8", "#id-ponto-1-9", "#id-ponto-1-10", "#id-ponto-1-11", "#id-ponto-1-12", "#id-ponto-1-13", "#id-ponto-1-14", "#id-ponto-1-15", "#id-ponto-1-16", "#id-ponto-1-17",
        "#id-ponto-1-18", "#id-ponto-1-19", "#id-ponto-1-20", "#id-ponto-1-21", "#id-ponto-1-22", "#id-ponto-1-23", "#id-ponto-1-24", "#id-ponto-1-25", "#id-ponto-1-26", "#id-ponto-1-27", "#id-ponto-1-28", "#id-ponto-1-29", "#id-ponto-1-30", "#id-ponto-1-31", "#id-ponto-1-32", "#id-ponto-1-33", "#id-ponto-1-34", 
        "#id-ponto-1-35", "#id-ponto-1-36", "#id-ponto-1-37", "#id-ponto-1-38", "#id-ponto-1-39", "#id-ponto-1-40", "#id-ponto-1-41", "#id-ponto-1-42", "#id-ponto-1-43", "#id-ponto-1-44", "#id-ponto-1-45", "#id-ponto-1-46", "#id-ponto-1-47", "#id-ponto-1-48", "#id-ponto-2-1", "#id-ponto-2-2", "#id-ponto-2-3", 
        "#id-ponto-2-4", "#id-ponto-2-5", "#id-ponto-2-6", "#id-ponto-2-7", "#id-ponto-2-8", "#id-ponto-2-9", "#id-ponto-2-10", "#id-ponto-2-11", "#id-ponto-2-12", "#id-ponto-2-13", "#id-ponto-2-14", "#id-ponto-2-15", "#id-ponto-2-16", "#id-ponto-2-17", "#id-ponto-2-18", "#id-ponto-2-19", "#id-ponto-2-20", 
        "#id-ponto-2-21", "#id-ponto-2-22", "#id-ponto-2-23", "#id-ponto-2-24", "#id-ponto-2-25", "#id-ponto-2-26", "#id-ponto-2-27", "#id-ponto-2-28", "#id-ponto-2-29", "#id-ponto-2-30", "#id-ponto-2-31", "#id-ponto-2-32", "#id-ponto-2-33", "#id-ponto-2-34", "#id-ponto-2-35", "#id-ponto-2-36", "#id-ponto-2-37", 
        "#id-ponto-2-38", "#id-ponto-2-39", "#id-ponto-2-40", "#id-ponto-2-41", "#id-ponto-2-42", "#id-ponto-2-43", "#id-ponto-2-44", "#id-ponto-2-45", "#id-ponto-2-46", "#id-ponto-2-47", "#id-ponto-2-48",

        "#id-disco-1-1", "#id-disco-1-2", "#id-disco-1-3", "#id-disco-1-4", "#id-disco-1-5", "#id-disco-1-6", "#id-disco-1-7", "#id-disco-1-8", "#id-disco-1-9", "#id-disco-1-10", "#id-disco-1-11", "#id-disco-1-12", "#id-disco-1-13", "#id-disco-1-14", "#id-disco-1-15", "#id-disco-1-16", "#id-disco-1-17", "#id-disco-1-18",
        "#id-disco-1-19", "#id-disco-1-20", "#id-disco-1-21", "#id-disco-1-22", "#id-disco-1-23", "#id-disco-1-24", "#id-disco-1-25", "#id-disco-1-26", "#id-disco-1-27", "#id-disco-1-28", "#id-disco-1-29", "#id-disco-1-30", "#id-disco-1-31", "#id-disco-1-32", "#id-disco-1-33", "#id-disco-1-34", "#id-disco-1-35", "#id-disco-1-36", 
        "#id-disco-1-37", "#id-disco-1-38", "#id-disco-1-39", "#id-disco-1-40", "#id-disco-1-41", "#id-disco-1-42", "#id-disco-1-43", "#id-disco-1-44", "#id-disco-1-45", "#id-disco-1-46", "#id-disco-1-47", "#id-disco-1-48",
        "#id-disco-2-1", "#id-disco-2-2", "#id-disco-2-3", "#id-disco-2-4", "#id-disco-2-5", "#id-disco-2-6", "#id-disco-2-7", "#id-disco-2-8", "#id-disco-2-9", "#id-disco-2-10", "#id-disco-2-11", "#id-disco-2-12", "#id-disco-2-13", "#id-disco-2-14", "#id-disco-2-15", "#id-disco-2-16", "#id-disco-2-17", "#id-disco-2-18", "#id-disco-2-19", 
        "#id-disco-2-20", "#id-disco-2-21", "#id-disco-2-22", "#id-disco-2-23", "#id-disco-2-24", "#id-disco-2-25", "#id-disco-2-26", "#id-disco-2-27", "#id-disco-2-28", "#id-disco-2-29", "#id-disco-2-30", "#id-disco-2-31", "#id-disco-2-32", "#id-disco-2-33", "#id-disco-2-34", "#id-disco-2-35", "#id-disco-2-36", "#id-disco-2-37", 
        "#id-disco-2-38", "#id-disco-2-39", "#id-disco-2-40", "#id-disco-2-41", "#id-disco-2-42", "#id-disco-2-43", "#id-disco-2-44", "#id-disco-2-45", "#id-disco-2-46", "#id-disco-2-47", "#id-disco-2-48",
        "#id-cilindro-1-1", "#id-cilindro-1-2", "#id-cilindro-1-3", "#id-cilindro-1-4", "#id-cilindro-1-5", "#id-cilindro-1-6", "#id-cilindro-1-7", "#id-cilindro-1-8", "#id-cilindro-1-9", "#id-cilindro-1-10", "#id-cilindro-1-11", "#id-cilindro-1-12", "#id-cilindro-1-13", "#id-cilindro-1-14", "#id-cilindro-1-15", "#id-cilindro-1-16", 
        "#id-cilindro-1-17", "#id-cilindro-1-18", "#id-cilindro-1-19", "#id-cilindro-1-20", "#id-cilindro-1-21", "#id-cilindro-1-22", "#id-cilindro-1-23", "#id-cilindro-1-24", "#id-cilindro-1-25", "#id-cilindro-1-26", "#id-cilindro-1-27", "#id-cilindro-1-28", "#id-cilindro-1-29", "#id-cilindro-1-30", "#id-cilindro-1-31", "#id-cilindro-1-32", 
        "#id-cilindro-1-33", "#id-cilindro-1-34", "#id-cilindro-1-35", "#id-cilindro-1-36", "#id-cilindro-1-37", "#id-cilindro-1-38", "#id-cilindro-1-39", "#id-cilindro-1-40", "#id-cilindro-1-41", "#id-cilindro-1-42", "#id-cilindro-1-43", "#id-cilindro-1-44", "#id-cilindro-1-45", "#id-cilindro-1-46", "#id-cilindro-1-47", "#id-cilindro-1-48", 
        "#id-cilindro-2-1", "#id-cilindro-2-2", "#id-cilindro-2-3", "#id-cilindro-2-4", "#id-cilindro-2-5", "#id-cilindro-2-6", "#id-cilindro-2-7", "#id-cilindro-2-8", "#id-cilindro-2-9", "#id-cilindro-2-10", "#id-cilindro-2-11", "#id-cilindro-2-12", "#id-cilindro-2-13", "#id-cilindro-2-14", "#id-cilindro-2-15", "#id-cilindro-2-16", 
        "#id-cilindro-2-17", "#id-cilindro-2-18", "#id-cilindro-2-19", "#id-cilindro-2-20", "#id-cilindro-2-21", "#id-cilindro-2-22", "#id-cilindro-2-23", "#id-cilindro-2-24", "#id-cilindro-2-25", "#id-cilindro-2-26", "#id-cilindro-2-27", "#id-cilindro-2-28", "#id-cilindro-2-29", "#id-cilindro-2-30", "#id-cilindro-2-31", "#id-cilindro-2-32", 
        "#id-cilindro-2-33", "#id-cilindro-2-34", "#id-cilindro-2-35", "#id-cilindro-2-36", "#id-cilindro-2-37", "#id-cilindro-2-38", "#id-cilindro-2-39", "#id-cilindro-2-40", "#id-cilindro-2-41", "#id-cilindro-2-42", "#id-cilindro-2-43", "#id-cilindro-2-44", "#id-cilindro-2-45", "#id-cilindro-2-46", "#id-cilindro-2-47", "#id-cilindro-2-48", 
        "#id-cilindro-3-1", "#id-cilindro-3-2", "#id-cilindro-3-3", "#id-cilindro-3-4", "#id-cilindro-3-5", "#id-cilindro-3-6", "#id-cilindro-3-7", "#id-cilindro-3-8", "#id-cilindro-3-9", "#id-cilindro-3-10", "#id-cilindro-3-11", "#id-cilindro-3-12", "#id-cilindro-3-13", "#id-cilindro-3-14", "#id-cilindro-3-15", "#id-cilindro-3-16", 
        "#id-cilindro-3-17", "#id-cilindro-3-18", "#id-cilindro-3-19", "#id-cilindro-3-20", "#id-cilindro-3-21", "#id-cilindro-3-22", "#id-cilindro-3-23", "#id-cilindro-3-24", "#id-cilindro-3-25", "#id-cilindro-3-26", "#id-cilindro-3-27", "#id-cilindro-3-28", "#id-cilindro-3-29", "#id-cilindro-3-30", "#id-cilindro-3-31", "#id-cilindro-3-32", 
        "#id-cilindro-3-33", "#id-cilindro-3-34", "#id-cilindro-3-35", "#id-cilindro-3-36", "#id-cilindro-3-37", "#id-cilindro-3-38", "#id-cilindro-3-39", "#id-cilindro-3-40", "#id-cilindro-3-41", "#id-cilindro-3-42", "#id-cilindro-3-43", "#id-cilindro-3-44", "#id-cilindro-3-45", "#id-cilindro-3-46", "#id-cilindro-3-47", "#id-cilindro-3-48", 
        "#id-cilindro-4-1", "#id-cilindro-4-2", "#id-cilindro-4-3", "#id-cilindro-4-4", "#id-cilindro-4-5", "#id-cilindro-4-6", "#id-cilindro-4-7", "#id-cilindro-4-8", "#id-cilindro-4-9", "#id-cilindro-4-10", "#id-cilindro-4-11", "#id-cilindro-4-12", "#id-cilindro-4-13", "#id-cilindro-4-14", "#id-cilindro-4-15", "#id-cilindro-4-16", 
        "#id-cilindro-4-17", "#id-cilindro-4-18", "#id-cilindro-4-19", "#id-cilindro-4-20", "#id-cilindro-4-21", "#id-cilindro-4-22", "#id-cilindro-4-23", "#id-cilindro-4-24", "#id-cilindro-4-25", "#id-cilindro-4-26", "#id-cilindro-4-27", "#id-cilindro-4-28", "#id-cilindro-4-29", "#id-cilindro-4-30", "#id-cilindro-4-31", "#id-cilindro-4-32", 
        "#id-cilindro-4-33", "#id-cilindro-4-34", "#id-cilindro-4-35", "#id-cilindro-4-36", "#id-cilindro-4-37", "#id-cilindro-4-38", "#id-cilindro-4-39", "#id-cilindro-4-40", "#id-cilindro-4-41", "#id-cilindro-4-42", "#id-cilindro-4-43", "#id-cilindro-4-44", "#id-cilindro-4-45", "#id-cilindro-4-46", "#id-cilindro-4-47", "#id-cilindro-4-48",

        


    ];
    

    
    elementSelectors.forEach(selector => makeEditable(selector));
});