const sanitizeSlug: Function = (slug: string) => slug.replace(/ /g, `-`).toLowerCase();
export default sanitizeSlug;
