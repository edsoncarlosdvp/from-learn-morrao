import { Article } from '@/components/Article/Article';
import { HeaderBrTec } from '@/components/Header/Header';
import { Main } from '@/components/Main/Main';

export default function Home() {
  return (
    <>
      <HeaderBrTec />
      <Main>
        <Article>
          Um artigo com a primeira frase
        </Article>
        <Article>
          Um outro artigo trazendo uma nova fase
        </Article>
      </Main>
    </>
  )
}
