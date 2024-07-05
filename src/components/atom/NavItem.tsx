import {
  NavigationMenuItem,
  NavigationMenuLink,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import Link from "next/link";

function NavItem({ link, label }: { link: string; label: string }) {
  return (
    <NavigationMenuItem>
      <Link href={link} legacyBehavior passHref>
        <NavigationMenuLink className={navigationMenuTriggerStyle()}>
          {label}
        </NavigationMenuLink>
      </Link>
    </NavigationMenuItem>
  );
}

export default NavItem;
