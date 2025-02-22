# Usar a imagem do Node.js como base
FROM node:18 AS dev-stage

# Definir o diretório de trabalho dentro do container
WORKDIR /app

# Copiar arquivos de dependências primeiro (para otimizar cache)
COPY package*.json ./

# Instalar as dependências
RUN npm install

# Copiar todo o código do projeto para dentro do container
COPY . .

# Expor a porta 4200 para desenvolvimento
EXPOSE 4200

# Comando para iniciar o Angular no modo desenvolvimento na porta 4200
CMD ["npm", "run", "start", "--", "--host", "0.0.0.0", "--port", "4200"]
