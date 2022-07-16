const express = require('express')

const router = express.Router()

// Controller
const { addUsers, getUsers, getUser, updateUser, deleteUser } = require('../controllers/user')
const { getuserProfiles, getuserProfile } = require ('../controllers/userprofile')
const { register, login, checkAuth } = require("../controllers/auth");

// middleware
const { auth } = require("../middlewares/auth");

// Route
router.post('/user', addUsers)
router.get('/users', getUsers)
router.get('/user/:id', getUser)
router.patch('/user/:id', updateUser)
router.delete('/user/:id', deleteUser)

router.get('/userprofiles', getuserProfiles)
router.get('/userprofile/:id', getuserProfile)

router.post("/register", register);
router.post("/login", login);
router.get("/check-auth", auth, checkAuth);


module.exports = router