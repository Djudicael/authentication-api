import AuthenticationService from '../service/authenticationService.mjs'

const authenticationService = new AuthenticationService();

export const signUp = async (req, res, next) => {

    const user = { ...req.body };
    console.log("user");
    const response = await await authenticationService.register(user).catch(function (error) {

        //TODO refactor response
        console.error('Error saving document', error);
        return res.status(500).json(error);
    });

    console.log(response);

    return res.status(200).json(response);
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