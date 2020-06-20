const slugify: Function = (slug: string) => slug.replace(/ /g, `-`).toLowerCase();
export default slugify;
