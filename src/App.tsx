import Header from 'components/Header'
import Navbar from 'components/Navbar'
import React, {FC} from 'react'

const App: FC = () => {
  return (
    <div className="min-w-full h-screen overflow-x-hidden flex flex-col">
      <Navbar />
      <Header />
    </div>
  )
}

export default App
