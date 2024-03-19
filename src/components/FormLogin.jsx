import axios from 'axios'
import GoogleButton from 'react-google-button'

export default function FormLogin() {
  const fetchAuthUser = async () => {
    const res = await axios
      .get('http://localhost:3000/auth/users', { withCredentials: true })
      .catch((error) => {
        console.log(error)
      })

    if (res && res.data) {
      console.log('User:', res.data)
    }
  }

  const redirectToGoogleSSO = () => {
    let timer = null
    const googleLoginURL = 'http://localhost:3000/auth/google'
    const newWindow = window.open(googleLoginURL, '_blank', 'width=500,height=600')

    if (newWindow) {
      console.log(newWindow)
      timer = setInterval(() => {
        if (!newWindow.closed) {
          console.log('Yay we are authenticated', newWindow.closed)
          fetchAuthUser()
          if (timer) clearInterval(timer)
        } else {
          console.log('!newWindow.closed', newWindow.closed)
          if (timer) clearInterval(timer)
        }
      }, 500)
    }
  }

  return (
    <>
      <GoogleButton onClick={redirectToGoogleSSO} />
    </>
  )
}
