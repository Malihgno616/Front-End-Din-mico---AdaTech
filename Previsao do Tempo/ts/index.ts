const form = document.querySelector("#search-form > form");
const input: HTMLInputElement | null =
  document.querySelector("#input-localizacao");

const sectionTempInfo = document.querySelector("#tempo-info");

form?.addEventListener("submit", async (event) => {
  event.preventDefault();

  if (!input || !sectionTempInfo) return;

  const localizacao = input.value;

  if (localizacao.length < 3) {
    alert("Por favor, insira uma localização válida.");
    return;
  }

  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${localizacao}&appid=93157e533b343c3f22d99b9a99a414e4&lang=pt_br&units=metric`
    );
    const data = await response.json();

    console.log(data);

    const infos = {
      temperatura: Math.round(data.main.temp),
      local: data.name,
      icone: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`, // Corrigido
    };

    sectionTempInfo.innerHTML = `
    <div class="tempo-dados">
      <h2>${infos.local}</h2>
      <span>${infos.temperatura}°C</span>
    </div>
    <img src="${infos.icone}" alt="Clima" />
  `;
  } catch (err) {
    console.error("Erro na obtenção dos dados da API", err);
    alert("Não foi possível encontrar, digite outro estado ou país");
  }
});
