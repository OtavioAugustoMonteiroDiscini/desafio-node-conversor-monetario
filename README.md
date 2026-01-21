# 📱 Conversor Monetário - Desafio Node

Um aplicativo full-stack para conversão de moedas em tempo real, com backend em Node.js + Express + TypeScript e frontend em Angular.

## 🎯 Sobre o Projeto

**Conversor Monetário** é uma aplicação web que permite converter valores entre diferentes moedas (USD, BRL, EUR, BTC) com taxas de câmbio atualizadas em tempo real. O projeto é composto por:

- **Backend**: API REST em Node.js com Express e TypeScript
- **Frontend**: Interface web com Angular 21

---

## 🚀 Tecnologias Utilizadas

### Backend
- **Node.js** - Runtime JavaScript
- **Express.js** - Framework web minimalista
- **TypeScript** - Tipagem estática
- **Axios** - Cliente HTTP para requisições
- **CORS** - Compartilhamento de recursos entre origens
- **Node-Cache** - Cache em memória
- **Express Rate Limit** - Limitação de requisições
- **Dotenv** - Variáveis de ambiente

### Frontend
- **Angular 21** - Framework de aplicações web
- **TypeScript** - Tipagem estática
- **RxJS** - Programação reativa
- **Reactive Forms** - Formulários reativos

---

## 📋 Estrutura do Projeto

```
desafio-node-conversor-monetario/
├── backend/                          # API Backend
│   ├── src/
│   │   ├── app.ts                   # Configuração da aplicação
│   │   ├── server.ts                # Inicialização do servidor
│   │   ├── cache/                   # Configuração de cache
│   │   ├── controllers/             # Controllers
│   │   │   └── ConvertController.ts
│   │   ├── middlewares/             # Middlewares
│   │   │   └── auth.middleware.ts
│   │   ├── models/                  # Modelos de dados
│   │   ├── routes/                  # Rotas da API
│   │   │   └── convert.routes.ts
│   │   ├── services/                # Lógica de negócio
│   │   │   └── ExchangeService.ts
│   │   ├── types/                   # Tipos TypeScript
│   │   └── utils/                   # Funções utilitárias
│   ├── package.json
│   ├── tsconfig.json
│   └── eslint.config.js
│
└── frontend/                         # Interface Angular
    ├── src/
    │   ├── app/
    │   │   ├── app.ts              # Componente principal
    │   │   ├── currency.service.ts # Serviço de moedas
    │   │   └── converter/          # Componente conversor
    │   │       ├── converter.component.ts
    │   │       ├── converter.component.html
    │   │       └── converter.component.css
    │   ├── environments/           # Configurações de ambiente
    │   ├── index.html
    │   └── main.ts
    ├── package.json
    ├── angular.json
    └── tsconfig.json
```

---

## 🔧 Funcionalidades Principais

### Backend
- ✅ **API REST** para conversão de moedas
- ✅ **Autenticação** via middleware
- ✅ **Cache em memória** para melhorar performance
- ✅ **Limitação de requisições** para proteção
- ✅ **Integração com API externa** (Awesome API)
- ✅ **CORS habilitado** para requisições do frontend
- ✅ **Tipagem forte** com TypeScript

### Frontend
- ✅ **Interface amigável** para conversão de moedas
- ✅ **Suporte a múltiplas moedas** (USD, BRL, EUR, BTC)
- ✅ **Componentes Angular** standalone
- ✅ **Formulários reativos** com Angular Forms
- ✅ **Requisições assíncronas** com RxJS
- ✅ **Tratamento de erros** e estados de carregamento

---

## 🏃 Como Executar

### Pré-requisitos
- Node.js (v16 ou superior)
- npm ou yarn

### Backend

```bash
# Navegar até o diretório do backend
cd backend

# Instalar dependências
npm install

# Desenvolvimento (com hot reload)
npm run dev

# Build para produção
npm run build

# Iniciar servidor em produção
npm start
```

O servidor estará disponível em `http://localhost:3000`

### Frontend

```bash
# Navegar até o diretório do frontend
cd frontend

# Instalar dependências
npm install

# Iniciar servidor de desenvolvimento
npm start

# Build para produção
npm run build
```

A aplicação estará disponível em `http://localhost:4200`

---

## 🔌 API Endpoints

### GET /convert
Converte um valor de uma moeda para outra.

**Autenticação**: Requerida (header `x-api-key`)

**Query Parameters**:
- `from` - Moeda de origem (ex: USD)
- `to` - Moeda de destino (ex: BRL)
- `amount` - Valor a converter (número)

**Exemplo cURL**:
```bash
curl -X GET "http://localhost:3000/convert?from=USD&to=BRL&amount=100" \
  -H "x-api-key: d05df6e37e74b05148dc626b4409487fba2d89cedc3e63662730c707b56bbdf1"
```

