import React from "react"
import { MDXProvider } from "@mdx-js/react"
import Code from "./Code"
import Link from './Link'

const components = {
  code: Code,
  a: Link,
}

export default props => <MDXProvider {...props} components={components} />
