import Link from "next/link";
import { ChevronRight } from "./Icons";

export interface BreadcrumbLink {
  title: string;
  href: string;
}
export interface BreadcrumbProps {
  links: BreadcrumbLink[];
}

export function BreadcrumbNav({ links }: BreadcrumbProps) {
  return (
    <div className="flex py-8">
      {links.map((link: BreadcrumbLink, i: number) => (
        <div className="flex items-center">
          <Link href={link.href}>
            <a className="p-2 rounded-md text-md leading-5 hover:bg-gray-100 transition duration-150 ease-in-out">
              {link.title}
            </a>
          </Link>
          {i < links.length - 1 && <ChevronRight />}
        </div>
      ))}
    </div>
  );
}
