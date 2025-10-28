import * as fs from 'fs';
import * as path from 'path';
import matter from 'gray-matter';
import { marked } from 'marked';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from "../$types";

const POSTS_DIR = path.resolve('src/posts')
export const load: PageServerLoad = async({ params }) => {
    const { slug } = params as { slug: string };
    try{
        const filePath = path.join(POSTS_DIR, `${slug}.md`)
        if(!fs.existsSync(filePath)){
            throw error(404, 'Post no encontrado');
        }
        const fileContent = fs.readFileSync(filePath, 'utf-8')
        const {data, content} = matter(fileContent)
        const htmlContent = marked.parse(content)
        return {
            metadata: data,
            content: htmlContent
        }
    }catch (e:any) {
 		// Si el error no fue un 404 (ej: archivo corrupto), lanzamos un 500
 		if (e.status !== 404) {
 			console.error(e);
 			throw error(500, 'No se pudo cargar el post');
 		}
 		// Re-lanzamos el error 404
 		throw e;
 	}
}