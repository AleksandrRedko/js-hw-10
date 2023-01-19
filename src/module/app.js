
import debounce from 'lodash.debounce';
import Notiflix from 'notiflix';
import {refs} from './refs';
import {fetchCountries} from './fetchCountries'
import {renderCountryList,renderCountryСard} from './markupTemplate';

const DEBOUNCE_DELAY = 300;
refs.input.addEventListener('input', debounce(onFetchCountries,DEBOUNCE_DELAY));

function onFetchCountries(){  
     
  let name = refs.input.value.trim();
  if (name === '') {
    refs.countryInfo.innerHTML = '';
    refs.countryList.innerHTML = '';
    return;
  }

  fetchCountries(name)
       .then((countrys) => {
        if (countrys.length > 10) {
          Notiflix.Notify.info('Too many matches found. Please enter a more specific name.');        
          refs.countryInfo.innerHTML = '';
          refs.countryList.innerHTML = '';
          return;
        }
  
        if (countrys.length <= 10) {
          const listMarkup = countrys.map(country => renderCountryList(country));
          refs.countryList.innerHTML = listMarkup.join('');
          refs.countryInfo.innerHTML = '';
        }
  
        if (countrys.length === 1) {
          const markup = countrys.map(country => renderCountryСard(country));
          refs.countryInfo.innerHTML = markup.join('');
          refs.countryList.innerHTML = '';
        }
      })
       .catch((error) => {
        Notiflix.Notify.failure('Oops, there is no country with that name');        
        refs.countryInfo.innerHTML = '';
        refs.countryList.innerHTML = '';
        return error;
      });

}








    

