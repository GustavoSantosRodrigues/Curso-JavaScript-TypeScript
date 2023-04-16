    const pessoa = {
        nome: 'Gustavo',
        sobrenome: 'Santos',
        idade: 20,
        endereco: {
            rua: 'São Cristovão',
            bairro: 'Fartura',
            numero: 580, 
        }
    };

    //nome: name esta mudando o nome da chave por isso usamos nome e :
    // const {nome: n, sobrenome, idade} = pessoa

    const {nome, ...resto} = pessoa;
    console.log(nome, endereco)

    // const {nome, sobrenome, idade, endereco: {rua: r, bairro}} = pessoa

    // console.log(nome, sobrenome, idade, r, bairro)


    // caso quiser atribuir objeto nome a const 
    // const nome = pessoa.nome;
    // console.log(nome)

