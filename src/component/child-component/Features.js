
import './Features.css'
export default function Features() {
    return (<div id='features' className="row featurs">
        <h1 className='text-center'>Features !!</h1>
        <div className="d-flex
    col-sm-12 col-md-6 col-lg-6
                flex-column
                justify-content-center
                p-2
                align-items-center">
            <mat-divider></mat-divider>
            <p className="pt-3 pb-3  text-wrap wrap">
                To-do Tracker can help you get, and stay,
                on top of important projects and piles of tasks or decisions. For instance, imagine you're heading a team that's
                working on a project. There are so many tasks to do, and so many people doing them,
                that staying on top of it all seems overwhelming.
            </p>
            <p className="pt-3 pb-3  text-wrap">
                To-do Tracker can help you get, and stay,
                on top of important projects and piles of tasks or decisions. For instance, imagine you're heading a team that's
                working on a project. There are so many tasks to do, and so many people doing them,
                that staying on top of it all seems overwhelming.
            </p>
        </div>

        <div className="d-flex
  col-sm-12 col-md-6 col-lg-6
              flex-column
              justify-content-center
              p-2
              align-items-center f-right">
            <img className="img-fluid mb-2 achievement-image" alt='bvh' src="https://mymodernmet.com/wp/wp-content/uploads/2019/07/will-burrard-lucas-beetlecam-23.jpg" />
        </div>
    </div>)
}