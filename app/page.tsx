import Footer from "@/components/nav/Footer"
import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { FiEdit3 } from "react-icons/fi"

const Home = () => {
  return (
    <main className="w-full h-[90vh] flex flex-col justify-between">
      <section className="w-full flex flex-col lg:flex-row lg:justify-center lg:items-center px-10 lg:px-28 pt-10 gap-10 lg:gap-28">
        <Image
          src="https://illustrations.popsy.co/white/work-from-home.svg"
          width={100}
          height={100}
          alt="blogging-image"
          className="w-[200px] h-[200px] lg:w-[500px] lg:h-[500px] xl:w-[600px] xl:h-[600px] dark:bg-white/50 dark:rounded-2xl"
          priority
        />

        <div className="w-full flex flex-col gap-4">
          <h1 className="text-6xl font-bold">Blog it!</h1>
          <p className="text-lg opacity-80">
            Platform for individuals to share their unique perspectives, spark
            meaningful conversations, and inspire others with valuable insights,
            making it an indispensable medium for personal expression and
            community engagement.
          </p>

          <div className="flex gap-3 mt-3">
            <Link href="/add-blog">
              <Button variant="outline" className="border-2 border-border">
                Write a Blog <FiEdit3 className="ml-2" />
              </Button>
            </Link>

            <Link href="/all-blog">
              <Button>View All Blogs</Button>
            </Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  )
}

export default Home
