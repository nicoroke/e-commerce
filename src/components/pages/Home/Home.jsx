import "./Home.css";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import PageNavbar from "../../navbar/PageNavbar";
import MultiItemCarousel from "../../Carousel/MultiItemCarousel";
import ProductMini from "../../ProductMini/ProductMini";
import Carousel from "react-bootstrap/Carousel";

function Home() {
	const [products, setProducts] = useState([]);

	useEffect(() => {
		const getProducts = async () => {
			try {
				const response = await axios({
					method: "get",
					url: `http://localhost:8000/products`,
				});
				setProducts(response.data);
			} catch (error) {
				console.log(error);
			}
		};
		getProducts();
	}, []);

	const productsFromCategory1 = products.filter(
		(product) => product.categoryId === 1
	);
	const productsFromCategory2 = products.filter(
		(product) => product.categoryId === 2
	);
	const productsFromCategory3 = products.filter(
		(product) => product.categoryId === 3
	);

	function showProducts(arrayProducts) {
		return (
			arrayProducts && (
				<div className="row">
					{arrayProducts.map((product) => {
						return <ProductMini product={product} />;
					})}
				</div>
			)
		);
	}

	function scrollToCategory(id) {
		const elemento = document.getElementById(id);
		const posicion = elemento.getBoundingClientRect();
		window.scrollTo({
			top: posicion.top + window.pageYOffset,
			behavior: "smooth",
		});
	}

	return (
		<>
			<PageNavbar />
			<main>
				<Carousel className="carousel">
					<Carousel.Item>
						<img
							className="d-block w-100"
							src="/img/mainBanner.webp"
							alt="First slide"
							draggable="false"
						/>
						<Carousel.Caption className="carouselCaption">
							<p>Top Trending Products</p>
							<h2>Best Modern Wood Collection</h2>
							<button className="btn bannerBtn">Shop now</button>
						</Carousel.Caption>
					</Carousel.Item>
					<Carousel.Item>
						<img
							className="d-block w-100"
							src="/img/mainBanner2.webp"
							alt="Second slide"
							draggable="false"
						/>

						<Carousel.Caption className="carouselCaption">
							<p>Best Wooden Products</p>
							<h2>New Handmade Collection</h2>
							<button className="btn bannerBtn">Shop now</button>
						</Carousel.Caption>
					</Carousel.Item>
				</Carousel>
				<div className="container">
					{/* <div
						className="d-flex justify-content-around col-11"
						id="categoryDisplay"
					>
						<div className="z-1 text-center">
							<img
								src="/img/pexels-los-muertos-crew-8066050.jpg"
								alt=""
								className=" home-img rounded-pill categories-img mb-2"
							/>

							<small
								className="d-block fs-5 fw-semibold btn"
								onClick={() => scrollToCategory("pinturas")}
							>
								Pinturas
							</small>
						</div>
						<div className="z-1 text-center">
							<img
								src="/img/pexels-rodnae-productions-6806697.jpg"
								alt=""
								className=" home-img rounded-pill categories-img mb-2"
							/>
							<small
								className="d-block fs-5 fw-semibold btn"
								onClick={() => scrollToCategory("ceramicas")}
							>
								Cerámicas & Decoraciones
							</small>
						</div>

						<div className="z-1 text-center">
							<img
								src="/img/pexels-vlada-karpovich-5602996.jpg"
								alt=""
								className=" home-img rounded-pill categories-img mb-2"
							/>
							<small
								className="d-block fs-5 fw-semibold btn"
								onClick={() => scrollToCategory("muebles")}
							>
								Muebles & Carpintería
							</small>
						</div>
					</div> */}
					<h2 className="pb-4">Destacados</h2>
					{products && (
						<MultiItemCarousel
							products={products.filter(
								(product) => (product.rating = 5)
							)}
							productsPerPage={4}
						></MultiItemCarousel>
					)}

					<div className="mt-5 mb-5 ms-2">
						<h3 className="pt-5 pb-4 d-inline fs-2" id="pinturas">
							Pinturas
						</h3>
						<Link to={"/"} className="categoryLink">
							ver todos{" "}
							<i className="bi bi-arrow-right-short"></i>
						</Link>
					</div>
					{showProducts(productsFromCategory1)}
					<div className="mt-5 mb-5 ms-2">
						<h3 className="pt-5 pb-4 d-inline fs-2" id="ceramicas">
							Cerámicas & Decoraciones
						</h3>
						<Link to={"/"} className="categoryLink">
							ver todos{" "}
							<i className="bi bi-arrow-right-short"></i>
						</Link>
					</div>
					{showProducts(productsFromCategory2)}
					<div className="mt-5 mb-5 ms-2">
						<h3 className="pt-5 pb-4 d-inline fs-2" id="muebles">
							Muebles & Carpintería
						</h3>
						<Link to={"/"} className="categoryLink">
							ver todos{" "}
							<i className="bi bi-arrow-right-short"></i>
						</Link>
					</div>
					{showProducts(productsFromCategory3)}
				</div>
			</main>
		</>
	);
}

export default Home;
