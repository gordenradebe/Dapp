import Head from 'next/head'
import Login from '../components/Login'
import { useMoralis } from "react-moralis";


export default function Home() {
  const {isAuthenticated , user, logout} = useMoralis()

  if (!isAuthenticated) return  <Login />

  return (
    <div className="">
      <Head>
        <title>Blockchain for Mining industry </title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
        <div>
        <h1>Hi!,  Welcome {user.get("username")}</h1> 
        <button onClick = {() =>logout()}>Logout</button>
        </div>
         

    </div>
  )
}
