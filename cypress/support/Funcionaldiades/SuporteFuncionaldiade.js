class SuporteFuncionaldiade {


    retornaTestElemento(elemento){
        const valorElemento = new String(elemento);
        let textoElemento = ' '; 
        cy.get(valorElemento).then(($valor) => {
            textoElemento = $valor.text();
           
        });
        console.log(textoElemento);
        return textoElemento;
    };
}

export default new SuporteFuncionaldiade();

