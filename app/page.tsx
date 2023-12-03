import Image from 'next/image'

export default function Home() {
  const handleSignup = (event: { preventDefault: () => void } ) => {
    event.preventDefault()
    
  }
  return (
    <main className="flex min-h-screen max-w-screen items-center justify-between p-24 flex-col">
      <div className="z-10 w-full items-center justify-between font-mono text-sm lg:flex flex-col my-5">
        <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 my-5">
          Eu te apoio.&nbsp;
        </p>
        <div className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
          <a
            className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0"
            href="https://cvv.org.br/"
            target="_blank"
            rel="noopener noreferrer"
          >
            By{' '}
            <Image 
              src="/lamp.png"
              alt="Will e Rafa"
              className="wrapper"
              width={100}
              height={24}
              priority
            />
          </a>
        </div>
        <div className="flex flex-col align-middle my-28 w-56">
        <form method="post" className='flex flex-col gap-4' >
          <label htmlFor="nome">Nome</label>
          <input type="text" name="nome" id="nome" placeholder='James' required className='rounded h-8 text-zinc-950 text-lg'/>
          <label htmlFor="email">E-mail</label>
          <input type="email" name="email" id="email" placeholder='james@james.com' required className='rounded h-8 text-zinc-950 text-lg'/>
          <label htmlFor="telefone">Telefone</label>
          <input type="tel" name="telefone" id="telefone" placeholder='47 9 9999-9999' required className='rounded h-8 text-zinc-950 text-lg'/>
          <button type="submit" className='rounded border-2 border-sky-200 h-10' onSubmit={handleSignup}>Enviar</button>
        </form>
        <p className="fixed left-0 bottom-32 flex w-full justify-center border-b border-gray-300 bg-gradient-to-b from-zinc-200 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 dark:bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto  lg:rounded-xl lg:border lg:bg-gray-200 lg:p-4 lg:dark:bg-zinc-800/30 my-5">
          Emergência ligue 188.&nbsp;
        </p>
      </div>
      </div>
      
      
    </main>
  )
}
