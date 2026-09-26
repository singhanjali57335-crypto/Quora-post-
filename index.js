const express = require("express");
const app = express();
const port = 8080;
const path =  require("path");
const {v4: uuidv4} = require('uuid');
const methodOverride = require("method-override")

app.use(express.urlencoded({extended: true}));
app.use(methodOverride("_method"));
app.set("view engine" , "ejs");
app.set("views engine" , path.join(__dirname, "VIEWS"));
app.use(express.static(path.join(__dirname, "Public")));

let posts =[
    {
        id: uuidv4(),
    username: "apna college",
    content: "I love coding!",
},
{
    id: uuidv4(),
    username: "Anjali",
    content: "Hardwork is important to acheive success!",
},
{
    id: uuidv4(),
    username: "Anamika",
    content: "I got selected for my first internship!",
}
];
app.get("/posts", (req , res) =>{
res.render("index.ejs" , {posts});
});

app.get("/posts/new", (req , res) =>{
res.render("new.ejs" , {posts});
});

app.post("/posts", (req , res) =>{
let {username, content} = req.body;
let id = uuidv4();
posts.push({ id, username, content});
res.redirect("/posts");
});

app.get("/posts/:id", (req , res) =>{
let {id} = req.params;
let post = posts.find((p) => id === p.id);
console.log(id);
res.render("show.ejs", {post});
});
 
app.patch("/posts/:id", (req , res) =>{
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
    let newContent = req.body.content;
    post.content = newContent;
    console.log(post);
    res.redirect("/posts");
});

app.get("/posts/:id/edit", (req , res) =>{
    let {id} = req.params;
    let post = posts.find((p) => id === p.id);
    res.render("edit.ejs" , {post});
});

app.delete("/posts/:id" , (req , res) =>{
    let {id} = req.params;
     posts = posts.filter((p) => id !== p.id);
     res.redirect("/posts");
})
app.listen(port, () =>{
    console.log("Listening to port : 8080");
})