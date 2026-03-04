import './globals.css'

export const metadata = {
  title: 'Pterodactyl Control Panel',
  description: 'Custom Dashboard for Pterodactyl',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
