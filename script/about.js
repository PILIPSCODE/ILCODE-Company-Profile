const teamMembers = [
  {
    name: "Pilipus Kuncoro Wismoady",
    role: "Co-Founder & CTO",
    description:
      "Ahli teknologi dengan spesialisasi dalam pengembangan sistem berbasis AI dan cloud computing.",
    image:
      "https://media.licdn.com/dms/image/v2/D4E03AQGgV425xJNH0Q/profile-displayphoto-shrink_400_400/B4EZauqYdHHIAg-/0/1746687068916?e=1755129600&v=beta&t=rREOyljKD71xMpJYFObp0qle61SGOgyyCsLR568lCfw",
    linkedin: "https://linkedin.com/in/ahmadfadhil",
    twitter: "https://twitter.com/ahmadfadhil",
  },
  {
    name: "Siti Marlina",
    role: "Product Manager",
    description:
      "Berpengalaman dalam merancang dan memimpin pengembangan produk digital yang berdampak.",
    image:
      "https://tse2.mm.bing.net/th?id=OIP.c3xZFEubLwRrbMU1w2W1uwHaHa&pid=Api&P=0&h=180",
    linkedin: "https://linkedin.com/in/sitimarlina",
    twitter: "https://twitter.com/sitimarlina",
  },
  {
    name: "Dimas Surya",
    role: "UI/UX Designer",
    description:
      "Fokus pada desain antarmuka yang intuitif dan pengalaman pengguna yang memuaskan.",
    image:
      "https://tse3.mm.bing.net/th?id=OIP.tjUOUBGnthmW762mbRAFdQHaE8&pid=Api&P=0&h=180",
    linkedin: "https://linkedin.com/in/dimassurya",
    twitter: "https://twitter.com/dimassurya",
  },
  {
    name: "Anisa Rahmah",
    role: "Marketing Strategist",
    description:
      "Spesialis strategi digital marketing dan brand awareness di berbagai platform.",
    image:
      "https://tse3.mm.bing.net/th?id=OIP.8FddeaUTgfZzqzJVuoCvQgHaHa&pid=Api&P=0&h=180",
    linkedin: "https://linkedin.com/in/anisarahmah",
    twitter: "https://twitter.com/anisarahmah",
  },
  {
    name: "Rizky Nugroho",
    role: "Frontend Developer",
    description:
      "Mengembangkan antarmuka web yang modern dan responsif menggunakan React dan Tailwind.",
    image:
      "https://tse1.mm.bing.net/th?id=OIP.hCfHyL8u8XAbreXuaiTMQgHaHZ&pid=Api&P=0&h=180",
    linkedin: "https://linkedin.com/in/rizkynugroho",
    twitter: "https://twitter.com/rizkynugroho",
  },
  {
    name: "Putri Amalia",
    role: "Backend Developer",
    description:
      "Spesialis backend yang fokus pada performa dan skalabilitas menggunakan Node.js dan Python.",
    image:
      "https://tse1.mm.bing.net/th?id=OIP.BnFxTdGXnR3aYi6NeQm41wHaHa&pid=Api&P=0&h=180",
    linkedin: "https://linkedin.com/in/putriamalia",
    twitter: "https://twitter.com/putriamalia",
  },
  {
    name: "Fahmi Hidayat",
    role: "Data Scientist",
    description:
      "Menangani analisis data dan membangun model machine learning untuk mendukung keputusan bisnis.",
    image:
      "https://tse4.mm.bing.net/th?id=OIP.aXzam29f3YwDgGIAVg59pAHaHa&pid=Api&P=0&h=180",
    linkedin: "https://linkedin.com/in/fahmihidayat",
    twitter: "https://twitter.com/fahmihidayat",
  },
  {
    name: "Lina Puspita",
    role: "Content Creator",
    description:
      "Membuat konten kreatif untuk media sosial dan kampanye digital.",
    image:
      "https://tse4.mm.bing.net/th?id=OIP.sO4PWeGSrg-GKIRxpd1rhgHaHa&pid=Api&P=0&h=180",
    linkedin: "https://linkedin.com/in/linapuspita",
    twitter: "https://twitter.com/linapuspita",
  },
  {
    name: "Agus Santoso",
    role: "DevOps Engineer",
    description:
      "Mengelola infrastruktur cloud dan CI/CD pipeline untuk memastikan kelancaran deployment.",
    image:
      "https://tse1.mm.bing.net/th?id=OIP.X9gYA6VDsnaSpMqBOWKH5wHaGv&pid=Api&P=0&h=180",
    linkedin: "https://linkedin.com/in/agussantoso",
    twitter: "https://twitter.com/agussantoso",
  },
];

const container = document.getElementById("container-team");

container.innerHTML = teamMembers
  .map(
    (member) => `
      <div class="xl:w-80 fade-up-scroll-el w-full h-auto p-5 rounded-4xl bg-primary text-center flex flex-col items-center text-tersier shadow-lg">
        <img src="${member.image}" class="w-40 h-40 bg-white rounded-full object-cover mb-4" alt="Foto Tim" />
        <h3 class="text-xl font-bold">${member.name}</h3>
        <p class="text-sm text-tersier/80 mb-2 font-black">${member.role}</p>
        <p class="text-sm text-tersier/70 mb-4">${member.description}</p>
        <div class="flex gap-4">
          <a href="${member.linkedin}" target="_blank" class="hover:text-blue-300">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 fill-current" viewBox="0 0 24 24">
              <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1 4.98 2.12 4.98 3.5zM.5 8.5h4V24h-4V8.5zM7.5 8.5h3.6v2.1h.05c.5-.95 1.75-2 3.6-2 3.85 0 4.55 2.5 4.55 5.75V24h-4v-7.9c0-1.9-.03-4.35-2.65-4.35-2.65 0-3.05 2.07-3.05 4.2V24h-4V8.5z"/>
            </svg>
          </a>
          <a href="${member.twitter}" target="_blank" class="hover:text-blue-400">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 fill-current" viewBox="0 0 24 24">
              <path d="M24 4.6a9.83 9.83 0 0 1-2.83.78 4.93 4.93 0 0 0 2.15-2.72 9.86 9.86 0 0 1-3.13 1.2 4.92 4.92 0 0 0-8.38 4.48A13.97 13.97 0 0 1 1.67 3.15 4.92 4.92 0 0 0 3.2 9.86 4.9 4.9 0 0 1 1 9.14v.06a4.92 4.92 0 0 0 3.95 4.83 4.93 4.93 0 0 1-2.21.08 4.93 4.93 0 0 0 4.6 3.42A9.87 9.87 0 0 1 .96 19.54a13.94 13.94 0 0 0 7.56 2.22c9.06 0 14.01-7.5 14.01-14 0-.21 0-.42-.02-.63A10.01 10.01 0 0 0 24 4.6z"/>
            </svg>
          </a>
        </div>
      </div>
    `
  )
  .join("");
