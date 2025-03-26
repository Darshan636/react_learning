function ScrollSpy() {
  return (
    <>
      <br></br>
      <br></br>
      <div classNameName="Container h-20">
        <div className="row">
          <div className="col-4">
            <div id="simple-list-example" className="d-flex flex-column gap-2 simple-list-example-scrollspy text-center">
              <a className="p-1 rounded" href="#simple-list-item-1">About ME</a>
              <a className="p-1 rounded" href="#simple-list-item-2">Qualification</a>
              <a className="p-1 rounded" href="#simple-list-item-3">Contact Info</a>
              {/* <a className="p-1 rounded" href="#simple-list-item-4">Item 4</a> */}
              {/* <a className="p-1 rounded" href="#simple-list-item-5">Item 5</a> */}
            </div>
          </div>
          <div className="col-8">
            <div data-bs-spy="scroll" data-bs-target="#simple-list-example" data-bs-offset="0" data-bs-smooth-scroll="true" className="scrollspy-example" tabindex="0">
              <h4 id="simple-list-item-1">About Me</h4>
              <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos velit ea quia sunt soluta illum. Nulla, ipsam illum. Explicabo repudiandae minima corporis itaque enim qui!</p>
              <h4 id="simple-list-item-2">Qualification</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi blanditiis soluta id laboriosam, quasi reprehenderit similique ut culpa dolor praesentium, reiciendis quibusdam cumque rem beatae?</p>
              <h4 id="simple-list-item-3">Contact Info</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae in vel iure ut praesentium quo quis nulla, veniam possimus reprehenderit, facere nihil. Non eius at nisi adipisci aliquid optio ut!</p>
              {/* <h4 id="simple-list-item-4">Item 4</h4>
      <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nisi omnis dolor deserunt quibusdam dolores quae similique aspernatur rerum minima autem, eum numquam? Earum, sit atque.</p>
      <h4 id="simple-list-item-5">Item 5</h4>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos voluptatibus delectus rem hic, possimus adipisci voluptatem accusantium. Earum, eligendi rerum nulla eaque hic quas alias?</p> */}
            </div>
          </div>
        </div>
      </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br>


    </>
  )
}

export default ScrollSpy;