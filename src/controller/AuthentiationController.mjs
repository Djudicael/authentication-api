export const signUp = async (req, res, next) => {

    //const user = { ...req.body };
    console.log("user");
    return res.status(200).json({ "doc": "dodo" });
    /* authenticationService.register(user).then(function (doc) {
         console.log('Saved documents ' + doc);
 
         return res.status(200).json(doc);
     })
         .catch(function (error) {
             console.error('Error saving document', error);
             return res.status(500).json(error);
         });*/
};


export const logIn = async (req, res, next) => {

    const login = { ...req.body };
    console.log(login);


    /*authenticationService.login(login).then(function (doc) {
        console.log('Saved documents ' + doc);

        return res.status(200).json(doc);
    })
        .catch(function (error) {
            console.error('Error saving document', error);
            return res.status(500).json(error);
        });*/

};

//export default { signUp, logIn };