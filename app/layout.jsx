import './globals.css'

export const metadata = {
  title: 'Guide MU Premium',
  description: 'Portal Definitivo de MU Online',
}

export default function RootLayout({ children }) {
  return (
    <html lang="pt-br">
      <body>{children}</body>
    </html>
  )
}
