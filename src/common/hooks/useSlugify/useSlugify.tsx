export const useSlugify = (str: string) => {
    return str
        .toLowerCase()
        .trim()
        .replace(/[\s_-]+/g, "_")
        .replace(/[^\w]/g, "");
}
