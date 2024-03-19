import { useEffect } from 'react'

export default function LoginSuccess() {
  useEffect(() => {
    setTimeout(() => {
      window.close()
    }, 1000)
  }, [])

  return (
    <>
      <h1>Login success</h1>
    </>
  )
}
