### 📌 **App - LeadsService**

Este repositório contém o frontend do projeto **LeadsService**, desenvolvido com **Angular**.
Desenvolvido por Alexandre Bento Pereira
Licença MIT

---

## 🚀 **Como rodar o projeto**
Você pode rodar o frontend de duas formas:

1️⃣ **Executando localmente no Visual Studio Code (ou qualquer terminal)**  
2️⃣ **Executando via Docker**

### 📌 **1. Executando Localmente (NPM)**
Caso queira rodar a aplicação diretamente no seu ambiente de desenvolvimento:

#### **🔹 Pré-requisitos**
- [Node.js](https://nodejs.org/) instalado (versão recomendada: LTS)
- [Angular CLI](https://angular.io/cli) instalado (caso não tenha, instale com `npm install -g @angular/cli`)
- [Visual Studio Code](https://code.visualstudio.com/) ou outro editor de sua escolha

#### **🔹 Passos para execução**
1. **Clone o repositório**:
   ```sh
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```

2. **Acesse a pasta do projeto**:
   ```sh
   cd frontend
   ```

3. **Instale as dependências**:
   ```sh
   npm install
   ```

4. **Inicie o servidor de desenvolvimento**:
   ```sh
   npm run start
   ```

5. **Acesse a aplicação no navegador**:
   - O frontend rodará por padrão em `http://localhost:4200`

---

### 📌 **2. Executando via Docker**
Se preferir rodar a aplicação dentro de um container Docker:

#### **🔹 Pré-requisitos**
- [Docker](https://www.docker.com/get-started) instalado
- [Docker Compose](https://docs.docker.com/compose/install/) instalado

#### **🔹 Passos para execução**
1. **Clone o repositório** (caso ainda não tenha feito):
   ```sh
   git clone https://github.com/seu-usuario/seu-repositorio.git
   ```

2. **Acesse a pasta do projeto**:
   ```sh
   cd frontend
   ```

3. **Crie a imagem do Docker (caso ainda não tenha sido criada)**:
   ```sh
   docker build -t leads-frontend .
   ```

4. **Suba o container usando Docker Compose**:
   ```sh
   docker-compose up --build -d
   ```

5. **Acesse a aplicação no navegador**:
   - O frontend rodará por padrão em `http://localhost:4200`

#### **🔹 Para parar o container**
Caso precise parar a execução:
```sh
docker-compose down
```

---

### 📌 **📂 Estrutura do Projeto**
```
/frontend
│-- src/
│   │-- app/
│   │-- assets/
│   │-- environments/
│-- angular.json
│-- package.json
│-- Dockerfile
│-- docker-compose.yml
│-- README.md
```

---

### 📌 **🛠 Tecnologias utilizadas**
- Angular (versão mais recente)
- Angular Material (para UI)
- TypeScript
- Docker
- Node.js e NPM

---

### 📌 **💡 Dicas e Solução de Problemas**
✔ **Erro de porta ocupada no Docker?**  
   - Execute `docker ps` para ver quais containers estão rodando e `docker stop container_id` para parar algum que esteja ocupando a porta 4200.

✔ **Mudanças no código não estão refletindo?**  
   - Se estiver rodando via Docker, pode ser necessário reconstruir a imagem:  
     ```sh
     docker-compose up --build -d
     ```

✔ **Erros de dependências no NPM?**  
   - Tente remover a pasta `node_modules` e o arquivo `package-lock.json`, e reinstalar:
     ```sh
     rm -rf node_modules package-lock.json
     npm install
     ```
