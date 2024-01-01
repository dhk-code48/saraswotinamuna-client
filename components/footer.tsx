import { usePathname } from "next/navigation";
import Link from "next/link";

import { CgWebsite } from "react-icons/cg";
import { FaDiscord } from "react-icons/fa";
import { AiFillTwitterCircle, AiFillYoutube } from "react-icons/ai";
import Image from "next/image";
import { Category } from "@/types";

interface FooterLink {
  id: number;
  url: string;
  newTab: boolean;
  text: string;
  social?: string;
}

interface CategoryLink {
  id: string;
  attributes: {
    name: string;
    slug: string;
  };
}

function FooterLink({ url, text }: FooterLink) {
  const path = usePathname();
  return (
    <li className="flex">
      <Link
        href={url}
        className={`hover:dark:text-violet-400 ${
          path === url && "dark:text-violet-400 dark:border-violet-400"
        }}`}
      >
        {text}
      </Link>
    </li>
  );
}

function CategoryLink(category: Category) {
  return (
    <li className="flex justify-center">
      <Link href={`/${category.id}`} className="hover:dark:text-violet-400">
        {category.name}
      </Link>
    </li>
  );
}

function RenderSocialIcon({ social }: { social: string | undefined }) {
  switch (social) {
    case "WEBSITE":
      return <CgWebsite />;
    case "TWITTER":
      return <AiFillTwitterCircle />;
    case "YOUTUBE":
      return <AiFillYoutube />;
    case "DISCORD":
      return <FaDiscord />;
    default:
      return null;
  }
}

export default function Footer({ category }: { category: Category[] }) {
  return (
    <footer className="py-6 dark:bg-black dark:text-gray-50 border-t">
      <div className="container px-0 lg:px-6 mx-auto space-y-6 divide-y divide-gray-400 md:space-y-12 divide-opacity-50">
        <div className="flex items-center justify-center flex-col gap-y-5 lg:grid grid-cols-3">
          <div className="pb-6 md:pb-0">
            <Image
              src="/logo-light.png"
              className="h-24 w-auto"
              alt="School Logo"
              width={624}
              height={134}
            />
          </div>

          <div className="text-center">
            <p className="pb-1 text-lg font-medium">Links</p>
            <ul className="text-center">
              {category.map((link: Category) => (
                <CategoryLink key={link.id} {...link} />
              ))}
            </ul>
          </div>

          <div className="text-center md:text-left">
            <div
              className="fb-page"
              data-href="https://www.facebook.com/saraswoti.namuna.3"
              data-tabs="timeline"
              data-width=""
              data-height="200px"
              data-small-header="true"
              data-adapt-container-width="true"
              data-hide-cover="false"
              data-show-facepile="true"
            >
              <blockquote
                cite="https://www.facebook.com/saraswoti.namuna.3"
                className="fb-xfbml-parse-ignore"
              >
                <a href="https://www.facebook.com/saraswoti.namuna.3">
                  सरस्वती नमुना मा.वि. खैरेनीटार
                </a>
              </blockquote>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap justify-center gap-x-1 text-nowrap pt-6">
          ©{new Date().getFullYear()} All rights reserved and
          <p className="font-bold">Handled By Binod Wagle</p>
        </div>
      </div>
    </footer>
  );
}
