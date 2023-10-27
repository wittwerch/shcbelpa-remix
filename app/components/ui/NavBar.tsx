import {
  NavigationMenu, NavigationMenuContent,
  NavigationMenuItem, NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger
} from "~/components/ui/NavigationMenu";
import {cn} from "~/lib/lib";
import {Link} from "@remix-run/react";
import React from "react";

export type NavigationItem = {
  title: string;
  href: string;
  description: string;
};

const staticItems = [
  {
    title: "Verein",
    href: "/verein",
    description: "Vorstand, Trainer, etc",
  },
  {
    title: "Sponsoren",
    href: "/sponsoring",
    description: "Unsere Sponsoren 🫶",
  },
  {
    title: "Gallery",
    href: "https://www.flickr.com/photos/142317525@N03/albums",
    description: "Bilder und Videos",
  },
];

export function NavBar({
  navigationItems,
}: {
  navigationItems: NavigationItem[];
}) {
  return (
    <div className="bg-black">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <img
                  height={56}
                  width={56}
                  className="h-14"
                  src="/img/logo_belpa.png"
                  alt="SHC Belpa 1107"
                />
              </div>
              <span className="ml-4 text-white antialiased font-semibold tracking-wide">
                SHC Belpa 1107
              </span>
            </div>
          </Link>
          <div className="-mr-2 flex">
            <NavigationMenu>
              <NavigationMenuList>
                <NavigationMenuItem>
                  <NavigationMenuTrigger>Menü</NavigationMenuTrigger>
                  <NavigationMenuContent>
                    <div className="flex flex-col sm:flex-row">
                      <ul className="w-[300px] gap-1 p-4 sm:w-[200px] md:grid-cols-1 lg:w-[200px] ">
                        <li className="font-semibold">Teams</li>
                        {navigationItems.map((item) => (
                          <ListItem
                            key={item.title}
                            title={item.title}
                            href={item.href}
                          >
                            {item.description}
                          </ListItem>
                        ))}
                      </ul>
                      <ul className="w-[300px] gap-3 p-4 sm:w-[300px] md:grid-cols-1 lg:w-[300px]">
                        <li className="font-semibold">Informationen</li>
                        {staticItems.map((item) => (
                          <ListItem
                            key={item.title}
                            title={item.title}
                            href={item.href}
                            target={
                              item.href.startsWith("http") ? "_blank" : ""
                            }
                          >
                            {item.description}
                          </ListItem>
                        ))}
                      </ul>
                    </div>
                  </NavigationMenuContent>
                </NavigationMenuItem>
              </NavigationMenuList>
            </NavigationMenu>
          </div>
        </div>
      </div>
    </div>
  );
}

const ListItem = React.forwardRef<
  React.ElementRef<"a">,
  React.ComponentPropsWithoutRef<"a">
>(({ className, title, children, ...props }, ref) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <a
          ref={ref}
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            className,
          )}
          {...props}
        >
          <div className="text-sm font-medium leading-none">{title}</div>
          <p className="line-clamp-2 text-sm leading-snug text-muted-foreground">
            {children}
          </p>
        </a>
      </NavigationMenuLink>
    </li>
  );
});
ListItem.displayName = "ListItem";
