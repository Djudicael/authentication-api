import {router} from '../../deps.mjs'
import AuthentiationController from'../controller/AuthentiationController.mjs';


// Register user
router.post('/sign-up', AuthentiationController.signUp);
router.post('/log-in', AuthentiationController.logIn);