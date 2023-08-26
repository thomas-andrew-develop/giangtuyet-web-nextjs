
export default function cloudinaryLoader({ src }) {
  return `${process.env.URL_FRONTEND}/${src}`
}
