
interface MdNode {
  type: "METADATA" | "HEADING" | "SEPARATOR" | "COMMENT" | "TEXT" | "CODE" | "HTML",
  raw: string
}

interface mdToJsOptions {
  preProcessor?: (node: MdNode) => Promise<{}>
  postProcessor?: (node: MdNode) => Promise<{}>
}

export const mdToJs = async (md: string, options: mdToJsOptions = {}) => {
  return {}
}