  const renderCountryList = function ({ flags, name}){ 
    return `<li>
        <img/  src="${flags.svg}" alt="${name.official} style="width="35px"">
        <h2>${name.official}</h2>
        </li>`;     
        };
  
  const renderCountryСard = function ({ flags, name,capital,population,languages}){
    return `<ul>
    <li><h1><img/  src="${flags.svg}" alt="${name.official} style="width="90px""> ${name.official}</h1></li>
    <li class="country-info-list"><strong>Capital</strong> :${capital}</li>
    <li class="country-info-list"><strong>population</strong> :${population}</li>
    <li class="country-info-list"><strong>languages</strong> :${Object.values(
      languages,
    )}</li>
  </ul> `
  }
  export{renderCountryList,renderCountryСard};