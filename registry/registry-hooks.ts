import type { Registry } from "./schema";

export const hooks: Registry = [
    {
        name: "use-auto-resize-textarea",
        type: "registry:hook",
        files: [
            {
                path: "hooks/use-auto-resize-textarea.tsx",
                type: "registry:hook",
            },
        ],
    },
    {
        name: "use-copy-to-clipboard",
        type: "registry:hook",
        files: [
            {
                path: "hooks/use-copy-to-clipboard.tsx",
                type: "registry:hook",
            },
        ],
    },
]