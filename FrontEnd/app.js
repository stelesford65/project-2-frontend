const URL = "https://pilotlife.herokuapp.com/" 


const getPilots = async()=>{ //Reading on async

    const result = await fetch(URL + "pilot").then(res => res.json())//Takes response from fecth and turns it into a usable JS object
    console.log(result)

result.forEach(element => {
   
    //Div, append text to that specific image within the div
    const newDiv = $("<div>").addClass("post");
    newDiv.append($('<img>').attr("src",element.post)); 
    newDiv.append($('<p>').text(element.caption));
    newDiv.append($('<input>').text(""))//Leave blank so that we can pull text from there and add it to the endpoint where we'll make make the post request
   //console.log(element.comments);
    $("#photos").append(newDiv) 
});
}

//Caption, comments, and post button

getPilots()