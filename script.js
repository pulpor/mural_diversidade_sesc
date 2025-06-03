const iconsData = [
  {
    id: "personalidade",
    image: "https://img.icons8.com/color/48/brain.png",
    position: { x: 10, y: 20 },
    title: "Personalidade",
    description: "44% se consideram introvertidos, 56% extrovertidos.",
    chartData: {
      labels: ["Introvertidos", "Extrovertidos"],
      data: [44, 56],
    },
  },
  {
    id: "jogos",
    image: "https://img.icons8.com/color/48/controller.png",
    position: { x: 30, y: 45 },
    title: "Jogos",
    description: "71% dos alunos jogam com frequência.",
    chartData: {
      labels: ["Jogam com frequência", "Não jogam"],
      data: [71, 29],
    },
  },
  {
    id: "nacionalidade",
    image: "https://img.icons8.com/color/48/globe--v1.png",
    position: { x: 60, y: 25 },
    title: "Nacionalidade",
    description: "94% nasceram no Brasil.",
    chartData: {
      labels: ["Nascidos no Brasil", "Outros países"],
      data: [94, 6],
    },
  },
  {
    id: "livros",
    image: "https://img.icons8.com/color/48/book.png",
    position: { x: 20, y: 70 },
    title: "Leitura",
    description: "73% afirmam gostar de ler.",
    chartData: {
      labels: ["Gostam de ler", "Não gostam"],
      data: [73, 27],
    },
  },
  {
    id: "atividade",
    image: "https://img.icons8.com/color/48/running.png",
    position: { x: 40, y: 60 },
    title: "Atividade Física",
    description: "70% praticam alguma atividade regularmente.",
    chartData: {
      labels: ["Praticam atividade física", "Não praticam"],
      data: [70, 30],
    },
  },
  {
    id: "tempo",
    image: "https://img.icons8.com/color/48/hourglass--v1.png",
    position: { x: 75, y: 15 },
    title: "Tempo no SESC",
    description: "60% frequentam há mais de 6 meses.",
    chartData: {
      labels: ["Mais de 6 meses", "Menos de 6 meses"],
      data: [60, 40],
    },
  },
  {
    id: "crenca",
    image: "https://img.icons8.com/color/48/praying.png",
    position: { x: 80, y: 50 },
    title: "Crença",
    description: "77% possuem alguma crença religiosa.",
    chartData: {
      labels: ["Possuem crença religiosa", "Não possuem"],
      data: [77, 23],
    },
  },
  {
    id: "felicidade",
    image: "https://img.icons8.com/color/48/happy.png",
    position: { x: 55, y: 80 },
    title: "Felicidade",
    description: "92% se consideram felizes.",
    chartData: {
      labels: ["Se consideram felizes", "Não se consideram"],
      data: [92, 8],
    },
  },
  {
    id: "raca",
    image: "https://img.icons8.com/color/48/paint-palette.png",
    position: { x: 15, y: 85 },
    title: "Raça/Cor",
    description: "61% se consideram brancos, 6% amarelos, 20% pardos, 12% pretos e 1% indígenas.",
    chartData: {
      labels: ["Branco", "Amarelo", "Pardo", "Preto", "Indígena"],
      data: [61, 6, 20, 12, 1],
    },
  },
  {
    id: "lgbt",
    image: "https://img.icons8.com/color/48/pride-flag.png",
    position: { x: 90, y: 30 },
    title: "Comunidade LGBT+",
    description: "34% se consideram parte da comunidade.",
    chartData: {
      labels: ["Fazem parte da comunidade", "Não fazem parte"],
      data: [34, 66],
    },
  },
  {
    id: "diversidade",
    image: "https://img.icons8.com/color/48/teamwork.png",
    position: { x: 68, y: 70 },
    title: "Respeito à Diversidade",
    description: "93% acreditam que o SESC respeita a diversidade.",
    chartData: {
      labels: ["Acreditam que respeita", "Não acreditam"],
      data: [93, 7],
    },
  },
  {
    id: "deficiencia",
    image: "https://img.icons8.com/color/48/wheelchair.png",
    position: { x: 48, y: 35 },
    title: "Deficiência",
    description: "6% relataram ter algum tipo de deficiência.",
    chartData: {
      labels: ["Possuem deficiência", "Não possuem"],
      data: [6, 94],
    },
  },
  {
    id: "preconceito",
    image: "https://img.icons8.com/color/48/error--v1.png",
    position: { x: 35, y: 20 },
    title: "Preconceito",
    description: "41% já sofreram algum tipo de preconceito.",
    chartData: {
      labels: ["Já sofreram preconceito", "Nunca sofreram"],
      data: [41, 59],
    },
  },
  {
    id: "cursos",
    image: "https://img.icons8.com/color/48/classroom.png",
    position: { x: 88, y: 65 },
    title: "Cursos no SESC",
    description: "72% fazem ou já fizeram algum curso.",
    chartData: {
      labels: ["Já fizeram cursos", "Nunca fizeram"],
      data: [72, 28],
    },
  },
  {
    id: "subcultura",
    image: "https://img.icons8.com/color/48/mask.png",
    position: { x: 60, y: 90 },
    title: "Subcultura",
    description: "22% se identificam com alguma subcultura.",
    chartData: {
      labels: ["Se identificam com subcultura", "Não se identificam"],
      data: [22, 78],
    },
  },
];

