import Link from 'next/link'
import React from 'react'

const Menu = () => {
  return (
    <nav>
      <ul className='menu'>
         <li><Link href={"/"}>Home</Link></li>
         <li><Link href={"/produtos"}>Produtos</Link></li>
         <li><Link href={"/categorias"}>Categorias</Link></li>
         <li>
            <Link href={
               {
                  pathname: "/produtos",
                  query: {descricao: "Produto 01", valor: 100.00}
               }
            }>
               Ver Produto 01
            </Link>
         </li>
      </ul>
    </nav>
  )
}

export default Menu