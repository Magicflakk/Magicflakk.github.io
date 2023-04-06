// magicMedia.js

const magicMedia = {
  companyName: "Magic Media",
  tagline: "Producción Audiovisual y Diseño Gráfico",
  about: {
    description: "Magic Media es una empresa de producción audiovisual y diseño gráfico ubicada en Chile. Nos enfocamos en brindar servicios personalizados y de alta calidad a nuestros clientes. Nos destacamos por nuestro compromiso en cada proyecto y por ofrecer un servicio exclusivo e irrepetible.",
    values: ["Creatividad", "Innovación", "Excelencia", "Compromiso"],
    team: [
      { name: "Juan Pérez", role: "Director de Producción" },
      { name: "María González", role: "Diseñadora Gráfica" },
      { name: "Carlos Rodríguez", role: "Editor de Video" },
      { name: "Patricia Vargas", role: "Fotógrafa" },
      { name: "Alejandra Castro", role: "Animadora" },
    ],
  },
  services: [
    "Producción audiovisual",
    "Diseño gráfico",
    "Fotografía",
    "Edición de video",
    "Animación",
    "Postproducción",
    "Sonido",
  ],
  recentProjects: [
    { title: "Video Promocional para XYZ", link: "#" },
    { title: "Animación para XYZ", link: "#" },
    { title: "Diseño de imagen corporativa para ABC", link: "#" },
    { title: "Fotografía de producto para DEF", link: "#" },
    { title: "Video clip musical para GHI", link: "#" },
  ],
};

function displayAbout() {
  console.log(magicMedia.about.description);
  console.log("Valores:");
  magicMedia.about.values.forEach((value) => {
    console.log(`- ${value}`);
  });
}

function displayTeam() {
  console.log("Nuestro equipo:");
  magicMedia.about.team.forEach((member) => {
    console.log(`${member.name} - ${member.role}`);
  });
}

function displayServices() {
  console.log("Servicios:");
  magicMedia.services.forEach((service) => {
    console.log(`- ${service}`);
  });
}

function displayRecentProjects() {
  console.log("Proyectos Recientes:");
  magicMedia.recentProjects.forEach((project) => {
    console.log(`${project.title} - ${project.link}`);
  });
}

// Ejemplo de uso de las funciones
displayAbout();
displayTeam();
displayServices();
displayRecentProjects();
