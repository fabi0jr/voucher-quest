# Missão: Aniversário

Um presente de aniversário interativo em formato de site, criado com missões divertidas e recompensas personalizadas para uma namorada incrível.

**✨ [Acesse a versão ao vivo aqui!](https://voucher-quest.vercel.app)** ✨

---

## 🚀 Sobre o Projeto

"Missão: Aniversário" é uma aplicação web feita como um presente de aniversário surpresa. A ideia é substituir um presente convencional por uma experiência gamificada, onde a presenteada deve cumprir uma série de missões divertidas e pessoais para desbloquear "vales" de recompensas.

O projeto foi desenhado para ser uma jornada afetuosa e interativa, com um sistema de validação de missões via senhas secretas, recompensas em formato de vouchers para download e uma trilha sonora para criar o clima perfeito.

### Principais Funcionalidades

* **Tela de Boas-Vindas:** Uma página inicial imersiva com uma imagem de fundo personalizada e música ambiente que começa com a primeira interação.
* **Missões Sequenciais:** As tarefas são exibidas uma de cada vez, criando um fluxo de "jornada" e mantendo o foco na missão atual.
* **Validação por Senha:** Cada missão requer uma senha secreta (fornecida pelo "administrador" do jogo) para ser concluída, garantindo que os desafios sejam cumpridos.
* **Recompensas Dinâmicas:** A seção de recompensas começa vazia e revela cada vale conforme as missões são validadas, evitando spoilers.
* **Vouchers para Download:** Cada recompensa desbloqueada vem com um voucher em PDF para download, transformando o prêmio digital em algo tangível.
* **Design Personalizado:** A interface foi totalmente personalizada com a cor favorita da presenteada, o azul.

---

## 🛠️ Tecnologias Utilizadas

Este projeto foi construído com tecnologias modernas de front-end:

* **[React](https://reactjs.org/)** - Biblioteca JavaScript para construir a interface de usuário.
* **[Vite](https://vitejs.dev/)** - Ferramenta de build moderna e rápida para o desenvolvimento front-end.
* **[Tailwind CSS](https://tailwindcss.com/)** - Framework de CSS "utility-first" para a estilização rápida e responsiva.
* **[Vercel](https://vercel.com/)** - Plataforma para deploy e hospedagem do projeto.

---

## ⚙️ Como Executar o Projeto Localmente

Para rodar este projeto no seu próprio ambiente de desenvolvimento, siga os passos abaixo.

### Pré-requisitos

* [Node.js](https://nodejs.org/) (versão LTS recomendada)
* [npm](https://www.npmjs.com/) (geralmente vem com o Node.js)

### Instalação

1.  **Clone o repositório:**
    ```bash
    git clone [https://github.com/fabi0jr/voucher-quest.git](https://github.com/fabi0jr/voucher-quest.git)
    ```

2.  **Navegue até a pasta do projeto:**
    ```bash
    cd voucher-quest
    ```

3.  **Instale as dependências:**
    ```bash
    npm install
    ```

4.  **Inicie o servidor de desenvolvimento:**
    ```bash
    npm run dev
    ```

5.  Abra [http://localhost:5173](http://localhost:5173) no seu navegador para ver o resultado.

---

## 💡 Como Funciona

1.  O usuário acessa o site e é recebido pela tela inicial.
2.  Ao clicar em "Começar a Aventura!", a música de fundo começa a tocar e a primeira missão é exibida.
3.  Para cada missão, o usuário deve realizar a tarefa no "mundo real" e entrar em contato com o "administrador" (você) para receber a senha secreta.
4.  Com a senha correta, a missão é validada, o progresso é atualizado e a próxima missão aparece.
5.  Ao atingir os requisitos, as recompensas são desbloqueadas e exibidas na seção "Suas Recompensas", com um link para baixar o voucher correspondente.