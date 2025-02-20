// Seleccionar todos los elementos con las clases especificadas
const links = document.querySelectorAll('a:not(.btn)');

links.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.textDecoration = 'underline'; // Subrayar
        link.style.color = '#FFFFFF'; // Mantener el color blanco
    });

    link.addEventListener('mouseout', () => {
        link.style.textDecoration = 'none'; // Quitar subrayado
    });
});

const btn = document.querySelector('.btn');

btn.addEventListener('mouseover', () => {
    btn.style.backgroundColor = '#1586ff'; // Cambiar color al pasar el mouse
    btn.style.color= '#390202';
});

btn.addEventListener('mouseout', () => {
    btn.style.backgroundColor = '#390202'; // Volver al color original
    btn.style.color= '#ffffff';
});

const btnsPrimary = document.querySelectorAll('.btn-primary');

    // Iterar sobre cada botón y agregar los eventos
    btnsPrimary.forEach(btn => {
        btn.addEventListener('mouseover', () => {
            btn.style.backgroundColor = '#ff3a20'; // Cambiar color al pasar el mouse
            btn.style.color = '#390202'; // Cambiar color del texto
        });

        btn.addEventListener('mouseout', () => {
            btn.style.backgroundColor = '#AD1400'; // Volver al color original
            btn.style.color = '#ffffff'; // Volver al color del texto original
        });
});