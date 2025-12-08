/**
 * Coffee Counter - Script Principal
 *
 * Este script gerencia o contador de cafés e demonstra como
 * integrar com GitHub Pages que são atualizadas via GitHub Actions.
 *
 * Funcionalidades:
 * - Busca o contador do arquivo counter.txt (atualizado pelo workflow)
 * - Fallback para localStorage quando rodando localmente
 * - Animações e mensagens motivacionais aleatórias
 * - Interface responsiva e moderna
 */

// ========================================
// CONFIGURAÇÕES E VARIÁVEIS GLOBAIS
// ========================================

// Mensagens motivacionais que aparecem aleatoriamente
const messages = [
  "Hora de mais um café! 😎",
  "Energia máxima ativada! ⚡☕",
  "Sobrevivendo mais um dia com café 💪",
  "Mais uma dose de café para a produtividade 🔥",
  "Cafeína ativada, foco total! ☕💥",
  "Café: o combustível dos programadores! 👨‍💻",
  "Debug mode: ON ☕ Bugs: OFF 🐛",
  "Compilando ideias com café... ☕⚙️",
  "Stack overflow de energia! ☕📚",
  "Commit && Coffee ☕ git push --force 🚀"
];

// Variável para armazenar o contador atual
let currentCount = 0;

// ========================================
// FUNÇÕES AUXILIARES
// ========================================

/**
 * Busca o valor do contador do arquivo counter.txt
 * Este arquivo é atualizado automaticamente pelo GitHub Actions
 *
 * @returns {Promise<number>} O valor do contador
 */
async function fetchCounterFromFile() {
  try {
    // Tenta buscar o arquivo counter.txt
    // Quando hospedado no GitHub Pages, o workflow atualiza esse arquivo
    const response = await fetch('counter.txt');

    if (!response.ok) {
      throw new Error('Arquivo counter.txt não encontrado');
    }

    const text = await response.text();
    const count = parseInt(text.trim());

    // Verifica se o valor é um número válido
    if (isNaN(count)) {
      throw new Error('Valor inválido no counter.txt');
    }

    return count;
  } catch (error) {
    console.warn('⚠️ Não foi possível buscar counter.txt:', error.message);
    console.info('ℹ️ Usando localStorage como fallback (modo local)');

    // Fallback: usa localStorage para desenvolvimento local
    return parseInt(localStorage.getItem("coffeeCount") || "0");
  }
}

/**
 * Salva o contador no localStorage (apenas para testes locais)
 * No GitHub Pages, o valor real vem do counter.txt atualizado pelo workflow
 *
 * @param {number} count - Valor a ser salvo
 */
function saveCounterLocally(count) {
  localStorage.setItem("coffeeCount", count.toString());
}

/**
 * Seleciona uma mensagem motivacional aleatória
 *
 * @returns {string} Mensagem aleatória
 */
function getRandomMessage() {
  return messages[Math.floor(Math.random() * messages.length)];
}

/**
 * Atualiza a interface com o contador e mensagem
 *
 * @param {number} count - Valor do contador a ser exibido
 */
function updateUI(count) {
  const countElement = document.getElementById("count");
  const messageElement = document.getElementById("message");

  // Adiciona animação ao número
  countElement.classList.add("coffee-animation");

  // Atualiza o valor
  countElement.textContent = count;

  // Atualiza a mensagem
  messageElement.textContent = getRandomMessage();

  // Remove a animação após completar (para poder reanimar depois)
  setTimeout(() => {
    countElement.classList.remove("coffee-animation");
  }, 300);
}

/**
 * Mostra o conteúdo do contador e esconde o loading
 */
function showCounter() {
  document.getElementById("loading").classList.add("hidden");
  document.getElementById("counter-content").classList.remove("hidden");
}

/**
 * Incrementa o contador de café
 * NOTA: No GitHub Pages, isso só atualiza localmente até o próximo deploy
 * O workflow do GitHub Actions é quem realmente incrementa o valor oficial
 */
function addCoffee() {
  currentCount++;
  saveCounterLocally(currentCount);
  updateUI(currentCount);

  console.log(`☕ Café adicionado! Total: ${currentCount}`);
  console.info('💡 Lembre-se: O GitHub Actions atualizará o valor oficial automaticamente!');
}

// ========================================
// INICIALIZAÇÃO
// ========================================

/**
 * Função principal que inicializa a aplicação
 * Executa quando o DOM estiver completamente carregado
 */
async function init() {
  console.log('☕ Coffee Counter inicializado!');
  console.log('📋 Projeto didático para aprender GitHub Actions');

  try {
    // Busca o contador inicial
    currentCount = await fetchCounterFromFile();

    // Atualiza a interface
    updateUI(currentCount);

    // Mostra o contador (esconde loading)
    showCounter();

    console.log(`✅ Contador carregado: ${currentCount} cafés`);
  } catch (error) {
    console.error('❌ Erro ao inicializar:', error);

    // Mesmo com erro, mostra a interface
    showCounter();
  }

  // Configura o botão de adicionar café
  const addButton = document.getElementById("addCoffee");
  addButton.addEventListener("click", addCoffee);

  console.log('🎯 Pronto para contar cafés!');
}

// Aguarda o DOM carregar completamente antes de inicializar
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', init);
} else {
  // DOM já carregado, executa imediatamente
  init();
}

// ========================================
// INFORMAÇÕES DE DEBUG (CONSOLE)
// ========================================

console.log(`
╔═══════════════════════════════════════╗
║      ☕ COFFEE COUNTER ☕             ║
║   Aprenda GitHub Actions na prática!  ║
╚═══════════════════════════════════════╝

📚 Como funciona:
1. O arquivo counter.txt armazena o número oficial
2. O GitHub Actions atualiza esse arquivo automaticamente
3. Este script busca e exibe o valor atualizado
4. Você pode adicionar cafés manualmente (salva no localStorage)

🔧 Dica de desenvolvimento:
- Rode com um servidor local: python3 -m http.server
- Ou use a extensão Live Server do VS Code

🚀 Quando publicar no GitHub Pages:
- O workflow .github/workflows/update-coffee.yml
- Vai rodar automaticamente nos horários agendados
- E atualizar o counter.txt
- Fazendo commit e push automático!

Divirta-se aprendendo! ☕💻
`);
