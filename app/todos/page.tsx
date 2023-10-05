import { TypographyH1 } from '@/components/ui/typography'
import { getAuthSession } from '@/lib/auth-options'
import { redirect } from 'next/navigation'
import React from 'react'

type Props = {}

const TodosPage = async (props: Props) => {
  const { session } = await getAuthSession()
  if (!session) {
    return redirect('/auth/signin?callbackUrl=/todos')
  }
  return (
    <TypographyH1>TodosPage</TypographyH1>
  )
}

export default TodosPage