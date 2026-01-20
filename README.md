# 🎬 Primeflix

[![Deploy Status](https://img.shields.io/badge/deploy-active-success)](https://valperflix-react.netlify.app/)
[![React](https://img.shields.io/badge/React-18.x-blue)](https://reactjs.org/)
[![License](https://img.shields.io/badge/license-MIT-green)](LICENSE)

> Uma aplicação web moderna para descobrir e explorar os filmes mais populares do momento.

## 📋 Sobre o Projeto

O **Primeflix** é uma aplicação web desenvolvida em React que consome a API do [The Movie Database (TMDb)](https://www.themoviedb.org/) para exibir informações atualizadas sobre filmes populares. O projeto foi criado como um estudo prático de React, explorando conceitos fundamentais como componentes, hooks, rotas e consumo de APIs.

### ✨ Funcionalidades

- 🎥 Listagem de filmes populares e em destaque
- 🔍 Visualização detalhada de cada filme (sinopse, avaliação, data de lançamento)
- ⭐ Sistema de favoritos para salvar seus filmes preferidos
- 📱 Interface responsiva e moderna
- 🚀 Performance otimizada

## 🖥️ Demo

Acesse a aplicação online: [valperflix-react.netlify.app](https://valperflix-react.netlify.app/)

## 📸 Screenshots

### Página Principal
Visualize os filmes mais populares do momento em destaque.

![Página Principal](./assets/screenshots/home.png)

### Detalhes do Filme
Informações completas sobre cada filme, incluindo sinopse, avaliação e opções para salvar nos favoritos e assistir ao trailer.

![Detalhes do Filme](./assets/screenshots/movie-details.png)

### Meus Filmes
Acesse sua lista personalizada de filmes favoritos salvos.

![Meus Filmes](./assets/screenshots/favorites.png)

## 🚀 Tecnologias Utilizadas

- [React](https://reactjs.org/) - Biblioteca JavaScript para construção de interfaces
- [React Router DOM](https://reactrouter.com/) - Roteamento da aplicação
- [Axios](https://axios-http.com/) - Cliente HTTP para consumo da API
- [TMDb API](https://www.themoviedb.org/documentation/api) - API de dados de filmes
- CSS3 - Estilização
- [Netlify](https://www.netlify.com/) - Deploy e hospedagem

## 📦 Instalação e Uso

### Pré-requisitos

- Node.js (versão 14 ou superior)
- npm ou yarn

### Passo a passo

1. **Clone o repositório**
```bash
git clone https://github.com/LucasValpereiro/primeflix.git
cd primeflix
```

2. **Instale as dependências**
```bash
npm install
# ou
yarn install
```

3. **Configure a API do TMDb**

Crie um arquivo `.env` na raiz do projeto e adicione sua chave da API:
```env
REACT_APP_TMDB_API_KEY=sua_chave_aqui
```

Para obter uma chave da API, cadastre-se em [themoviedb.org](https://www.themoviedb.org/).

4. **Execute o projeto**
```bash
npm start
# ou
yarn start
```

A aplicação estará disponível em `http://localhost:3000`

## 📂 Estrutura do Projeto

```
primeflix/
├── public/
│   ├── index.html
│   └── ...
├── src/
│   ├── components/     # Componentes reutilizáveis
│   ├── pages/          # Páginas da aplicação
│   ├── services/       # Configuração e chamadas da API
│   ├── routes.js       # Configuração de rotas
│   ├── App.js          # Componente principal
│   └── index.js        # Entry point
├── package.json
└── README.md
```

## 🛠️ Scripts Disponíveis

```bash
npm start          # Inicia o servidor de desenvolvimento
npm test           # Executa os testes
npm run build      # Gera build de produção
npm run eject      # Ejeta as configurações do Create React App
```

## 🎯 Aprendizados

Este projeto foi desenvolvido com foco no aprendizado de:

- Componentização em React
- Gerenciamento de estado com hooks (useState, useEffect)
- Roteamento com React Router
- Consumo de APIs REST
- LocalStorage para persistência de dados
- Deploy de aplicações React

## 🤝 Contribuindo

Contribuições são sempre bem-vindas! Sinta-se à vontade para abrir issues ou enviar pull requests.

1. Fork o projeto
2. Crie sua branch de feature (`git checkout -b feature/MinhaFeature`)
3. Commit suas mudanças (`git commit -m 'Adiciona nova feature'`)
4. Push para a branch (`git push origin feature/MinhaFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👨‍💻 Autor

**Lucas Valpereiro**

- GitHub: [@LucasValpereiro](https://github.com/LucasValpereiro)
- LinkedIn: [Lucas Valpereiro](https://linkedin.com/in/lucas-valpereiro)

## 🙏 Agradecimentos

- [The Movie Database (TMDb)](https://www.themoviedb.org/) pela API gratuita
- [Create React App](https://create-react-app.dev/) pelo boilerplate
- Comunidade React pelo suporte e documentação

---

⭐ Se este projeto te ajudou de alguma forma, considere dar uma estrela no repositório!
