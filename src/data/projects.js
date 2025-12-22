import ezaStoreCatalog from "../assets/images/eza-store/eza-store-catalog.png"
import register from '../assets/images/eza-store/register.jpg'
import login from '../assets/images/eza-store/login.jpg'
import dashboard from "../assets/images/eza-store/dashboard.jpg"
import inventory from '../assets/images/eza-store/inventory.jpg'
import modalCreate from '../assets/images/eza-store/inventory-modal-form-create.jpg'
import modalUpdate from '../assets/images/eza-store/inventory-modal-form-update.jpg'
import modalDelete from '../assets/images/eza-store/inventory-modal-form-delete.jpg'
// winnicode resource
import winniHome from '../assets/images/winnicode/winnicode-home.png'
import winniDetailNews from '../assets/images/winnicode/detail-news.png'
import winniLogin from '../assets/images/winnicode/login.png'
import winniRegister from '../assets/images/winnicode/register.png'
import winniDashboard from '../assets/images/winnicode/dashboard-user.png'
import winniCreate from '../assets/images/winnicode/form-create-news.png'
import winniUpdate from '../assets/images/winnicode/form-update-news.png'
import winniDetailNewsUser from '../assets/images/winnicode/news-detail-user.png'

const projects = [
    {
        title: "Eza App",
        company: "CV. Eza Store",
        duration: "Feb 2025 - Jun 2025",
        status: "Working",
        role: "Full Stack Developer",
        teamSize: "personal",
        description:
            "Store management application with main features of product inventory, POS, service management, admin dashboard, and sales reports.",
        tech: ["React.js", "Node.js", "MySQL", "Express.js", "TailwindCSS", "Zustand", "Prisma"],
        features: [
            "User Authentication with JWT",
            "User Registration and Login",
            "Admin Dashboard for Store Management",
            "Product Inventory with Filters and Search",
            "Mobile Phone Service Management with Filters and Search",
            "Shopping Cart and Wishlist",
            "Sales Transactions",
            "Real-Time Sales Reports",
            "Real-Time Service History Reports",
            "Best-Selling Product Sales Reports",
        ],
        challenges: [],
        results: [],
        links: {
            github: "https://www.github.com/ghulammf?tab=repositories",
            demo: ""
        },
        catalog: ezaStoreCatalog,
        screenshots: [
            {
                url: register,
                title: "register page",
                description: "register page"
            },
            {
                url: login,
                title: 'login page',
                description: 'login page'
            },
            {
                url: dashboard,
                title: 'dashboard page',
                description: 'dashboard page'
            },
            {
                url: inventory,
                title: 'inventory page',
                description: 'inventory page'
            },
            {
                url: modalCreate,
                title: 'modal form create',
                description: 'modal form create'
            },
            {
                url: modalUpdate,
                title: 'modal form update',
                description: 'modal form update'
            },
            {
                url: modalDelete,
                title: 'modal form delete',
                description: 'modal form delete'
            }
        ]
    },
    {
        title: "Winnicode Portal News",
        company: "PT. Winnicode Garuda Teknologi",
        duration: "Aug 2024 - Dec 2024",
        status: "Internship",
        role: "Full Stack Developer",
        teamSize: "personal",
        description:
            "News portal application system with main CRUD news content features.",
        tech: ["React.js", "Node.js", "MySQL", "Express.js", "TailwindCSS", "Prisma"],
        features: [
            "User Authentication with JWT",
            "User Registration and Login",
            "User/Author Dashboard for Content Management",
            "Create, Read, Update, and Delete Feature",
            "News Classification with Filters and Search Feature",
        ],
        challenges: [],
        results: [],
        links: {
            github: "https://www.github.com/ghulammf?tab=repositories",
            demo: ""
        },
        catalog: winniHome,
        screenshots: [
            {
                url: winniHome,
                title: "home page",
                description: "home page"
            },
            {
                url: winniDetailNews,
                title: "detail news page",
                description: "detail news page"
            },
            {
                url: winniLogin,
                title: "login page",
                description: "login page"
            },
            {
                url: winniRegister,
                title: "register page",
                description: "register page"
            },
            {
                url: winniDashboard,
                title: "dashboard page",
                description: "dashboard page"
            },
            {
                url: winniCreate,
                title: "form create News",
                description: "form create News"
            },
            {
                url: winniUpdate,
                title: "form update News",
                description: "form update News"
            },

            {
                url: winniDetailNewsUser,
                title: "detail News user page",
                description: "detail News user page"
            },
        ]
    }
]

export default projects