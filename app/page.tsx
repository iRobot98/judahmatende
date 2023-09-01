import Image from 'next/image'

export default function Home() {
  return (
   <main className='relative'>
   <nav className='flex sticky w-full '>
    <ul className='flex mx-auto h-[3rem]'>
      {[["/home","Home"],["/about",'About'],["/blog","Blog"]].map(
        ([link, text]:string[],i:number)=>(
        <li key={`page_link_${i}`} className='h-full flex-center mx-2 py-2'>
        <a href={link} className='min-w-[4rem]'>
          {text}
        </a>
        </li>
      ))}
    </ul>
   </nav>
   </main>
  )
}
