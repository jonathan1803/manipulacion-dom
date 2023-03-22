

// console.log(input.value);
// h1.innerHTML= 'patito';
// console.log(h1.getAttribute('class'));
// //agregar o sustituir la clase 
// h1.setAttribute('class', 'rojo')
// console.log(h1.getAttribute('class'))

// h1.classList.add('azul');
// h1.classList.remove('verde');

// // dependiondo del evento quitar o poner la clase
// h1.classList.toggle('azul')

// //vamor q aparecera por defecto
// input.value= '456';
// // crea un elemento html
// const img = document.createElement('img');

// img.setAttribute('src', 'https://i.pinimg.com/550x/a2/48/97/a2489729f6dc07f299966a730f13d1f9.jpg');
// pid.innerHTML=''
// pid.append(img)


// const h1 = document.querySelector('h1');
// const p = document.querySelector('p');
// const parrafito = document.querySelector('.parrafito');
// const pid = document.getElementById('pid')
// const input = document.querySelector('input')

const h1 = document.querySelector('h1');
const input1 = document.querySelector('#input1')
const input2 = document.querySelector('#input2')
const btn = document.querySelector('#btnCalcular')
const result  = document.querySelector('#result')
const form = document.querySelector('#form')


// btn.addEventListener('click',btnOnclick)
form.addEventListener('submit',btnOnclick)

function btnOnclick (event){
    event.preventDefault()
  const sumaInputs = parseInt(input1.value) + parseInt(input2.value)
result.innerText = sumaInputs;

}

