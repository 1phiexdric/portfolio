import fs from 'fs';
import * as path from 'path';
import matter from 'gray-matter';

const POSTS_DIR = path.resolve('src/posts');

export async function load() {
    try {
        const files = fs.readdirSync(POSTS_DIR);

        const posts = files.map(filename => {
            try {
                const slug = filename.replace(".md", "");
                const filePath = path.join(POSTS_DIR, filename);
                

                const fileContent = fs.readFileSync(filePath, 'utf-8');
                const { data } = matter(fileContent);

                return {
                    slug: slug,
                    title: data.title,
                    description: data.description,
                    date: data.date,
                    tags: data.tags,
                    published: data.published
                };
            } catch (error) {
                console.error('Error processing file:', filename, error);
                return null;
            }
        }).filter(post => post && post.published)
          .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());

        console.log('Returning posts:', posts);
        return {
            posts
        };
    } catch (error) {
        console.error('Failed to load posts:', error);
        return {
            posts: [],
            error: 'Failed to load posts. Please check the logs.'
        };
    }
}