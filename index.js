// all countries call button

$(".allCountries").click(function (e) {
  e.preventDefault();
  $(".countries").empty();
  fields();
  $.get("https://restcountries.eu/rest/v2/all", function (e) {
    for (let i = 0; i < e.length; i++) {
      write(e, i);
    }
  });
});

// search button
$(".searchBtn").click(function (e) {
  e.preventDefault();
  $(".countries").empty();
  fields();
  let value = $("input")[0].value;
  $("input")[0].value = "";
  $.get(`https://restcountries.eu/rest/v2/name/${value}`, function (e) {
    for (let i = 0; i < e.length; i++) {
      write(e, i);
    }
  });
});

// create and append content function
function write(e, i) {
  let country = {
    flag: e[i].flag,
    name: e[i].name,
    capital: e[i].capital,
    currencies: {
      code: e[i].currencies[0].code,
      name: e[i].currencies[0].name,
      symbol: e[i].currencies[0].symbol,
    },
    borders: e[i].borders,
    domain: e[i].topLevelDomain,
  };

  let row = `<div class="row">
<div class="flag box"><img src="${country.flag}"></div>
<div class="name">${country.name}</div>
<div class="capital">${country.capital}</div>
<div class="currencies"><p>${country.currencies.code}<br>${
    country.currencies.name
  }<br>${country.currencies.symbol}</div>
<div class="borders">${country.borders.slice(0, 3)}<br>${country.borders.slice(
    3,
    7
  )}<br>${country.borders.slice(7, 10)}</div>
<div class="domain">${country.domain}</div>
</div>`;
  $(".countries").append(row);
}

// name categories
function fields() {
  let row = `<div class="row fields">
<div class="flag box"><p>Flag</p></div>
<div class="name box"><p>Country Name</p></div>
<div class="capital box"><p>Capital City</p></div>
<div class="currencies box"><p>Currency</p></div>
<div class="borders box"><p>Bordering Countries</p></div>
<div class="domain box"><p>Web Domain</p></div>
</div>`;
  $(".countries").append(row);
}

$(window).scroll(function () {
  if ($(window).scrollTop() > 383) {
    // console.log($(window).scrollTop());
    console.log($(window).scrollTop());
    $(".fields").css("marginTop", "0");
    $(".fields").css("top", "0");
    $(".fields").css("position", "fixed");
  } else {
    console.log($($(window).scrollTop()));
    $(".fields").css("marginTop", "-70px");
    $(".fields").css("position", "static");
  }
});
