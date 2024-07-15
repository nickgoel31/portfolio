"use client"

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { Smartphone } from "lucide-react";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Harsh Goel",
  description: "Portfolio",
};

// Import a routing library (choose one based on your preference)
import { useRouter } from "next/router"; // For Next.js built-in routing
import { useEffect } from "react";
// OR
// import { useNavigate } from "react-router-dom"; // For React Router DOM

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const router = useRouter(); // Get the router instance

  // Function to handle mobile redirection (assuming a specific path)
  const handleMobileRedirect = () => {
    if (window.innerWidth <= 600) {
      router.push("/mobile"); // Redirect to the mobile path
    }
  };

  // Add event listeners for initial load and resize
  useEffect(() => {
    handleMobileRedirect();
    window.addEventListener("resize", handleMobileRedirect);
    return () => window.removeEventListener("resize", handleMobileRedirect); // Cleanup on unmount
  }, []); // Empty dependency array for effect to run only on initial render

  return (
    <html lang="en">
      <body className={inter.className}>
        {/* ... Your application content goes here ... */}
        {children}
        {/* Conditional rendering of the Smartphone icon based on your logic */}
        {/* {window.innerWidth <= 600 && <Smartphone />} */}
      </body>
    </html>
  );
}
