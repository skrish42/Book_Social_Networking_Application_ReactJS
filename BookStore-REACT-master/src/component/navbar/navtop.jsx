import React from 'react'


const NavTop = ({sticky}) => {
    return (
        <nav className={sticky ? "notshow" : "navbar navbar-expand-lg bg-dark navbar-light d-none d-lg-block"} >
            <div className="container text-light">
                <div className="w-100 d-flex justify-content-between">
                    <div>
                        <i className="fa fa-envelope mx-2" />
                        <a className="navbar-sm-brand text-light text-decoration-none" href="mailto:bookhub@company.com">All the books and reviews at one place...</a>
                        <i className="fa fa-down mx-2" />
                        <a className="navbar-sm-brand text-light text-decoration-none" href="tel:">start the journey below...</a>
                    </div>
                    <div className="mx-5">
                           
                    <a className="text-white mx-2" href="https://www.linkedin.com/in/">
                        <i className="fab fa-linkedin-in" />
                    </a>

                    <a className="text-white px-2" href="https://github.com/">
                        <i className="fab fa-github" />
                    </a>
                    </div>
                </div>
            </div>
        </nav>
        

    );
}

export default NavTop;