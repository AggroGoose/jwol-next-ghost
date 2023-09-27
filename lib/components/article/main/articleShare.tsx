import { Dialog } from "@headlessui/react";
import {
  FacebookShareButton,
  FacebookIcon,
  FacebookMessengerIcon,
  FacebookMessengerShareButton,
  RedditShareButton,
  RedditIcon,
  TwitterShareButton,
  TwitterIcon,
} from "next-share";
import { useState } from "react";

export default function ArticleShare({
  shareOpen,
  closeModal,
  url,
}: {
  shareOpen: boolean;
  closeModal: () => void;
  url: string;
}) {
  const [copied, setCopied] = useState(false);
  async function copyUrl() {
    try {
      await navigator.clipboard.writeText(url);
      console.log("Content copied to clipboard!");
      setCopied(true);
    } catch (err) {
      console.error("Failed to copy: ", err);
      setCopied(false);
    }
  }
  return (
    <Dialog
      open={shareOpen}
      className="relative z-50"
      onClose={() => closeModal()}
    >
      <div className="fixed inset-0 bg-black/20" aria-hidden="true" />
      <div className="fixed inset-0 flex items-center justify-center p-4">
        <Dialog.Panel className="mx-auto border-always-dark max-w-[420px] w-full rounded-xl cshadow-lg-flip overflow-hidden">
          <div className="p-6 pt-6 bg-always-dark flex flex-col gap-8">
            <Dialog.Title className="text-center text-head3 text-always-light leading-none">
              {`Share Article`}
            </Dialog.Title>
          </div>
          <div className="flex flex-col justify-center gap-6 bg-always-light p-6">
            <Dialog.Description className="text-always-dark">
              Share this article:
            </Dialog.Description>

            <div className="flex gap-4 self-center">
              <FacebookShareButton url={url}>
                <FacebookIcon
                  size={42}
                  round={true}
                  className="hover:opacity-80"
                />
              </FacebookShareButton>
              <FacebookMessengerShareButton url={url} appId={""}>
                <FacebookMessengerIcon
                  size={42}
                  round={true}
                  className="hover:opacity-80"
                />
              </FacebookMessengerShareButton>
              <RedditShareButton url={url}>
                <RedditIcon
                  size={42}
                  round={true}
                  className="hover:opacity-80"
                />
              </RedditShareButton>
              <TwitterShareButton url={url}>
                <TwitterIcon
                  size={42}
                  round={true}
                  className="hover:opacity-80"
                />
              </TwitterShareButton>
            </div>

            <input
              value={url}
              readOnly={true}
              className="text-always-dark border-base-primary rounded-lg focus:border-2 focus:-margin-[2px]"
            />

            <button
              className="w-full px-6 py-2 font-bold bg-transparent text-primary-500 transition-colors duration-300 transform rounded-lg leading-none hover:bg-primary-500 hover:text-always-light focus:outline-none focus:ring focus:ring-gray-300 focus:ring-opacity-50 border-[3px] border-primary-500"
              onClick={copyUrl}
            >
              {copied ? "Copied!" : "Copy to Clipboard"}
            </button>
          </div>
        </Dialog.Panel>
      </div>
    </Dialog>
  );
}
