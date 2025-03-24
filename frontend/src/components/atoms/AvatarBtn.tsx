import {
    Avatar,
    AvatarFallback,
    AvatarImage,
  } from "@/components/ui/avatar";


function AvatarBtn({name, image} : { name : string, image : string }) {
    return (
        <Avatar>
          <AvatarImage src={image || "https://github.com/shadcn.png"} alt={name || "Shadcn"} />
          <AvatarFallback>{name.split("")[0].toUpperCase()}</AvatarFallback>
        </Avatar>
      )
}

export default AvatarBtn
