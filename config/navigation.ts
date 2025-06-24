export interface NavItem{
    id:string | number,
    title:string,
    href:string,
    description?:string,
    count?:string | number,
    isComingSoon?:boolean,
    isNew?:boolean,
    isLab?:boolean,
}

export interface NavSection{
    title:string,
    items:NavItem[],

}

export const NavigationSections : NavSection[] = [
    {
        title:"Getting started",
        items:[
            {
                id:"intro",
                title:"Installation",
                href:"/docs",
                description:"Installation guidlines for users"
            }
        ]
    },

    {
        title:"Components",
        items:[
            {
                id:1,
                title:"Cards",
                href:"/docs/components/card",
                description:"Clean , customizable card components",
                count:5
            },

            {
                id:2,
                title:"Input",
                href:"/docs/components/input",
                description:"Mordern input components ",
                count:5
            },

            {
                id:3,
                title:"Alert",
                href:"/docs/components/alert",
                description:"Well designed alert components",
                count:5
            },

            {
                id:4,
                title:"Button",
                href:"/docs/components/button",
                description:"Designing and customizable butons",
                count:5
            },

            {
                id:5,
                title:"Loaders",
                href:"/docs/components/loader",
                description:"Loader components with Visually appealing designs",
                count:5
            },

        ]
    },

    {
        title: "Hooks",
        items: [
            {
                id: 1,
                title: "useAutoResizeTextarea",
                href: "/docs/hooks/useAutoResizeTextarea",
            },
        ],
    },
]