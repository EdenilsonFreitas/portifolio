document.addEventListener('DOMContentLoaded', function () {
    const btnMostrarMais = document.querySelector('.btn-mostrar-projetos');
    const projetos = document.querySelectorAll('.projeto');
    let projetosVisiveis = 4; // Quantidade de projetos que deseja mostrar inicialmente

    // Ocultar os projetos que vêm depois dos primeiros projetosVisiveis
    for (let i = projetosVisiveis; i < projetos.length; i++) {
        projetos[i].style.display = 'none';
    }

    btnMostrarMais.addEventListener('click', function () {
        // Mostrar os projetos ocultos
        for (let i = projetosVisiveis; i < projetos.length; i++) {
            projetos[i].style.display = 'block';
        }

        // Ocultar o botão "Mostrar mais" após todos os projetos estarem visíveis
        btnMostrarMais.style.display = 'none';
    });
});
