const startBtn=document.getElementById('inicio');
const contenido=document.getElementById('taller');

startBtn.addEventListener('click', tallerInit);

function tallerInit(){
    let option=-1;
    let on=true;
    while(on){
        switch (option) {
            case '0':
                //on=false;
                option=prompt(`Ingrese la opcion a la que quiere ingresar:
    1.  Ejercicio 1
    2.  Ejercicio 2
    3.  Ejercicio 3 
    4.  Ejercicio 4  
    5.  Ejercicio 5  
    6.  Ejercicio 6  
    7.  Ejercicio 7
    8.  Salir`);
    
            break;
            case '1':
                on=false;
                console.log('option 1');
                alert(`Ejercicio #1 Pepe desea saber cuál será su calificación final en la materia de Lógica de Programación y Algoritmos. Dicha calificación se compone de los siguientes porcentajes:
                - 55% promedio de tres parciales
                - 30% Examen Final
                - 15% Trabajo final`)
                contenido.innerHTML='';
                ejercicio1();
                break;
            case '2':
                on=false;
                console.log('option 2');
                alert(`Crear un algoritmo en el cual el usuario tenga que adivinar un número. Este número lo creará el sistema al azar. El usuario tiene solo 10 intentos y el sistema debe mostrar si el usuario está cerca o lejos de dar con el número programado por el sistema`);
                contenido.innerHTML='';
                ejercicio2();
                
                break;
            case '3':
                on=false;
                console.log('option 1');
                alert(`Crear un algoritmo que pida x cantidad de números e indique el porcentaje de números pares y el porcentaje de números impares.`);
                contenido.innerHTML='';
                ejercicio3();
                break;
            case '4':
                on=false;
                console.log('option 1');
                alert(`Crear un algoritmo que imprima los números del 1 al 100 y del 101 al 200. El usuario debe poder escoger la opción a imprimir.`);
                contenido.innerHTML='';
                ejercicio4();
                break;
            case '5':
                on=false;
                console.log('option 1');
                alert(`Realiza un script que pida un texto e indique si es un palíndromo en un alert. Ejemplo de palíndromo: “amor a roma”.`);
                contenido.innerHTML='';
                ejercicio5(5);
                break;
            case '6':
                on=false;
                console.log('option 1');
                alert(`Crear un algoritmo que almacene una lista de nombres en un arreglo y luego ordenarlos alfabéticamente. No se sabe la cantidad de datos que se ingresarán. Se ingresa una lista de nombres (la lista termina cuando se ingresa un espacio en blanco) si se repite un nombre el sistema debe mostrar un mensaje indicando al usuario que no debe repetir nombres y continuar con la lista.`);
                contenido.innerHTML='';
                ejercicio6();
                break;
            case '7':
                on=false;
                console.log('option 1');
                alert(`Crear un script que muestre una palabra o frase ingresada al revés y que indique cuántas letras y espacios tiene. `);
                contenido.innerHTML='';
                ejercicio7();
                break;
            case '8':
                on=false;
                break;
            default:
                option='0';
                console.log('default',option);
                break;
        }
    

    }
    


}

