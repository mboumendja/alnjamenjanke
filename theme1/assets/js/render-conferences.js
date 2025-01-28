const dataList = [
    {
        "img":"./assets/images/conferences/gestion-de-inventarios.jpg",
        "title":"Supply Chain Brunch Conference with Theme 'Role of Inventory Management in the Performance of Companies'",
        "date":"Apr. 2023"
    },
    {
        "img":"./assets/images/conferences/talk2.jpg",
        "title":"Supply Chain Breakfast with the theme 'Succeed in your career in Supply Chain and Logistics'.",
        "date":"Feb. 2023"
    },
    {
        "img":"./assets/images/conferences/talk2.jpg",
        "title":"Supply Chain Brunch Conference with the theme : 'Resilient Supply Chain as a solution for local business in the face of disruptions in the global Supply Chain'",
        "date":"May 2022"
    },
    {
        "img":"./assets/images/conferences/talk2.jpg",
        "title":"Supply Chain Brunch Conference with Theme 'Impact of the African Continental Free Trade Area on Sea, Air and Land Freight Transport'",
        "date":"Nov 2021"
    },
    {
        "img":"./assets/images/conferences/talk2.jpg",
        "title":"Supply Chain Brunch Conference with Theme 'Global Supply Chain Disruption and Solutions'",
        "date":"Aug 2021"
    },
    {
        "img":"./assets/images/conferences/talk2.jpg",
        "title":"Supply Chain Brunch Conference with Theme 'Change Leadership : Principal Key for Achieving the Best Performance in Transport, Logistics and Supply Chain'",
        "date":"Apr 2021"
    },
    {
        "img":"./assets/images/conferences/talk2.jpg",
        "title":"Supply Chain Brunch Conference with Theme 'Purchasing and Compliance Process in Oil & Gas Company'",
        "date":"Feb 2021"
    },
    {
        "img":"./assets/images/conferences/talk2.jpg",
        "title":"8th Supply Chain Brunch with Theme 'Humanitarian Supply Chain International Jobs'.",
        "date":"Dec 2020"
    },
    {
        "img":"./assets/images/conferences/talk2.jpg",
        "title":"7th Supply Chain Brunch with Theme 'BE' and 'be' a leader in Transports, Logistics and Supply Chain 'Powerful Insight to become a Visionary Leader'",
        "date":"Nov 2020"
    },
    {
        "img":"./assets/images/conferences/talk2.jpg",
        "title":"6th Supply Chain Brunch with Theme 'Impact of Road Safety on Logistics Performance in Companies'.",
        "date":"Nov 2020"
    },
    {
        "img":"./assets/images/conferences/talk2.jpg",
        "title":"5th Supply Chain Brunch with Theme 'Health and Productivity : The Winning Combination for the Supply Chain and Logistics Manager'",
        "date":"Sept. 2020"
    },
    {
        "img":"./assets/images/conferences/talk2.jpg",
        "title":"4th Episode of Reviewing Africa with Theme 'Supply Chain Management and African Continental Free Trade Area'",
        "date":"May 2020"
    },
    {
        "img":"./assets/images/conferences/talk2.jpg",
        "title":"3rd Supply Chain Brunch with Theme 'Supply Chain Manager-Finance Manager : A Sacred Union for Optimizing Business Performance'",
        "date":"March 2020"
    },
    {
        "img":"./assets/images/conferences/talk2.jpg",
        "title":"2nd Supply Chain Brunch with Theme 'Dynamic Recruitment Process in a Competitive Supply Chain'",
        "date":"Feb 2020"
    },
    {
        "img":"./assets/images/conferences/talk2.jpg",
        "title":"1st Supply Chain Brunch with Theme 'The Impact of Collaboration on the Supply Chain's Performance'",
        "date":"Jan 2020"
    },
    {
        "img":"./assets/images/conferences/talk2.jpg",
        "title":" Public Procurement and Blockchain Technology in Africa (GPS 2019 New Delhi)",
        "date":"2019"
    },
    {
        "img":"./assets/images/conferences/talk2.jpg",
        "title":"Africa : The future battle ground of Supply Chain (Fulder University Germany)",
        "date":"2014"
    }
];

const itemsPerPage = 5; // Items to display per page
const totalPages = Math.ceil(dataList.length / itemsPerPage);
let currentPage = 1;

const pagination = document.getElementById("pagination");
const container = document.getElementById('conference-container');


function renderData(page) {
    container.innerHTML = ""; // Clear container
    const start = (page - 1) * itemsPerPage;
    const end = page * itemsPerPage;
    const pageData = dataList.slice(start, end);
    pageData.forEach((item, index) => {
        const col = document.createElement('div');
        col.className = 'col';
        col.innerHTML = `
            <div class="card h-100">
                <img src="${item.img}" class="card-img-top" heigh="50" alt="image-conference-${index}">
                <div class="card-body">
                    <h5 class="card-title"> 
                        ${item.title}  
                    </h5>
                    <p class="card-text"><small class="text-body-secondary">${item.date}</small></p>
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

