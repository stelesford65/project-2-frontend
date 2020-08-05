console.log($)

const url = `https://spreadsheets.google.com/feeds/list/1SF3K-j_H4My3DbWC4xtzb7sW-Rt-DWttwMwcwjdkaGo/od6/public/values?alt=json`

    fetch(url)  //starts the fetch process
       .then(response => response.json()) //returns the JSON data as a JS object
       .then(data => {
        //console.log(data.feed.entry); //returns array of information
           const projects = data.feed.entry.map(entry => {
            return { //returns new object with the following properties
                title: entry.gsx$title.$t,
                image: entry.gsx$image.$t,
                description: entry.gsx$description.$t,
                url: entry.gsx$url.$t
             }
           })
        //console.log(projects);
           app(projects); //*Add this, Shawn*
       });

    const app = (data) =>{
        console.log('app is running!')
        console.log(data)

        const createProjectElement = (project) => {
            const $div = $('<div>').addClass("project")
            $div.append($('<h2>').text(project.title))
            $div.append($('<img>').attr('src', project.image))
            $("img").width(950);
            $div.append($('<p>').addClass("description").text(project.description))
            $div.append($('<a>').attr('href', project.url).text("Check it out"))
            return $div
        }
    //$('body').append(createProjectElement(data[0]))
    data.forEach(project => {
        const $projectDiv = createProjectElement(project)
        $('body').append($projectDiv)
    })
   
}