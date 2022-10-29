
interface MdNode {
  type: "METADATA" | "HEADING" | "SEPARATOR" | "COMMENT" | "TEXT" | "CODE" | "HTML",
  raw: string
}

interface mdToJsOptions {
  preProcessor?: (node: MdNode) => Promise<{}>
  postProcessor?: (node: MdNode) => Promise<{}>
}

const mdToNodes = (md: string) => {
  const match = md.match(/---.*---/g)
}

export const mdToJs = async (md: string, options: mdToJsOptions = {}) => {
  return {}
}

const frontMatterRegex = /(?<frontMatter>(?<=\n\n^---$\n)[\n\r\s\"\'\-\:\>\|a-zA-Z0-9]*(?=^---$\n\n))/gms
const headingRegex = /(?<heading>(?<=^---\n\n).*?(?=#))/gms //TODO Needs improvement

/** Matches top level headers, breaks for hr or another top level header */
const sectionRegex = /(?<section>(?<=\n^#+ )(?<title>.*?)\n(?<content>(?<=\n)((.*(?=\n\n---\n\n))|(.*?(?=^# ))|(.*)))?)/gms

// const TopLevelNodes = 

/*--------------------  Test Regex  -------------------------

<!-- Heading comment -->



Some heading Text that isn't nested

# heading1

---
name: "Venus"
discoverer: "Galileo Galilei"
---

some text in heading 1

```ts
const someCode = 1234
```

## subHeading1

Some more text

---

## subheading2

_Some Bold Text_

---

---

# heading 2

---
metaInHeading: test
discoverer: "Galileo Galilei"
---

Some more text again

# heading with no content

# heading 4

---
metaInHeading: test
discoverer: "Galileo Galilei"
---

Some more text again