export default function Home() {
  return (
    <section id="bricks">

      <div className="row masonry">
        <div className="bricks-wrapper" style={{ position: "relative"}}>

          <div className="grid-sizer"></div>

          <div className="brick entry featured-grid animate-this" style={{ overflow: "hidden" }}>
            <div className="entry-content">
              <div id="featured-post-slider" className="flexslider">
                <ul className="slides" style={{ marginLeft: "0", listStyle: "none" }}>
                  <li style={{ paddingLeft: "0" }}>
                    <div className="featured-post-slide">

                      <div
                        className="post-background"
                        style={{ backgroundImage: "url('../images/thumbs/featured/featured-1.jpg')" }}
                      ></div>

                      <div className="overlay"></div>

                      <div className="post-content">
                        <ul className="entry-meta">
                          <li>September 06, 2016</li>
                          <li><a href="#" title="Author Profile">Naruto Uzumaki</a></li>
                        </ul>

                        <h1 className="slide-title">
                          <a href="single-standard.html" title="Minimalism Never Goes Out of Style">
                            Minimalism Never Goes Out of Style
                          </a>
                        </h1>
                      </div>

                    </div>
                  </li>

                  <li>
                    <div className="featured-post-slide">

                      <div
                        className="post-background"
                        style={{ backgroundImage: "url('../images/thumbs/featured/featured-2.jpg')" }}
                      ></div>

                      <div className="overlay"></div>

                      <div className="post-content">
                        <ul className="entry-meta">
                          <li>August 29, 2016</li>
                          <li><a href="#" title="Author Profile">Sasuke Uchiha</a></li>
                        </ul>

                        <h1 className="slide-title">
                          <a href="single-standard.html" title="Enhancing Your Designs with Negative Space">
                            Enhancing Your Designs with Negative Space
                          </a>
                        </h1>
                      </div>

                    </div>
                  </li>

                  <li>
                    <div className="featured-post-slide">

                      <div
                        className="post-background"
                        style={{ backgroundImage: "url('images/thumbs/featured/featured-3.jpg')" }}
                      ></div>

                      <div className="overlay"></div>

                      <div className="post-content">
                        <ul className="entry-meta">
                          <li>August 27, 2016</li>
                          <li><a href="#" title="Author Profile">Naruto Uzumaki</a></li>
                        </ul>

                        <h1 className="slide-title">
                          <a href="single-standard.html" title="Music Album Cover Designs for Inspiration">
                            Music Album Cover Designs for Inspiration
                          </a>
                        </h1>
                      </div>

                    </div>
                  </li>

                </ul>
              </div>
            </div>
          </div>

          <article className="brick entry format-standard animate-this">
            <div className="entry-thumb">
              <a href="single-standard.html" className="thumb-link">
                <img src="../images/thumbs/diagonal-building.jpg" alt="Diagonal Building" />
              </a>
            </div>

            <div className="entry-text">
              <div className="entry-header">
                <div className="entry-meta">
                  <span className="cat-links">
                    <a href="#" title="Design Category">Design</a>
                    <a href="#" title="Photography Category">Photography</a>
                  </span>
                </div>

                <h1 className="entry-title">
                  <a href="single-standard.html" title="Just a Standard Format Post">
                    Just a Standard Format Post
                  </a>
                </h1>
              </div>
              <div className="entry-excerpt">
                Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor
                nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua
                cillum in consequat consequat in culpa in anim.
              </div>
            </div>
          </article>

          <article className="brick entry format-standard animate-this">

            <div className="entry-thumb">
              <a href="single-standard.html" className="thumb-link">
                <img src="images/thumbs/ferris-wheel.jpg" alt="ferris wheel" />
              </a>
            </div>

            <div className="entry-text">
              <div className="entry-header">

                <div className="entry-meta">
                  <span className="cat-links">
                    <a href="#">Design</a>
                    <a href="#">UI</a>
                  </span>
                </div>

                <h1 className="entry-title"><a href="single-standard.html">This Is Another Standard Format Post.</a></h1>

              </div>
              <div className="entry-excerpt">
                Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.
              </div>
            </div>

          </article> 

          <article className="brick entry format-audio animate-this" style={{ position: "absolute", top: "640px" }}>

            <div className="entry-thumb">
              <a href="single-audio.html" className="thumb-link">
                <img src="images/thumbs/concert.jpg" alt="concert" />
              </a>

              <div className="audio-wrap">
                <audio id="player" src="media/AirReview-Landmarks-02-ChasingCorporate.mp3" controls></audio>
              </div>
            </div>

            <div className="entry-text">
              <div className="entry-header">

                <div className="entry-meta">
                  <span className="cat-links">
                    <a href="#">Design</a>
                    <a href="#">Music</a>
                  </span>
                </div>

                <h1 className="entry-title"><a href="single-audio.html">This Is a Audio Format Post.</a></h1>

              </div>
              <div className="entry-excerpt">
                Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.
              </div>
            </div>

          </article>

          <article className="brick entry format-quote animate-this" style={{ position: "absolute", top: "640px", left: "25%" }}>

            <div className="entry-thumb">
              <blockquote>
                <p>Good design is making something intelligible and memorable. Great design is making something memorable and meaningful.</p>

                <cite>Dieter Rams</cite>
              </blockquote>
            </div>

          </article> 

          <article className="brick entry animate-this" style={{ position: "absolute", top: "728px", left: "50%" }}>

            <div className="entry-thumb">
              <a href="single-standard.html" className="thumb-link">
                <img src="images/thumbs/shutterbug.jpg" alt="Shutterbug" />
              </a>
            </div>

            <div className="entry-text">
              <div className="entry-header">

                <div className="entry-meta">
                  <span className="cat-links">
                    <a href="#">Photography</a>
                    <a href="#">html</a>
                  </span>
                </div>

                <h1 className="entry-title"><a href="single-standard.html">Photography Skills Can Improve Your Graphic Design.</a></h1>

              </div>
              <div className="entry-excerpt">
                Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.
              </div>
            </div>

          </article> 

          <article className="brick entry animate-this" style={{ position: "absolute", top: "774px", left: "75%" }}>

            <div className="entry-thumb">
              <a href="single-standard.html" className="thumb-link">
                <img src="images/thumbs/usaf-rocket.jpg" alt="USAF rocket" />
              </a>
            </div>

            <div className="entry-text">
              <div className="entry-header">

                <div className="entry-meta">
                  <span className="cat-links">
                    <a href="#">Branding</a>
                    <a href="#">Mockup</a>
                  </span>
                </div>

                <h1 className="entry-title"><a href="single-standard.html">The 10 Golden Rules of Clean Simple Design.</a></h1>

              </div>
              <div className="entry-excerpt">
                Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.
              </div>
            </div>

          </article> 

          <article className="brick entry format-gallery group animate-this" style={{ position: "absolute", top: "1054px", left: "25%" }}>
            <div className="entry-thumb">
              <a href="single-standard.html" className="thumb-link">
                <img src="images/thumbs/gallery/work1.jpg" alt="USAF rocket" />
              </a>
            </div>
            <div className="entry-text">
              <div className="entry-header">

                <div className="entry-meta">
                  <span className="cat-links">
                    <a href="#">Branding</a>
                    <a href="#">Wordpress</a>
                  </span>
                </div>

                <h1 className="entry-title"><a href="single-gallery.html">Workspace Design Trends and Ideas.</a></h1>

              </div>
              <div className="entry-excerpt">
                Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.
              </div>
            </div>

          </article> 

          <article className="brick entry format-link animate-this" style={{ position: "absolute", top: "1414px" }}>

            <div className="entry-thumb">
              <div className="link-wrap">
                <p>Looking for affordable &amp; reliable web hosting? We recommend Dreamhost.</p>
                <cite>
                  <a target="_blank" href="http://www.dreamhost.com/r.cgi?287326">http://www.dreamhost.com</a>
                </cite>
              </div>
            </div>

          </article> 


          <article className="brick entry animate-this" style={{ position: "absolute", top: "1490px", left: "50%" }}>

            <div className="entry-thumb">
              <a href="single-standard.html" className="thumb-link">
                <img src="images/thumbs/diagonal-pattern.jpg" alt="Pattern" />
              </a>
            </div>

            <div className="entry-text">
              <div className="entry-header">

                <div className="entry-meta">
                  <span className="cat-links">
                    <a href="#">Design</a>
                    <a href="#">UI</a>
                  </span>
                </div>

                <h1 className="entry-title"><a href="single-standard.html">You Can See Patterns Everywhere.</a></h1>

              </div>
              <div className="entry-excerpt">
                Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.
              </div>
            </div>

          </article> 

          <article className="brick entry format-video animate-this" style={{ position: "absolute", top: "1673px", left: "75%" }}>

            <div className="entry-thumb video-image">
              <a href="http://player.vimeo.com/video/14592941?title=0&amp;byline=0&amp;portrait=0&amp;color=F64B39" data-lity>
                <img src="images/thumbs/ottawa-bokeh.jpg" alt="bokeh" />
              </a>
            </div>

            <div className="entry-text">
              <div className="entry-header">

                <div className="entry-meta">
                  <span className="cat-links">
                    <a href="#">Design</a>
                    <a href="#">Branding</a>
                  </span>
                </div>

                <h1 className="entry-title"><a href="single-video.html">This Is a Video Post Format.</a></h1>

              </div>
              <div className="entry-excerpt">
                Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.
              </div>
            </div>

          </article> 

          <article className="brick entry animate-this" style={{ position: "absolute", top: "1778px", left: "0%" }}>

            <div className="entry-thumb">
              <a href="single-standard.html" className="thumb-link">
                <img src="images/thumbs/lighthouse.jpg" alt="Lighthouse" />
              </a>
            </div>

            <div className="entry-text">
              <div className="entry-header">

                <div className="entry-meta">
                  <span className="cat-links">
                    <a href="#">Photography</a>
                    <a href="#">Design</a>
                  </span>
                </div>

                <h1 className="entry-title"><a href="single-standard.html">Breathtaking Photos of Lighthouses.</a></h1>

              </div>
              <div className="entry-excerpt">
                Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.
              </div>
            </div>

          </article>

          <article className="brick entry animate-this" style={{ position: "absolute", top: "1920px", left: "25%" }}>

            <div className="entry-thumb">
              <a href="single-standard.html" className="thumb-link">
                <img src="images/thumbs/liberty.jpg" alt="Liberty"/>
              </a>
            </div>

            <div className="entry-text">
              <div className="entry-header">

                <div className="entry-meta">
                  <span className="cat-links">
                    <a href="#">Branding</a>
                    <a href="#">html</a>
                  </span>
                </div>

                <h1 className="entry-title"><a href="single-standard.html">Designing With Black and White.</a></h1>

              </div>
              <div className="entry-excerpt">
                Lorem ipsum Sed eiusmod esse aliqua sed incididunt aliqua incididunt mollit id et sit proident dolor nulla sed commodo est ad minim elit reprehenderit nisi officia aute incididunt velit sint in aliqua cillum in consequat consequat in culpa in anim.
              </div>
            </div>

          </article> 

        </div> 

      </div> 

      <div className="row">

        <nav className="pagination">
          <span className="page-numbers prev inactive">Prev</span>
          <span className="page-numbers current">1</span>
          <a href="#" className="page-numbers">2</a>
          <a href="#" className="page-numbers">3</a>
          <a href="#" className="page-numbers">4</a>
          <a href="#" className="page-numbers">5</a>
          <a href="#" className="page-numbers">6</a>
          <a href="#" className="page-numbers">7</a>
          <a href="#" className="page-numbers">8</a>
          <a href="#" className="page-numbers">9</a>
          <a href="#" className="page-numbers next">Next</a>
        </nav>

      </div>

    </section>
  );
}