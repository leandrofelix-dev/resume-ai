import { Header } from "../organisms/header";
import { Main } from "../organisms/main";

export function Home() {
  return (
    <div className="min-h-screen flex flex-col">
      <Header/>
      <Main />
    </div>
  )
}