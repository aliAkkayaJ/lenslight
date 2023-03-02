const getIndexPage = (req, res) => {
    console.log("request user:::", req.user);

    res.render("index", {
        link: "index"
    })
}

const getAboutPage = (req, res) => {
    res.render("about", {
        link: "about"
    })
}

const getRegisterPage = (req, res) => {
    res.render("register", {
        link: "register"
    })
}

const getLoginPage = (req, res) => {
    res.render("login", {
        link: "login"
    })
}

const getLogout = (req, res) => {
    res.cookie("jwt", "", {
        maxAge: 1  //1milisn
    })
    res.redirect("/")
}
export { getIndexPage, getAboutPage, getRegisterPage, getLoginPage, getLogout, };