import { FaDiscord, FaGithub, FaInstagram } from 'react-icons/fa';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";

interface SocialsProps {
  username: string;
  github: string;
  instagram?: string;
  discord: string;
}

export function Socials({
  username,
  github,
  instagram,
  discord
}: SocialsProps) {
  return (
    <Card className='bg-neutral-900'>
      <CardHeader className="pb-3">
        <CardTitle className='bg-gradient-to-r from-sky-500 via-purple-400 to-purple-600 text-transparent bg-clip-text'>Socials <span className='ml-[150px] text-blue-500'>[</span><span className='bg-gradient-to-r from-sky-500 via-purple-400 to-purple-600 text-transparent bg-clip-text'>{username}</span><span className='text-blue-500'>]</span></CardTitle>
        <CardDescription>
          Check out my socials for contact, or updates.
        </CardDescription>
      </CardHeader>
      <CardContent className="grid gap-1 text-white">
        <a href={`https://github.com/${github}`} target="_blank" rel="noopener noreferrer" className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-neutral-700">
          <FaGithub className="mt-px h-5 w-5" />
          <div className="space-y-1">
            <p className="text-sm font-medium leading-none">GitHub</p>
            <p className="text-sm text-muted-foreground">
              Check out my GitHub
            </p>
          </div>
        </a>
        {instagram && (
          <a href={`https://www.instagram.com/${instagram}`} target="_blank" rel="noopener noreferrer" className="-mx-2 flex items-start space-x-4 rounded-md hover:bg-neutral-700 p-2 transition-all">
            <FaInstagram className="mt-px h-5 w-5" />
            <div className="space-y-1">
              <p className="text-sm font-medium leading-none text-white">Instagram</p>
              <p className="text-sm text-muted-foreground">
                Follow my Instagram
              </p>
            </div>
          </a>
        )}
        <a href={`https://discordapp.com/users/${discord}`} target="_blank" rel="noopener noreferrer" className="-mx-2 flex items-start space-x-4 rounded-md p-2 transition-all hover:bg-neutral-700">
          <FaDiscord className="mt-px h-5 w-5" />
          <div className="space-y-1">
            <p className="text-sm font-medium leading-none">Discord</p>
            <p className="text-sm text-muted-foreground">
              Add me on Discord
            </p>
          </div>
        </a>
      </CardContent>
    </Card>
  )
}