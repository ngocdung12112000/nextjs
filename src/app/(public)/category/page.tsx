import datablogs from "@/src/data/db.json";

const positionStyles: Record<number, { top: string }> = {
  0: { top: "0px" },
  1: { top: "0" },
  2: { top: "0" },
  3: { top: "0" },
  4: { top: "739px" },
  5: { top: "800px" },
  6: { top: "756px" },
  7: { top: "770px" },
  8: { top: "1620px" },
  9: { top: "1620px" },
  10: { top: "1640px" },
  11: { top: "1620px" },
  12: { top: "1650px" },
  13: { top: "1650px" },
  14: { top: "1650px" },
}

export default function Category() {
  return (
    <>
      <section id="page-header">
        <div className="row current-cat">
          <div className="col-full">
            <h1>Category: Photography</h1>
          </div>
        </div>
      </section>
      <section id="bricks" className="with-top-sep">

        <div className="row masonry">

          <div className="bricks-wrapper" style={{position: 'relative', height: '2521px'}}>
            {datablogs && datablogs.map((blog, index) => (
              <article key={index} className="brick entry format-standard animate-this" style={{position: 'absolute', left: `${(index % 4) * 25}%`, top: `${positionStyles[index]?.top || '0px'}`}}>
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
    </>
  );
}