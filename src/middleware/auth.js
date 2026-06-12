const adminAuth = (req, res , next)=>{
    let token = "xyz";

    try {
         let isAdminAuthorized = token === "xyz";

    if(!isAdminAuthorized){
        res.status(401).send("input credentials");
    }else{
        next()
    }
        
    } catch (error) {
        throw new Error("something new error")
        
    }

   

}

module.exports = {
    adminAuth
}