function ejercicio1(){
    let dato,
        notasPromedio=[],
        promedio=0,
        examenFinal,
        trabajoFinal,
        notaFinal;
    let ingresar=true;
    let estado=1;
    while(ingresar){
        if(estado===1){
            for (let i = 0; i < 3; i++) {
                dato=Number(prompt(`Ingrese la nota que saco en el parcial # ${i+1}`));
                if(isNaN(dato)){
                    i--;
                    alert('dato incorrecto');
                }else if(dato>=0.1 && dato<=5){
                    console.log('nota correcta')
                    notasPromedio.push(dato);
                    promedio+=dato;
                }else{
                    i--;
                    alert('dato incorrecto');
                }
                
            }
            promedio=(promedio/3).toFixed(2);            
            estado=2;            

        }else if(estado===2){
            
            while(true){
                dato=Number(prompt(`Ingrese la nota que saco en el examen final `));
                if(isNaN(dato)){
                    alert('dato incorrecto');
                    
                }else if(dato>=0.1 && dato<=5){
                    console.log('nota correcta')
                    examenFinal=dato;
                    break;
                }else{
                    i--;
                    alert('dato incorrecto');
                }
            }
            estado=3;
            


        }else if(estado===3){
            
            while(true){
                dato=Number(prompt(`Ingrese la nota que saco en el trabajo final `));
                if(isNaN(dato)){
                    //console.log('numero incorrecto');
                    alert('dato incorrecto');
                    
                }else if(dato>=0.1 && dato<=5){
                    console.log('nota correcta')
                    trabajoFinal=dato;
                    break;
                }else{
                    i--;
                    alert('dato incorrecto');
                }
            }
            estado=4;

        }else if(estado===4){
            ingresar=false;
            //console.log('calculando...');
            alert('Calculando...');
            //console.log(`${promedio} ${examenFinal} ${trabajoFinal}`);
            notaFinal=((promedio*0.55)+(examenFinal*0.3)+(trabajoFinal*0.15)).toFixed(2);            
            //console.log('resultado', notaFinal.toFixed(2));
            contenido.innerHTML=`Las notas ingresadas son las siguientes: <br> <br>`
            notasPromedio.forEach(function(not,index){
                contenido.innerHTML+=`parcial #${index+1} : ${not} <br>`
            })
            contenido.innerHTML+=`Examen Final: ${examenFinal} <br>
                                  Trabajo final: ${trabajoFinal} <br>
                                  Su nota final es: ${notaFinal}  `            

        }

    }

    

}

function ejercicio2(){
    let intentos=10,
        datoIntento=-1,
        diferencia,
        i=0;
    alert('Se esta eligiendo un numero aleatorio...');
    let guessNumber=Math.round((Math.random() * 50) );
    console.log(guessNumber);
    alert('El numero aleatorio se ha elegido, recuerde que solo tiene 10 intentos');   
     for (i = 0; i < intentos; i++) {   
        datoIntento=Number(prompt(`Intento #${i+1}. ingrese un numero entre 0 a 50`));
        
        console.log('dato', datoIntento);
        if(isNaN(datoIntento) || datoIntento<0 || datoIntento>50) {
            i--;
            alert('dato erroneo');
        }else {
            diferencia= guessNumber-datoIntento;
            console.log(diferencia);
            if(datoIntento===guessNumber){
                console.log(datoIntento);
                alert('felicitaciones');
                break;
            }else if(diferencia>6 || diferencia<-6){
                alert('estas lejos');
            }else if(diferencia<=6 || diferencia>=-6){
               alert('estas cerca');                
            }

        }
    } 
    contenido.innerHTML=` Numero de intentos: ${i} Maximo: ${intentos} <br>
                           Felicitaciones!... El numero era: ${guessNumber}  `;
    
}

function ejercicio3(){
    let cantidad,
        dato,
        pares=[],
        impares=[];
        for (let i = 0; i < 1; i++) {            
            cantidad = Number(prompt('Ingrese la cantidad de numeros que desea registrar'));
            if(isNaN(cantidad) ) {
                i--;
                alert('dato erroneo');
    
            }
        }
        
        for (let i = 0; i < cantidad; i++) {
            dato=Number(prompt(`Registro #${i+1}Ingrese el numero`));
            if(isNaN(dato) ) {
                i--;
                alert('dato erroneo');
    
            }else{
                if((Math.abs(dato)%2)===0){
                    pares.push(dato);
                    console.log('par');
                }else if((Math.abs(dato)%2)===1){
                    impares.push(dato);
                    console.log('impar');
                }
            }
            
            
        }
        contenido.innerHTML= `Los numeros pares que ingreso son los siguientes :${pares} % de numeros pares:${((pares.length)/cantidad)*100}% <br> 
                              Los numeros impares que ingreso son los siguientes :${impares} % de numeros impares:${((impares.length)/cantidad)*100}%`

        console.log(`Los numeros pares que ingreso son los siguientes :${pares} % de numeros pares:${((pares.length)/cantidad)*100}%`);
        console.log(`Los numeros impares que ingreso son los siguientes :${impares} % de numeros impares:${((impares.length)/cantidad)*100}%`);
}

