import { postsServices } from '../Services/posts.Services.js';

class PostsController {
    async getAll(req, res) {
        try{
            const posts = await postsServices.getall();
            res.json (posts);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: "Error ao buscar posts"});
        }
    }
    async getById (req, res) {
        const postsId = req.params.id;
        try{
           const posts = await postsServices.getById(postsId);
           res.json(posts);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'erro ao buscar posts'});
        }

    }
    async create (req, res) {
        try{
           const posts = await postsServices.create(req.body);
           res.status(201).json(posts);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'erro ao buscar posts'});
        }
    }
    async delete (req, res) {
        const postsId = req.params.id;
        try{
           const posts = await postsServices.getById(postsId);
           res.json(posts);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'erro ao buscar posts'});
        }
        try{
           const posts = await postsServices.getById(postsId);
           res.starus(200).json(posts);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'erro ao buscar posts'});
        }
    }
    async updateput(req, res)  {
        const postsId = req.params.id;
        try {
            const postsAtualizado = await postsServices.postsAtualizado( pokemonId,
                    req.body);
                    res.status(200).json(postsAtualizado);
        } catch (error) {
            console.error( error);
            res.starus(500).json({ error: 'error ao atualizar posts'})
        }   
    }
    async updatepatch(req, res) {
        const postsId = req.params.id;

        try {
            const postsAtualizado = await postsServices.updatepatch(postsId, req.body);
            res.status(200).json(postsAtualizado);
        } catch (error) {
            console.error(error);
            res.status(500).json({ error: 'erro ao atualizar posts'});
        }
    }
}
    export const postsController = new PostsController();