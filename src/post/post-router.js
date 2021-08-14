import {Router} from "express";
import controllers from "./post-controller"
const router = Router();



router
.route('/post')
.get((req, res) => {
    res.send({message: "Router OK GET"});
})
.post((req, res) => {
    res.send({message: "Router OK POST"});
});

router 
.route('/post/:id/:num')
.get((req, res) => {
    console.log(req.params);
    res.send({message: "Router OK GET Var"});
})
.put((req, res) => {
    console.log(req.params);
    res.send({message: "Router OK PUT"});
})
.patch((req, res) => {
    res.send({message: "Router OK PATCH"});
})
.delete((req, res) => {
    res.send({message: "Router OK DELETE"});
});

export default router;