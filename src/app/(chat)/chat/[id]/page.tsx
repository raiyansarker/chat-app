import { PlusIcon, SendIcon, SmileIcon } from "lucide-react";

export default function Page() {
  return (
    <div className="flex h-full w-full grow flex-col bg-zinc-100 shadow-inner">
      {/* content */}
      <div className="grow">Chat</div>
      <div className="my-auto flex h-16 flex-row items-center gap-x-4 px-4">
        <PlusIcon />
        <div className="flex h-9 grow flex-row gap-x-2 rounded-full bg-white px-1">
          <input
            type="text"
            placeholder="Type a message"
            className="h-full w-full bg-transparent px-3 text-sm selection:bg-zinc-700 selection:text-white focus-visible:outline-none"
          />
          <button className="my-auto aspect-square size-7 rounded-full bg-zinc-900 text-white">
            <SendIcon className="mx-auto size-4" />
          </button>
        </div>
        <SmileIcon />
      </div>
    </div>
  );
}
