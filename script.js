/*
Faça um programa que tenha um menu e apresente a seguinte mensagem:
  
Olá usuário! Digite o número da opção desejada

    1. Cadastrar um item na lista
    2. Mostrar itens cadastrados
    3. Sair do programa
   
O programa deverá capturar o número digitado pelo usuário e mostrar o seguintes cenários:

Caso o usuário digite 1, ele poderá cadastrar um item em uma lista;
Caso o usuário digite 2, ele poderá ver os itens cadastrados;
Se não houver nenhum item cadastrado, mostrar a mensagem: 
      "Não existem itens cadastrados"
Caso o usuário digite 3, a aplicação deverá ser encerrada.

Ferramentas da linguagem que abordaremos
[] loop while
[] arrays e funções de arrays
[] condicional if/else
[] template literals (strings)


OBS: As caixas de diálogo são janelas modais que são exibidas no navegador com o objetivo de interagir com a pessoa usuária da página. Por meio delas é possível exibir alertas, fazer perguntas e obter respostas. 
1 - Alert() - o método alert() é indicado para quando é preciso informar algo.
2 - Confirm() - Seu objetivo é permitir que a pessoa usuária da página decida se deseja ou não executar uma ação determinada. Para isso, exibe uma janela modal com uma mensagem e dois botões: um de confirmação e outro que cancela a ação. 
3 - Prompt() - Seu objetivo é obter alguma informação da pessoa usuária da página.

*/

alert(`Olá mundo! Me chamo ricarlosgp@gmail.com e sou estudante de desenvolvimento web front-end. Nesse script estou cadastrando um ítem e exibindo-o.
Abraços!`)

let option  //essa variável vai ser a opção digitada através do prompt() por isso não recebe valor. As opções são: opção1, opção 2 ou 3
let items = [] //lista das opções a serem criadas e como se trata de uma lista então utiliza-e um array []

//enquanto(option for diferente da opção 3) {execute meu escopo}. Se for 3 vai fechar a janela de popup(Saia do programa) enquanto isso vai ficar aguardando as demais opções(1 ou 2)
while(option != 3) {

    //reatribua option para converter em Number(para interação com usuário) exibindo a janela popup de todo o prompt.

    option = Number(prompt(`
        Olá amigo! Digite o número da opção desejada

        1. Cadastrar um ítem na lista
        2. Mostrar ítens cadastrados
        3. Sair do programa   
    
    `))
    //agora vêm as condições

    //se(option for igual a 1) faça ou execute meu escopo criando uma nova variável let item
    if(option == 1) {
        //let item recebe um popup com a mensagem: "Digite o nome do item"
        let item = prompt("Digite o nome do item")
        items.push(item) // dentro da variável ITEMS irei colocar a variável ITEM. O método push() adiciona um ou mais elementos ao final de um array e retorna o novo comprimento desse array. 
    }
    //senão se (option for igual a 2) faça ou execute esse outro escopo
    else if (option == 2) {

        //se(quantidade de items for igual a zero) crie um alert
        if(items.lenght == 0) {
            alert("Não existem items cadastrados")
        }
         //senão   
       else {
        //mostre(items)
        alert(items)
        }
    }   
    //senão for nenhuma das opções (1,2,3) digitada, alert com Tchau
    else {
        alert("Tchau")
    }
        
    }