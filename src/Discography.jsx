import fromTheMuddyBanks from "./assets/cover-art/from-the-muddy-banks.jpg";
import justNevermind from "./assets/cover-art/just-nevermind.jpg";
import liveTonightSoldOut from "./assets/cover-art/live-tonight-sold-out.jpg";
import nevermindDeluxeEdition from "./assets/cover-art/nevermind-nevermind-deluxe-edition.jpg";
import nevermindSuperDelux from "./assets/cover-art/nevermind-super-delux.jpg";
import blackCover from "./assets/cover-art/nirvana-black-cover.jpg";
import bleach from "./assets/cover-art/nirvana-bleach.jpg";
import deluxeEdition from "./assets/cover-art/nirvana-deluxe-edition.jpg";
import hormoaning from "./assets/cover-art/nirvana-hormoaning.jpg";
import insectiside from "./assets/cover-art/nirvana-insecticide.jpg";
import liveAtReading from "./assets/cover-art/nirvana-live-at-reading.jpg";
import liveAtParamount from "./assets/cover-art/nirvana-live-at-the-paramount.jpg";
import mtvUnpluggedNY from "./assets/cover-art/nirvana-mtv-unplugged-in-ny.jpg";
import nevermind from "./assets/cover-art/nirvana-nevermind.jpg";
import sliver from "./assets/cover-art/nirvana-silver.jpg";
import unpluggedNY from "./assets/cover-art/nirvana-unplugged-in-new-york.jpg";
import inUtero from "./assets/cover-art/nirvana-utero.jpg";
import withTheLightsOut from "./assets/cover-art/nirvana-with-the-lights-out.jpg";

const albums = [
  sliver,
  deluxeEdition,
  liveAtParamount,
  nevermind,
  nevermindDeluxeEdition,
  nevermindSuperDelux,
  bleach,
  liveAtReading,
  unpluggedNY,
  liveTonightSoldOut,
  bleach,
  withTheLightsOut,
  blackCover,
  fromTheMuddyBanks,
  mtvUnpluggedNY,
  insectiside,
  hormoaning,
  inUtero,
  justNevermind,
];

function Discography() {
  return (
    <>
      {/* DISCOGRAPHY STRIP */}
      <section className="discography-strip">
        <h2 className="discography-title">discography</h2>
        <button className="see-all-btn">see all</button>
      </section>

      {/* ALBUM GRID */}
      <section className="albums-container">
  {albums.map((cover, index) => (
    <div
      className={`album-card
        ${index === 2 ? "paramount" : ""}
        ${index === 7 ? "reading" : ""}
        ${index === 8 ? "unpluggedNY" : ""}
      `}
      key={index}
    >
      <img src={cover} alt="Nirvana album cover" />
    </div>
  ))}
</section>


    </>
  );
}

export default Discography;
