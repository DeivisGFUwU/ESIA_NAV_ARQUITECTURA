// ==========================================
// ARCHIVO: app.js (Motor de Renderizado)
// ==========================================

// Inicialización del lienzo en el DOM
const chartDom = document.getElementById('grafico');
const myChart = echarts.init(chartDom);

// Configuración absoluta del Knowledge Graph
const option = {
    // Configuración de los Tooltips flotantes (HTML Injection Support)
    tooltip: {
        trigger: 'item',
        triggerOn: 'mousemove',
        backgroundColor: 'rgba(20, 20, 20, 0.95)',
        borderColor: '#3b82f6',
        borderWidth: 1,
        textStyle: { color: '#f8fafc' },
        padding: 10,
        borderRadius: 8,
        enterable: true, // Permite que el cursor entre al tooltip (útil para imágenes)
        shadowBlur: 15,
        shadowColor: 'rgba(0, 0, 0, 0.8)'
    },
    series: [
        {
            type: 'tree',
            data: [esiaData], // Variable importada de data.js
            
            // Posicionamiento en el lienzo
            top: '8%',
            left: '12%',
            bottom: '8%',
            right: '25%',
            
            symbolSize: 12,
            orient: 'LR', // De Izquierda a Derecha
            roam: true, // Habilita el Zoom y Pan
            expandAndCollapse: true,
            initialTreeDepth: 1, // Capítulos principales colapsados al inicio
            animationDurationUpdate: 600, // Transición suave y profesional
            
            // Estilos estáticos de los nodos
            itemStyle: { 
                color: '#1e293b', 
                borderColor: '#3b82f6', 
                borderWidth: 2 
            },
            
            // Estilos de las líneas de conexión
            lineStyle: { 
                color: '#334155', 
                width: 2, 
                curveness: 0.6 
            },
            
            // Estilos de los textos principales
            label: {
                position: 'top',
                verticalAlign: 'middle',
                align: 'center',
                fontSize: 14,
                color: '#e2e8f0',
                distance: 12,
                fontFamily: 'Segoe UI'
            },
            
            // Estilos para los nodos finales (Hojas)
            leaves: {
                label: { 
                    position: 'right', 
                    verticalAlign: 'middle', 
                    align: 'left' 
                }
            },
            
            // MOTOR DE ENFOQUE (Efecto "Wow" al interactuar)
            emphasis: {
                focus: 'descendant', // Ilumina toda la rama seleccionada
                itemStyle: {
                    color: '#d4af37',
                    borderColor: '#ffffff',
                    borderWidth: 3,
                    shadowBlur: 15,
                    shadowColor: 'rgba(212, 175, 55, 0.8)'
                },
                lineStyle: {
                    color: '#d4af37',
                    width: 3
                },
                label: {
                    color: '#d4af37',
                    fontWeight: 'bold',
                    textShadowBlur: 8,
                    textShadowColor: '#000'
                }
            }
        }
    ]
};

// Ejecución del renderizado
option && myChart.setOption(option);

// Listener para hacer el gráfico responsivo ante redimensionamientos
window.addEventListener('resize', () => {
    myChart.resize();
});