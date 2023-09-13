import { UploadCloud, Upload, Wand2 } from 'lucide-react'
import { Separator } from '../atoms/primitives/separator'
import { Label } from '../atoms/primitives/label'
import { Textarea } from '../atoms/primitives/textarea'
import { Button } from '../atoms/primitives/button'
import { Select } from '../atoms/select'
import { Slider } from '../atoms/primitives/slider'


export function Aside() {
  return (
    <aside className="w-80 space-y-6">
      <form className="space-y-6 w-full">
        <label 
          htmlFor="video"
          className="border flex rounded-xl aspect-video cursor-pointer border-dashed text-sm flex-col gap-2 items-center justify-center text-muted-foreground hover:bg-primary/5"
        >
          <UploadCloud className='w-6 h-6'/>
          Carregar video
        </label>
        <input type="file" accept="video/mp4" name="video" id="video" className="sr-only"/>

        <Separator />
        <div className="space-y-1">
          <Label htmlFor='transcription_prompt'>Prompt de transcrição</Label>
          <Textarea 
            className='h-20 leading-relaxed resize-none'
            id='transcription_prompt'
            placeholder='Inclua palavras-chave mencionadas no video, separadas por vírgula (,)'/>
        </div>
        <Button type='submit' className='w-full rounded'>
          <Upload className='w-4 h-4 mr-2'/>
          Carregar video
        </Button>
      </form>
      <Separator />
      <form className='space-y-6'>
      <div className="space-y-2">
          <Label>Prompt</Label>
          <Select 
            defaultValue='gpt-3.5'
            disabled
            options={[{
              value: 'gpt-3.5',
              label: 'GPT-3.5'
            }]}
          />
        </div>
        <Separator />
        <div className="space-y-2">
          <Label>Modelo</Label>
          <Select 
            placeholder='Selecione um modelo'
            options={[{
              value: 'title',
              label: 'Título do youtube'
            },
            {
              value: 'description',
              label: 'Descrição do youtube'
            }
          ]}
          />
        </div>
        <Separator />
        <div className="space-y-2">
          <Label>Temperatura</Label>
          <Slider
            min={0}
            max={1}
            step={0.1}
            className='w-full color-foreground'
          />
          <span className='block text-xs text-muted-foreground italic leading-relaxed'>Valores mais altos tendem a deixar o resultado mais criativo e com possíveis erros.</span>
        </div>
        <Separator />
        <Button
          className='w-full rounded'
          type='submit'
        >
          <Wand2 className='w-4 h-4 mr-2' />
          Executar
        </Button>
      </form>
    </aside>
  )
}