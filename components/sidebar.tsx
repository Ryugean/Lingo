import { cn } from "@/lib/utils";
import Image from "next/image";
import Link from "next/link";
import { SidebarItem } from "./sidebar-item";
import { 
  ClerkLoading,
  ClerkLoaded,
  UserButton
} from "@clerk/nextjs";
import { Loader } from "lucide-react";

type Props = {
  className?: string;
};

export const Sidebar = ({ className }: Props) => {
  return (
    <div
      className={cn(
        "flex h-full lg:w-[256px] lg:fixed left-0 top-0 px-4 border-r-2 flex-col",
        className
      )}
    >
      <Link href="/learn">
        <div className="pt-8 pl-0 pb-7 flex items-center gap-x-0">
          <Image src="/Goblin_Logo.png" height={80} width={80} alt="Mascot" />
          <h1 className="text-2xl font-extrabold text-green-600 tracking-wide">
            Goblingo
          </h1>
        </div>
      </Link>
      <div className="flex flex-col gap-y-2 flex-1">
        <SidebarItem 
          label="Learn" 
          href="/learn"  
          iconSrc="/icons/3d-house.png"
        />
        <SidebarItem 
          label="Leaderboard" 
          href="/leaderboard"  
          iconSrc="/icons/podium.png"
        />
        <SidebarItem 
          label="quest" 
          href="/quest"  
          iconSrc="/icons/quest.png"
        />
        <SidebarItem 
          label="Shop" 
          href="/shop"  
          iconSrc="/icons/bag.png"
        />
      </div>
      <div className="p-4">
        <ClerkLoading>
          <Loader className="h-5 w-5 text-muted-foreground animate-spin"/>
        </ClerkLoading>
        <ClerkLoaded>
          <UserButton />
        </ClerkLoaded>
      </div>
    </div>
  );
};
