import { Pool } from './database/db.js';
import { knex } from './database/knex.js';
import { postsRepository } from "../repositories/posts.repositories.js";

class postsController {
    async getAll() {
        const posts = await postsRepository.getAll()
        return posts
    }
    async getById(id) {
        const posts = await postsRepository.getById(id)
        return posts
    }
    async create(data) {
        const postsCriado = await postsRepository.create(data)
        return postsCriado
    }
    async delete(id) {
        const postDeletado = await postsRepository.delete(id)
        return postDeletado
    }
    async updateput (id, data) {
        const posts = await postsRepository.updateput(id, data)
        return posts
    }
    async upadatepatch (id, datta) {
        const posts = await postsRepository.upadatepatch(id, data)
        return posts
    }
    async updateknex (id, dados) {
        const [postsAtualizado] = await postsRepository.updateknex(id,dados)
        return postsAtualizado
    }
}

export const postsServices = new postsServices();



import { postsRepository } from "../repositories/posts.repositories.js";

class PostsController {
    async getAll() {
        const posts = await postsRepository.getAll();
        return posts;
    }

    async getById(id) {
        const post = await postsRepository.getById(id);
        return post;
    }

    async create(data) {
        const postCriado = await postsRepository.create(data);
        return postCriado;
    }

    async delete(id) {
        const postDeletado = await postsRepository.delete(id);
        return postDeletado;
    }

    async updateput(id, data) {
        const postAtualizado = await postsRepository.updateput(id, data);
        return postAtualizado;
    }

    async updatepatch(id, data) {
        const postAtualizado = await postsRepository.updatepatch(id, data);
        return postAtualizado;
    }

    async updateknex(id, dados) {
        const postAtualizado = await postsRepository.updateknex(id, dados);
        return postAtualizado;
    }
}

export const postsController = new PostsController();
