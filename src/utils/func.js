export const slugify = (str)=>{
    str.toLowerCase()
    .trim()
    .replace(/[^\w\s]/gi, '')
    .replace(/ /g,'-')
    return str

}