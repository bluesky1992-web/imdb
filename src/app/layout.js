import './globals.css'

export const metadata = {
  title: 'IMDB clone ',
  description: 'This is the IMDB clone website ',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
