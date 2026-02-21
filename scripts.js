
function abrirAba(id) {
    const abas = document.querySelectorAll('.tab-content');
    abas.forEach(a => a.classList.remove('active'));
    document.getElementById(id).classList.add('active');
}

function enviarMensagem(nivel) {
    const numero = "5513991860110"; // DDD + número (sem espaços)
    const mensagem = `Olá! Quero agendar aula de tênis para o nível ${nivel}.`;

    const mensagemCodificada = encodeURIComponent(mensagem);
    const url = `https://wa.me/${numero}?text=${mensagemCodificada}`;

    window.open(url, "_blank");
}

function escapeHtml(str) {
    return String(str)
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}

document.addEventListener('DOMContentLoaded', () => {
    // Lógica do modal de visualização de certificados
    const modal = document.getElementById('pdf-modal');
    const viewer = document.getElementById('pdf-viewer');
    const closeBtn = modal ? modal.querySelector('.pdf-close') : null;

    function openPdf(url) {
        if (!modal || !viewer) return;
        // encodeURI preserves slashes and encodes spaces/special chars
        viewer.src = encodeURI(url);
        modal.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }

    function closePdf() {
        if (!modal || !viewer) return;
        viewer.src = '';
        modal.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }

    // abrir quando clicar nos botões de 'Ver' (certificações em Sobre)
    document.querySelectorAll('button[data-file]').forEach(btn => {
        btn.addEventListener('click', () => {
            const file = btn.getAttribute('data-file');
            if (!file) return;
            openPdf(file);
        });
    });

    if (closeBtn) closeBtn.addEventListener('click', closePdf);
    if (modal) modal.addEventListener('click', (e) => {
        if (e.target === modal) closePdf();
    });
});
