FROM node:18-alpine3.14
WORKDIR /app

# Copy the source code into the container(destination directory)
COPY package.json .
RUN npm install
COPY . .
EXPOSE 5000
CMD ["npm","start"]

