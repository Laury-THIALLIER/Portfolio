import projectFactory from "../factories/project.js";

let myProjects = [];

async function getProjects() {
  await fetch("assets/data/projects.json")
    .then((res) => res.json())
    .then((data) => (myProjects = data.projects))
    .catch((err) => console.log("Error : " + err));

  myProjects.sort(function (a, b) {
    if (a.id > b.id) return -1;
    if (a.id < b.id) return 1;
    return 0;
  });

  //   console.log(myProjects[0]);

  return myProjects;
}

async function displayData() {
  const projectsSection = document.getElementById("column");
  const projectsDetailsSection = document.getElementById("trello_details");
  let details = 0;

  document.getElementById("trelloBackToHome").addEventListener("click", () => {
    appTrello.style.animation = "slide-bottom 0.3s";
    setTimeout(function () {
      appTrello.style.display = "none";
    }, 200);
    currentApp = "";
  });

  myProjects.forEach((project) => {
    const projectModel = projectFactory(project);
    const projectCardDOM = projectModel.getProjectCardDOM();

    projectCardDOM.children[0].addEventListener("click", () => {
      const projectModel = projectFactory(project);
      const projectCardDOM = projectModel.getProjectDetailsDOM();
      projectsDetailsSection.appendChild(projectCardDOM);
      document.getElementById("project_details").style.display = "block";
      details = 1;

      document.getElementById("trelloBack").addEventListener("click", () => {
        projectsDetailsSection.removeChild(
          document.getElementById("project_details")
        );
        details = 0;
      });
    });

    document.getElementById("circle").addEventListener("click", () => {
      if (details === 1) {
        projectsDetailsSection.removeChild(
          document.getElementById("project_details")
        );
        details = 0;
      }
      appTrello.style.animation = "slide-bottom 0.3s";
      setTimeout(function () {
        appTrello.style.display = "none";
      }, 200);
      currentApp = "";
    });
  });

  document.getElementById("triangle").addEventListener("click", () => {
    if (details === 1) {
      projectsDetailsSection.removeChild(
        document.getElementById("project_details")
      );
      details = 0;
    } else {
      appTrello.style.animation = "slide-bottom 0.3s";
      setTimeout(function () {
        appTrello.style.display = "none";
      }, 200);
      currentApp = "";
      details = 0;
    }
  });
}

async function init() {
  const { projects } = await getProjects();
  displayData(projects);
}

init();
