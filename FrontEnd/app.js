//const { delete } = require("vue/types/umd");

const URL = "https://pilotlife.herokuapp.com/" 

const deletePost = async(event) =>{
    console.log(event.target.id);
    const result = await fetch(URL + "pilot/"+event.target.id, 
    {method:"delete"}).then(res => res.json())
    console.log(result)
    getPilots()
    }

    const addComment = async(event) =>{ //Function for adding a comment
        console.log(event.target.id);
        const text = $(`input#${event.target.id}`).val()//Getting the value of the text of a comment
        console.log(text)
        const body = {
           "post_id":event.target.id, 
           "text":text
        } 
       
        console.log(body);
        
       const result = await fetch(URL + "pilot/comment", 
       {method:"post",
        headers:{
            "Content-Type":"application/json"
        }, 
        body: JSON.stringify(body)
        
       }).then(res => res.json())
       console.log(result)
       getPilots()
    }
   
const getPilots = async()=>{ //Reading on async

    const result = await fetch(URL + "pilot").then(res => res.json())//Takes response from fecth and turns it into a usable JS object
    console.log(result)
    $("#photos").empty()
result.forEach(element => {
   
    //Div, append text to that specific image within the div
    const newDiv = $("<div>").addClass("post");
    newDiv.append($('<img>').attr("src",element.post)); 
    newDiv.append($('<p>').text(element.caption));
    newDiv.append($('<input>').text("").attr("id",element._id))//Leave blank so that we can pull text from there and add it to the endpoint where we'll make make the post request
    newDiv.append($('<button>').text("Change"))
    newDiv.append($('<button>').text("Delete").attr("id",element._id).click(deletePost))
    newDiv.append($('<h3>').text(""));
    newDiv.append($('<button>').text("Send").attr("id",element._id).click(addComment))
    const commentDiv = $("<div>")
    element.comments.forEach(comment=> {
        console.log(comment)
        commentDiv.append($("<p>").text(comment.text))
    })
    newDiv.append(commentDiv)
    $("#photos").append(newDiv) 
})
    
    
    $(document).ready(function(){
        $('button').click(function(){
            $('h3').text($('input').text())
        });
      });
    //console.log(element.comments);
    
//});
//async for fetch. event - gives info we store as an event. Which button was pressed, etc.

}
/*
fetch(url, { method: 'POST', headers: headers, body: data})
  .then((res) => {
     return res.json()
})
.then((json) => {
  console.log(json);
  // Do something with the returned data.
});
*/
//Caption, comments, and post button

getPilots()

