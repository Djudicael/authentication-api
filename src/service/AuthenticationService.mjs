import { argon2, jwt } from '../../deps.mjs';
import UserDto from '../dto/UserDto/mjs';
import UsersRepository from '../repository/UsersRepository.mjs';

//TODO look for the database
const userRepository= new UsersRepository(userColection);

export default class AuthenticationService {

  
    async register(user) {

        let userDTO = new UserDto();
        userDTO.creationDate = new Date();
        userDTO.email = user.email;
        userDTO.firtsName = user.firtsName;
        userDTO.password = await argon2.hash(user.password);
        userDTO.lastName = user.lastName;

        return this.userRepository.create(userDTO);
    }

    async login(login) {
        const userRecord = await this.userRepository.getUserByEmail(login.email);

        if (!userRecord) {
            throw new Error('User not found')
        } else {
            //console.log(userRecord)
            const correctPassword = await argon2.verify(userRecord.password, login.password);
            if (!correctPassword) {
                throw new Error('Incorrect password')
            }
        }

        const userDTO = {
            id: userRecord._id,
            email: userRecord.email,
            firtsName: userRecord.firtsName,
            roles: userRecord.roles
        };

        return {
            user: {
                email: userRecord.email,
                name: userRecord.firtsName,
            },
            token: this.generateJWT(userDTO),
        }

    }

    generateJWT(user) {
        console.log(user);
        // PAYLOAD
        var payload = {
            name: user.firtsName,
            email: user.email,
            roles: user.roles
        };
        // PRIVATE and PUBLIC key
        // var privateKEY  = fs.readFileSync('./private.key', 'utf8');
        // var publicKEY  = fs.readFileSync('./public.key', 'utf8');
        const issuer = 'Issuer';          // Issuer 
        const subject = user.id;        // Subject 
        //const audience  = 'http://test.fr'; // Audience
        // SIGNING OPTIONS
        var signOptions = {
            issuer: issuer,
            subject: subject,
            //audience:  a,
            expiresIn: "6h",
            //algorithm: "RS256"
        };
        //_key

        const signature = 'balbale78755_$^^ù';
        //const expiration = '6h';

        return jwt.sign(payload, signature, signOptions);
    }

}