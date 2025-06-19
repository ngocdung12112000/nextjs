import datablogs from "@/src/data/db.json";

const positionStyles: Record<number, { top: string, left: string }> = {
  0: { top: "0px", left: "50%" },
  1: { top: "0px", left: "75%" },
  2: { top: "640px", left: "0%" },
  3: { top: "640px", left: "25%" },
  4: { top: "728px", left: "50%" },
  5: { top: "800px", left: "75%" },
  6: { top: "1410px", left: "0%" },
  7: { top: "1430px", left: "25%" },
  8: { top: "1605px", left: "50%" },
  9: { top: "1673px", left: "75%" },
  10: { top: "1673px", left: "00%" },
  11: { top: "1673px", left: "25%" },
  12: { top: "1673px", left: "50%" },
  13: { top: "1673px", left: "75%" },
}

export default function Home() {
  
  
  console.log('blogsData', datablogs);

  return (
    <section id="bricks">

      <div className="row masonry">
        <div className="bricks-wrapper" style={{ position: "relative", height: "2500px"}}>

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
                </ul>
              </div>
            </div>
          </div>

          {datablogs && datablogs.map((blog, index) => (
            <article key={index} className="brick entry format-standard animate-this" style={{position: 'absolute', left: `${positionStyles[index].left}`, top: `${positionStyles[index]?.top || '0px'}`}}>
              <div className="entry-thumb">
                <a href="single-standard.html" className="thumb-link">
                  <img src={blog.imageLink} alt={blog.title} />
                </a>
              </div>
              <div className="entry-text">
                <div className="entry-header">
                  <div className="entry-meta">
                    <span className="cat-links">
                      <a href="#">{blog.category}</a>
                    </span>
                  </div>
                  <h1 className="entry-title"><a href="#">{blog.title}</a></h1>
                </div>
                <div className="entry-excerpt">
                  {blog.description}
                </div>
              </div>
            </article>
          ))}

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
          <a href="#" className="page-numbers next">Next</a>
        </nav>

      </div>

    </section>
  );
}