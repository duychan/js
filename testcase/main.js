const btn = document.querySelector('.but-ton')
const di = document.querySelector('.di-v')

btn.addEventListener('click', (e) => {
    console.log('btn')
    e.stopPropagation();
})

di.addEventListener('click', (e) => {
    console.log('div')
})