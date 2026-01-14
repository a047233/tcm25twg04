document.addEventListener('DOMContentLoaded', function() {
    fetch('dados.xml')
        .then(response => response.text())
        .then(data => {
            let parser = new DOMParser();
            let xmlDoc = parser.parseFromString(data, "text/xml");

            // --- SEÇÃO DE OPINIÕES ---
            const containerOpinioes = document.getElementById('conteudo-opinioes');
            if (containerOpinioes) {
                let criticas = xmlDoc.getElementsByTagName('critica');
                let html = "";
                for (let i = 0; i < criticas.length; i++) {
                    let autor = criticas[i].getElementsByTagName('autor')[0].textContent;
                    let nota = parseInt(criticas[i].getElementsByTagName('nota')[0].textContent);
                    let texto = criticas[i].getElementsByTagName('comentario')[0].textContent;

                    // Lógica das Estrelas (escala de 1 a 5)
                    let estrelas = "★".repeat(nota) + "☆".repeat(5 - nota);

                    html += `
                        <div class="card-critica">
                            <h3>${autor}</h3>
                            <div class="estrelas">${estrelas}</div>
                            <p>${texto}</p>
                        </div>
                    `;
                }
                containerOpinioes.innerHTML = html;
            }

            // --- SEÇÃO DE CURIOSIDADES ---
            const containerCuriosidades = document.getElementById('conteudo-curiosidades');
            if (containerCuriosidades) {
                let curiosidades = xmlDoc.getElementsByTagName('item');
                let html = "<ul>";
                for (let i = 0; i < curiosidades.length; i++) {
                    let cat = curiosidades[i].getAttribute('categoria');
                    let texto = curiosidades[i].textContent;
                    html += `<li><strong>${cat}:</strong> ${texto}</li>`;
                }
                html += "</ul>";
                containerCuriosidades.innerHTML = html;
            }
        })
        .catch(err => console.error("Erro ao carregar XML:", err));
});