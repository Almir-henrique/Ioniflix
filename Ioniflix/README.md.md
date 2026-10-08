# 🎬 Sistema de Pesquisa de Filmes (Ionic / Angular)

Este é um aplicativo desenvolvido com **Ionic** e **Angular** que permite aos usuários pesquisarem informações detalhadas sobre filmes utilizando uma API externa (como a OMDb API ou TMDb). 

A aplicação foi estruturada para oferecer uma experiência mobile fluida e responsiva, contando com navegação por páginas, serviços para requisições HTTP e componentes modernos do Ionic.

---

## 📂 Estrutura do Projeto

A imagem da estrutura de arquivos do projeto mostra os principais diretórios e arquivos de configuração:
- `src/`: Contém o código fonte da aplicação (páginas, componentes, serviços, estilos).
- `angular.json`: Configurações do workspace do Angular.
- `capacitor.config.ts`: Configurações do Capacitor para build nativo (mobile).
- `ionic.config.json`: Configuração do projeto Ionic.
- `package.json`: Lista de dependências e scripts do projeto.

---

## 🚀 Como Rodar o Projeto

Siga o passo a passo abaixo para configurar o ambiente e executar a aplicação localmente na sua máquina:

### 1. Pré-requisitos
Certifique-se de ter instalado em seu computador:
* **Node.js** (versão LTS recomendada)
* **Git** (opcional, mas recomendado para clonar repositórios)

### 2. Instalação das Ferramentas Globais do Ionic
Se você ainda não possui o Ionic CLI instalado globalmente, abra o seu terminal (CMD, PowerShell ou Terminal do VS Code) e execute o seguinte comando:

```bash
npm install -g @ionic/cli
```

### 3. Clonar ou Baixar o Repositório
Abra a pasta raiz do projeto clonado/baixado onde se encontram arquivos como o `package.json` e a pasta `src`.

### 4. Instalar as Dependências
Com o terminal aberto na pasta raiz do projeto, instale todas as dependências necessárias listadas no `package.json` rodando:

```bash
npm install
```
*(Esse processo pode levar alguns instantes enquanto o gerenciador baixa os pacotes do Angular, Ionic e Capacitor).*

### 5. Executar a Aplicação (`ionic serve`)
Após a conclusão da instalação das dependências, você já pode iniciar o servidor de desenvolvimento local. Digite o comando:

```bash
ionic serve
```

O Ionic irá compilar o código e abrirá automaticamente o navegador padrão no endereço local (geralmente `http://localhost:8100`) exibindo a interface do seu aplicativo de filmes em tempo real. Qualquer alteração feita nos arquivos dentro da pasta `src/` atualizará a página instantaneamente.

---

## 🛠️ Tecnologias Utilizadas
* **Ionic Framework** (Interface e Componentes Mobile)
* **Angular** (Lógica, Rotas e Gerenciamento de Componentes)
* **TypeScript** (Linguagem de Programação)
* **API REST** (Consumo de dados de filmes)