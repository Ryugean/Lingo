import { Button } from "@/components/ui/button"
import Image from "next/image"

export const Footer = () => {
  return (
    <footer className="hidden lg:block h-20 w-full border-t-2 border-slate-200 p-2">
      <div className="max-w-screen-lg mx-auto flex items-center justify-evenly h-full">
        <Button size='lg' variant='ghost'>
          <Image 
            src="/flags/hk-square-01-256.png" 
            alt="Mandarine" 
            height={32} 
            width={40}
            className="mr-4 rounded-md"
          />
          Mandarine
        </Button>
        <Button size='lg' variant='ghost'>
          <Image 
            src="/flags/es-square-01-256.png" 
            alt="Spanish" 
            height={32} 
            width={40}
            className="mr-4 rounded-md"
          />
          Spanish
        </Button>
        <Button size='lg' variant='ghost'>
          <Image 
            src="/flags/bd-square-01-256.png" 
            alt="Bengali" 
            height={32} 
            width={40}
            className="mr-4 rounded-md"
          />
          Bengali
        </Button>
        <Button size='lg' variant='ghost'>
          <Image 
            src="/flags/gr-square-01-256.png" 
            alt="Greece" 
            height={32} 
            width={40}
            className="mr-4 rounded-md"
          />
          Greece
        </Button>
        <Button size='lg' variant='ghost'>
          <Image 
            src="/flags/cu-square-01-256.png" 
            alt="Cuban" 
            height={32} 
            width={40}
            className="mr-4 rounded-md"
          />
          Cuban
        </Button>
      </div>
    </footer>
  )
}