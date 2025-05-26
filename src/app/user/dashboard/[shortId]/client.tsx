"use client";

import { useQRCode } from "next-qrcode";
import { useState } from "react";
import {
  TelegramIcon,
  TelegramShareButton,
  WhatsappIcon,
  WhatsappShareButton,
} from "next-share";

export default function ClientPage({ shortId }: { shortId: string }) {
  const { Canvas } = useQRCode();
  const shortlink = `${process.env.NEXT_PUBLIC_URL}${shortId}`;
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(shortlink);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="w-[80%] h-[70%] bg-white rounded-sm p-5 flex flex-col gap-4 items-center justify-center">
      <div className="outline-1 flex flex-col justify-center items-center gap-2 p-5 w-full sm:w-[60%]">
        <Canvas
          text={shortlink}
          options={{
            errorCorrectionLevel: "M",
            margin: 3,
            scale: 4,
            width: 200,
            color: {
              dark: "#FFFFFF",
              light: "#0000FF",
            },
          }}
        />
        <div className="flex outline rounded-lg overflow-hidden w-full">
          <input
            readOnly
            value={shortlink}
            className="text-black p-2 pl-3 outline-none w-full"
          />
          <button
            onClick={handleCopy}
            className="bg-indigo-600 text-white p-2 px-4 hover:bg-indigo-700"
          >
            {copied ? "Copied!" : "Copy"}
          </button>
        </div>

        <h3 className="text-black font-bold mt-3">Share:</h3>
        <div className="flex gap-2 justify-center items-center">
          <WhatsappShareButton url={shortlink} title="Take a visit to my link" blankTarget={true}>
            <WhatsappIcon size={40} round />
          </WhatsappShareButton>

          <TelegramShareButton url={shortlink} title="Take a visit to my link" blankTarget={true}>
            <TelegramIcon size={40} round />
          </TelegramShareButton>
        </div>
      </div>
    </div>
  );
}
