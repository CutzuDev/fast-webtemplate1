"use client";

import dynamic from "next/dynamic";

function VideoLoader() {
  const ReactPlayer = dynamic(() => import("react-player/lazy"), {
    ssr: false, // Ensure it's only rendered on the client-side
  });

  return (
    <div
      id="#video"
      className="aspect-video w-full max-w-[700px] overflow-hidden rounded-xl bg-black outline-none transition-all hover:scale-105"
    >
      <ReactPlayer
        volume={0.5}
        config={{ wistia: { options: { autoPlay: true } } }}
        width={"100%"}
        height={"100%"}
        url={"https://dorothyfloyd99.wistia.com/medias/p87hfku8gt"}
      />
    </div>
  );
}

export default VideoLoader;
