import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { cn } from "@/lib/utils";

interface UserAvatarProps {
  src?: string;
  className?: string;
}

const UserAvatar = ({ src, className }: UserAvatarProps) => {
  return (
    <Avatar className={cn("mr-2 h-7 w-7 md:h-10 md:w-10")}>
      <AvatarImage src={src} />
      <AvatarFallback></AvatarFallback>
    </Avatar>
  );
};

export default UserAvatar;
