document.addEventListener("DOMContentLoaded", function () {
    function makeEditable(elementSelector) {
        const element = document.querySelector(elementSelector);

        element.addEventListener("click", function () {
            if (element.querySelector("input")) return; // Evita criar múltiplos inputs

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
        element.textContent = input.value.trim() || "0"; // Evita valores vazios
    }

    // Aplica a função aos elementos desejados
    makeEditable(".code-number");
    makeEditable(".date-number");

    makeEditable("#no-maquina");
    makeEditable("#linha-produto");
    makeEditable("#rendimento");
    makeEditable("#no-amostra");
    makeEditable("#observacao");

    makeEditable("#info-maquina");
    makeEditable("#info-linha-produto");
    makeEditable("#info-rendimento");
    makeEditable("#info-no-amostra");
    makeEditable("#info-observacao");
    
    makeEditable("#id-maquina");
    makeEditable("#id-largura1");
    makeEditable("#id-largura2");
    makeEditable("#id-largura3");
    makeEditable("#id-altura-disco");

    makeEditable("#id-marca");
    makeEditable("#id-tubular1");
    makeEditable("#id-tubular2");
    makeEditable("#id-tubular3");
    makeEditable("#id-roda");
    makeEditable("#id-engrenagem");
    makeEditable("#id-lfa");
    makeEditable("#id-frontura");


    makeEditable("#id-modelo");
    makeEditable("#id-gramatura1");
    makeEditable("#id-gramatura2");
    makeEditable("#id-gramatura3");
    makeEditable("#id-roda-2");
    makeEditable("#id-engrenagem-2");
    makeEditable("#id-lfa-2");
    makeEditable("#id-puxador-a");


    makeEditable("#id-tipo");
    makeEditable("#id-gramatu1");
    makeEditable("#id-gramatu2");
    makeEditable("#id-gramatu3");
    makeEditable("#id-roda-3");
    makeEditable("#id-engrenagem-3");
    makeEditable("#id-lfa-3");
    makeEditable("#id-puxador-b");


    makeEditable("#id-diametro");
    makeEditable("#id-rendimento");
    makeEditable("#id-rendimento-2");
    makeEditable("#id-rendimento-3");
    makeEditable("#id-roda-4");
    makeEditable("#id-engrenagem-4");
    makeEditable("#id-lfa-4");
    makeEditable("#id-escala");


    makeEditable("#id-finura");
    makeEditable("#id-malha");
    makeEditable("#id-malha-2");
    makeEditable("#id-obs");
    makeEditable("#id-roda-5");
    makeEditable("#id-engrenagem-5");
    makeEditable("#id-lfa-5");
    makeEditable("#id-cruzamento")


    makeEditable("#id-qtde");
    makeEditable("#id-coluna");
    makeEditable("#id-coluna-2");
    makeEditable("#id-data");
    makeEditable("#id-roda-6");
    makeEditable("#id-engrenagem-6");
    makeEditable("#id-lfa-6");
    makeEditable("#id-posicao-alimentador")



    makeEditable("#id-alimentador");
    makeEditable("#id-espessura");
    makeEditable("#id-espessura-2");
    makeEditable("#id-largura-alargador");
    makeEditable("#id-alimentador-deslig");
    makeEditable("#id-ponto-central");
    makeEditable("#id-largura-enrolo");
    makeEditable("#id-composicao")




    makeEditable("#id-Cor");
    makeEditable("#id-cones");
    makeEditable("#id-titulo");
    makeEditable("#id-codigo");
    makeEditable("#id-dtex");
    makeEditable("#id-composicao-fio");
    makeEditable("#id-cones-rap");
    makeEditable("#id-lfa-rap")
    makeEditable("#id-percentual");
    makeEditable("#id-consumo-real");
    makeEditable("#id-observacoes-fio")

    makeEditable("#id-voltas");

    makeEditable("#id-Cor-2");
    makeEditable("#id-cones-2");
    makeEditable("#id-titulo-2");
    makeEditable("#id-codigo-2");
    makeEditable("#id-dtex-2");
    makeEditable("#id-composicao-fio-2");
    makeEditable("#id-cones-rap-2");
    makeEditable("#id-lfa-rap-2")
    makeEditable("#id-percentual-2");
    makeEditable("#id-consumo-real-2");
    makeEditable("#id-observacoes-fio-2")

    makeEditable("#id-rpm");


    makeEditable("#id-Cor-3");
    makeEditable("#id-cones-3");
    makeEditable("#id-titulo-3");
    makeEditable("#id-codigo-3");
    makeEditable("#id-dtex-3");
    makeEditable("#id-composicao-fio-3");
    makeEditable("#id-cones-rap-3");
    makeEditable("#id-lfa-rap-3")
    makeEditable("#id-percentual-3");
    makeEditable("#id-consumo-real-3");
    makeEditable("#id-observacoes-fio-3")

    makeEditable("#id-eficiencia");


    makeEditable("#id-Cor-4");
    makeEditable("#id-cones-4");
    makeEditable("#id-titulo-4");
    makeEditable("#id-codigo-4");
    makeEditable("#id-dtex-4");
    makeEditable("#id-composicao-fio-4");
    makeEditable("#id-cones-rap-4");
    makeEditable("#id-lfa-rap-4")
    makeEditable("#id-percentual-4");
    makeEditable("#id-consumo-real-4");
    makeEditable("#id-observacoes-fio-4")

    makeEditable("#id-qtde-tecido");


    makeEditable("#id-Cor-5");
    makeEditable("#id-cones-5");
    makeEditable("#id-titulo-5");
    makeEditable("#id-codigo-5");
    makeEditable("#id-dtex-5");
    makeEditable("#id-composicao-fio-5");
    makeEditable("#id-cones-rap-5");
    makeEditable("#id-lfa-rap-5")
    makeEditable("#id-percentual-5");
    makeEditable("#id-consumo-real-5");
    makeEditable("#id-observacoes-fio-5")

    makeEditable("#id-peso-padrao");


    makeEditable("#id-Cor-6");
    makeEditable("#id-cones-6");
    makeEditable("#id-titulo-6");
    makeEditable("#id-codigo-6");
    makeEditable("#id-dtex-6");
    makeEditable("#id-composicao-fio-6");
    makeEditable("#id-cones-rap-6");
    makeEditable("#id-lfa-rap-6")
    makeEditable("#id-percentual-6");
    makeEditable("#id-consumo-real-6");
    makeEditable("#id-observacoes-fio-6")

    makeEditable("#id-metros");


    makeEditable("#id-cor-7"); 
    makeEditable("#id-cones-7");
    makeEditable("#id-titulo-7");
    makeEditable("#id-codigo-7");
    makeEditable("#id-dtex-7");
    makeEditable("#id-composicao-fio-7");
    makeEditable("#id-cones-rap-7");
    makeEditable("#id-lfa-rap-7")
    makeEditable("#id-percentual-7");
    makeEditable("#id-consumo-real-7");
    makeEditable("#id-observacoes-fio-7")

    makeEditable("#id-cor-8");
    makeEditable("#id-cones-8");
    makeEditable("#id-titulo-8");    
    makeEditable("#id-codigo-8");
    makeEditable("#id-dtex-8");
    makeEditable("#id-composicao-fio-8");
    makeEditable("#id-cones-rap-8");
    makeEditable("#id-lfa-rap-8")
    makeEditable("#id-percentual-8");
    makeEditable("#id-consumo-real-8");
    makeEditable("#id-observacoes-fio-8")

    makeEditable("#id-tecido-tirado");
    
});