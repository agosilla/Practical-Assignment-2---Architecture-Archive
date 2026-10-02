function deployProjects() {

    fetch("js/data.json")
        .then(res => res.json())
        .then(projects => {

            document.querySelector("section").innerHTML = projects.map((project) =>

                `<div class="card">
                    <h2>${project.title}</h2>
                    <p>Architect: ${project.architect}</p>
                    <p>Location: ${project.location}</p>
                    <p>Year: ${project.year}</p>
                    <p>Movement: ${project.movement}</p>
                    <p>${project.description}</p>
                </div>`

            ).join(" ");

        });

}


function changeStyles() {

    document.body.classList.toggle("dark");

}

function changeIntroduction() {

    document.querySelector("#description").innerText =
        "Explore architectural ideas, spaces and projects from our digital collection";

}

document.querySelector(".btn").addEventListener("click", deployProjects);

document.querySelector(".btn_style").addEventListener("click", changeStyles);

document.querySelector(".btn_about").addEventListener("click", changeIntroduction);