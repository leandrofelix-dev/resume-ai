import { Textarea } from "../atoms/primitives/textarea";
import { AlertCircle } from 'lucide-react'

export function Content () {
  return (
    <div className="flex flex-col flex-1 gap-4">
      <div className="grid grid-rows-2 gap-4 flex-1">
        <Textarea placeholder="Insira o prompt" className="resize-none p-5 leading-relaxed"/>
        <Textarea placeholder="Resultado gerado pela I.A." readOnly className="resize-none p-5 leading-relaxed"/>
      </div>
      <div className="flex items-center justify-left">
        <AlertCircle className="w-4 h-4 mr-2"/>
        <p className="text-sm text-muted-foreground">
          Lembre-se: você pode utilizar a variável
          <code className="text-violet-400">{' {transcription} '}</code>
          no seu prompt para adicionar o conteúdo da transcrição do vídeo selecionado.
        </p>
      </div>
    </div>
  )
}