const map = document.getElementById("map");
const ctx = document.getElementById("doughnutChart").getContext("2d");
const legendContainer = document.getElementById("legendContainer");

let chart = new Chart(ctx, {
  type: "doughnut",
  data: {
    labels: [],
    datasets: [
      {
        data: [],
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#81C784",
          "#BA68C8",
        ],
        borderWidth: 1,
      },
    ],
  },
  options: {
    responsive: true,
    cutout: "60%",
    plugins: {
      legend: { display: false },
    },
  },
});

function updateChart(labels, data) {
  chart.data.labels = labels;
  chart.data.datasets[0].data = data;
  chart.update();
  legendContainer.innerHTML = labels
    .map(
      (label, i) =>
        `<div><strong style="color:${chart.data.datasets[0].backgroundColor[i]}">■</strong> ${label}: ${data[i]}%</div>`
    )
    .join("");
}

function createIcon(data) {
  const icon = document.createElement("div");
  icon.className = "icon";
  icon.style.backgroundImage = `url(${data.image})`;
  icon.style.left = `${data.position.x}%`;
  icon.style.top = `${data.position.y}%`;
  icon.dataset.id = data.id;

  const infoCard = document.createElement("div");
  infoCard.className = "info-card";
  infoCard.id = `card-${data.id}`;
  infoCard.innerHTML = `
        <button class="close-btn" onclick="closeCard('card-${data.id}')">X</button>
        <h3>${data.title}</h3>
        <p>${data.description}</p>
      `;
  icon.appendChild(infoCard);

  icon.addEventListener("mouseenter", () => {
    infoCard.classList.add("active");
});

icon.addEventListener("mouseleave", () => {
    infoCard.classList.remove("active");
});



  /*icon.addEventListener('click', (e) => {
    e.stopPropagation();
    document.querySelectorAll('.info-card').forEach(card => card.classList.remove('active'));
    infoCard.classList.toggle('active');

    updateChart(data.chartData.labels, data.chartData.data); 
    });*/
  icon.addEventListener("mouseenter", () => {
    updateChart(data.chartData.labels, data.chartData.data);
  });

  map.appendChild(icon);
}

function closeCard(cardId) {
  const card = document.getElementById(cardId);
  if (card) card.classList.remove("active");
}

document.addEventListener("click", (e) => {
  if (!e.target.closest(".icon") && !e.target.closest(".info-card")) {
    document
      .querySelectorAll(".info-card")
      .forEach((card) => card.classList.remove("active"));
  }
});

iconsData.forEach(createIcon);
