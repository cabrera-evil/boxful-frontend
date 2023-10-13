export const metadata = {
  title: 'Boxful Technical Test',
  description: 'Powered by Next.js, TypeScript, and Ant Design',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        {children}
        </body>
    </html>
  )
}
