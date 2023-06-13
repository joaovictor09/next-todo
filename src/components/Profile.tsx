import { getServerSession } from 'next-auth'
import Image from 'next/image'
import { SignOutButton } from './SignOutButton'

export async function Profile() {
  const session = await getServerSession()

  return (
    <div className="absolute right-10 top-10 flex items-center gap-3 text-left text-zinc-100">
      <Image
        src={session?.user?.image!}
        width={40}
        height={40}
        alt=""
        className="h-10 w-10 rounded-full"
      />

      <div className="flex max-w-[200px] flex-col text-sm leading-snug">
        <p>{session?.user?.name}</p>
        <SignOutButton />
      </div>
    </div>
  )
}
