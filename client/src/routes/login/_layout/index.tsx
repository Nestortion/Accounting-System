import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Separator } from '@/components/ui/separator'
import { Text } from '@/components/ui/text'
import { createFileRoute } from '@tanstack/react-router'
import { useState } from 'react'

export const Route = createFileRoute('/login/_layout/')({ component: login })

function login() {
  const [username, setUsername] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  return (
    <div className=" h-[95vh] max-h-[95vh] flex flex-col gap-4 md:flex-row">
      <div className="flex-1 flex flex-col items-center justify-center gap-4">
        <div>
          <img
            className="w-40 md:w-80"
            src="https://www.5lsolutions.com/wp-content/uploads/2023/03/FiveL-1.png"
          />
        </div>
        <Text variant={'heading1bold'}>Acounting System</Text>
      </div>
      <Separator orientation="horizontal" className="md:hidden" />
      <Separator orientation="vertical" className="hidden md:block" />
      <div className="flex-1 flex items-center justify-center px-8 pb-8 md:pb-0">
        <div>
          <div className="flex flex-col gap-4 ">
            <div className="flex flex-col gap-2 items-center md:items-start">
              <Text variant={'heading1bold'} className="font-thin md:font-bold">
                Login
              </Text>
              <Text
                variant={'heading4ghost'}
                className="text-center md:text-start "
              >
                Enter your username and password to login!
              </Text>
            </div>
            <div className="flex flex-col gap-4 w-full">
              <div className="w-full">
                <Label>Username</Label>
                <Input
                  className="w-full"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                />
              </div>
              <div>
                <Label>Password</Label>
                <Input
                  className="w-full"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
              <Button className="w-full mt-2">Sign in</Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default login
