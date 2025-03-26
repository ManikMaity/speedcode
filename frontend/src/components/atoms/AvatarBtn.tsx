import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { UserData } from "@/config/types";
import LogoutBtn from "./LogoutBtn";

function AvatarBtn({ userData }: { userData: UserData }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Avatar className="hover:cursor-pointer border dark:border-white border-gray-400">
          <AvatarImage
            src={userData.avatar || "https://github.com/shadcn.png"}
            alt={userData.username || "Shadcn"}
          />
          <AvatarFallback>
            {userData.username.split("")[0].toUpperCase()}
          </AvatarFallback>
        </Avatar>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>@{userData.username}</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Billing</DropdownMenuItem>
        <LogoutBtn/>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default AvatarBtn;
