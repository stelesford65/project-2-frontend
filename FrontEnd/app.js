//const { delete } = require("vue/types/umd");

//const { update } = require("../../project-2-backend/models/pilot");

const URL = "https://pilotlife.herokuapp.com/" 
//DELETE
const deletePost = async(event) =>{
    console.log(event.target.id);//FOr debugging
    const result = await fetch(URL + "pilot/"+event.target.id, 
    {method:"delete"}).then(res => res.json())
    console.log(result)
    getPilots()
    }
//ADDING COMMENTS
const addComment = async(event) =>{ //Function for adding a comment
   event.preventDefault()
    console.log(event.target);
    const text = $(`#comment-${event.target.id}`).val()//Getting the value of the text of a comment
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
//--------------------------
//CREATE
const createPost =  async() =>{
const body = {
  "post": $("#image-url").val(),
  "caption":$("#desc").val()
   }
   const result = await fetch(URL + "pilot/", 
   {method:"post",
   headers:{
       "Content-Type":"application/json"
   }, 
   body: JSON.stringify(body)
   
   }).then(res => res.json())
   console.log(result)
   getPilots()
}
//CREATE
$("#submit").click(createPost)
const updatePost = async(event) =>{
console.log(event.target.id)
const body = {
    "post": $("#image-url-"+event.target.id).val(),
    "caption":$("#desc-"+event.target.id).val()
     }
     console.log(body)
     const result = await fetch(URL + "pilot/"+event.target.id, 
   {method:"put",
   headers:{
       "Content-Type":"application/json"
   }, 
   body: JSON.stringify(body)//Convert object to string
   
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
    const newDiv = $("<div>").addClass("post");//Created newDiv to append HTML elements to it
    newDiv.append($('<img>').attr("src",element.post)); //Image
    newDiv.append($('<p>').text(element.caption));//Caption
    //UPDATE
    const updateDiv = $('<div>').addClass("update").css("display","none")
    updateDiv.append($('<input>').attr("id",`image-url-${element._id}`).val(element.post))//You can now change the image URL
    updateDiv.append($('<input>').attr("id",`desc-${element._id}`).val(element.caption))//You can now edit the caption
    updateDiv.append($('<button>').text("Update Post").attr("id",element._id).click(updatePost))
    newDiv.append(updateDiv)

    newDiv.append($('<input>').attr("id",`comment-${element._id}`))//Leave blank so that we can pull text from there and add it to the endpoint where we'll make make the post request
    newDiv.append($('<button>').text("Change").click(()=>updateDiv.toggle()))//.toggle() fixed the update issue
    newDiv.append($('<button>').text("Delete").attr("id",element._id).click(deletePost))//Delete a post
    newDiv.append($('<h3>').text(""));
    newDiv.append($('<button>').text("Send").attr("id",element._id).click(addComment))//Add a comment
   
    const commentDiv = $("<div>")
    console.log(element.comments)//Debugging
    element.comments.forEach(comment=> {
        console.log(comment)//Debugging
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

/*
Post MVP
-Delete/Edit comments
-Allow users to report innapropriate behavior
-Fully functional log-in
-Allow millions of comments to fit in one little text box under each post
-Create a Logo
-Add more styling
-Bootstrap
*/