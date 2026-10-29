import { Router } from 'express'
import { postsController } from '../controller/posts.controller.js'

export const postsRouter = Router ();

postsRouter.get('/', postsController.getAll);
postsRouter.get('/:id', postsController.getById);
postsRouter.post('/', postsController.create);
postsRouter.put('/,id', postsController.updateput);
postsRouter.patch('/:id', postsController.updatepatch);
postsRouter.delete('/:id', postsController.delete);