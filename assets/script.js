$(document).ready(function () {
            
    const projects = [
        {
            title: "Library Management System",
            description: "Built using .NET Core and Entity Framework",
            image: "assets/projects_pic/library.webp",
            tags: ["C#", "HTML", "Bootstrap", "JQuery", "SQL Server"]
        },
        {
            title: "Block Chain Based Money Transferring System",
            description: "Developed a cryptocurrency for interbank payments within a permissioned blockchain",
            image: "assets/projects_pic/blockchain.png",
            tags: ["Blockchain", "Solidity JS", "Metamask", "Bootstrap"]
        },
        {
            title: "Baby Monitoring System",
            description: "Which helps the parents for total surveillance of the baby",
            image: "assets/projects_pic/baby.webp",
            tags: ["Python", "Raspbian OS", "Raspberry Pi"]
        },
        {
            title: "HostelMate",
            description: "Developed using Flutter",
            image: "assets/projects_pic/hostel.jpg",
            tags: ["Flutter", "Dart", "Firebase"]
        }
    ];

    
    const projectsHtml = projects.map(project => `
        <div class="col-md-6 mb-4">
            <div class="card project-card">
                <img src="${project.image}" class="card-img-top" alt="${project.title}">
                <div class="card-body">
                    <h5 class="card-title">${project.title}</h5>
                    <p class="card-text">${project.description}</p>
                    <div class="d-flex flex-wrap">
                        ${project.tags.map(tag => `<span class="badge bg-primary me-1">${tag}</span>`).join('')}
                    </div>
                </div>
            </div>
        </div>
    `).join('');

    $('#projectsList').html(projectsHtml);

    
    $('#contactForm').on('submit', function (e) {
        e.preventDefault();
        
        // alert('Message sent successfully!');
        if ($('#name').val() != '' || $('#email').val() != '' || $('#message').val() != '') {
            var name = $('#name').val();
            var email = $('#email').val();
            var message = $('#message').val();
            window.open(`https://wa.me/+919544189320?text=name: ${name}  email: ${email}  message: ${message}`, "_blank");
        }

        this.reset();
    });
});