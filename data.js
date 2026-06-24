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
        // ARCHIVO: data.js (SPRINT 3: Capítulo IX y Cierre)
        // ==========================================
        ,{
            name: 'IX. IMPLEMENTACIÓN Y RESULTADOS MVP',
            value: 'Núcleo operativo del agente ESIA',
            itemStyle: { color: '#3b82f6' },
            collapsed: false, // Expandido por defecto para la presentación
            children: [
                {
                    name: '9.1 Frontend (UI Guiada por Estado)',
                    value: 'Gestión de la interacción del usuario final',
                    collapsed: true,
                    children: [
                        { 
                            name: 'State-Driven UI (Bento Cards)', 
                            value: 'Tarjetas temáticas que obligan a contextualizar la intención, inyectando metadatos rígidos en el payload HTTP.' 
                        },
                        { 
                            name: 'Calendario Time-Blocking', 
                            value: 'Cuadrícula CSS Grid con persistencia JSON local para renderizar bloques horarios sin recargar la página.' 
                        },
                        { 
                            name: 'Click-to-Prompt', 
                            value: 'Mecanismo de degradación elegante que extrae el título de un evento del DOM y carga un comando en el chat.' 
                        }
                    ]
                },
                {
                    name: '9.2 Ingeniería de Datos (RAG)',
                    value: 'Pipeline de vectorización y anti-alucinaciones',
                    collapsed: true,
                    children: [
                        {
                            name: 'Extracción Dinámica (Selenium)',
                            value: 'Scraping de DOM dinámico capaz de evadir algoritmos anti-bot y navegar por la intranet institucional autenticada.'
                        },
                        {
                            name: 'Análisis Estructural (pdfplumber)',
                            value: 'Lectura geométrica (Layout Analysis) que preserva la alineación horizontal de tablas y mallas curriculares.'
                        },
                        {
                            name: 'Segmentación Recursiva (Chunking)',
                            value: 'División del corpus en bloques de 800 caracteres con un solapamiento (overlap) de 100 caracteres para no perder semántica.'
                        },
                        {
                            name: 'Vectorización (ChromaDB)',
                            value: 'Uso del modelo all-MiniLM-L6-v2 (384 dimensiones). La base vectorial se particiona en colecciones aisladas para evitar colisiones.'
                        }
                    ]
                },
                {
                    name: '9.3 Despliegue y Conectividad',
                    value: 'Motor lógico y transaccional',
                    collapsed: false, // El corazón de la exposición
                    children: [
                        {
                            name: 'Enrutamiento de Intenciones (Routing)',
                            value: 'Sistema híbrido de delegación de tareas',
                            children: [
                                { 
                                    name: 'Nivel I: Hard-Routing', 
                                    value: 'Enrutamiento determinista accionado por la UI. Fuerzan la invocación de un agente específico puenteando la ambigüedad.' 
                                },
                                { 
                                    name: 'Nivel II: Soft-Routing', 
                                    value: 'Motor heurístico basado en Regex. Mapea la similitud semántica de palabras clave (substring matching) para asignar pesos por especialidad.' 
                                }
                            ]
                        },
                        {
                            name: 'Razonamiento CoT',
                            value: 'El Agente de Tutoría usa "Chain-of-Thought" para descomponer problemas curriculares complejos antes de emitir un veredicto.'
                        },
                        {
                            name: 'Flujo Transaccional (Tool Calling)',
                            value: 'Ejecución dinámica de herramientas externas',
                            children: [
                                { name: 'Exploración de Estado', value: 'Petición GET a Google Apps Script para validar disponibilidad de infraestructura.' },
                                { name: 'Semantic Parsing', value: 'El LLM extrae entidades (Fecha, Hora, Deporte) y genera un comando estructurado.' },
                                { name: 'Intercepción POST', value: 'El backend inyecta la identidad OAuth2 del alumno y ejecuta la reserva en el calendario.' }
                            ]
                        }
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
                { name: 'Bibliografía (IEEE)', value: '14 referencias académicas autogeneradas vía BibTeX respaldando la arquitectura.' }
            ]
        }
    ]
};