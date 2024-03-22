import Menu from '@/components/menu'
import { useRouter } from 'next/router'
import React from 'react'

const Produto = () => {
   const router = useRouter();
   const {descricao, valor} = router.query;
  return (
    <>
      <Menu />
      <>
        <header>
           Produtos
        </header>
        {valor > 0 && 
            <div>
               Produto: {descricao} - Preço: {valor}
            </div>
         }
      </>
    </>
  )
}

export default Produto
