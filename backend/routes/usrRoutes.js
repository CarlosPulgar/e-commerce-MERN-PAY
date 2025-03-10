import express from 'express';
import { loginUser,registerUser,adminLogin, getProfile, updateProfile } from '../controllers/userController.js';
import authUser from '../middleware/auth.js'
import upload from '../middleware/multer.js'

const userRouter = express.Router();

userRouter.get('/get-profile', authUser,getProfile)
userRouter.post('/update-profile', upload.single('image'),authUser,updateProfile)
userRouter.post('/login', loginUser);
userRouter.post('/register', registerUser);
userRouter.post('/admin', adminLogin);

export default userRouter;