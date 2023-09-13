import { Button } from "../atoms/primitives/button";
import { Separator } from "../atoms/primitives/separator";

import { Github } from 'lucide-react'

export function Header() {
  return (
    <header className="px-6 py-3 flex items-center justify-between border-b">
    <h1 className="text-xl font-bold">upload.ai</h1>
    <div className="flex items-center gap-3">
      <span className="text-sm text-zinc-muted-foreground">Desenvolvido com amor por Leandro Felix 💜</span>
      <Separator orientation="vertical" className="h-6"/>
      <Button variant="outline">
        <Github className="w-4 h-4 mr-2"/>
        Github
      </Button>
    </div>
  </header>
  )
}