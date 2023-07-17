// "use client"
// import React from "react"
// import { Avatar } from "@/components/ui/avatar"
// import { AvatarFallback, AvatarImage } from "@radix-ui/react-avatar"
// import { PropsBlogData } from "@/types/props"

// const UserInfo = ({ data }: { data: PropsBlogData[] }) => {
//   const { time, date, user, email, img } = data[0]

//   return (
//     <section className="w-full lg:w-1/2 flex justify-between">
//       <div className="flex gap-2 items-center">
//         {img && (
//           <Avatar>
//             <AvatarImage src={img} alt={user} />
//             <AvatarFallback>{user.slice(0, 2).toUpperCase()}</AvatarFallback>
//           </Avatar>
//         )}

//         <div>
//           <h1 className="text-sm font-semibold">{user}</h1>
//           <p className="text-xs opacity-70">{email}</p>
//         </div>
//       </div>

//       <div className="hidden md:flex justify-end flex-col items-end">
//         <p className="text-xs opacity-60 ">Posted on</p>
//         <p className="text-xs opacity-80">
//           {time} | {date}
//         </p>
//       </div>
//     </section>
//   )
// }

// export default UserInfo
