import { Inter } from "next/font/google";
import "./globals.css";

import { Inter as FontSans } from "next/font/google";

import { cn } from "@/lib/utils";

const fontSans = FontSans({
  subsets: ["latin"],
  variable: "--font-sans",
});
export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

import { Toaster } from "react-hot-toast";

export default function RootLayout({ children }) {

 

  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={cn(
          "min-h-screen bg-[#f9fafb] font-sans antialiased",
          fontSans.variable
        )}
      >
        <Toaster
          position="top-center"
          reverseOrder={false}
          gutter={8}
          toastOptions={{
            // Define default options
            className: "",
            duration: 8000,
            style: {
              background: "#fff",
              color: "#000",
            },

            // Default options for specific types
            success: {
              duration: 4000,
              theme: {
                primary: "green",
                secondary: "black",
              },
            },
          }}
        />
        <div>{children}</div>
      </body>
    </html>
  );
}
