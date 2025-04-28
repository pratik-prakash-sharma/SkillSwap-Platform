// app.post("/user/login", async (req, res) => {
//     let { email, password } = req.body;
//     let user = await User.findOne({ email, password });
//     if (user) {
//         req.session.user = user;
//         res.redirect("/home");
//     } else {
//         res.send("Invalid credentials");
//     }
// })



// app.post("/user/register", (req, res) => {
//     let {name, email, password} = req.body;
//     let newUser = new User ({
//         name: name,
//         email: email,
//         password: password,
//     });
//     newUser.save().then((res)=>{
//         console.log(res)
//     }).catch((err)=>{
//         console.log(err)
//     })
// })