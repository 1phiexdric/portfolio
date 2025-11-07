import * as fs from 'fs';
import * as path from 'path';
import matter from 'gray-matter';
import { Marked } from 'marked';
import { error } from '@sveltejs/kit';
import type { PageServerLoad } from "../$types";
import { markedHighlight } from 'marked-highlight';
import Prism from 'prismjs';

// --- Carga de lenguajes para Prism ---
// Importa aquí todos los lenguajes que vayas a usar en tus posts
import 'prismjs/components/prism-python';
import 'prismjs/components/prism-javascript';
import 'prismjs/components/prism-typescript';
import 'prismjs/components/prism-bash';

const POSTS_DIR = path.resolve('src/posts');

const marked = new Marked(
    markedHighlight({
        langPrefix: 'language-',
        highlight(code, lang) {
            if (!lang) return code;

            const langId = lang.toLowerCase();
            const grammar = Prism.languages[langId];

            if (!grammar) {
                
                return code;
            }
            return Prism.highlight(code, grammar, lang);
        }
    })
);

// --- Función load de SvelteKit ---
export const load: PageServerLoad = async({ params }) => {
    const { slug } = params as { slug: string };
    try{
        const filePath = path.join(POSTS_DIR, `${slug}.md`)
        if(!fs.existsSync(filePath)){
            throw error(404, 'Post no encontrado');
        }
        const fileContent = fs.readFileSync(filePath, 'utf-8')
        const {data, content} = matter(fileContent)
        
        // Usa la instancia de marked configurada
        const htmlContent = marked.parse(content);

        return {
            metadata: data,
            content: htmlContent
        }
    } catch (e:any) {
 		// Si el error no fue un 404 (ej: archivo corrupto), lanzamos un 500
 		if (e.status !== 404) {
 			console.error(e);
 			throw error(500, 'No se pudo cargar el post');
 		}
 		// Re-lanzamos el error 404
 		throw e;
 	}
}