**Resposta**:
```json
{
  "from": "USD",
  "to": "BRL",
  "amount": 100,
  "rate": 5.25,
  "result": 525.00,
  "cached": false
}
```

---

## 📮 Exemplos de Requisição no Postman

### Configuração Básica

1. **Método**: GET
2. **URL**: `http://localhost:3000/convert`
3. **Headers**:
   - Key: `x-api-key`
   - Value: `d05df6e37e74b05148dc626b4409487fba2d89cedc3e63662730c707b56bbdf1`
4. **Query Params**:
   - `from`: USD
   - `to`: BRL
   - `amount`: 100

### Passo a Passo no Postman

**1. Criar Nova Requisição**
   - Clique em `+ New` > `Request`
   - Nomeie como "Convert Currency"

**2. Configurar Requisição**
   - **Method**: Selecione `GET`
   - **URL**: Cole `http://localhost:3000/convert`

**3. Adicionar Query Parameters**
   - Clique na aba `Params` (abaixo da URL)
   - Adicione as seguintes linhas:

| Key | Value |
|-----|-------|
| from | USD |
| to | BRL |
| amount | 100 |

**4. Adicionar Header de Autenticação**
   - Clique na aba `Headers`
   - **Key**: `x-api-key`
   - **Value**: `d05df6e37e74b05148dc626b4409487fba2d89cedc3e63662730c707b56bbdf1`

**5. Enviar Requisição**
   - Clique em `Send`
   - A resposta será exibida na aba `Body`

### Exemplos de Query Params

**Exemplo 1: Converter USD para BRL (100)**

| Key | Value |
|-----|-------|
| from | USD |
| to | BRL |
| amount | 100 |

**Exemplo 2: Converter EUR para BRL (50)**

| Key | Value |
|-----|-------|
| from | EUR |
| to | BRL |
| amount | 50 |

**Exemplo 3: Converter BTC para BRL (0.5)**

| Key | Value |
|-----|-------|
| from | BTC |
| to | BRL |
| amount | 0.5 |

### Resposta Esperada

```json
{
  "from": "USD",
  "to": "BRL",
  "amount": 100,
  "rate": 5.2450,
  "result": 524.50,
  "cached": false
}
```

### Códigos de Resposta

| Código | Significado |
|--------|------------|
| **200** | Conversão realizada com sucesso |
| **400** | Parâmetros inválidos ou moeda não suportada |
| **401** | Chave de API inválida ou ausente |
| **429** | Limite de requisições excedido |
| **500** | Erro interno do servidor |

### Dicas Úteis

- ✅ Certifique-se que o backend está rodando (`npm run dev`)
- ✅ Use a aba **Params** para adicionar query parameters de forma organizada
- ✅ A chave de API deve estar no header `x-api-key` (não `Authorization`)
- ✅ As moedas suportadas são: `USD`, `BRL`, `EUR`, `BTC`
- ✅ Todas as requisições são convertidas para `BRL`
- ✅ Respostas em cache mostram `"cached": true`

---

## 🛠️ Scripts Disponíveis

### Backend
- `npm run dev` - Desenvolvimento com hot reload
- `npm run build` - Compilar TypeScript
- `npm start` - Iniciar servidor compilado
- `npm run lint` - Verificar qualidade do código
- `npm run lint:fix` - Corrigir problemas automáticos
- `npm run format` - Formatar código

### Frontend
- `npm run start` - Servidor de desenvolvimento
- `npm run build` - Build para produção
- `npm run watch` - Build em modo watch
- `npm test` - Executar testes
- `npm run lint` - Verificar qualidade do código
- `npm run format` - Formatar código

---

## ⚙️ Variáveis de Ambiente

### Backend (.env)
```env
PORT=3000
API_KEY = ''

```

### Frontend (environment.ts)
```
export const environment = {
  production: false,
  apiKey: '',
};
```
---

## 🎨 Componentes Principais

### Backend
- **ExchangeService**: Serviço responsável pela conversão de moedas e integração com API externa
- **ConvertController**: Controller que processa requisições de conversão
- **authMiddleware**: Middleware de autenticação

### Frontend
- **ConverterComponent**: Componente principal para conversão
- **CurrencyService**: Serviço que comunica com a API backend

---

## 📦 Dependências Principais

**Backend**:
- axios, cors, express, express-rate-limit, node-cache, dotenv

**Frontend**:
- @angular/core, @angular/forms, @angular/common, rxjs

---

## 👨‍💻 Desenvolvimento

O projeto segue as melhores práticas:
- ✅ TypeScript para tipagem estática
- ✅ Componentes standalone (Angular)
- ✅ Separação de responsabilidades (MVC/Service)
- ✅ Cache para otimização
- ✅ Rate limiting para segurança
- ✅ CORS configurado
- ✅ ESLint para qualidade de código
- ✅ Prettier para formatação

---

## 👤 Autor

Desenvolvido como desafio de Node.js + Angular para conversão monetária.
