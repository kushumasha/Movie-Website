import React, { useState } from "react";

function isValidUrl(url) {
  try { new URL(url); return true; } catch { return false; }
}

function VideoStreamer() {
  const [url, setUrl] = useState("");
  const [playUrl, setPlayUrl] = useState("");

  const handlePlay = (e) => {
    e.preventDefault();
    if (isValidUrl(url)) setPlayUrl(url);
  };

  return (
    <div className="my-4 neon-border p-4 rounded-lg">
      <h2 className="text-xl neon-text mb-2">Stream Any Video</h2>
      <form onSubmit={handlePlay} className="flex gap-2 mb-2">
        <input
          value={url} onChange={e => setUrl(e.target.value)}
          className="flex-1 neon-input" placeholder="Paste video link (YouTube, Facebook, mp4, etc.)"
        />
        <button className="neon-btn px-4 py-2" type="submit">Stream</button>
      </form>
      {playUrl && (
        <div className="neon-border rounded p-2">
          <video src={playUrl} controls className="w-full max-h-96 bg-black" />
          <div className="text-xs text-gray-300 mt-1">If video doesn't play, check if the link is supported or try another link.</div>
        </div>
      )}
    </div>
  );
}

export default VideoStreamer;