function ejercicio4(){
    let rango=-1,
        extra=0;

    for (let i = 0; i < 1; i++) {
        rango= Number(prompt('Para imprimir los numeros del 1 al 100 presione [1]. numeros del 101 al 200 [2]'));
        if(isNaN(rango) || rango<1 || rango>2 ) {
            i--;
            console.log('dato erroneo');

        }else{
            if(rango===1){
                extra=0;
        
            }else if(rango===2){
                extra=100;
            }
            
        }
        
        
    }


    for (let i = 0+extra; i < 100+extra; i++) {
        console.log(i+1);
        contenido.innerHTML+=`|${i+1}|  `;
        
    }


    

}

function ejercicio5(ej){
    let text= {
        texto:'',
        textoArray:[],
        textoInverso:''
    }
    
    for (let i = 0; i < 1; i++) {
        text.texto = prompt('Ingrese una frase');
        if(!isNaN(text.texto)){
            i--;
        }else{
            text.textoArray= text.texto.split("");
        }
        
        
    }
    // se invierte el orden del arreglo
    text.textoArray=text.textoArray.reverse();  
    // de Array a String
    text.textoInverso=text.textoArray.toString();
    //Se elimina todos los "," del string        
    text.textoInverso=text.textoInverso.replace(/,/g,"");
    
    if(ej===5){
        console.log(text.texto.localeCompare(text.textoInverso));
        if(text.texto===text.textoInverso){
            contenido.innerHTML=`La frase ${text.texto}  que ingresó es un palindromo`;
        }else{
            contenido.innerHTML=`La frase ${text.texto} que ingresó no es un palindromo`;
        } 
        
    }else{
        return text; 
    }
       
    
}

function ejercicio6() {
    let listaOn=true,
        lista=[],
        dato='',
        rep=false;
        datoAux=0;

    while(listaOn){
        console.log(lista);
        dato=prompt('ingrese un nombre');
        datoAux=Number(dato);
        console.log(dato)
        if(isNaN(datoAux) && dato!=" "){
            dato=dato.charAt(0).toUpperCase()+dato.slice(1).toLowerCase();            
            if(lista.length===0){
                lista.push(dato);

            }else{

                for (let i = 0; i < lista.length; i++) {
                    if(lista[i]===dato){
                     alert('El nombre que esta ingresando ya se encuentra en la lista');
                     rep=true;
                     break;
                    }
                     
                 }
                 if(!rep){
                    lista.push(dato);
                    
                 }
                rep=false; 
            }
           
        }else{
            listaOn=false;
        }

    }
    lista=lista.sort();
    console.log(lista);
    contenido.innerHTML=`La lista que ingresó es la siguiente: <br> `
    lista.forEach(function(name,index){
        contenido.innerHTML+=`[${index+1}] -> ${name} <br>`;
    })
}

function ejercicio7(){

   let text=ejercicio5(7),
       espacios=0;

   for (let i = 0; i < text.textoArray.length; i++) {
       if(text.textoArray[i]===" "){
           espacios++;
       }
       
   }
   console.log(text);
   console.log(`Frase: ${text.texto} tu palabra al reves es:${text.textoInverso} tiene ${text.textoArray.length-espacios} letras y ${espacios} espacios`)
   contenido.innerHTML=`Frase:${text.texto.replace(/ /g, "&nbsp;")}<br>
                         tu palabra al reves es:${text.textoInverso.replace(/ /g, "&nbsp;")}<br>
                         tiene ${text.textoArray.length-espacios} letras y ${espacios} espacios`;
   

}

//tallerInit();