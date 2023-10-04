

export const getNextAuthCredentials = () => {
  const githubClientId = process.env.GITHUB_CLIENT_ID
  const githubClientSecret = process.env.GITHUB_CLIENT_SECRET
  const nextAuthSecret = process.env.NEXTAUTH_SECRET

  if (!githubClientId) {
    throw new Error('GITHUB_CLIENT_ID is not set')
  }

  if (!githubClientSecret) {
    throw new Error('GITHUB_CLIENT_SECRET is not set')
  }

  if (!nextAuthSecret) {
    throw new Error('NEXTAUTH_SECRET is not set')
  }

  return {
    githubClientId,
    githubClientSecret,
    nextAuthSecret
  }
}