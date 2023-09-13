import { Aside } from "../molecules/aside";
import { Content } from "../molecules/content";

export function Main() {
  return (
    <main className="flex-1 p-6 flex gap-6">
      <Content />
      <Aside />
    </main>
  )
}