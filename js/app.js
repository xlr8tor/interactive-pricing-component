let range = document.querySelector('input[type=range]');
let checkbox = document.querySelector('input[type=checkbox]');
let pageviews = document.querySelector('.pageviews span');
let price = document.querySelector('.price span');

let arr = [
    {
        id: 0,
        pageviews: '10K',
        price: 8
    },
    {
        id: 25,
        pageviews: '50K',
        price: 12
    },
    {
        id: 50,
        pageviews: '100K',
        price: 16
    },
    {
        id: 75,
        pageviews: '500K',
        price: 24
    },
    {
        id: 100,
        pageviews: '1M',
        price: 36
    }
]

function update(){
    let value = parseInt(range.value);

    for(let obj of arr){
        if(obj.id === value){
            pageviews.textContent = obj.pageviews;

            if(checkbox.checked){
                let float = obj.price * 0.25;
                price.textContent = "$" + float.toFixed(2);
            }
            else {
                price.textContent = "$" + obj.price.toFixed(2);
            }    
            
        }
    }
}
checkbox.addEventListener('click',() => {
    update();
})

range.addEventListener('input',() => {
    update();
})