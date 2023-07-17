"use client"

import { Button } from "@/components/ui/button"

export default function GlobalError({
  error,
  reset,
}: {
  error: Error & { digest?: string }
  reset: () => void
}) {
  return (
    <html>
      <body className="w-full h-screen grid place-items-center">
        <h2 className="text-3xl font-bold">Something went wrong!</h2>
        <Button onClick={() => reset()} className="px-10 py-5">
          Try again
        </Button>
      </body>
    </html>
  )
}
