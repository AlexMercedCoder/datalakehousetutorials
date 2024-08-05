import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'DataLakehouse.help',
			social: {
				github: 'https://github.com/developer-advocacy-dremio/quick-guides-from-dremio',
			},
			tableOfContents: true,
			sidebar: [
				{
					label: 'Tutorials',
					autogenerate: { directory: '01-tutorials' },
				},
				{
					label: 'Other',
					autogenerate: { directory: '02-other' },
				},
				
			],
			head: [
				{
				  tag: 'script',
				  attrs: {
					async: true,
					src: 'https://www.googletagmanager.com/gtag/js?id=G-6Q4FD7L0ZK', // Replace with your Google Analytics ID
				  },
				},
				{
				  tag: 'script',
				  content: `
					window.dataLayer = window.dataLayer || [];
					function gtag(){dataLayer.push(arguments);}
					gtag('js', new Date());
					gtag('config', 'G-6Q4FD7L0ZK'); // Replace with your Google Analytics ID
				  `,
				},
			  ],
		}),
	],

	// Process images with sharp: https://docs.astro.build/en/guides/assets/#using-sharp
	image: { service: { entrypoint: 'astro/assets/services/sharp' } },
});
