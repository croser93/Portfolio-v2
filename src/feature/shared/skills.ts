import { _React, AngularIcon, Css3, DjangoIcon, DockerIcon, Figma, FirebaseIcon, GithubIcon, Javascript, N8nIcon, PostmanIcon, Python, Sass, SqliteIcon, SupabaseIcon, TailwindIcon, TypescriptIcon, GitIcon } from "@dev.icons/react"
import { Html5 } from "@dev.icons/react/mono";

export type SkillItem = { name: string; Icon: React.ComponentType<{ size?: number; className?: string }>; color?: string; hoverColor: string }
export const skillIconMap: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
    
    'HTML':        Html5,
    'CSS':         Css3,
    'Javascript':  Javascript,
    'Angular':     AngularIcon,
    'Typescript':  TypescriptIcon,
    'React':       _React,
    'SASS':        Sass,
    'Tailwind':    TailwindIcon,
    'Python':      Python,
    'Django':      DjangoIcon,
    'Supabase':    SupabaseIcon,
    'Firebase':    FirebaseIcon,
    'SQLite':      SqliteIcon,
    'Figma':       Figma,
    'Github':      GithubIcon,
    'Git':         GitIcon,
    'Postman':     PostmanIcon,
    'n8n':         N8nIcon,
    'Docker':      DockerIcon,
}

export const Frontend: SkillItem[] = [
    { name: 'HTML',        Icon: Html5,          color: 'text-orange-500', hoverColor: 'hover:bg-orange-500/20 hover:border-orange-500/40' },
    { name: 'CSS',         Icon: Css3,            hoverColor: 'hover:bg-blue-500/20 hover:border-blue-500/40' },
    { name: 'JavaScript',  Icon: Javascript,      hoverColor: 'hover:bg-yellow-400/20 hover:border-yellow-400/40' },
    { name: 'Angular',     Icon: AngularIcon,     hoverColor: 'hover:bg-red-500/20 hover:border-red-500/40' },
    { name: 'TypeScript',  Icon: TypescriptIcon,  hoverColor: 'hover:bg-blue-600/20 hover:border-blue-600/40' },
    { name: 'React',       Icon: _React,          hoverColor: 'hover:bg-cyan-400/20 hover:border-cyan-400/40' },
    { name: 'SASS',        Icon: Sass,            hoverColor: 'hover:bg-pink-400/20 hover:border-pink-400/40' },
    { name: 'Tailwind',    Icon: TailwindIcon,    hoverColor: 'hover:bg-teal-400/20 hover:border-teal-400/40' },
]

export const Backend: SkillItem[] = [
    { name: 'Python', Icon: Python,    hoverColor: 'hover:bg-blue-500/20 hover:border-blue-500/40' },
    { name: 'Django', Icon: DjangoIcon, hoverColor: 'hover:bg-green-400/20 hover:border-green-400/40' },
]

export const Database: SkillItem[] = [
    { name: 'Supabase', Icon: SupabaseIcon, hoverColor: 'hover:bg-green-400/20 hover:border-green-400/40' },
    { name: 'Firebase', Icon: FirebaseIcon, hoverColor: 'hover:bg-orange-500/20 hover:border-orange-500/40' },
    { name: 'SQLite',   Icon: SqliteIcon,   hoverColor: 'hover:bg-blue-500/20 hover:border-blue-500/40' },
]

export const Tools: SkillItem[] = [
    { name: 'Figma',   Icon: Figma,       hoverColor: 'hover:bg-white/10 hover:border-white/30' },
    { name: 'GitHub',  Icon: GithubIcon,  hoverColor: 'hover:bg-gray-200/20 hover:border-gray-200/40' },
    { name: 'Git',     Icon: GitIcon,     hoverColor: 'hover:bg-orange-500/20 hover:border-orange-500/40' },
    { name: 'Postman', Icon: PostmanIcon, hoverColor: 'hover:bg-orange-500/20 hover:border-orange-500/40' },
    { name: 'n8n',     Icon: N8nIcon,     hoverColor: 'hover:bg-pink-400/20 hover:border-pink-400/40' },
    { name: 'Docker',  Icon: DockerIcon,  hoverColor: 'hover:bg-blue-500/20 hover:border-blue-500/40' },
]
