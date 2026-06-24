// ==========================================
// ARCHIVO: data.js (SPRINT 1: Capítulos I al V)
// ==========================================

const esiaData = {
    name: 'ESAN-AI-AGENT-CPG4',
    value: 'Ecosistema de Inteligencia Artificial Local',
    label: { color: '#ffffff', fontSize: 18, fontWeight: 'bold' },
    itemStyle: { color: '#d4af37' },
    children: [
        {
            name: 'I. Introducción',
            value: 'Fundamentos y justificación del proyecto',
            collapsed: true,
            children: [
                { 
                    name: '1.1 Contexto', 
                    value: 'Saturación de canales de consulta y dispersión de la información institucional en la Universidad ESAN.' 
                },
                { 
                    name: '1.2 Solución Propuesta', 
                    value: 'Despliegue de un agente conversacional On-Premise para centralizar respuestas sin depender de terceros.' 
                },
                { 
                    name: '1.3 Soberanía de Datos', 
                    value: 'Garantizar que la información académica nunca salga de la red local (Zero Trust).' 
                }
            ]
        },
        {
            name: 'II. Estado del Arte',
            value: 'Investigación de tecnologías preexistentes',
            collapsed: true,
            children: [
                { 
                    name: '2.1 Modelos RAG', 
                    value: 'Evaluación de Llama 3, Mistral y Phi-3. Uso de cuantización (AWQ, QLoRA) para correr en hardware local.' 
                },
                { 
                    name: '2.2 IA Universitaria', 
                    value: 'Análisis de URAG (Unified Hybrid RAG) y su aplicación en chatbots de admisión.' 
                },
                { 
                    name: '2.3 Data Engineering', 
                    value: 'Estudio de datasets conversacionales (DialogStudio, doc2dial) para estructurar el corpus.' 
                }
            ]
        },
        {
            name: 'III. Gestión de Riesgos',
            value: 'Identificación y mitigación de amenazas',
            collapsed: true,
            children: [
                { 
                    name: 'Riesgos Técnicos', 
                    value: 'Falta de VRAM, alucinaciones del modelo y latencia en respuestas.' 
                },
                { 
                    name: 'Plan de Mitigación', 
                    value: 'Implementación de RAG estricto y cuantización de modelos fundacionales.' 
                }
            ]
        },
        {
            name: 'IV. Ética y Normativas',
            value: 'Marco legal y consideraciones morales',
            collapsed: true,
            children: [
                { 
                    name: '4.1 Privacidad (Ley 29733)', 
                    value: 'Cumplimiento de la Ley de Protección de Datos Personales del Perú.' 
                },
                { 
                    name: '4.2 Zero-Hallucination', 
                    value: 'Obligación ética de no inventar directrices académicas mediante System Prompts restrictivos.' 
                }
            ]
        },
        // ==========================================
        // REEMPLAZO PARA EL SPRINT 1: Capítulo V
        // ==========================================
        {
            name: 'V. Ing. Requerimientos',
            value: 'Especificación funcional y de usuario',
            collapsed: true,
            children: [
                { 
                    name: 'Requerimientos Funcionales (6 RF)', 
                    value: 'Pasa el cursor para ver la especificación técnica',
                    // INYECCIÓN DE TOOLTIP PERSONALIZADO
                    tooltip: {
                        formatter: `
                        <div style="padding: 5px; max-width: 350px; white-space: normal;">
                            <b style="color: #d4af37;">Requerimientos Funcionales (RF):</b><br/>
                            <hr style="border-color: #333;"/>
                            <span style="color: #3b82f6;">RF01:</span> Procesamiento de Lenguaje Natural On-Premise.<br/>
                            <span style="color: #3b82f6;">RF02:</span> Recuperación de contexto desde ChromaDB.<br/>
                            <span style="color: #3b82f6;">RF03:</span> Interfaz gráfica con Time-Blocking local.<br/>
                            <span style="color: #3b82f6;">RF04:</span> Validación anti-colisión horaria (CRUD).<br/>
                            <span style="color: #3b82f6;">RF05:</span> Extracción de intenciones y Tool Calling.<br/>
                            <span style="color: #3b82f6;">RF06:</span> Integración bidireccional con Calendar.
                        </div>`
                    }
                },
                { 
                    name: 'Requerimientos No Funcionales (3 RNF)', 
                    value: 'Pasa el cursor para ver métricas',
                    tooltip: {
                        formatter: `
                        <div style="padding: 5px; max-width: 350px; white-space: normal;">
                            <b style="color: #d4af37;">Requerimientos No Funcionales (RNF):</b><br/>
                            <hr style="border-color: #333;"/>
                            <span style="color: #10b981;">RNF01 (Rendimiento):</span> Latencia de inferencia optimizada.<br/>
                            <span style="color: #10b981;">RNF02 (Seguridad):</span> Soberanía de datos (Zero Trust).<br/>
                            <span style="color: #10b981;">RNF03 (Disponibilidad):</span> Despliegue modular 3-Tier.
                        </div>`
                    }
                },
                { 
                    name: 'Historias de Usuario (15 HU)', 
                    value: 'Casos de uso mapeados en la UI',
                    children: [
                        {
                            name: 'Clúster A: Autogestión (HU01-HU05)',
                            value: 'Interacción del calendario',
                            tooltip: {
                                formatter: `
                                <div style="padding: 5px; max-width: 300px; white-space: normal;">
                                    <b style="color: #d4af37;">Módulo de Autogestión:</b><br/>
                                    <hr style="border-color: #333;"/>
                                    <b>HU01:</b> Visualizar malla curricular.<br/>
                                    <b>HU02:</b> Agregar eventos al Time-Blocking.<br/>
                                    <b>HU03:</b> Prevenir cruce de horarios.<br/>
                                    <b>HU04:</b> Configurar recordatorios visuales.<br/>
                                    <b>HU05:</b> Navegación asíncrona por semanas.
                                </div>`
                            }
                        },
                        {
                            name: 'Clúster B: Inferencia (HU06-HU10)',
                            value: 'Consultas RAG',
                            tooltip: {
                                formatter: `
                                <div style="padding: 5px; max-width: 300px; white-space: normal;">
                                    <b style="color: #d4af37;">Módulo de Conocimiento:</b><br/>
                                    <hr style="border-color: #333;"/>
                                    <b>HU06:</b> Consultar normativas universitarias.<br/>
                                    <b>HU07:</b> Solicitar requisitos de admisión.<br/>
                                    <b>HU08:</b> Evaluación de prerrequisitos (CoT).<br/>
                                    <b>HU09:</b> Asistencia psicológica/bienestar.<br/>
                                    <b>HU10:</b> Click-to-prompt desde el DOM.
                                </div>`
                            }
                        },
                        {
                            name: 'Clúster C: Ejecución (HU11-HU15)',
                            value: 'Tool Calling y Reservas',
                            tooltip: {
                                formatter: `
                                <div style="padding: 5px; max-width: 300px; white-space: normal;">
                                    <b style="color: #d4af37;">Módulo Transaccional:</b><br/>
                                    <hr style="border-color: #333;"/>
                                    <b>HU11:</b> Login seguro vía OAuth 2.0.<br/>
                                    <b>HU12:</b> Consultar disponibilidad de canchas.<br/>
                                    <b>HU13:</b> Reserva autónoma de cubículos.<br/>
                                    <b>HU14:</b> Sincronización con Google Calendar.<br/>
                                    <b>HU15:</b> Trazabilidad de operaciones ejecutadas.
                                </div>`
                            }
                        }
                    ]
                }
            ]
        },
        
        // ==========================================
        // ARCHIVO: data.js (SPRINT 2: Capítulos VI al VIII)
        // ==========================================
        {
            name: 'VI. Arquitectura del Sistema',
            value: 'Diseño estructural y soberanía On-Premise',
            collapsed: true,
            children: [
                {
                    name: '6.1 Diseño 3-Tier',
                    value: 'Patrón de tres capas: Presentación, Middleware y Backend.',
                    children: [
                        { 
                            name: 'Frontend (UI Guiada por Estado)', 
                            value: 'Interacción mediante Bento Cards que inyectan metadatos rígidos para enrutar intenciones.' 
                        },
                        { 
                            name: 'Middleware (OAuth 2.0)', 
                            value: 'Autenticación delegada con Google Workspace institucional. Extrae identidad del JWT sin almacenar contraseñas.' 
                        },
                        { 
                            name: 'Backend (Motor de Inferencia)', 
                            value: 'Uso de Ollama y Llama 3.1 (4.7 GB) ejecutado localmente para evitar fuga de datos.' 
                        }
                    ]
                },
                {
                    name: '6.2 Topología Zero Trust',
                    value: 'Seguridad de red y enrutamiento',
                    children: [
                        { 
                            name: 'Red Superpuesta (Overlay)', 
                            value: 'Conexión entre capas mediante túneles cifrados Peer-to-Peer vía Tailscale y WireGuard.' 
                        },
                        { 
                            name: 'Aislamiento de Puertos', 
                            value: 'Previene ataques DDoS al no exponer los motores lógicos a la internet pública (IPv4/IPv6).' 
                        }
                    ]
                }
            ]
        },
        // ==========================================
        // REEMPLAZO DEFINITIVO SPRINT 2: Capítulo VII (Con Imágenes)
        // ==========================================
        {
            name: 'VII. Diseño de Interacciones UML',
            value: 'Modelado del comportamiento del sistema',
            collapsed: true,
            children: [
                {
                    name: '15 Diagramas de Secuencia (Farid)',
                    value: 'Flujo asíncrono de mensajes',
                    children: [
                        {
                            name: 'Autogestión (UI)',
                            value: 'Diagramas 01 al 05',
                            children: [
                                { name: 'DS-01', tooltip: { formatter: `<div style="text-align:center;"><b style="color:#d4af37;">Diagrama 01</b><br/><img src="./IMG/Diagrama_Secuencia_01.png" style="max-width:350px; border-radius:5px; margin-top:5px;"/></div>` } },
                                { name: 'DS-02', tooltip: { formatter: `<div style="text-align:center;"><b style="color:#d4af37;">Diagrama 02</b><br/><img src="./IMG/Diagrama_Secuencia_02.png" style="max-width:350px; border-radius:5px; margin-top:5px;"/></div>` } },
                                { name: 'DS-03', tooltip: { formatter: `<div style="text-align:center;"><b style="color:#d4af37;">Diagrama 03</b><br/><img src="./IMG/Diagrama_Secuencia_03.png" style="max-width:350px; border-radius:5px; margin-top:5px;"/></div>` } },
                                { name: 'DS-04', tooltip: { formatter: `<div style="text-align:center;"><b style="color:#d4af37;">Diagrama 04</b><br/><img src="./IMG/Diagrama_Secuencia_04.png" style="max-width:350px; border-radius:5px; margin-top:5px;"/></div>` } },
                                { name: 'DS-05', tooltip: { formatter: `<div style="text-align:center;"><b style="color:#d4af37;">Diagrama 05</b><br/><img src="./IMG/Diagrama_Secuencia_05.png" style="max-width:350px; border-radius:5px; margin-top:5px;"/></div>` } }
                            ]
                        },
                        {
                            name: 'Inferencia RAG',
                            value: 'Diagramas 06 al 10',
                            children: [
                                { name: 'DS-06', tooltip: { formatter: `<div style="text-align:center;"><b style="color:#d4af37;">Diagrama 06</b><br/><img src="./IMG/Diagrama_Secuencia_06.png" style="max-width:350px; border-radius:5px; margin-top:5px;"/></div>` } },
                                { name: 'DS-07', tooltip: { formatter: `<div style="text-align:center;"><b style="color:#d4af37;">Diagrama 07</b><br/><img src="./IMG/Diagrama_Secuencia_07.png" style="max-width:350px; border-radius:5px; margin-top:5px;"/></div>` } },
                                { name: 'DS-08', tooltip: { formatter: `<div style="text-align:center;"><b style="color:#d4af37;">Diagrama 08</b><br/><img src="./IMG/Diagrama_Secuencia_08.png" style="max-width:350px; border-radius:5px; margin-top:5px;"/></div>` } },
                                { name: 'DS-09', tooltip: { formatter: `<div style="text-align:center;"><b style="color:#d4af37;">Diagrama 09</b><br/><img src="./IMG/Diagrama_Secuencia_09.png" style="max-width:350px; border-radius:5px; margin-top:5px;"/></div>` } },
                                { name: 'DS-10', tooltip: { formatter: `<div style="text-align:center;"><b style="color:#d4af37;">Diagrama 10</b><br/><img src="./IMG/Diagrama_Secuencia_10.png" style="max-width:350px; border-radius:5px; margin-top:5px;"/></div>` } }
                            ]
                        },
                        {
                            name: 'Tool Calling',
                            value: 'Diagramas 11 al 15',
                            children: [
                                { name: 'DS-11', tooltip: { formatter: `<div style="text-align:center;"><b style="color:#d4af37;">Diagrama 11</b><br/><img src="./IMG/Diagrama_Secuencia_11.png" style="max-width:350px; border-radius:5px; margin-top:5px;"/></div>` } },
                                { name: 'DS-12', tooltip: { formatter: `<div style="text-align:center;"><b style="color:#d4af37;">Diagrama 12</b><br/><img src="./IMG/Diagrama_Secuencia_12.png" style="max-width:350px; border-radius:5px; margin-top:5px;"/></div>` } },
                                { name: 'DS-13', tooltip: { formatter: `<div style="text-align:center;"><b style="color:#d4af37;">Diagrama 13</b><br/><img src="./IMG/Diagrama_Secuencia_13.png" style="max-width:350px; border-radius:5px; margin-top:5px;"/></div>` } },
                                { name: 'DS-14', tooltip: { formatter: `<div style="text-align:center;"><b style="color:#d4af37;">Diagrama 14</b><br/><img src="./IMG/Diagrama_Secuencia_14.png" style="max-width:350px; border-radius:5px; margin-top:5px;"/></div>` } },
                                { name: 'DS-15', tooltip: { formatter: `<div style="text-align:center;"><b style="color:#d4af37;">Diagrama 15</b><br/><img src="./IMG/Diagrama_Secuencia_15.png" style="max-width:350px; border-radius:5px; margin-top:5px;"/></div>` } }
                            ]
                        }
                    ]
                },
                {
                    name: 'Especificación Sommerville',
                    value: 'Validación clásica de Casos de Uso',
                    tooltip: {
                        formatter: `
                        <div style="padding: 5px; max-width: 300px; white-space: normal;">
                            <b style="color: #d4af37;">Estándar IEEE / Sommerville:</b><br/>
                            <hr style="border-color: #333;"/>
                            Documentación de precondiciones, flujo normal, flujos alternativos y postcondiciones para garantizar la robustez del sistema ante fallos de usuario.
                        </div>`
                    }
                }
            ]
        },
        {
            name: 'VIII. Especificación Algorítmica',
            value: 'Lógica computacional nativa',
            collapsed: true,
            children: [
                {
                    name: '3 Algoritmos Nativos IEEE',
                    value: 'Documentación estandarizada de las funciones críticas del sistema.',
                    children: [
                        { 
                            name: 'Algoritmo de Reservas', 
                            value: 'Lógica transaccional para evitar superposición horaria en infraestructura deportiva y cubículos.' 
                        },
                        { 
                            name: 'Algoritmo Time-Blocking', 
                            value: 'Renderizado dinámico de la cuadrícula CSS Grid y cálculo de intervalos en memoria.' 
                        },
                        { 
                            name: 'Algoritmo Anti-Colisión', 
                            value: 'Validación CRUD local que aborta inserciones en el DOM si detecta cruces de horarios.' 
                        }
                    ]
                }
            ]
        }
        // ==========================================
        // REEMPLAZO EXACTO SPRINT 3: Capítulo IX (Fuente: LaTeX Crudo)
        // ==========================================
        ,{
            name: 'IX. IMPLEMENTACIÓN Y RESULTADOS DEL MVP',
            value: 'Validación funcional del sistema de gestión universitaria',
            itemStyle: { color: '#3b82f6' },
            collapsed: false,
            children: [
                {
                    name: 'Base del Ecosistema',
                    value: 'Arquitectura unificada y Base de Datos (auth_sms_db)',
                    tooltip: {
                        formatter: `
                        <div style="padding: 5px; max-width: 320px; white-space: normal;">
                            <b style="color: #d4af37;">Arquitectura Unificada:</b><br/>
                            <hr style="border-color: #333;"/>
                            • <b>Estructura:</b> Carpeta <i>agents</i> para enrutamiento (ej. bTutoria.py) y <i>web</i> (css, js, py, html).<br/>
                            • <b>Seguridad:</b> Datos sensibles excluidos vía .gitignore.<br/>
                            • <b>Base de Datos:</b> Almacenamiento local de sesiones, logs y mensajería con retención de 30 días hábiles.
                        </div>`
                    }
                },
                {
                    name: '9.1 Validación Frontend',
                    value: 'Módulo de Gestión de Tiempo',
                    children: [
                        { name: 'Gestión de Estado', value: 'Persistencia JSON local (Single Page Application).' },
                        { name: 'Algoritmo CRUD', value: 'Validador anti-conflictos horarios contra base de datos local.' },
                        { name: 'Interoperabilidad IA', value: 'Click-to-Prompt para consultas estructuradas al motor RAG.' }
                    ]
                },
                {
                    name: '9.2 Pipeline RAG',
                    value: 'Procesamiento de datos en tres etapas',
                    children: [
                        { name: '1. Limpieza', value: 'Uso de BeautifulSoup4 y Regex para purgar ruido estructural.' },
                        { name: '2. Vectorización', value: 'Embeddings con all-MiniLM-L6-v2 indexados en ChromaDB.' },
                        { name: '3. Generación Restringida', value: 'System Prompts estrictos para 100% libre de alucinaciones y técnica Chain-of-Thought (CoT).' }
                    ]
                },
                {
                    name: '9.3 Inferencia de Intención',
                    value: 'Arquitectura híbrida en 4 niveles. 🔴 HAZ CLIC AQUÍ para abrir la matriz de ejemplos prácticos.',
                    link: './Niveles_1_4.html', // <--- ENLACE AL ARCHIVO
                    itemStyle: { borderColor: '#10b981', borderWidth: 2, shadowBlur: 10, shadowColor: '#10b981' },
                    children: [
                        {
                            name: 'Niveles I y II (Rápidos)',
                            value: 'Sesgo de UI y Motor Heurístico (Clic para ver casos de uso)',
                            link: './Niveles_1_4.html', // <--- ENLACE AL ARCHIVO
                            tooltip: {
                                formatter: `
                                <div style="padding: 5px; max-width: 350px; white-space: normal;">
                                    <b style="color: #10b981;">Enrutamiento de Baja Latencia:</b><br/>
                                    <hr style="border-color: #333;"/>
                                    • <b>Nivel I (Gravedad de Interfaz):</b> Sesgo contextual pasivo según el dashboard activo (+0.05 de probabilidad).<br/>
                                    • <b>Nivel II (Motor RegEx):</b> Analizador heurístico de alta velocidad (< 0.001s). Otorga un bono léxico plano de +0.10 ante anomalías.<br/><br/>
                                    <i style="color: #d4af37;">► Clic en el nodo para abrir simulador de preguntas.</i>
                                </div>`
                            }
                        },
                        {
                            name: 'Niveles III y IV (Profundos)',
                            value: 'Semántica y Fallback LLM (Clic para ver casos de uso)',
                            link: './Niveles_1_4.html', // <--- ENLACE AL ARCHIVO
                            tooltip: {
                                formatter: `
                                <div style="padding: 5px; max-width: 350px; white-space: normal;">
                                    <b style="color: #10b981;">Enrutamiento Analítico:</b><br/>
                                    <hr style="border-color: #333;"/>
                                    • <b>Nivel III (Enrutador Semántico):</b> Cálculo vectorial con all-MiniLM-L6-v2. Utiliza Similitud de Coseno. Umbral > 0.60. Margen de ambigüedad < 0.08 fuerza desambiguación manual.<br/><br/>
                                    • <b>Nivel IV (Zero-Shot LLM):</b> Protocolo de contingencia (0.25 < score < 0.60). Delega la clasificación deductiva a Llama 3.1 ante estrés semántico complejo.<br/><br/>
                                    <i style="color: #d4af37;">► Clic en el nodo para abrir simulador de preguntas.</i>
                                </div>`
                            }
                        }
                    ]
                },
                {
                    name: '9.4 Protocolo de Despliegue',
                    value: 'Ignición distribuida en microservicios',
                    children: [
                        { name: 'Nodo Datos (Supabase)', value: 'Gestión relacional, autenticación y logs de sesión.' },
                        { name: 'Nodo Inferencia (Cloud)', value: 'FastAPI, ChromaDB y Llama 3.1. Latencia actual ~3s.' },
                        { name: 'Nodo Web (Render)', value: 'Orquestación HTTP/RESTful asíncrona.' }
                    ]
                }
            ]
        },
        {
            name: 'Glosario y Referencias',
            value: 'Documentación de respaldo',
            collapsed: true,
            children: [
                { name: 'Términos Clave', value: 'RAG, CoT, Tool-Augmented LLMs, Zero Trust, Chunking.' },
                { name: 'Bibliografía (IEEE)', value: 'Referencias académicas gestionadas vía BibTeX.' }
            ]
        }
    ]
};
