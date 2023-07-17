//ISR
export const getISRBlogs = async () => {
  try {
    const res = await fetch("https://blog-shrix1.vercel.app/api/blog/", {
      next: { revalidate: 30 },
    })
    if (!res.ok) throw new Error("Something went wrong")
    return res.json()
  } catch (err) {
    console.log(err)
  }
}

//SSR
export const getSSRBlogs = async () => {
  try {
    const res = await fetch("https://blog-shrix1.vercel.app/api/blog/", {
      cache: "no-store",
    })

    if (!res.ok) throw new Error("Something went wrong")
    return res.json()
  } catch (err) {
    console.log(err)
  }
}
