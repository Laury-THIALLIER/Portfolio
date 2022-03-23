export default function projectFactory(data) {
  const { id, image, name, date, context, description, link, github, techno } =
    data;

  function getProjectCardDOM() {
    const project = document.createElement("div");
    project.setAttribute("class", "project");

    const projectImg = document.createElement("img");
    projectImg.setAttribute("src", "assets/images/projects/" + image);
    projectImg.setAttribute("alt", name);
    projectImg.setAttribute("height", "190");
    projectImg.setAttribute("width", "338");

    const badges = document.createElement("div");
    badges.setAttribute("class", "badges");

    const technos = techno.split("&emsp;");

    const nameH4 = document.createElement("h4");
    nameH4.textContent = name;

    column.appendChild(project);
    project.appendChild(projectImg);
    project.appendChild(badges);

    technos.forEach((techno) => {
      const pBadges = document.createElement("p");
      pBadges.setAttribute("class", techno.toLowerCase());
      pBadges.textContent = techno;
      badges.appendChild(pBadges);
    });

    project.appendChild(nameH4);

    return project;
  }

  function getProjectDetailsDOM() {
    const project = document.createElement("div");
    project.setAttribute("id", "project_details");

    const statusbar = document.createElement("div");
    statusbar.setAttribute("class", "trello_details__statusbar");

    const title = document.createElement("div");
    title.setAttribute("class", "trello_details__title");

    const back = document.createElement("img");
    back.setAttribute("id", "trelloBack");
    back.setAttribute("src", "assets/images/icons/arrow.svg");
    back.setAttribute("alt", "Retour");

    const titleH2 = document.createElement("h2");
    titleH2.textContent = "Projets";

    const background = document.createElement("div");
    background.setAttribute("class", "trello_details__background");

    const projectImg = document.createElement("img");
    projectImg.setAttribute("class", "project");
    projectImg.setAttribute("src", "assets/images/projects/" + image);
    projectImg.setAttribute("alt", name);

    const backgroundH6 = document.createElement("h6");
    backgroundH6.textContent = name;

    const divDescription = document.createElement("div");
    divDescription.setAttribute("class", "description");

    const descriptionImg = document.createElement("img");
    descriptionImg.setAttribute("src", "assets/images/icons/text.svg");
    descriptionImg.setAttribute("alt", "Description");

    const pDescription = document.createElement("p");
    pDescription.innerHTML =
      "Date : " +
      date +
      "<br>Contexte : " +
      context +
      "<br><br>" +
      description +
      '<br><br>Site : <a href="' +
      link +
      '" target="_blank">' +
      link +
      "</a><br>";
    if (github !== "") {
      pDescription.innerHTML +=
        'Github : <a href="' + github + '" target="_blank">' + github + "</a>";
    }

    const badges = document.createElement("div");
    badges.setAttribute("class", "badges");

    const badgesImg = document.createElement("img");
    badgesImg.setAttribute("src", "assets/images/icons/tag.svg");
    badgesImg.setAttribute("alt", "Tags");

    const technos = techno.split("&emsp;");

    const navbar = document.createElement("div");
    navbar.setAttribute("class", "trello_details__navbar");

    project.appendChild(statusbar);
    project.appendChild(title);
    title.appendChild(back);
    title.appendChild(titleH2);
    project.appendChild(background);
    background.appendChild(projectImg);
    background.appendChild(backgroundH6);
    background.appendChild(divDescription);
    divDescription.appendChild(descriptionImg);
    divDescription.appendChild(pDescription);
    background.appendChild(badges);
    badges.appendChild(badgesImg);
    project.appendChild(navbar);

    technos.forEach((techno) => {
      const pBadges = document.createElement("p");
      pBadges.setAttribute("class", techno.toLowerCase());
      pBadges.textContent = techno;
      badges.appendChild(pBadges);
    });

    return project;
  }

  return {
    id,
    image,
    name,
    date,
    context,
    description,
    link,
    github,
    techno,
    getProjectCardDOM,
    getProjectDetailsDOM,
  };
}
