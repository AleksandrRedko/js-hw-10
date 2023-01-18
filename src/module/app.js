import { fetchCountries } from './fetchCountries';

const refs = {
input:document.querySelector('#search-box'),
countryList:document.querySelector('.country-list'),
countryInfo:document.querySelector('.country-info')
}
const DEBOUNCE_DELAY = 300;
refs.input.addEventListener('input', (e) =>{
    let name = e.currentTarget.value;
    
    // которая делает HTTP-запрос
  fetchCountries(name)
       .then((countrys) => rendercountryList(countrys))
       .catch((error) => console.log(error));
// возвращает промис с массивом стран
});




function rendercountryList(countrys){
console.log(countrys)
}