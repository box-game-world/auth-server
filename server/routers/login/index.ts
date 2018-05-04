import * as express from 'express';
import controller from './login.controller'

const router:express.Router = express.Router();

router.get( '/', controller.getLogin );
router.post( '/', controller.postLogin );
     

export default router;