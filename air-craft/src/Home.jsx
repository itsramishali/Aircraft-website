import React from "react";
import "./Home.css";

function Home() {
    return (
        <>
            <div className="main-heading">
                <h1 className="main-heading">Welcome</h1>
            </div>
            <div
                id="carouselExampleControls"
                className="carousel slide  carsouel1-edit"
                data-bs-ride="carousel"
            >
                <div className="carousel-inner">
                    <div className="carousel-item active">
                        <img
                            src="https://i.ytimg.com/vi/maufDGFgCZo/maxresdefault.jpg"
                            className="d-block w-100"
                            alt="..."
                        />
                    </div>
                    <div className="carousel-item active">
                        <img
                            src="https://i.pinimg.com/originals/23/ed/d8/23edd8ffb4cea75191489e1dc9c598f2.jpg"
                            className="d-block w-100"
                            alt="..."
                        />
                    </div>
                    <div className="carousel-item active">
                        <img
                            src="https://wallpaperaccess.com/full/254381.jpg"
                            className="d-block w-100"
                            alt="..."
                        />
                    </div>
                </div>
                <button
                    className="carousel-control-prev"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="prev"
                >
                    <span
                        className="carousel-control-prev-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Previous</span>
                </button>
                <button
                    className="carousel-control-next"
                    type="button"
                    data-bs-target="#carouselExampleControls"
                    data-bs-slide="next"
                >
                    <span
                        className="carousel-control-next-icon"
                        aria-hidden="true"
                    ></span>
                    <span className="visually-hidden">Next</span>
                </button>
            </div>
            <div className="text-part">
                <p className="text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    <br /> Sunt numquam molestiae molestias consequuntur asperiores,
                    <br /> voluptatibus cum vel quo omnis dolores. Lorem ipsum dolor,
                    <br /> sit amet consectetur adipisicing elit. Blanditiis dolores
                    architecto sunt sit! <br /> Reprehenderit quo quos, nobis vitae illum
                    suscipit amet expedita <br /> quam incidunt, neque sunt assumenda?
                    Est, debitis iusto.
                </p>
                <div className="row row-edit" >
                    <div className="col-md-2">
                        <button className="buttonInput " type="submit" value="Subscribe">
                            Inquire Now
                        </button>
                    </div>
                    <div className="col-md-2">
                        <button className="buttonInput" type="submit" value="Subscribe">
                            Book Now
                        </button>
                    </div>
                </div>
            </div>
            {/* 1 */}
            <div className="row row-edit my-5">
                <div className="col-md-5 marg mx-3">
                    <img
                        className="d-block w-100"
                        src="https://media.istockphoto.com/id/1332501286/photo/aerial-flying-airplane-and-sky-landscape-close-up.jpg?b=1&s=170667a&w=0&k=20&c=F3PSMzB2x-pI-ctwUEGTY4jvnRYIi3PgCheBiCu8Y7Q="
                        alt=""
                    />
                </div>
                <div className="col-md-5 mx-3">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
                        necessitatibus magnam inventore architecto enim optio voluptas nemo
                        ipsa commodi delectus debitis tempora hic maiores, voluptatibus,
                        tempore excepturi ducimus blanditiis? Velit natus ea consectetur
                        rerum aliquam fugiat, minima placeat nemo? Illo! Lorem ipsum dolor
                        sit amet consectetur adipisicing elit. Voluptas nam totam quibusdam.
                        Fuga explicabo possimus, tenetur iure, voluptates ad corporis
                        aliquam autem aliquid ea ab maxime repellat reiciendis sequi
                        repellendus magnam quisquam alias ut qui, recusandae exercitationem
                        cum! Alias, sequi. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Voluptate, maxime.
                    </p>
                </div>
            </div>

            {/* 2 */}
            <div className="row row-edit my-5">
                <div className="col-md-5 mx-3">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
                        necessitatibus magnam inventore architecto enim optio voluptas nemo
                        ipsa commodi delectus debitis tempora hic maiores, voluptatibus,
                        tempore excepturi ducimus blanditiis? Velit natus ea consectetur
                        rerum aliquam fugiat, minima placeat nemo? Illo! Lorem ipsum dolor
                        sit amet consectetur adipisicing elit. Voluptas nam totam quibusdam.
                        Fuga explicabo possimus, tenetur iure, voluptates ad corporis
                        aliquam autem aliquid ea ab maxime repellat reiciendis sequi
                        repellendus magnam quisquam alias ut qui, recusandae exercitationem
                        cum! Alias, sequi. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Voluptate, maxime.
                    </p>
                </div>
                <div className="col-md-5 marg mx-3">
                    <img
                        className="d-block w-100"
                        src="https://media.istockphoto.com/id/1332501286/photo/aerial-flying-airplane-and-sky-landscape-close-up.jpg?b=1&s=170667a&w=0&k=20&c=F3PSMzB2x-pI-ctwUEGTY4jvnRYIi3PgCheBiCu8Y7Q="
                        alt=""
                    />
                </div>
            </div>

            {/* 3 */}
            <div className="row row-edit my-5">
                <div className="col-md-5 marg mx-3">
                    <img
                        className="d-block w-100"
                        src="https://media.istockphoto.com/id/1332501286/photo/aerial-flying-airplane-and-sky-landscape-close-up.jpg?b=1&s=170667a&w=0&k=20&c=F3PSMzB2x-pI-ctwUEGTY4jvnRYIi3PgCheBiCu8Y7Q="
                        alt=""
                    />
                </div>
                <div className="col-md-5 mx-3">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
                        necessitatibus magnam inventore architecto enim optio voluptas nemo
                        ipsa commodi delectus debitis tempora hic maiores, voluptatibus,
                        tempore excepturi ducimus blanditiis? Velit natus ea consectetur
                        rerum aliquam fugiat, minima placeat nemo? Illo! Lorem ipsum dolor
                        sit amet consectetur adipisicing elit. Voluptas nam totam quibusdam.
                        Fuga explicabo possimus, tenetur iure, voluptates ad corporis
                        aliquam autem aliquid ea ab maxime repellat reiciendis sequi
                        repellendus magnam quisquam alias ut qui, recusandae exercitationem
                        cum! Alias, sequi. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Voluptate, maxime.
                    </p>
                </div>
            </div>

            {/* 4 */}
            <div className="row row-edit my-5">
                <div className="col-md-5 mx-3">
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquam
                        necessitatibus magnam inventore architecto enim optio voluptas nemo
                        ipsa commodi delectus debitis tempora hic maiores, voluptatibus,
                        tempore excepturi ducimus blanditiis? Velit natus ea consectetur
                        rerum aliquam fugiat, minima placeat nemo? Illo! Lorem ipsum dolor
                        sit amet consectetur adipisicing elit. Voluptas nam totam quibusdam.
                        Fuga explicabo possimus, tenetur iure, voluptates ad corporis
                        aliquam autem aliquid ea ab maxime repellat reiciendis sequi
                        repellendus magnam quisquam alias ut qui, recusandae exercitationem
                        cum! Alias, sequi. Lorem ipsum dolor sit amet consectetur
                        adipisicing elit. Voluptate, maxime.
                    </p>
                </div>
                <div className="col-md-5 marg mx-3">
                    <img
                        className="d-block w-100"
                        src="https://media.istockphoto.com/id/1332501286/photo/aerial-flying-airplane-and-sky-landscape-close-up.jpg?b=1&s=170667a&w=0&k=20&c=F3PSMzB2x-pI-ctwUEGTY4jvnRYIi3PgCheBiCu8Y7Q="
                        alt=""
                    />
                </div>
            </div>

            <h3 className="sm-heading">Articles</h3>
            <div className="row row-edit">
                <div className="col-md-3 mx-4">
                    <img
                        className="d-block w-100"
                        src="https://wallpaper.dog/large/10792407.jpg"
                        alt=""
                    />
                </div>

                <div className="col-md-3  mx-4">
                    <img
                        className="d-block w-100"
                        src="https://wallpaper.dog/large/10792407.jpg"
                        alt=""
                    />
                </div>

                <div className="col-md-3  mx-4">
                    <img
                        className="d-block w-100"
                        src="https://wallpaper.dog/large/10792407.jpg"
                        alt=""
                    />
                </div>
            </div>
        </>
    );
}
export default Home;
