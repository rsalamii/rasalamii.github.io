const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `

    <nav>
        <ul>
            <li><a href="/">Music</a></li>
            <li><a href="/">Movies</a></li>
            <li><a href="/">Merch</a></li>
            <li><a href="/">Stores</a></li>
        </ul>

        <div class="nav-items">
            <div class="search">
                <input type="text" class="search-box" placeholder="Search">
                <button class="search-btn">search</button>
            </div>
            <a href="/"><img src="img/navbar heart.png" alt=""></a>
            <a href="/"><img src="img/navbar profile.png" alt=""></a>
            <a href="/"><img src="img/navbar cart.png" alt=""></a>
        </div>
    </nav>
    `;
}

createNav();