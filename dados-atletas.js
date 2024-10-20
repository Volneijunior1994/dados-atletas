class Atleta {
  constructor(atleta) {
    this.atleta = atleta
  }

  calculaCategoria() {
    if (this.atleta.idade >= 9 && this.atleta.idade <= 11) {
      return 'Infantil'
    } 
    else if (this.atleta.idade >= 12 && this.atleta.idade <= 13) {
      return 'Juvenil'
    } 
    else if (this.atleta.idade >= 14 && this.atleta.idade <= 15) {
      return 'Intermediário'
    } 
    else if (this.atleta.idade >= 16 && this.atleta.idade <= 30) {
      return 'Adulto'
    } 
    else {
      return 'Sem categoria'
    }
  }

  calculaIMC() {
    return this.atleta.peso / (this.atleta.altura * this.atleta.altura)
  }

  calculaMediaValida() {
    let notasOrdenadas = this.atleta.notas.slice().sort(function(a, b) {
      return a - b;
    });
    let notasComputadas = notasOrdenadas.slice(1, notasOrdenadas.length - 1);
    let soma = 0;

    notasComputadas.forEach(function(nota) {
      soma = soma + nota;
    });

    return soma / notasComputadas.length
  }

}

// Exemplo de entrada dado pelo enunciado
const atletaInfo = {
  nome: "Cesar Abascal",
  idade: 30,
  peso: 80,
  altura: 1.70,
  notas: [10, 9.34, 8.42, 10, 7.88]
};

const atleta = new Atleta(atletaInfo);

// Exemplo de saída
console.log("Nome:", atleta.obtemNomeAtleta());
console.log("Idade:", atleta.obtemIdadeAtleta());
console.log("Peso:", atleta.obtemPesoAtleta());
console.log("Altura:", atleta.obtemAlturaAtleta());
console.log("Notas:", atleta.obtemNotasAtleta().join(','));
console.log("Categoria:", atleta.obtemCategoria());
console.log("IMC:", atleta.obtemIMC());
console.log("Média válida:", atleta.obtemMediaValida());
