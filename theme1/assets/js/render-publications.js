const dataList = [
        {
            "img":"./assets/images/publications/supply-chain.png",
            "link": "https://globaldominiumservices.com/blog/reviewing-africa-live-6-supply-chain-continent-africain/",
            "title": "Supply Chain : Concepts et Operations",
            "desc": "Ce livre a été conçu pour démystifier le concept supply chain, partant de son origine à nos jours. Le développement des différents concepts tels que le procurement, la production, la distribution, le transport, la prévision des demandes, la gestion des stocks permet de faire des allers-retours entre la théorie et la pratique, afin de rendre l'entreprise compétitive et performante.",
            "date": "2022"
        },
        {
            "img":"./assets/images/publications/Reviewing-Africa-Live-6-880x660.jpg",
            "link": "https://globaldominiumservices.com/blog/reviewing-africa-live-6-supply-chain-continent-africain/",
            "title": "La supply chain dans le continent africain",
            "desc": "On a toujours confondu la logistique à la supply Chain et le transport à la logistique. Mais la logistique a commencé après la deuxième guerre mondiale avec le transport du matériel et des troupes. On est ensuite passé au stockage (le stockage s’est donc ajouté au transport).",
            "date": "30 June. 2020"
        },
        {
            "img":"./assets/images/publications/boost-supply-chain-covid19.png",
            "link": "https://globaldominiumservices.com/blog/how-to-boost-your-supply-chain-after-covid-19/",
            "title": "How to Boost your Supply Chain after Covid-19 ?",
            "desc": "A supply chain disruption is a breakdown that can occur in the production and distribution processes, including events such as fire incidents, machine breakdowns, natural diseases, quality issues, and an unexpected surge in capacity. From this definition the pandemic called Covid-19 with its general lockdown is a supply chain disruption.",
            "date": "27 June. 2020"
        },
        {
            "img":"./assets/images/publications/Reviewing-Africa-Live-6-880x660.jpg",
            "link": "https://www.linkedin.com/pulse/la-supply-chain-peut-rendre-nos-entreprises-albert/?trackingId=Gk189NCCQJa%2BQ40%2FLk%2FM6Q%3D%3D",
            "title": "« La Supply Chain peut rendre nos entreprises compétitives »",
            "desc": "Pour donner une définition simple et accessible à tous, disons que c’est une collaboration efficace, une collaboration interne et externe pour permettre à l’entreprise de minimiser les coûts et d’optimiser ses profits.",
            "date": "17 May. 2018"
        },
        {
            "img":"./assets/images/publications/stockage1.png",
            "link": "https://globaldominiumservices.com/blog/optimisez-vos-stocks/",
            "title": " OPTIMISEZ VOS STOCKS",
            "desc": "L’accroissement de l’intensité de la concurrence ces dernières années a contribué à faire de la « gestion des stocks » un pôle stratégique dans la compétitivité des entreprises. L’histoire nous révèle que l’Egypte est devenue la nation la plus puissante à son époque à cause du stock.",
            "date": "19 Dec. 2017"
        },
        {
            "img":"./assets/images/publications/procuemrnt.png",
            "link": "https://globaldominiumservices.com/blog/how-to-make-profit-in-procurement/",
            "title": "HOW TO MAKE PROFIT IN PROCUREMENT",
            "desc": "With the rise of competition , it has become very difficult for enterprises to make profit from their sales; most enterprises , with the latest development in supply chain are trying to create profit in other processes of the supply chain.",
            "date": "29 Apr. 2017"
        },
        {
            "img":"./assets/images/publications/procuemrnt.png",
            "link": "https://www.linkedin.com/pulse/2017-year-supply-chain-revolution-evolution-njamen-phd-mba-cscs/?trackingId=Gk189NCCQJa%2BQ40%2FLk%2FM6Q%3D%3D",
            "title": "2017 : The year of supply chain revolution and evolution",
            "desc": "During the 2016 LPI ranking, Cameroon was at the 148th position. LPI is an interactive tool put in place by the world bank to allow countries to benchmark with others in order to identify their weaknesses and opportunities in trade logistics so that they can react accordingly and improve their performances.",
            "date": "09 Jan. 2017"
        }
    ];

    const itemsPerPage = 5; // Items to display per page
    const totalPages = Math.ceil(dataList.length / itemsPerPage);
    let currentPage = 1;

    const pagination = document.getElementById("pagination");
    const container = document.getElementById('data-container');


    function renderData(page) {
        container.innerHTML = ""; // Clear container
        const start = (page - 1) * itemsPerPage;
        const end = page * itemsPerPage;
        const pageData = dataList.slice(start, end);
        pageData.forEach((item, index) => {
            const col = document.createElement('div');
            col.className = 'card mb-3 w-100';
            col.innerHTML = `
                <div class="row g-0">
                    <div class="col-md-4">
                    <img src="${item.img}" class="img-fluid h-100 w-100 object-fit-cover rounded" alt="image-publication-${index}">
                    </div>
                    <div class="col-md-8">
                    <div class="card-body">
                        <h5 class="card-title"> 
                            <a href="${item.link}" class="link-offset-3">
                                ${item.title}
                            </a>  
                        </h5>
                        <p class="card-text">${item.desc}</p>
                        <p class="card-text"><small class="text-body-secondary">${item.date}</small></p>
                    </div>
                    </div>
                </div>
            `;
            container.appendChild(col);
        });
    }

    function renderPagination() {
        pagination.innerHTML = ""; // Clear pagination
        for (let i = 1; i <= totalPages; i++) {
            const li = document.createElement("li");
            li.className = `page-item ${i === currentPage ? "active" : ""}`;
            li.innerHTML = `<a class="page-link" href="#">${i}</a>`;
            li.addEventListener("click", (e) => {
                e.preventDefault();
                currentPage = i;
                renderData(currentPage);
                renderPagination();
            });
            pagination.appendChild(li);
        }
    }

    renderData(currentPage);
    renderPagination();

