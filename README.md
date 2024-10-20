# Dados-Atletas

Uma aplicação que calcula a média das notas de atletas em uma competição de ginástica artística, além de exibir a categoria, IMC e outras informações.

## Índice

- [Introdução](#introdução)
- [Instalação](#instalação)
- [Uso](#uso)

## Introdução

Software em linguagem JavaScript, que recebe informações dos atletas e exibe a categoria, IMC, média calculada e demais informações capturadas.

## Instalação

Para instalar e configurar o projeto, siga os passos abaixo:

1. Clone o repositório:

   ```bash
   git clone https://github.com/Volneijunior1994/dados-atletas.git
   ```

2. Navegue até o projeto:

   ```bash
   cd dados-atletas
   ```

## Uso

Para usar a aplicação, você deve instanciar a classe Atleta com as informações necessárias e chamar os métodos para obter as informações desejadas. Aqui está um exemplo de como fazer isso:

```javascript
// Declara o atleta
const atletaInfo = {
  nome: "Cesar Abascal",
  idade: 30,
  peso: 80,
  altura: 1.70,
  notas: [10, 9.34, 8.42, 10, 7.88]
};

const atleta = new Atleta(atletaInfo);

// Exibe as informações do atleta
console.log("Nome:", atleta.obtemNomeAtleta());
console.log("Idade:", atleta.obtemIdadeAtleta());
console.log("Peso:", atleta.obtemPesoAtleta());
console.log("Altura:", atleta.obtemAlturaAtleta());
console.log("Notas:", atleta.obtemNotasAtleta().join(','));
console.log("Categoria:", atleta.obtemCategoria());
console.log("IMC:", atleta.obtemIMC());
console.log("Média válida:", atleta.obtemMediaValida());
```
