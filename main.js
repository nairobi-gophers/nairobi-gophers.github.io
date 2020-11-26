window.onload = function (ev) {
    let projectsList = []
    fetch("https://api.github.com/users/nairobi-gophers/repos")
        .then(resp => resp.json())
        .then(object => {
            console.table(object)
            for (const key in object) {
                if (Object.hasOwnProperty.call(object, key)) {
                    const element = object[key];
                    projectsList.push({
                        "repoName": element["full_name"],
                        "repoUrl": element["url"],
                        "repoAvatar": element["owner"]["avatar_url"]
                    })

                }
            }
            if (projectsList.length > 0) {
                projectsDiv = document.querySelector("div#lineup")
                projectsDiv.classList.remove("loading")
                projectsDiv.innerText = projectsList[1]["repoName"]
                console.log(projectsList)

            }
        })
}