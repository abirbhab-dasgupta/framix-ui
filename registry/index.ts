import {component} from "./registry-components"
import {lib} from "./registry-lib"
import {hooks} from "./registry-hooks"
import type { Registry } from "./schema"

export const registry:Registry = [...component,...hooks,...lib]