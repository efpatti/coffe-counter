# ☕ Coffee Counter

![Coffee](https://img.shields.io/badge/Cafés%20Consumidos-0-brown?style=for-the-badge&logo=buy-me-a-coffee)
![GitHub Actions](https://img.shields.io/badge/GitHub-Actions-blue?style=for-the-badge&logo=github-actions)
![Auto Update](https://img.shields.io/badge/Auto-Update-success?style=for-the-badge&logo=clockify)

## 📊 Contador Atual

**Total de cafés consumidos:** `0` ☕

> *Mais café = mais energia!* ⚡

---

## 🎯 Sobre este projeto

Este é um projeto didático para aprender **GitHub Actions** na prática!

### Como funciona?

1. 📅 O GitHub Actions roda automaticamente nos dias 1, 10 e 20 de cada mês
2. 🤖 Um script incrementa automaticamente o contador
3. 📝 O arquivo `counter.txt` e este README são atualizados
4. 💾 Um commit automático é feito
5. 🚀 As mudanças são enviadas para o repositório

### Estrutura do projeto

```
coffee-counter/
├── index.html              # Página web do contador
├── script.js               # Lógica do contador
├── counter.txt             # Armazena o número atual
├── README.md               # Este arquivo
└── .github/
    └── workflows/
        └── update-coffee.yml   # Workflow do GitHub Actions
```

### Como testar localmente

```bash
# Clone o repositório
git clone [seu-repositorio]

# Entre na pasta
cd coffee-counter

# Inicie um servidor local
python3 -m http.server 8000
# ou use a extensão Live Server do VS Code

# Abra no navegador
# http://localhost:8000
```

### Como configurar no seu GitHub

1. 📁 Crie um repositório novo no GitHub
2. 📤 Faça push deste código para o repositório
3. ⚙️ Vá em **Settings** > **Pages**
4. 🌐 Ative GitHub Pages apontando para branch **main**, pasta raiz
5. 🎉 Pronto! Seu Coffee Counter está no ar!

### Testando o workflow manualmente

1. Vá na aba **Actions** do seu repositório
2. Clique no workflow "☕ Coffee Counter - Auto Update"
3. Clique em **Run workflow** > **Run workflow**
4. Aguarde alguns segundos
5. Veja o commit automático aparecer!

---

## 📚 O que você vai aprender

### Conceitos de GitHub Actions

- ✅ **Workflows**: Automações que rodam no GitHub
- ✅ **Jobs**: Conjuntos de tarefas dentro de um workflow
- ✅ **Steps**: Passos individuais que executam comandos
- ✅ **Schedule**: Execução automática com cron
- ✅ **Actions**: Ações reutilizáveis (como `checkout@v4`)
- ✅ **Permissions**: Controle de acesso do workflow
- ✅ **Commits automáticos**: Bot fazendo commits por você

### Tecnologias usadas

- 🎨 **HTML5** + **Tailwind CSS**: Interface moderna e responsiva
- 💻 **JavaScript vanilla**: Lógica do frontend sem frameworks
- 🤖 **GitHub Actions**: Automação e CI/CD
- 📄 **GitHub Pages**: Hospedagem gratuita
- 🐚 **Bash**: Scripts para manipular arquivos

---

## 🔧 Personalizações possíveis

### Mudar a frequência de atualização

Edite o arquivo `.github/workflows/update-coffee.yml` e ajuste o `schedule`:

```yaml
schedule:
  # Todos os dias às 09:00 UTC
  - cron: '0 9 * * *'

  # Toda segunda-feira às 12:00 UTC
  - cron: '0 12 * * 1'

  # A cada 6 horas
  - cron: '0 */6 * * *'
```

Use [Crontab Guru](https://crontab.guru/) para gerar expressões cron!

### Adicionar notificações

Você pode adicionar steps para enviar notificações no Discord, Slack, Telegram, etc.

### Integrar com API

Modifique o script para salvar o contador em um banco de dados ou API externa.

---

## 📚 Recursos para aprender mais

- [Documentação oficial do GitHub Actions](https://docs.github.com/actions)
- [GitHub Actions Marketplace](https://github.com/marketplace?type=actions)
- [GitHub Pages](https://pages.github.com/)
- [Cron Schedule Examples](https://crontab.guru/)
- [Tailwind CSS](https://tailwindcss.com/)

---

## 🤝 Contribuindo

Sinta-se livre para fazer fork, experimentar e modificar! Este é um projeto de aprendizado.

Ideias de melhorias:
- [ ] Gráfico mostrando histórico de consumo
- [ ] Diferentes tipos de bebidas (café, chá, energético)
- [ ] Ranking de consumo por período
- [ ] Integração com API de clima (mais café em dias frios?)
- [ ] Sistema de conquistas/badges

---

## 📝 Licença

Livre para usar, modificar e aprender! ☕💻

---

*Projeto criado para fins educacionais - Aprenda GitHub Actions na prática!*

**Feito com ☕ e 💻**
