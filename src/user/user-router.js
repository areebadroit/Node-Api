import {Router} from "express";
import controllers from "./user-controller"
const router = Router();

router
    .route('/')
    .post(controllers.createOne);

router
    .route('/:id')
    .get(controllers.getOne)
    .patch(controllers.updateOne)
    .delete(controllers.removeOne);

export default router;