import { shoe8 } from "../assets/images"
import Button from "../components/Button"
const SuperQuality = () => {
  return (
    <section id="about-us" className="flex max-lg:flex-col justify-between items-center gap-10 w-full max-container">
       <div className="flex  flex-col flex-1">
          <h2 className="text-4xl font-palanquin font-bold lg:max-w-lg">We Provide You <span className="text-coral-red">Super Quality</span> Shoes</h2>
          <p className="lg:max-w-lg mt-4 info-text"> Ensuring premiuem comfort and style, our meticulously
            crafted footwear is designed to elevate your experience provideing you with unmatched quality innovation and a touch of elegance <br /> our dedication
            to detail and exellence ensures your satisfaction.
          </p>
          <div className="mt-9">
            <Button label="View More"/>
          </div>
        </div>
        <div className="flex-1 flex justify-center items-center">
            <img src={shoe8} alt="Shoes *"
            width={570} height={522}
            className="object-contain" />
        </div>
    </section>
  )
}

export default SuperQuality