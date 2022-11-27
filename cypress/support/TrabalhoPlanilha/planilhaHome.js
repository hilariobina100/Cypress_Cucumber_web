const xlsx = require('xlsx');
const fs = require('fs');

class PlanilhaHome {

retonaValorBrunoPesquisadoPorCodigoNSU(condigoNSU){
    const workbook = xlsx.readFile('cypress/telaHome.xlsx');
    const ws = workbook.Sheets['data'];
    const data = xlsx.utils.sheet_to_json(ws);
    for(let i =0; i < data.length ; i++){
        if(data[0].CodigoNSU === condigoNSU){
            return data[i].ValorBruto;
            
        };
    };    
};

}

const valor = new PlanilhaHome();

console.log(valor.retonaValorBrunoPesquisadoPorCodigoNSU('000384669259'));











