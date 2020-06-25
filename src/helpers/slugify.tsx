const slugify: Function = (slug: string) => {
	slug = slug.replace(/ /g, `-`).toLowerCase();
	slug = slug.replace(/[^\x00-\x7F]/g, ``);
	console.log(slug);
};

export default slugify;
