import nevermind30th from "./assets/merch/nevermind-30th-deluxe.png";
import heartSocks from "./assets/merch/nirvana-heart-socks.png";
import inUteroBlanket from "./assets/merch/in-utero-remastered.png";
import inUtero30th from "./assets/merch/nirvana-in-utero.png";

function Merch() {
  return (
    <>
      {/* MERCH STRIP (REUSED STRIP STYLE) */}
      <section className="discography-strip">
        <h2 className="discography-title">merch</h2>
        <button className="see-all-btn">see all</button>
      </section>

      {/* MERCH GRID */}
      <section className="merch-section">
        <div className="merch-grid">
          <div className="merch-item">
            <img src={nevermind30th} alt="Nevermind 30th Deluxe 5CD" />
            <p className="merch-title">NEVERMIND 30TH DELUXE 5CD</p>
            <p className="merch-price">149.98</p>
          </div>

          <div className="merch-item">
            <img src={heartSocks} alt="Heart Shaped Box Socks" />
            <p className="merch-title">HEART SHAPED BOX SOCKS</p>
            <p className="merch-price">25.00</p>
          </div>

          <div className="merch-item">
            <img src={inUtero30th} alt="In Utero 30th Anniversary Deluxe" />
            <p className="merch-title">IN UTERO BLANKET</p>
            <p className="merch-price">100.00</p>
          </div>

          <div className="merch-item">
            <img src={inUteroBlanket} alt="In Utero Blanket" />
            <p className="merch-title">
              IN UTERO 30TH ANNIVERSARY 2CD DELUXE
            </p>
            <p className="merch-price">19.98</p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Merch;




