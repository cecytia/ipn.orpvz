document.addEventListener("DOMContentLoaded", function() {
    
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(function(bar) {
        const percent = bar.getAttribute('data-percent');
        setTimeout(function() {
            bar.style.width = percent + '%';
        }, 500);
    });

    
    const ctx = document.getElementById('chart').getContext('2d');
    const chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['Uso en la Industria', 'Adopción Educativa', 'Crecimiento del Mercado'],
            datasets: [{
                label: 'Estadísticas de IA',
                data: [80, 65, 50],
                backgroundColor: ['#FF6347', '#32CD32', '#FFD700'], // Colores modificados
                borderRadius: 10,
                borderWidth: 1
            }]
        },
        options: {
            responsive: true,
            scales: {
                x: {
                    beginAtZero: true
                },
                y: {
                    beginAtZero: true,
                    max: 100
                }
            }
        }
    });

  
    const dropbtn = document.querySelector('.dropbtn');
    const dropdownContent = document.querySelector('.dropdown-content');
    
    dropbtn.addEventListener('click', function() {
       
        dropdownContent.classList.toggle('show');
    });

    
    window.addEventListener('click', function(e) {
        if (!e.target.matches('.dropbtn') && !e.target.matches('.dropdown-content a')) {
            if (dropdownContent.classList.contains('show')) {
                dropdownContent.classList.remove('show');
            }
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
   
    const ctx1 = document.getElementById('chart1').getContext('2d');
    new Chart(ctx1, {
        type: 'pie',
        data: {
            labels: ['Mejorará significativamente: 53.8%', 'Empeorará en cierta medida: 33.3%', 'Permanecerá igual: 12.9%'],
            datasets: [{
                data: [53.8,33.3,12.9],
                backgroundColor: ['#8A2BE2', '#20B2AA', '#DC143C'], // Colores modificados
                borderColor: ['#fff', '#fff','#fff'],
                borderWidth: 2
            }]
        }
    });

  
    const ctx2 = document.getElementById('chart2').getContext('2d');
    new Chart(ctx2, {
        type: 'pie',
        data: {
            labels: ['Investigación y búsqueda de información: 82.8%', 'Creación de resúmenes o esquemas: 11.8%','Dar la tarea a la IA para que la resuelva por mí: 5.4%'],
            datasets: [{
                data: [82.8,11.8,5.4],
                backgroundColor: ['#FF4500', '#20B2AA','#32CD32'], // Colores modificados
                borderColor: ['#fff', '#fff','#fff'],
                borderWidth: 2
            }]
        }
    });

   
    const ctx3 = document.getElementById('chart3').getContext('2d');
    new Chart(ctx3, {
        type: 'pie',
        data: {
            labels: ['Muy sastifecho/a: 90.3%', 'Insastifecho/a: 9.7%'],
            datasets: [{
                data: [90.3, 9.7],
                backgroundColor: ['#3CB371', '#FF6347'], // Colores modificados
                borderColor: ['#fff', '#fff'],
                borderWidth: 2
            }]
        }
    });

 
    const ctx4 = document.getElementById('chart4').getContext('2d');
    new Chart(ctx4, {
        type: 'pie',
        data: {
            labels: ['Si, completamente: 31.2%', 'No estoy seguro/a: 46.2%', 'No me prepara: 20.4%', 'No, lo empeora: 2.2%'],
            datasets: [{
                data: [31.2,46.2,20.4,2.2],
                backgroundColor: ['#FF1493', '#FFD700', '#00BFFF', '#8B0000'], // Colores modificados
                borderColor: ['#fff', '#fff'],
                borderWidth: 2
            }]
        }
    });

   
    const ctx5 = document.getElementById('chart5').getContext('2d');
    new Chart(ctx5, {
        type: 'pie',
        data: {
            labels: ['Si, definitivamente: 32.3%', 'Si, en cierta medida: 61.3%', 'No estoy seguro/a: 6.5%', 'No, no mejora: 0%'],
            datasets: [{
                data: [32.3,61.3,6.5,0],
                backgroundColor: ['#FF6347', '#32CD32', '#8A2BE2', '#20B2AA'], // Colores modificados
                borderColor: ['#fff', '#fff'],
                borderWidth: 2
            }]
        }
    });

    
    const ctx6 = document.getElementById('chart6').getContext('2d');
    new Chart(ctx6, {
        type: 'pie',
        data: {
            labels: ['Asistentes virtuales como lo son ChatGPT, entre otros: 75.3%', 'Plataformas de aprendizaje adaptivo: 11.8%','herramientas de escritura: 9.7%','No utilizo herramientas de IA: 3.2%'],
            datasets: [{
                data: [75.3,11.8,9.7,3.2],
                backgroundColor: ['#FF4500', '#8A2BE2', '#DC143C', '#20B2AA'], // Colores modificados
                borderColor: ['#fff', '#fff'],
                borderWidth: 2
            }]
        }
    });

    
    const ctx7 = document.getElementById('chart7').getContext('2d');
    new Chart(ctx7, {
        type: 'pie',
        data: {
            labels: ['Perjudicial: 12.9%', 'Beneficiosa: 87.1%'],
            datasets: [{
                data: [12.9,87.1],
                backgroundColor: ['#FF6347', '#32CD32'], // Colores modificados
                borderColor: ['#fff', '#fff'],
                borderWidth: 2
            }]
        }
    });

    
    const progressBars = document.querySelectorAll('.progress-bar');
    progressBars.forEach(function(bar) {
        const percent = bar.getAttribute('data-percent');
        setTimeout(function() {
            bar.style.width = percent + '%';
        }, 500);
    });
});
