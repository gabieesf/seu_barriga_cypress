# Seu Barriga Cypress

Este repositório contém testes automatizados para o aplicativo "Seu Barriga" utilizando o framework de teste end-to-end Cypress.

## Pré-requisitos

- Node.js (versão 18.17.1)
- Cypress (versão 13.6.1)

Certifique-se de ter o Node.js instalado em sua máquina. O Cypress será instalado como uma dependência de desenvolvimento durante o processo de instalação.

## Instalação

1. Clone este repositório:

```bash
git clone https://github.com/gabieesf/seu_barriga_cypress.git
```
2. Instale as dependependencias do projeto:
```bash
cd seu_barriga_cypress
npm install
npm install faker --save-dev
```
## Configuração
Antes de executar os testes, certifique-se de configurar quaisquer variáveis de ambiente necessárias.

## Execução dos Testes
Para executar os testes, utilize o seguinte comando: 
```bash
export PASSWORD=yourPassword && npx cypress run --env pwd="$PASSWORD"
```
Este comando irá iniciar o Cypress e executar todos os testes automatizados.
