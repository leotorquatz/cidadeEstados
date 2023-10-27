/**********************************************************************************************************************************
* Objetivo: Trabalho de Estados                                                                                                   *
* Data: 27/10/23                                                                                                                  *
* Autor: Leonardo Torquato de Andrade                                                                                             *
* Versão: 1.1                                                                                                                     * 
***********************************************************************************************************************************/

var estados_cidade = require('./estados_cidades')

function getListaDeEstados() {
     const estados = estados_cidade.estadosCidades.estados;
     const uf = [];
     
     for (const estado of estados) {
       uf.push(estado.sigla);
     }
   
     const quantidade = uf.length;
   
     return { uf, quantidade };
   }
   
// console.log(getListaDeEstados())

function getDadosEstado(siglaEstado) {
     const estado = siglaEstado;
     const estados = estados_cidade.estadosCidades.estados;
     const jsonEstado = {};
     
     let i = 0;
     while (i < estados.length) {
       if (estado === estados[i].sigla) {
         jsonEstado.uf = estados[i].sigla;
         jsonEstado.descricao = estados[i].nome;
         jsonEstado.capital = estados[i].capital;
         jsonEstado.regiao = estados[i].regiao;
         break;
       }
       i++;
     }
     
     return jsonEstado;
   }
   
// console.log(getDadosEstado('SP'))

const getCapitalEstado = function(siglaEstado){
     const estado = siglaEstado
     const jsonCapEstado = {}

     estados_cidade.estadosCidades.estados.forEach(cEstado => {
           if(estado == cEstado.sigla){
               jsonCapEstado.uf = cEstado.sigla
               jsonCapEstado.descricao = cEstado.nome
               jsonCapEstado.capital = cEstado.capital
          } 
     });

     return jsonCapEstado
}

//getCapitalEstado('SP')


function getEstadosRegiao(regiao) {
     const eRegiao = regiao;
     const estados = [];
   
     estados_cidade.estadosCidades.estados.forEach(estadosR => {
       if (eRegiao === estadosR.regiao) {
         const jsonEstadosRegiao = {
           uf: estadosR.sigla,
           descricao: estadosR.nome
         };
         estados.push(jsonEstadosRegiao);
       }
     });
   
     const jsonRegiao = {
       regiao: eRegiao,
       estados: estados
     };
   
     return jsonRegiao;
   }
   
// console.log(getEstadosRegiao('Sudeste'))

function getCapitalPais() {
     const capitais = [];
     const estados = estados_cidade.estadosCidades.estados;
     let i = 0;
   
     while (i < estados.length) {
       const estado = estados[i];
   
       if (estado.capital_pais?.capital != null) {
         const jsonEstadosCap = {
           capital_atual: estado.capital_pais.capital,
           uf: estado.sigla,
           descricao: estado.nome,
           capital: estado.capital,
           regiao: estado.regiao,
           capital_pais_ano_inicio: estado.capital_pais.ano_inicio,
           capital_pais_ano_termino: estado.capital_pais.ano_fim
         };
   
         capitais.push(jsonEstadosCap);
       }
   
       i++;
     }
   
     const jsonCapital = {
       capitais: capitais
     };
   
     return jsonCapital;
   }
   

// console.log(getCapitalPais())

function getCidades(siglaEstadoC) {
     const jsonCidades = {};
     const arrayCidades = [];
     const siglaC = siglaEstadoC;
     const estados = estados_cidade.estadosCidades.estados;
     
     let i = 0;
     while (i < estados.length) {
       const estado = estados[i];
   
       if (siglaC === estado.sigla) {
         jsonCidades.uf = estado.sigla;
         jsonCidades.descricao = estado.nome;
         jsonCidades.quantidade_cidades = estado.cidades.length;
   
         let j = 0;
         while (j < estado.cidades.length) {
           arrayCidades.push(estado.cidades[j].nome);
           j++;
         }
   
         jsonCidades.cidades = arrayCidades;
         break;
       }
   
       i++;
     }
   
     return jsonCidades;
   }
   
// console.log(getCidades('SP'))