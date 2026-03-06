// Función para mostrar la sección seleccionada
function showSection(sectionId) {
    // 1. Ocultar todas las secciones
    const sections = document.querySelectorAll('.page-section');
    sections.forEach(section => {
        section.classList.remove('active-section');
    });

    // 2. Mostrar la sección seleccionada
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add('active-section');
    }

    // 3. Actualizar la clase 'active' en el menú de navegación
    const navLinks = document.querySelectorAll('.nav-links a');
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === '#' + sectionId) {
            link.classList.add('active');
        }
    });
    
    // Scroll suave al inicio de la página
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Alternar menú móvil
function toggleMobileMenu() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.toggle('active');
}

// Cerrar menú móvil
function closeMobileMenu() {
    const navMenu = document.getElementById('navMenu');
    navMenu.classList.remove('active');
}

// Datos de los fundadores
const foundersData = {
    1: {
        name: "Lopez Rodriguez Dereck Neftaly",
        role: "Gerente General",
        image: "img/fundador1.jpg",
        bio: "mi función principal es ser el nexo entre la visión estratégica de la empresa y la ejecución operativa. Mi responsabilidad no es solo administrar recursos, sino liderar personas y optimizar procesos para asegurar el crecimiento sostenible de la organización.",
        email: "lopezdereck@enrollate.com",
        specialty: "Gerencia General y Liderazgo"
    },
    2: {
        name: "Mariscal Astudillo Milton Francisco",
        role: "Encargado de Finanzas",
        image: "img/fundador2.jpg",
        bio: "Mi función principal es encargarme de que el dinero esté bien administrado y que el negocio realmente sea negocio. Mi meta es que podamos dar un precio que le compita a los puestos de afuera de las clínicas, pero asegurándome de que no perdamos dinero y que siempre tengamos presupuesto para comprar materia prima fresca.",
        email: "mariscalmilton@enrollate.com",
        specialty: "Finanzas y Administración"
    },
    3: {
        name: "Alvarado Mendoza Sarahi",
        role: "Encargada de Suministros",
        image: "img/fundador3.jpg",
        bio: "Mis funciones clave incluyen realizar pedidos o proveedores, recibir y verificar mercancía, controlar inventarios reducir mermas y asegurar el almacenamiento  adecuado para evitar riesgos sanitarios.",
        email: "alvaradosarahi@enrollate.com",
        specialty: "Manejo de Proveedores y Logística"
    },
    4: {
        name: "Vega Gaxiola Luis Enrique",
        role: "Encargado de Cocina",
        image: "img/fundador4.jpg",
        bio: "Responsable de supervisar y coordinar todas las actividades relacionadas con la preparación y elaboración de los productos, asegurando que los burritos y demás alimentos se preparen con calidad, higiene y siguiendo los estándares establecidos por la empresa.",
        email: "vegaluis@enrollate.com",
        specialty: "Encargado de Cocina y Supervisión"
    },
    5: {
        name: "Odilon Nieto Perla Rubi",
        role: "Encargada de la cocina ",
        image: "img/fundador5.jpg",
        bio: "Mi función es hacer la preparación de los burritos, así como la innovación de nuevas recetas que también sean saludables y que puedan complacer a nuestros consumidores.",
        email: "odilonperla@enrollate.com",
        specialty: "Cocina y Desarrollo de Recetas"
    },
    6: {
        name: "Frayre Cruz Alvaro",
        role: "Auxiliar de cocina",
        image: "img/fundador6.jpg",
        bio: "Mi función principal es ser ayudante a en la elaboración de los Burritos. Logrando que el trabajo de la encargada de cocina sea más eficiente y eficaz.",
        email: "frayrealvaro@enrollate.com",
        specialty: "Apoyo en la cocina"
    },
    7: {
        name: "Navarrete Loma Elizabeth",
        role: "Encargada de Ventas",
        image: "img/fundador7.jpg",
        bio: "Responsable de gestionar las ventas del negocio, atender a los clientes, explicar el menú de burritos saludables y tradicionales, tomar pedidos y apoyar en la promoción del producto para aumentar las ventas.",
        email: "navarreteelizabeth@enrollate.com",
        specialty: "Ventas y Atención al Cliente"
    },
    8: {
        name: "Rochin Jimenez Eileen Yamileth",
        role: "Marketing",
        image: "img/fundador8.jpg",
        bio: "Me encargo de crear y aplicar estrategias de marketing para promocionar y posicionar los burritos tradicionales y vegetarianos, comunicando la marca de forma clara y profesional para generar confianza y dar a conocer los productos en la comunidad.",
        email: "rochinEileen@enrollate.com",
        specialty: "Marketing Digital"
    },
    9: {
        name: "Rojas Juménez Alexa Michelle",
        role: "Encargada de control de calidad",
        image: "img/fundador9.jpg",
        bio: "Descripción del fundador 9. Comparte su visión para el futuro de Enróllate y su compromiso con la calidad.",
        email: "rojasalexa@enrollate.com",
        specialty: "Control de Calidad"
    }
};

// Función para mostrar los detalles del fundador
function showFounderDetail(founderId) {
    const founder = foundersData[founderId];
    
    if (founder) {
        document.getElementById('founderDetailImg').src = founder.image;
        document.getElementById('founderDetailImg').alt = founder.name;
        document.getElementById('founderDetailName').textContent = founder.name;
        document.getElementById('founderDetailRole').textContent = founder.role;
        document.getElementById('founderDetailBio').textContent = founder.bio;
        document.getElementById('founderDetailEmail').textContent = founder.email;
        document.getElementById('founderDetailSpecialty').textContent = founder.specialty;
        
        const modal = document.getElementById('founderModal');
        modal.classList.add('show');
    }
}

// Función para cerrar el modal
function closeFounderModal() {
    const modal = document.getElementById('founderModal');
    modal.classList.remove('show');
}

// Cerrar modal al hacer clic fuera de él
window.addEventListener('click', function(event) {
    const modal = document.getElementById('founderModal');
    if (event.target === modal) {
        closeFounderModal();
    }
});