# ☕ Coffee Counter

![Coffee](https://img.shields.io/badge/Caf%C3%A9s%20Consumidos-8-brown?style=for-the-badge&logo=buy-me-a-coffee)
![GitHub Actions](https://img.shields.io/badge/GitHub-Actions-blue?style=for-the-badge&logo=github-actions)
![Auto Update](https://img.shields.io/badge/Auto-Update-success?style=for-the-badge&logo=clockify)

## 📊 Contador Atual

**Total de cafés consumidos:** `8` ☕

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

1. 📁 Crie um repositório novo
2. 📤 Faça push deste código
3. ⚙️ Vá em Settings > Pages
4. 🌐 Ative GitHub Pages apontando para branch main, pasta raiz
5. 🎉 Pronto! Seu Coffee Counter está no ar!

### Testando o workflow manualmente

1. Vá na aba **Actions** do seu repositório
2. Clique no workflow "Coffee Counter - Auto Update"
3. Clique em **Run workflow**
4. Aguarde alguns segundos
5. Veja o commit automático aparecer!

---

## 📚 Aprenda mais

- [GitHub Actions Documentation](https://docs.github.com/actions)
- [GitHub Pages](https://pages.github.com/)
- [Cron Schedule Examples](https://crontab.guru/)

---

*Última atualização automática: 2026-02-10 10:03:37 UTC*

**Feito com ☕ e 💻**
