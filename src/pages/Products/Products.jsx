import React, { useState } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import cartLogo from "/Users/yash/Documents/Millets_Project-main/src/assets/shopping-bag.png";
import wishlistLogo from "/Users/yash/Documents/Millets_Project-main/src/assets/love.png";

export default function Products() {

    const navigate = useNavigate();

    const handleCartClick = (product) => {
        navigate("/cart", {
            state: {
                id: product.id,
                name: product.name,
                price: product.price,
                img: product.img
            }
        });
    };

    const handleWishListClick = () => {
        navigate("/wishlist");
    }

    // === Product Data ===
    const allProducts = [
        {
            id: 1,
            name: "Amaranth Flour",
            price: "₹150.00",
            img: "https://milletsforhealth.com/wp-content/uploads/2025/10/Amaranth-1.jpg",
        },
        {
            id: 2,
            name: "Bajra (Pearl Millet) Daliya",
            price: "₹100.00",
            img: "https://milletsforhealth.com/wp-content/uploads/2025/07/Artboard-17-1.png",
        },
        {
            id: 3,
            name: "Bajra Flour",
            price: "₹90.00",
            img: "https://milletsforhealth.com/wp-content/uploads/2025/10/Bajra-Pearl-Millet-Flour.jpg",
        },
        {
            id: 4,
            name: "Bajra Poha",
            price: "₹100.00",
            img: "https://milletsforhealth.com/wp-content/uploads/2025/10/Bajra-Poha.jpg",
        },
        {
            id: 5,
            name: "Barnyard Millet Flour",
            price: "₹140.00",
            oldPrice: "₹150.00",
            discount: "-7%",
            img: "https://milletsforhealth.com/wp-content/uploads/2025/07/Barnyard-flour.jpg",
        },
        {
            id: 6,
            name: "Barnyard Millet Rice",
            price: "₹130.00",
            oldPrice: "₹145.00",
            discount: "-10%",
            img: "https://milletsforhealth.com/wp-content/uploads/2025/10/Barnayard-Rice.jpg",
        },
        {
            id: 7,
            name: "Foxtail Millet Flour",
            price: "₹155.00",
            img: "https://milletsforhealth.com/wp-content/uploads/2025/07/Foxtail-flour.jpg",
        },
        {
            id: 8,
            name: "Kodo Millet Rice",
            price: "₹120.00",
            img: "https://milletsforhealth.com/wp-content/uploads/2025/07/Kodo-rice.jpg",
        },
        {
            id: 9,
            name: "Proso Millet Flour",
            price: "₹145.00",
            img: "https://milletsforhealth.com/wp-content/uploads/2025/07/Proso-flour.jpg",
        },
        {

            id: 9,
            name: "Proso Millet Flour",
            price: "₹145.00",
            img: "https://milletsforhealth.com/wp-content/uploads/2025/07/Proso-flour.jpg",

        },
        {
            id: 10,
            name: "Hakka Noodles",
            price: "₹120.00",
            img: "https://m.media-amazon.com/images/I/61drkMZzOeL._SX679_PIbundle-2,TopRight,0,0_AA679SH20_.jpg",
        },
        {
            id: 11,
            name: "Millet Kurmuraa",
            price: "₹60.00",
            img: "https://m.media-amazon.com/images/I/71nw+OKogWL._SX679_.jpg",
        },
        {
            id: 12,
            name: "Millet Vermicelli",
            price: "₹70.00",
            img: "https://nativetouch.in/cdn/shop/files/Vermicelli-Bajra-01.jpg?v=1693912053&width=480",
        },
        {
            id: 13,
            name: "Roasted millet vermicelli bajra",
            price: "₹90.00",
            img: "https://earlyfoods.com/cdn/shop/files/1_ca57de57-90d0-43f9-9db2-8b97ff15c622.png?v=1750503299&width=1080",
        },
        {
            id: 15,
            name: "Roasted Millet vermicelli jowar",
            price: "₹90.00",
            img: "https://earlyfoods.com/cdn/shop/files/4_34b61191-a10c-4584-9c29-c59b72d4a62f.png?v=1750503354&width=1080",
        },
        {
            id: 16,
            name: "Millet chips",
            price: "₹80.00",
            img: "https://m.media-amazon.com/images/I/61nJdK9H7YL._SX679_PIbundle-4,TopRight,0,0_AA679SH20_.jpg",
        },
        {
            id: 17,
            name: "Millet Namkenn (desi masala)",
            price: "₹50.00",
            img: "https://eatbetterco.com/cdn/shop/files/1DesiMasalaMilletNamkeen_4ab62696-4992-429c-beb4-dab8471f0c66.jpg?v=1748495661&width=1080",
        },
        {
            id: 18,
            name: "Ragi,Soya, Jowar sticks",
            price: "₹150.00",
            img: "https://www.golifeindia.com/cdn/shop/files/go-life-millet-crunchy-sticks-guilt-free-high-protein-snack-pack-of-6-354722_450x450.png?v=1749357553",
        },
        {
            id: 19,
            name: "Millet Bhujia",
            price: "₹70.00",
            img: "https://eatbetterco.com/cdn/shop/files/1-_15.jpg?v=1749547728&width=1080",
        },
        {
            id: 20,
            name: "Ragi flour(nachni atta)",
            price: "₹100.00",
            img: "https://m.media-amazon.com/images/I/61e3SfRER+L._SX679_.jpg",
        },
        {
            id: 21,
            name: "Foxtail millet flour",
            price: "₹90.00",
            img: "https://admin.tradesala.com/public/product-images/large/20240417-661f6f227658b.jpg",
        },
        {
            id: 22,
            name: "Organic ragi(Finger millet) flour",
            price: "₹90.00",
            img: "https://milletamma.com/cdn/shop/files/Untitleddesign_39_61e9f3e0-4e2b-4958-9cca-85fabafe4929_1000x.png?v=1717386694",
        },
        {
            id: 23,
            name: "Jowar atta(Sorghum)",
            price: "₹90.00",
            img: "https://m.media-amazon.com/images/I/61LdOtl+3PL._SX679_.jpg",
        },
        {
            id: 24,
            name: "Bajra atta (pearl millet)",
            price: "₹80.00",
            img: "https://m.media-amazon.com/images/I/61dKSdzRUnL._SX679_.jpg",
        },
        {
            id: 25,
            name: "Cold pressed virgin coconut oil",
            price: "₹120.00",
            img: "https://milletamma.com/cdn/shop/products/1400x1400_3_a163d344-2d32-47e5-ad58-abf6e8dc9fdb.jpg?v=1717386687",
        },
        {
            id: 26,
            name: "Cold pressed groundnut oil",
            price: "₹140.00",
            img: "https://milletamma.com/cdn/shop/products/1400x1400_1f21159b-a28d-4b8d-bb03-1fb5ff02276b.jpg?v=1717385471",
        },
        {
            id: 27,
            name: "Cold pressed mustard oil",
            price: "₹140.00",
            img: "https://milletamma.com/cdn/shop/products/1400x1400_3_ea8648ca-2bde-467b-8908-dcd3c369770c.jpg?v=1717386622",
        },
        {
            id: 28,
            name: "Cold pressed oils (combo)",
            price: "₹220.00",
            img: "https://www.tataconsumer.com/sites/g/files/gfwrlq316/files/simply-better-cold-pressed-oil-side-banner.jpg",
        },
        {
            id: 29,
            name: "Millets cheela",
            price: "₹125.00",
            img: "https://thenaturikco.com/cdn/shop/files/71ALpFvAphL._SX679.jpg?v=1736167612&width=1946",
        },
        {
            id: 30,
            name: "Masala millet khichdi",
            price: "₹125.00",
            img: "https://thenaturikco.com/cdn/shop/files/masala-1st-img.jpg?v=1757930429&width=1240",
        },
        {
            id: 31,
            name: "Sprout meal",
            price: "₹90.00",
            img: "https://thenaturikco.com/cdn/shop/files/sprouts-1st-img.jpg?v=1757930329&width=1240",
        },
        {
            id: 33,
            name: "Pancake and waffle mix",
            price: "₹180.00",
            img: "https://slurrpfarm.com/cdn/shop/files/625fbc69-a1db-4333-94ba-3dd374adfe95_1500x.png?v=1710835833",
        },
              {
            id: 34,
            name: "Finger millet poha",
            price: "₹90.00",
            img: "https://ueirorganic.com/cdn/shop/files/fingermilletpoha.jpg?v=1689683020&width=1000",
        },
              {
            id: 35,
            name: "Bajra poha",
            price: "₹90.00",
            img: "https://m.media-amazon.com/images/I/71klewBjEyL._SL1500_.jpg",
        },
              {
            id: 36,
            name: "Multi Millet choco flakes",
            price: "₹80.00",
            img: "https://mirchi.com/os/cdn/content/images/multi%20millet%20choco%20flakes%20desinutri_medium_0264761.webp",
        },
              {
            id: 37,
            name: "Jowar flakes",
            price: "₹80.00",
            img: "https://mirchi.com/os/cdn/content/images/jowar%20flakes%20health%20sutra_medium245571.webp",
        },
              {
            id: 38,
            name: "Pearl Millet flakes",
            price: "₹80.00",
            img: "https://mirchi.com/os/cdn/content/images/pearl%20millet%20flakes%20pack%20of%203%20healthy%20foods%20enterprises_medium_0670399.webp",
        },
    ];

    // === Pagination Logic ===
    const [currentPage, setCurrentPage] = useState(1);
    const productsPerPage = 6;
    const totalPages = Math.ceil(allProducts.length / productsPerPage);

    // Slice products for current page
    const indexOfLast = currentPage * productsPerPage;
    const indexOfFirst = indexOfLast - productsPerPage;
    const currentProducts = allProducts.slice(indexOfFirst, indexOfLast);

    const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);

    return (
        <>
            {/* === Top Banner === */}
            <div
                className="container-fluid d-flex justify-content-center align-items-center text-center"
                style={{
                    backgroundImage:
                        "linear-gradient(rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.45)), url('https://prakati.in/wp-content/uploads/2023/04/millets2.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    backgroundAttachment: "fixed",
                    height: "30vh",
                    color: "white",
                }}
            >
                <div
                    className="p-5 rounded-4 w-100"
                    style={{ maxWidth: "700px", margin: "0 auto" }}
                >
                    <h1 className="fw-bold mb-3">Shop</h1>
                </div>
            </div>

            {/* === Main Content === */}
            <div className="container my-5">
                <div className="row">
                    {/* === Left Sidebar === */}
                    <div className="col-lg-3 col-md-4 mb-4">
                        <div className="p-3 border rounded-4 shadow-sm bg-white">
                            <h5 className="fw-bold mb-3">Categories</h5>
                            <ul className="list-unstyled">
                                {[
                                    "Millet Food",
                                    "Daily Fresh",
                                    "Gift Hamper",
                                    "Noodles, Pasta & Vermicelli",
                                    "New Arrivals",
                                    "Fresh Products",
                                    "Discounts",
                                    "Unpolished Millets",
                                    "Millet Snacks/Ready to Eat Products",
                                    "Unpolished Millet Flours",
                                    "Cold Pressed Oils",
                                    "Millets Daliya",
                                    "Millet Combo Packs",
                                    "Millet Pre Mixes",
                                    "Millet Rava/Sooji",
                                    "Sprouted Millet Flours",
                                    "Millet Poha/Flakes",
                                ].map((cat, i) => (
                                    <li
                                        key={i}
                                        className="d-flex justify-content-between align-items-center py-1 border-bottom small text-muted"
                                    >
                                        <span>{cat}</span>
                                        <span className="badge bg-light text-dark">0</span>
                                    </li>
                                ))}
                            </ul>

                            <hr className="my-4" />

                            <h6 className="fw-semibold mb-3">Filter by price</h6>
                            <input
                                type="range"
                                className="form-range"
                                min="0"
                                max="500"
                                step="10"
                            />
                        </div>
                    </div>

                    {/* === Product Section === */}
                    <div className="col-lg-9 col-md-8">
                        <div className="d-flex justify-content-between align-items-center mb-3">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb mb-0">
                                    <li className="breadcrumb-item">
                                        <a href="#" className="text-decoration-none text-success">
                                            Home
                                        </a>
                                    </li>
                                    <li className="breadcrumb-item active" aria-current="page">
                                        Shop
                                    </li>
                                </ol>
                            </nav>

                            <div className="d-flex align-items-center">
                                <span className="me-3 text-muted small">
                                    Show : <a href="#">12</a> / <a href="#">24</a> / <a href="#">36</a> /{" "}
                                    <a href="#">All</a>
                                </span>
                                <select className="form-select form-select-sm" style={{ width: "150px" }}>
                                    <option>Default sorting</option>
                                    <option>Price: Low to High</option>
                                    <option>Price: High to Low</option>
                                    <option>Newest</option>
                                </select>
                            </div>
                        </div>

                        {/* === Product Grid === */}
                        <div className="row g-4">
                            {currentProducts.map((item, index) => (
                                <div key={index} className="col-lg-4 col-md-6">
                                    <div className="card border-0 shadow-sm h-100 position-relative">
                                        {item.discount && (
                                            <span
                                                className="badge bg-success position-absolute"
                                                style={{ top: "10px", left: "10px" }}
                                            >
                                                {item.discount}
                                            </span>
                                        )}
                                        <img
                                            src={item.img}
                                            className="card-img-top"
                                            alt={item.name}
                                            style={{
                                                height: "300px",
                                                objectFit: "cover",
                                                borderTopLeftRadius: "10px",
                                                borderTopRightRadius: "10px",
                                            }}
                                        />

                                        <div className="card-body">
                                            <h6 className="card-title fw-semibold">{item.name}</h6>

                                            <div className="d-flex justify-content-between align-items-center">
                                                {/* Price Section */}
                                                <p className="card-text mb-0">
                                                    {item.oldPrice && (
                                                        <span className="text-decoration-line-through text-muted me-2">
                                                            {item.oldPrice}
                                                        </span>
                                                    )}
                                                    <span className="text-success fw-semibold">{item.price}</span>
                                                </p>

                                                {/* Icons Section */}
                                                <div className="d-flex align-items-center gap-2">
                                                    <img
                                                        src={cartLogo}
                                                        alt="Add to Cart"
                                                        width={24}
                                                        style={{ cursor: "pointer" }}
                                                         onClick={() => handleCartClick(item)}   // ✅ Pass item here
                                                        title="Add to Cart"
                                                    />

                                                    <img
                                                        src={wishlistLogo}
                                                        alt="Add to Wishlist"
                                                        width={24}
                                                        style={{ cursor: "pointer" }}
                                                        onClick={handleWishListClick}
                                                        title="Add to Wishlist"
                                                    />
                                                </div>

                                            </div>
                                        </div>

                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* === Pagination === */}
                        <nav className="mt-5 d-flex justify-content-center">
                            <ul className="pagination pagination-green">
                                <li className={`page-item ${currentPage === 1 ? "disabled" : ""}`}>
                                    <button
                                        className="page-link text-success"
                                        onClick={() => handlePageChange(currentPage - 1)}
                                    >
                                        Previous
                                    </button>
                                </li>

                                {[...Array(totalPages)].map((_, i) => (
                                    <li
                                        key={i}
                                        className={`page-item ${currentPage === i + 1 ? "active" : ""}`}
                                    >
                                        <button
                                            className="page-link"
                                            onClick={() => handlePageChange(i + 1)}
                                        >
                                            {i + 1}
                                        </button>
                                    </li>
                                ))}

                                <li className={`page-item ${currentPage === totalPages ? "disabled" : ""}`}>
                                    <button
                                        className="page-link text-success"
                                        onClick={() => handlePageChange(currentPage + 1)}
                                    >
                                        Next
                                    </button>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </>
    );
}