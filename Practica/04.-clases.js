//Creo clase rectangulo
class Rectangulo {
    //Dentro del contructor puedo inicializar todas sus propiedades
    constructor(base, altura){
        this.base = base;
        this.altura = altura
    }

    //Defino los metodos que van a utilizar
    calcularArea(){
        return this.base * this.altura
    }

    calcularPerimetro(){
        return 2 * (this.base + this.altura);
    }
}

//Instancio mi clase rectangulo enviandole sus propiedades que pide el constructor
let mirectangulo = new Rectangulo(10,5);
//Accedo a sus metodos
console.log(mirectangulo.calcularPerimetro())

//Si no le envio propiedades las define como undefined
let mirectangulo2 = new Rectangulo();
console.log(mirectangulo2)//Rectangulo { base: undefined, altura: undefined }