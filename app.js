const  moment = require('moment');
const fs = require('fs');
const { info } = require('console');
const nomeArquivo = 'pets.json';
const petshop = "***PETSHOP DH***";

let petsJSON = fs.readFileSync(nomeArquivo);
let arquivoPets = JSON.parse(petsJSON);

// console.log(arquivoPets.pets);
const atualizarJson = () => {
    let listaJson = JSON.stringify(arquivoPets, null, 2);
    fs.writeFileSync(nomeArquivo, listaJson, 'utf-8');
}

const adicionarPet = (infoPet) => {
arquivoPets.pets.push(infoPet);
atualizarJson();
console.log(`${infoPet.nome} está cadastrado no nosso sistema`);
}    

//   adicionarPet({
//  nome: 'Bacon',
//      idade: 9,
//      raca: 'pastor',
//      tipo: 'cachorro',
//      vacinado: false,
//      genero: 'M',
//      servicos: []
//      });
    
    const darBanhoPet = (infoPet) =>{
infoPet.servicos.push
({
    nome: 'banho',
    data: moment().format('DD-MM-YYYY')

    })
    atualizarJson ();
     
  console.log(`${infoPet.nome} Tomou banho!`);
}   
      darBanhoPet(arquivoPets.pets[0])
    //  darBanhoPet(pets[1])
    //  darBanhoPet(pets[2]);
//   console.log(pets);

const apararUnha = (infoPet) =>{
    infoPet.servicos.push({
        nome: 'aparar Unha',
        data: moment().format('DD-MM-YYYY')
    
        });
        atualizarJson ();
    console.log(`${infoPet.nome} aparou as unhas!`);
    }   
apararUnha(arquivoPets.pets[0])
//   apararUnha(pets[1])
//   apararUnha(pets[2]);

const tosaFeita = (infoPet) =>{
    infoPet.servicos.push({
        nome: 'Tosa',
        data: moment().format('DD-MM-YYYY')
    
        });
        atualizarJson();
        
    console.log(`${infoPet.nome} Cabelinho na régua!`);
    }   
    //tosaFeita(arquivoPets.pets[1])

    const buscarPet = (nomePet) => {
        const petEncontrado = arquivoPets.pets.find((pet) => {
            return pet.nome == nomePet;
        });
        console.log (petEncontrado ? petEncontrado : 'Nenhum pet encontrado' );
    }
    buscarPet('Zeus');

    const atenderCliente = (pet, servico) =>{
        console.log(`olá, ${pet.nome}!`);
        servico(pet);
        console.log('até mais!');
    }

    atenderCliente(arquivoPets.pets[1], darBanhoPet);
    atenderCliente(arquivoPets.pets[1], tosaFeita);

    // tosaFeita(pets[1])
    // tosaFeita(pets[2]);
// function listarPets(listaDePets){
// let vacinado
    // console.log(listaDePets)
    // for (let i = 0; i < listaDePets.length; i++) {
        
        // if(listaDePets[i].vacinado == true){
            // vacinado = "vacinado"
        //  } else {
            //  vacinado = "não vacinado"
        // }
    //  console.log (listaDePets[i].nome + ', ' + listaDePets[i].idade +',' + listaDePets[i].tipo)

    const listarPets = (listaDePets) => {
        // let vacinado
                 for (let i = 0; i < listaDePets.length; i++) {
            
            //  if(listaDePets[i].vacinado == true){
            //     vacinado = "vacinado"
            //   } else {
            //       vacinado = "não vacinado"
            //  }
    
  console.log(`${listaDePets[i].nome}, ${listaDePets[i].idade} anos, ${listaDePets[i].tipo}, ${listaDePets[i].raca}, ${listaDePets[i].genero}, ${(listaDePets[i].vacinado)? 'vacinado' : 'nao vacinado'}`);     
for (let index = 0; index < listaDePets[i].servicos.length; index++) {
      console.log(`${listaDePets[i].servicos[index].nome} - ${listaDePets[i].servicos[index].data}`);
    
}
}
    };   
    
//  console.log(listarPets(pets))
//   listarPets(pets);
// console.log(pets[0].nome, pets[0].raca, pets[0].servicos[0], pets[0].servicos[1])

const vacinarPet = (pet) => {
if (!pet.vacinado) {
 pet.vacinado = true;
 atualizarJson();
 //console.log(`${pet.nome} foi vacinado com sucesso`)
} else {
// console.log(`${pet.nome} já esta vacinado`);
}
}

const campanhaVacina = (listaPets) => {
    let totalVacinados = 0;
    for (let i = 0; i < listaPets.length; i++) {
    if(!listaPets[i].vacinado) {
        listaPets[i].vacinado = true;
        totalVacinados++;
    }
}
atualizarJson();
    console.log(`Parabens, ${totalVacinados} pets foram vacinados para essa campanha`);
};

const listarVacinados = ()=>{
    console.log('vacinado');
    let vacinados = arquivoPets.pets.filter((pet)=>{
        return pet.vacinado;
    })
    console.log(vacinados);
    
    console.log(`temos ${vacinados.length} pets vacinados`);
}
listarVacinados();

//listarPets(arquivoPets.pets);

// vacinarPet(pets[0]);
// vacinarPet(pets[1]);
// vacinarPet(pets[2]);
// vacinarPet(pets[3]);
// campanhaVacina(pets);
// listarPets(arquivoPets.pets);

