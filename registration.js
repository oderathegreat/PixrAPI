import express from "express";
import res from "express/lib/response";
const router = express.Router();


router.get('/registration', (req, res) => {

     res.send('Regitsration route');


});



//export our router to make use of it
export default router;
