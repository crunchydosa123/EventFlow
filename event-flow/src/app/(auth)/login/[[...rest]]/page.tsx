import React from 'react'
import { SignIn } from '@clerk/nextjs'


type Props = {}

const page = (props: Props) => {
  return (
    <SignIn afterSignInUrl="/dashboard" redirectUrl="/dashboard" />
  )
}

export default page