document.addEventListener('DOMContentLoaded', () => {

    // --- Elementos do Modal ---
    const modalOverlay = document.getElementById('modal-overlay');
    const loginModal = document.getElementById('login-modal');
    const registerModal = document.getElementById('register-modal');
    const loginLink = document.getElementById('login-link');
    const registerLink = document.getElementById('register-link');
    const closeButtons = document.querySelectorAll('.close-modal-btn');

    // --- Elementos da área do usuário ---
    const loggedOutView = document.querySelector('.logged-out-view');
    const loggedInView = document.querySelector('.logged-in-view');
    const userNameSpan = document.getElementById('user-name');
    const loginForm = document.getElementById('login-form');
    
    // --- Botões dos Planos ---
    const planButtons = document.querySelectorAll('.details-button');

    // Abre o modal de login
    loginLink.addEventListener('click', (e) => {
        e.preventDefault();
        modalOverlay.style.display = 'flex';
        loginModal.style.display = 'block';
        registerModal.style.display = 'none';
    });

    // Abre o modal de cadastro
    registerLink.addEventListener('click', (e) => {
        e.preventDefault();
        modalOverlay.style.display = 'flex';
        registerModal.style.display = 'block';
        loginModal.style.display = 'none';
    });

    // Fecha os modais
    function closeModal() {
        modalOverlay.style.display = 'none';
    }

    closeButtons.forEach(button => button.addEventListener('click', closeModal));
    modalOverlay.addEventListener('click', (e) => {
        if (e.target === modalOverlay) {
            closeModal();
        }
    });

    // --- Simulação de Login ---
    loginForm.addEventListener('submit', (e) => {
        e.preventDefault();
        // AQUI ENTRARIA A LÓGICA REAL DE VALIDAÇÃO COM O BACKEND
        
        // Simulação de sucesso para fins de demonstração:
        const fakeUserName = "Maria"; // Este nome viria da resposta do servidor
        
        // Atualiza a interface
        userNameSpan.textContent = fakeUserName;
        loggedOutView.style.display = 'none';
        loggedInView.style.display = 'block';
        
        updatePlanButtonsForLoggedInUser();
        closeModal();
    });
    
    // --- Atualiza os botões dos planos para o estado "logado" ---
    function updatePlanButtonsForLoggedInUser() {
        planButtons.forEach(button => {
            const newText = button.getAttribute('data-logged-in-text');
            button.textContent = newText;
            // Altera o link para a página de agendamento
            button.href = 'agendamento.html'; 
        });
    }
});