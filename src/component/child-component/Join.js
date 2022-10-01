
import './Join.css'

export default function Join() {
  return (
    <div className="row join" id='join'>
      <h1 className="text-center">Join Us</h1>
      <div className="d-flex
    col-sm-12 col-md-6 col-lg-5
                flex-column
                justify-content-center
                p-2
                align-items-center text-white">

        <div className="card bg-dark container">
          <h5 className="card-header text-center fw-bold fs-6 border-white">CONTACT US</h5>
          <div className="card-body">
            <form className="flex-wrap">
              <div className="form-row">

                <label>NAME</label>
                <input className="form-control" type="text" name="name" placeholder="Name" />

              </div>
              <div className="form-row">
                <label>Email</label>
                <input type="email" name="email" placeholder="Email" class="form-control" />
              </div>

              <div className="form-row">
                <label>Message</label>
                <textarea className="form-control" name="message" placeholder="Message"
                ></textarea>
              </div>
              <div className="text-center card-text mt-2">
                <button type="submit" className="btn btn-outline-light mr-1">Send</button>
                <button className="btn btn-light" type="reset">Cancel</button>
              </div>
            </form>
          </div>
        </div>
      </div>

      <div className='d-flex
      col-sm-12 col-md-6 col-lg-6
                  flex-column
                  justify-content-center
                  p-2
                  align-items-center'>
        <hr/>
        <p className='pt-2 text-wrap description'>
          To-do Tracker help center is fresh and always open for
          business. If you can't find the answer you're looking for, we're here to lend a hand.
          To-do Tracker help center is fresh and always open for
          business.
        </p>
        <img className='img-fluid achievement-image' alt='nbj' src="https://mymodernmet.com/wp/wp-content/uploads/2019/07/will-burrard-lucas-beetlecam-23.jpg" />
      </div>
    </div>
  );
}
