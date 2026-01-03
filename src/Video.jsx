function Video() {
  const videos = [
    { id: "hTWKbfoikeg", title: "Nirvana – Smells Like Teen Spirit (Official Music Video)" },
    { id: "vabnZ9-ex7o", title: "Nirvana – Come As You Are (Official Music Video)" },
    { id: "pkcJEvMcnEg", title: "Nirvana – Lithium (Official Music Video)" },
    { id: "PbgKEjNBHqM", title: "Nirvana – In Bloom (Official Music Video)" },
    { id: "UThKn_TmfmM", title: "Nirvana – Heart-Shaped Box (Director’s Cut)" },
    { id: "aWmkuH1k7uA", title: "Nirvana – All Apologies (MTV Unplugged)" },
    { id: "mQR9gsQRf0U", title: "Nirvana – About a Girl (Live)" },
    { id: "Ee6xkwVucIE", title: "Nirvana – Breed (1992/Live At The Paramount Theatre)" },
    { id: "fregObNcHC8", title: "Nirvana – The Man Who Sold The World (MTV Unplugged)" },
  ];

  return (
    <>
      {/* VIDEOS STRIP */}
      <section className="discography-strip">
        <h2 className="discography-title">Videos</h2>
        <button className="see-all-btn">see all</button>
      </section>

      {/* VIDEOS GRID */}
      <section className="videos-grid">
        {videos.map((video, index) => (
          <div className="video-item" key={index}>
            <img
              src={`https://img.youtube.com/vi/${video.id}/maxresdefault.jpg`}
              alt={video.title}
            />

            {/* DARK OVERLAY */}
            <div className="video-overlay">
              <h3 className="video-title">{video.title}</h3>
              <button className="play-video-btn">PLAY VIDEO</button>
            </div>
          </div>
        ))}
      </section>
    </>
  );
}

export default Video;
