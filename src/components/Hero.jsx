export default function Hero() {
  return (
    <main className="hero container">
      <div className="hero-content ">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE’RE HERE TO HELP YOU WITH OUR
          SHOES.
        </p>
        <div className="hero-btn btn-hover">
          <button>Shop Now</button>
          <button className="secondary-btn btn-hover">Category</button>
        </div>
        <div className="shopping">
          <p>Also Available On</p>
          <div className="brand-icons">
            <img src="/images/daraz.png" alt="daraz-logo" />
            <img src="/images/amazon.png" alt="amazon-logo" />
          </div>
        </div>
      </div>
      <div className="hero-image">
        <img src="/images/shoe_image.png" alt="shoe-image" />
      </div>
    </main>
  );
}
