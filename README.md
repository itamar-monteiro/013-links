## Curso de React + Next.Js + TypeScript

![Static Badge](https://img.shields.io/badge/React-Next.js-T?logo=react)

<a href="https://www.youtube.com/@cfbcursos" target="_blank" style="color:rgb(45, 216, 179); font-size: 1.2rem; font-weight: 500; text-decoration: none;">
<img width="32" height="32" src="https://img.icons8.com/3d-fluency/94/youtube-play.png" alt="youtube-play" align="center"/> CFB Cursos - Prof. Bruno
</a>

##

### Conteúdo deste projeto
* Aulas 13-14

#### - Links -> como trabalhar com links no react+next.js [[ Aula 13 ]](https://www.youtube.com/watch?v=Ru1Xt-xdZy4&list=PLx4x_zx8csUhxQHo-w0xAIMrmt8WgAowL&index=13)
Exemplo: Página produtos
```bash
import Link from 'next/link'

<Link href={"/produtos"}>Produtos</Link>
```
#### - Link com passagem de parâmetros: [[ Aula 14 ]](https://www.youtube.com/watch?v=CA3PbLShQkI&list=PLx4x_zx8csUhxQHo-w0xAIMrmt8WgAowL&index=14)
Exemplo: Página produtos passando a descricao: Produto 01 e o valor: 100
```bash
import Link from 'next/link'

   <Link href={
      {
         pathname: "/produtos",
         query: {descricao: "Produto 01", valor: 100.00}
      }
   }>
      Ver Produto 01
   </Link>
```
Na página que receberá os parâmetros:
```bash
import Menu from '@/components/menu'
import { useRouter } from 'next/router'
import React from 'react'

const Produto = () => {
const router = useRouter();
const {descricao, valor} = router.query;
   return (
   <>
      <Menu />
      <header>
         Produtos
      </header>
      
      {valor > 0 && 
         <div>
            Produto: {descricao} - Preço: {valor}
         </div>
      }
   </>
   )
}

export default Produto
```