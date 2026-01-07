// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';
import mdx from '@astrojs/mdx';

// https://astro.build/config
export default defineConfig({
    integrations: [starlight({
        title: 'CMPSC 302: Web Design',
        customCss: [
            './src/styles/custom.css'
        ],
        social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/allegheny-college-cmpsc-302-spring-2026' }],
        sidebar: [
            {
                label: 'Course Materials',
                items: [
                    { label: 'Syllabus', slug: 'course-materials/syllabus' },
                    { label: 'Contract', slug: 'course-materials/contract' },
                ]
            },
            {
                label: 'Course Content',
                autogenerate: { directory: 'content' },
            },
        ],
		}), mdx()],
});