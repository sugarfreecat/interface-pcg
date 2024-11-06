
    function adjustFontSize(action) {
        const description = document.querySelector('.descricao');
        let currentFontSize = parseFloat(window.getComputedStyle(description).fontSize);

        const maxFontSize = 24;
        const minFontSize = 10;

        if (action === 'increase' && currentFontSize < maxFontSize) {
            description.style.fontSize = (currentFontSize + 2) + 'px';
        } else if (action === 'decrease' && currentFontSize > minFontSize) {
            description.style.fontSize = (currentFontSize - 2) + 'px';
        }
    }

    function adjustGraphicSize(action) {
        const graficoImg = document.querySelector('.grafico img');
        const descriptionDiv = document.querySelector('.descricao');
        
        let currentWidth = parseFloat(window.getComputedStyle(graficoImg).width);

        // Incremento/decremento do gráfico e ajuste da flexibilidade da descrição
        if (action === 'increase') {
            graficoImg.style.width = (currentWidth + 50) + 'px'; // Aumenta o gráfico em 50px
            graficoImg.parentElement.style.flexGrow = 2; // Aumenta a proporção do gráfico
            descriptionDiv.style.flexGrow = 1; // Diminui a proporção da descrição
        } else if (action === 'decrease' && currentWidth > 100) {
            graficoImg.style.width = (currentWidth - 50) + 'px'; // Diminui o gráfico em 50px
            graficoImg.parentElement.style.flexGrow = 1; // Restaura proporção original
            descriptionDiv.style.flexGrow = 2; // Aumenta a proporção da descrição
        }
    }

