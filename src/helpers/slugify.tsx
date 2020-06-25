const slugify: Function = (slug: string) => {
	slug = slug.replace(/ /g, `-`).toLowerCase();
	// slug = slug.replace(/[^\x00-\x7F]/g, ``);
	return slug;
};

export default slugify;
