import "./globals.css";
import { ClerkProvider } from "@clerk/nextjs";
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider>
    <html lang="en">
      <body
         cz-shortcut-listen="true"
      >
        {children}
      </body>
      </html>
      </ClerkProvider>
  );
}
