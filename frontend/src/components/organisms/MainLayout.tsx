import Navbar from "../molicules/Navbar"

function MainLayout({children} : {children : React.ReactNode}) {
  return (
    <main className="min-h-screen dark:bg-gray-900 bg-gray-200 text-black dark:text-white">
     <Navbar/> 
     {children}
    </main>
  )
}

export default MainLayout
