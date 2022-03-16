//Projeto pilhas para a faculdade

    const Pilha =  ( )  =>  {
    const data =  [ ] ;
    let  topo  =  0 ;
    let  minNumero ;

   const  push  =  ( elemento )  =>  {
       if  ( elemento  ==  parseInt ( elemento ) )  {
           data [ top ++ ]  =  elemento ;
           if  ( minNumber  ===  indefinido  ||  elemento  <  minNumber )  {
               minNumero  =  elemento ;
           }
            return ;
       }  else  {
           return  ` ${ elemento } - Elemento não inteiro!`
       }
   }

   const  pop  =  ( )  =>  {
       if  ( topo  <=  0 )  {
           return  'Pilha vazia!' ;
       }  else  {
           const  elementoRetornado  =  data . emenda ( -- top ) [ 0 ] ;

           if  ( elementoRetornado  ===  minNumber )  {
               minNumero  =  data [ 0 ] ;
               for  ( let  cont  =  0 ;  cont  <  data . comprimento ;  cont ++ )  {
                   if  ( date [ cont ]  <=  minNumber )  {
                       minNumero  =  data [ cont ] ;
                   }
               }        
           }

           return  elementoRetornado ;
       }
   }

   return  {
       empurre ,
       pop ,
       getMinNumber : ( )  =>  minNumber  ||  'Pilha vazia' ,
       data ,
   }
}

const  pilha  =  pilha ( ) ;

console.log ( 'EMPILHAMENTO!' )
console.log ( pilha . push ( 9 ) ) ;
console.log ( pilha . push ( 5 ) ) ;
console.log ( pilha . push ( 7 ) ) ;
console.log ( pilha . push ( 2 ) ) ;
console.log ( pilha . push ( 1 ) ) ;
console.log ( 'DESEMPILHAMENTO!' ) ;
console.log ( pilha.pop ( ) ) ; 
console.log ( pilha.pop ( ) ) ; 
console.log ( 'Menor número:' ,  pilha . getMinNumber ( ) ) ;
console.log ( pilha.pop ( ) ) ; 
console.log ( pilha.pop ( ) ) ; 
console.log ( pilha.pop ( ) ) ; 
console.log ( 'Menor número:' ,  pilha . getMinNumber ( ) ) ;