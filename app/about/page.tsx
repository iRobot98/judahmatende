import PlaceHolderBody from '@/components/body-helloworld'
import Nav from '@/components/nav'
import Image from 'next/image'

export default function Home() {
  return (
    <main className='relative'>
    <Nav/>
    <PlaceHolderBody />
    </main>
  )
}