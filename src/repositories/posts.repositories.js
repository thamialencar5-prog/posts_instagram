import { knex } from "../database/knex.js";

class PostsRepository {
    async getAll() {
        return await knex('posts').select('*');
    }
    async getById (id) {
        return await knex('posts')
            .where({id})
            .first();
    }
    async create(dados) {
        const posts = await knex('posts')
              .insert(dados)
              .returning('*');
        return posts[0];
    }
    async delete (id) {
      const posts = await knex ('posts') 
           .where({id})
           .del()
           .returning('*');
           
    return {
        mensagem: 'posts deletado',
        posts: posts[0]
      };

    }
    async updateput(id, dados) {
        const posts = await knex('posts')
            .where({id})
            .update(dados)
            .returning('*');
    return {
        mensagem: 'posts atualizado com sucesso',
        postsAtualizado: posts[0]
    };

    }
    async updateKnex(id, dados) {
        const postsAtualizado = await knex('posts')
              .where({id})
              .update(dados)
              .returning('*');
    return {
        mensagem: 'posts atualizado com suceesso',
        posts: postsAtualizado[0]
    };
  }
}

export const postsRepository = new PostsRepository(); 