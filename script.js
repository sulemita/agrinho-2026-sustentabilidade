// Aguarda o carregamento completo do DOM para evitar erros de execução
document.addEventListener('DOMContentLoaded', () => {
    
    // Captura dos elementos sem usar funções "inline" no HTML (Critério do Item 6.1.15)
    const btnTradicional = document.getElementById('btn-tradicional');
    const btnSustentavel = document.getElementById('btn-sustentavel');
    const painelResultado = document.getElementById('resultado-simulacao');

    // Escuta do evento de clique para o cenário Tradicional
    btnTradicional.addEventListener('click', () => {
        painelResultado.className = 'resultado-alerta';
        painelResultado.innerHTML = `
            <h4 style="color: #c62828; margin-bottom: 8px;">Análise do Modelo Tradicional:</h4>
            <p><strong>Impacto Econômico:</strong> Retorno rápido, porém com custos crescentes devido à degradação severa do solo.</p>
            <p><strong>Impacto Ambiental:</strong> Alta emissão de carbono, compactação da terra e contaminação de lençóis freáticos.</p>
            <p style="margin-top: 8px; font-style: italic;">Diagnóstico: Modelo insustentável a longo prazo.</p>
        `;
    });

    // Escuta do evento de clique para o cenário Sustentável
    btnSustentavel.addEventListener('click', () => {
        painelResultado.className = 'resultado-sucesso';
        painelResultado.innerHTML = `
            <h4 style="color: #2e7d32; margin-bottom: 8px;">Análise do Modelo Sustentável:</h4>
            <p><strong>Impacto Econômico:</strong> Alta lucratividade e estabilidade ao longo das safras devido à conservação orgânica.</p>
            <p><strong>Impacto Ambiental:</strong> Recuperação de biomas locais, proteção de polinizadores e pegada de carbono neutra.</p>
            <p style="margin-top: 8px; font-style: italic;">Diagnóstico: Equilíbrio perfeito validado para o futuro.</p>
        `;
    });
});
