import Link from "@/components/link";
import {
  CalendarPlusIcon,
  CogIcon,
  MessageCircleIcon,
  SearchIcon,
  SquarePenIcon,
  UsersIcon,
} from "lucide-react";
import Image from "next/image";
import type { PropsWithChildren } from "react";

const messages = [
  {
    avatar: "https://github.com/raiyansarker.png",
    name: "Raiyan Sarker",
    message: "Akib: Ki koros beta? 😂",
  },
  {
    avatar: "https://github.com/raiyansarker.png",
    name: "Asad",
    message: "Akib: Ki koros beta? 😂",
  },
  {
    avatar: "https://github.com/raiyansarker.png",
    name: "Tonmoy",
    message: "Akib: Ki koros beta? 😂",
  },
  {
    avatar: "https://github.com/raiyansarker.png",
    name: "Siam",
    message: "Akib: Ki koros beta? 😂",
  },
  {
    avatar: "https://github.com/raiyansarker.png",
    name: "Ismail",
    message: "Akib: Ki koros beta? 😂",
  },
  {
    avatar: "https://github.com/raiyansarker.png",
    name: "Kowsar",
    message: "Akib: Ki koros beta? 😂",
  },
];

export default function RootLayout({ children }: PropsWithChildren) {
  return (
    <div className="flex h-screen w-full overflow-hidden">
      <div className="flex w-full flex-col overflow-hidden md:min-w-72 md:max-w-[22.5rem]">
        <div className="my-2 space-y-3 px-4">
          <div className="flex flex-row items-center justify-between">
            <h1 className="text-xl">Chats</h1>
            <SquarePenIcon className="size-4" />
          </div>
          <div className="flex h-10 items-center gap-x-2 rounded-full bg-zinc-100 px-3">
            <label htmlFor="search">
              <SearchIcon className="size-5 text-zinc-500" />
            </label>
            <input
              id="search"
              type="text"
              className="h-full w-full bg-transparent text-sm selection:bg-zinc-700 selection:text-white focus-visible:outline-none"
              placeholder="Search"
              autoComplete="off"
            />
          </div>
        </div>
        <ul className="flex grow flex-col gap-y-2 px-4">
          {messages.map((message, index) => (
            <li key={index}>
              <Link
                className="flex items-center gap-x-3 rounded-xl p-2 hover:bg-zinc-100 focus-visible:bg-zinc-100 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-300"
                activeClassName="bg-zinc-100"
                href={`/chat/${index}`}
              >
                <Image
                  src={message.avatar}
                  alt="Raiyan Sarker"
                  height={200}
                  width={200}
                  className="size-12 rounded-full"
                />
                <div>
                  <h2 className="text-sm">{message.name}</h2>
                  <p className="text-xs text-zinc-950/60">{message.message}</p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
        <div className="flex h-16 flex-row items-center justify-between border-t border-zinc-300 px-8">
          <Link
            href="/"
            className="inline-flex flex-col items-center gap-y-0.5 text-zinc-500 hover:text-indigo-500 focus-visible:text-indigo-500 focus-visible:outline-none"
            activeClassName="text-zinc-950"
          >
            <MessageCircleIcon className="size-6 md:size-5" />
            <p className="text-sm md:text-xs">Chats</p>
          </Link>
          <Link
            href="/people"
            className="inline-flex flex-col items-center gap-y-0.5 text-zinc-500 hover:text-zinc-950 focus-visible:text-zinc-950 focus-visible:outline-none"
            activeClassName="text-zinc-950"
          >
            <UsersIcon className="size-6 md:size-5" />
            <p className="text-sm md:text-xs">People</p>
          </Link>
          <Link
            href="/stories"
            className="inline-flex flex-col items-center gap-y-0.5 text-zinc-500 hover:text-zinc-950 focus-visible:text-zinc-950 focus-visible:outline-none"
            activeClassName="text-zinc-950"
          >
            <CalendarPlusIcon className="size-6 md:size-5" />
            <p className="text-sm md:text-xs">Stories</p>
          </Link>
          <Link
            href="/settings"
            className="inline-flex flex-col items-center gap-y-0.5 text-zinc-500 hover:text-zinc-950 focus-visible:text-zinc-950 focus-visible:outline-none"
            activeClassName="text-zinc-950"
          >
            <CogIcon className="size-6 md:size-5" />
            <p className="text-sm md:text-xs">Settings</p>
          </Link>
        </div>
      </div>
      {children}
    </div>
  );
}
