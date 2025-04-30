import './global.css'

export default function Layout({ children }: { children: React.ReactNode }) {
   
 return (
   <html>
     <body className='overflow-x-hidden'>
       {children}
     </body>
   </html>
 )
    }