const countryEl = document.querySelector(".country");
const searchEl = document.querySelector(".search");
async function loadData() {
  const url = "https://restcountries.eu/rest/v2/all";
  const response = await fetch(url);
  const data = await response.json();
  //   console.log(data);//it shows you the array of data
  //   console.log(data[0].name);
  data.forEach((element) => {
    // console.log(element.name);
    // console.log(element.capital);
    // console.log(element.population);
    // const name = element.name; //You can acces this way
    // const population = element.population; //You can acces this way
    //the best way is using object destrucring when the varaibles are more
    const { name, capital, flag, callingCodes, region, population } = element;
    // console.log(flag);//it shows flags
    const card = `  
   <div class="col-md">
    <div class="card py-2">
      <img class="card-img-top" src=${flag} alt="" />

      <div class="card-body">
        <h5 class="card-title country-name">${name}</h5>
      </div>
      <ul class="list-group list-group-item">
        <div class="list-group-item">Capital:${capital}</div>
        <div class="list-group-item">Country code: ${callingCodes}</div>
        <div class="list-group-item">Region:${region}</div>
        <div class="list-group-item">Population:${population}</div>
      </ul>
    </div>
  </div>
    
    `;
    countryEl.innerHTML += card;
    searchEl.addEventListener("keyup", findCountry);
    function findCountry(e) {
      //   console.log(e.target.value);//Checking user input
      const textInput = e.target.value.toLowerCase();
      document.querySelectorAll(".country-name").forEach(function (items) {
        const item = items.firstChild.textContent;
        if (item.toLowerCase().indexOf(textInput) != -1) {
          items.style.display = "block";
        } else {
          items.parentElement.parentElement.parentElement.style.display =
            "none";
        }
      });
    }
  });
}
loadData();
