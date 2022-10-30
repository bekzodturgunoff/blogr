import "./main.scss";
import images from "../../constants/images";

export default function Hero() {
  return (
    <div className="hero-background">
      <div className="hero">
        <h1>Design for the future</h1>
        <div className="hero-container">
          <div className="hero-left">
            <div className="hero-text">
              <h2>Introducing an extensible editor</h2>
              <p>
                Blogr features an exceedingly intuitive interface which lets you
                focus on one thing: creating content. The editor supports
                management of multiple blogs and allows easy manipulation of
                embeds such as images, videos, and Markdown. Extensibility with
                plugins and themes provide easy ways to add functionality or
                change the looks of a blog.
              </p>
            </div>
            <div className="hero-text">
              <h2>Robust content management</h2>
              <p>
                Flexible content management enables users to easily move through
                posts. Increase the usability of your blog by adding customized
                categories, sections, format, or flow. With this functionality,
                you’re in full control.
              </p>
            </div>
          </div>

          <div className="hero-right">
            <img src={images.illustration_editor_desktop} alt="" />
          </div>
        </div>
      </div>
      <div className="infrastructure-background">
        <div className="infrastructure">
          <div className="infrastructure-img">
            <img src={images.illustration_phones} alt="phones" />
          </div>

          <div className="infrastructure-text">
            <h2>State of the Art Infrastructure</h2>
            <p>
              With reliability and speed in mind, worldwide data centers provide
              the backbone for ultra-fast connectivity. This ensures your site
              will load instantly, no matter where your readers are, keeping
              your site competitive.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
