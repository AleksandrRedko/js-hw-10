  const renderCountryList = function ({ flags, name}){ 
    return `<li>
        <img/  src="${flags.svg}" alt="${name.official} style="width="25px"">
        <h2>${name.official}</h2>
        </li>`;     
        };
  
  const renderCountryСard = function ({ flags, name,capital,population,languages}){
    return `<ul>
    <h1><img/  src="${flags.svg}" alt="${name.official} style="width="50px""> ${name.official}</h1>
    <li><strong>Capital</strong> :${capital}</li>
    <li><strong>population</strong> :${population}</li>
    <li><strong>languages</strong> :${Object.values(
      languages,
    )}</li>
  </ul> `
  }
  export{renderCountryList,renderCountryСard};