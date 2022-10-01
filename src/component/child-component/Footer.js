import './Footer.css'
export default function Footer() {
    return (
        <div className="footer row bg-dark">
            <div className="f-left col-lg-6">
                <div className='row'>
                    <ul className='col-lg-6'>
                        <li>Learn new things</li>
                        <li>Java</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>Js</li>
                    </ul>
                    <ul className='col-lg-6'>
                        <li>Spring</li>
                        <li>Hibernate</li>
                        <li>Spring Boot</li>
                        <li>Angular</li>
                        <li>React Js</li>
                        <li>Docker</li>
                    </ul>
                </div>
            </div>
            <div className="f-right col-lg-6">
                <div>
                    TO DO TRACKER
                </div>
                <p>
                    Here you can use rows and columns to organize your footer content. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
                <div className=''>
                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i className="fab fa-facebook-f"></i
                    ></a>
                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i className="fab fa-facebook-f"></i
                    ></a>
                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i className="fab fa-facebook-f"></i
                    ></a>
                    <a className="btn btn-outline-light btn-floating m-1" href="#!" role="button"
                    ><i className="fab fa-facebook-f"></i
                    ></a>
                </div>
            </div>
            <div className="text-center pb-5 text-white">
                © 2020 Copyright
                <a class="text-white" href="https://mdbootstrap.com/">TO-DO-TRACKER.com</a>
            </div>
        </div>
    )
}