/* =========================================================================
   🎛️ 1. CONFIGURACIÓN MAESTRA: EDITABLE PARA CUALQUIER NEGOCIO
   ========================================================================= */

    // TEXTOS E IDENTIFICADORES VISUALES DE LA WEB APP (Fácilmente editables)
    const TEXTOS_CONFIG = {
        // Encabezados Generales
        headerBadge: "TU ASISTENTE DIGITAL",
        headerTitleHTML: "NEXI<span>Balloons</span>",
        headerDesc: "Cotiza con precisión, cobra con confianza.",
        footerBrandHTML: "Desarrollado por <strong>NEXI Systems</strong> | Todos los derechos reservados &copy; 2026",
        
        // Bloque 1: Inventario
        block1Title: "01 / Inventario Base",
        tabInsumos: "Insumos",
        tabEstructuras: "Estructuras",
        tabConsumibles: "Consumibles",
        catalogTitle: "Tu Catálogo Guardado",
        
        // Formularios - Etiquetas de Insumos
        lblInsumoNombre: "Concepto (Globo / Material)",
        placeholderInsumoNombre: "Ej: Globo de latex o Globo de figuras",
        lblInsumoMarca: "Marca",
        placeholderInsumoMarca: "Sempertex",
        lblInsumoMedida: "Medida",
        placeholderInsumoMedida: "R12",
        lblInsumoColor: "Color",
        placeholderInsumoColor: "Reflex Oro",
        lblInsumoCant: "Cant x Bolsa (Pzas)",
        placeholderInsumoCant: "50",
        lblInsumoPrecio: "Precio Bolsa ($)",
        placeholderInsumoPrecio: "150",

        // Formularios - Etiquetas de Estructuras
        lblEstNombre: "Nombre de la Estructura",
        placeholderEstNombre: "Ej. Soporte Circular Metálico",
        lblEstPropiedad: "Tipo de Propiedad",
        lblEstCostoPropia: "Costo de Mantenimiento ($)",
        placeholderEstCostoPropia: "50",
        lblEstCostoRenta: "Costo Renta ($)",
        placeholderEstCostoRenta: "200",
        lblEstCostoEnvio: "Costo Envío ($)",
        placeholderEstCostoEnvio: "50",
        selectEstOpciones: [
            { value: "propia", text: "Estructura Propia" },
            { value: "rentada", text: "Estructura Rentada (Proveedor)" }
        ],

        // Formularios - Etiquetas de Consumibles
        lblConNombre: "Consumible / Accesorio",
        placeholderConNombre: "Ej. Tanque Helio Industrial",
        lblConCantidad: "Capacidad o Cantidad Total",
        placeholderConCantidad: "Ej. 500",
        lblConUnidad: "Unidad de Medida",
        lblConPrecio: "Precio de Adquisición ($)",
        placeholderConPrecio: "2400",
        selectConOpciones: [
            { value: "usos", text: "Usos / Porciones (Helio)" },
            { value: "metros", text: "Metros (m) (Hilos)" },
            { value: "piezas", text: "Piezas" }
        ],
        
        // Botones e Indicadores del Almacén
        btnGuardarMain: "Guardar en Inventario",
        btnGuardarMainActualizar: "Actualizar Cambios",
        calcDinamicoDefault: "Completa datos...",
        calcDinamicoPrefix: "Costo Unitario: ",
        emptyStateWarehouse: "Vacío.",

        // Bloque 2: Mesa de Composición
        block2Title: "02 / Mesa de Composición",
        lblCotBuscar: "Buscar Material o Insumo",
        placeholderCotBuscar: "Escribe para filtrar el selector...",
        lblCotSelect: "Seleccionar Concepto",
        lblCotCantidad: "Cantidad a usar",
        placeholderCotCantidad: "1",
        btnCotAdd: "+ Añadir",
        emptyStateMesa: "Mesa vacía.",
        btnMesaSave: "Guardar",
        btnMesaLoad: "Cargar",
        btnMesaClear: "Vaciar",

        // Bloque 3: Financiero e Ingeniería de Costos
        block3Title: "03 / Ingeniería de Costos",
        paywallTitle: "Módulo de Ingeniería Financiera",
        paywallDescHTML: "Sincroniza una cuenta con suscripción <strong>Premium</strong> para automatizar tus cálculos avanzados.",
        btnPaywallLogin: "Iniciar Sesión",
        lblCotDificultad: "Nivel de Dificultad / Riesgo Técnico",
        selectDificultadOpciones: [
            { value: "basica", text: "🟢 Básica (Sin recargos)" },
            { value: "media", text: "🟡 Media (+20%)" },
            { value: "alta", text: "🔴 Alta (+50%)" },
            { value: "critica", text: "⚫ Crítica (+80%)" }
        ],
        txtSliderLabel: "Margen de Ganancia:",
        lblManoObra: "Mano de Obra Propia (Tu ganancia neta como diseñador)",
        placeholderManoObra: "Monto que deseas ganar por tu trabajo",
        lblLogistica: "Logística y Traslado",
        placeholderCostoViaje: "Costo por viaje ($)",
        placeholderCantidadViajes: "N° Viajes",
        lblStaff: "Personal Operativo (Staff)",
        placeholderCostoStaff: "Pago por ayudante ($)",
        placeholderCantidadStaff: "N° Personas",

        // Cuadro resumen financiero interactivo
        txtRowInvNeta: "Inversión Neta Materiales:",
        txtRowGastosDes: "Gastos Operativos Desglosados:",
        txtSubViaticos: "↳ Viáticos (Traslado):",
        txtSubStaff: "↳ Personal Operativo (Staff):",
        txtSubMo: "↳ Mano de Obra Propia:",
        txtRowTotalGastos: "Total Gastos Operativos:",
        txtRowSugeridoHTML: "<strong>Precio Sugerido al Público:</strong>",
        
        // Personalización PDF e Impresión
        txtPdfCustomTitle: "🎨 Personalizar Encabezado del PDF",
        placeholderPdfCustomName: "Nombre de tu negocio",
        txtPdfUploadBtn: "📸 Cargar Logo desde el dispositivo",
        btnGuardarPdf: "📄 Guardar PDF",
        btnWhatsapp: "💬 Enviar WhatsApp",
        txtThConcepto: "Concepto Integrado",
        txtThMonto: "Monto",
        txtPrintTotalLbl: "Inversión Total",
        txtPrintLegalHTML: `* Esta cotización tiene una vigencia de 15 días a partir de la fecha de emisión.<br>
                            Requiere un anticipo del 50% para reservar la fecha y congelar precios de materiales.`,
        pdfDefaultBusinessName: "UniversalStudio",
        pdfDefaultSubTitle: "Presupuesto Comercial de Diseño y Decoración de Ambientes",
        pdfCustomSubTitle: "Cotización Formal de Servicios",

        // Modal Composiciones/Plantillas Guardadas
        txtModalPlantillasTitle: "Composiciones Guardadas",
        txtModalPlantillasDesc: "Selecciona una plantilla para montarla directamente en la mesa de composición.",
        emptyStatePlantillas: "No tienes composiciones creadas.",

        // Modal Autenticación Nube
        txtAuthTitle: "Sincronizar Servidor Cloud",
        txtAuthDesc: "Respalda tu catálogo y desbloquea las herramientas herramientas financieras avanzadas.",
        txtAuthPlansBoxHTML: `<div style="margin-bottom: 4px;">🟢 <strong>Plan Básico (Gratis para siempre):</strong> Guarda y respalda todo tu inventario/catálogo en la nube de forma segura.</div>
                              <div>👑 <strong>Plan Premium:</strong> Desbloquea el módulo de Ingeniería de Costos, multiplicadores comerciales, viáticos y exportación PDF/WhatsApp.</div>`,
        lblAuthEmail: "Correo Electrónico",
        placeholderAuthEmail: "nombre@correo.com",
        lblAuthPass: "Contraseña",
        lblAuthConfirm: "Confirmar Contraseña",
        btnAuthSubmitLogin: "Iniciar Sesión",
        btnAuthSubmitRegister: "Crear Cuenta de Cero",
        btnAuthLogout: "Desconectar Servidor",

        // Mensajes dinámicos de WhatsApp
        whatsappTemplateIntro: "¡Hola! 👋✨\n\nTe comparto el presupuesto conceptual para tu proyecto:\n\n📋 *Detalle del Servicio:* \n• *Diseño y Producción Integral:* Planificación creativa, estructuras premium y materiales decorativos de alta calidad.\n",
        whatsappTemplateLogistica: "• *Logística y Montaje:* Traslado técnico seguro de insumos, personal operativo y control de montaje en sitio.\n",
        whatsappTemplateFooter: "\n💰 *Inversión Total:* *{PRECIO}*\n⏱️ *Vigencia del presupuesto:* 15 días.\n\n📄 Adjunto a este mensaje te enviaré el documento PDF con las especificaciones detailedas y términos de reserva.\n\n¿Qué te parece la propuesta? Quedo muy atento/a para bloquear tu fecha en agenda. ¡Saludos! 🚀",

        // Banners de Estado Cloud
        bannerLocal: "💻 Modo Demostración Local — Prueba la app libremente. Tus datos se borrarán al cerrar el navegador.",
        bannerPremium: "✨ Modo Premium — Acceso total ilimitado y respaldo automático en la nube.",
        bannerBasic: "☁️ Plan Básico — Catálogo sincronizado en la nube. Sube a Premium para desbloquear Costos Avanzados.",
        bannerExpired: "🛑 Suscripción vencida — Módulo financiero en pausa."
    };

    // CONFIGURACIÓN DEL CONTENIDO DE LOS MODALES DE AYUDA (HTML)
    const MODALES_AYUDA_CONFIG = {
        ayudaInventarioHTML: `
            <button class="modal-close" onclick="cerrarModalAyuda()">✕</button>
            <h3>💡 Guía de Registro de Consumibles</h3>
            <p style="font-size: 13px; color: var(--accent); margin-bottom: 16px;">Para mantener tus costos exactos sin fórmulas complejas, sigue estos dos métodos prácticos:</p>
            
            <div class="help-card-info">
                <strong>🎈 Caso Helio (Tanques):</strong><br>
                Registra el tanque en base a cuántos globos promedio infla según el proveedor.<br>
                • <em>Cantidad total:</em> 500<br>
                • <em>Medida:</em> Usos / Porciones<br>
                • <em>Precio:</em> $2,400<br>
                <strong>Resultado:</strong> Cada globo que infles descontará exactamente $4.80 de tu inventario.
            </div>

            <div class="help-card-info">
                <strong>🧵 Caso Hilos / Listones / Cintas:</strong><br>
                Introduce el metraje total que incluye el rollo original.<br>
                • <em>Cantidad total:</em> 100<br>
                • <em>Medida:</em> Metros (m)<br>
                • <em>Precio:</em> $150<br>
                <strong>Resultado:</strong> Cada metro usado en tus composiciones costará $1.50.
            </div>
            
            <button class="btn-action" style="background: var(--primary); margin-top: 8px;" onclick="cerrarModalAyuda()">Entendido</button>
        `,

        ayudaCostosHTML: `
            <button class="modal-close" onclick="cerrarModalAyudaCostos()">✕</button>
            <h3>💡 Guía de Costos Operativos y Viáticos</h3>
            <p style="font-size: 12px; color: var(--accent); margin-bottom: 12px; line-height: 1.4;">
                Asigna valores libres para controlar de forma justa los gastos agregados de transporte y mano de obra requeridos para montar el evento.
            </p>
            
            <div class="help-card-info" style="margin-bottom:14px;">
                <strong>⚙️ ¿Cómo funciona este bloque?</strong><br>
                El precio de tus materiales se multiplica según tu <strong>Margen Comercial</strong> y su <strong>Nivel de Dificultad</strong> técnica. Posterior a eso, los gastos operativos de traslado, ayudantes y tu propia mano de obra experta se suman de forma neta para proteger tus costos reales.
            </div>

            <h4>📈 Definición de Riesgo Técnico</h4>
            <div class="help-card-info" style="margin-bottom:14px;">
                • <strong>🟢 Básica (1.0x):</strong> Montajes sencillos a ras de suelo, sin complicaciones climáticas ni presiones extremas de tiempo.<br><br>
                • <strong>🟡 Media (1.2x):</strong> Requiere calibración exacta en sitio, logística de inflado en el lugar o un ritmo acelerado de ejecución.<br><br>
                • <strong>🔴 Alta (1.5x):</strong> Estructuras de gran formato, instalaciones complejas en altura o condiciones climáticas demandantes en exteriores.<br><br>
                • <strong>⚫ Crítica (1.8x):</strong> Diseños de autor con alta precisión artesanal, marcos fabricados a medida o un alto riesgo inherente de merma de material.
            </div>

            <h4>📊 Tabla de Costos Sugeridos (Referencia)</h4>
            <table class="help-table">
                <thead>
                    <tr>
                        <th>Concepto</th>
                        <th>Zona / Tipo</th>
                        <th>Sugerido</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td><strong>Logística (Por viaje)</strong></td>
                        <td>Zona Urbana habitual</td>
                        <td>$100 - $150</td>
                    </tr>
                    <tr>
                        <td><strong>Logística (Por viaje)</strong></td>
                        <td>Zona Metropolitana / Tráfico</td>
                        <td>$200 - $350</td>
                    </tr>
                    <tr>
                        <td><strong>Logística (Por viaje)</strong></td>
                        <td>Foránea / Larga distancia</td>
                        <td>$500+ (+ Casetas)</td>
                    </tr>
                    <tr>
                        <td><strong>Staff (Por persona)</strong></td>
                        <td>Ayudante Básico de carga</td>
                        <td>$200 - $350</td>
                    </tr>
                    <tr>
                        <td><strong>Staff (Por persona)</strong></td>
                        <td>Diseñador / Decorador Junior</td>
                        <td>$400 - $600</td>
                    </tr>
                </tbody>
            </table>
            
            <button class="btn-action" style="background: var(--primary); margin-top: 16px;" onclick="cerrarModalAyudaCostos()">Entendido</button>
        `,

        // Alertas Dinámicas de SweetAlert2 (Para no revolver cadenas de texto abajo)
        alertMesaTitulo: '🛠️ Mesa de Composición Advanced',
        alertMesaHTML: '<div style="text-align: left; font-size: 13px; color: var(--accent); line-height: 1.5;">' +
                       'Este bloque consolida el diseño técnico y receta de tu cotización:<br><br>' +
                       '• <strong>Buscador Integrado:</strong> Escribe cualquier palabra clave en el filtro dinámico para reducir la lista del selector al instante.<br><br>' +
                       '• <strong>Editar Cantidades:</strong> Directamente en la tarjeta del material verás una casilla numérica. Cambia el valor y toda la Ingeniería Financiera se adaptará en tiempo real.<br><br>' +
                       '• <strong>Botón Guardar:</strong> Archiva la receta en la nube o disco local.<br><br>' +
                       '• <strong>Botón Cargar:</strong> Abre el baúl de plantillas guardadas.</div>'
    };

    // PARÁMETROS OPERATIVOS NUMÉRICOS
    const CONFIG_NEGOCIO = {
        multiplicadorComercial: { defecto: 2.5, minmo: 1.0, maximo: 4.0, paso: 0.1 },
        recargosDificultad: { basica: 1.0, media: 1.2, alta: 1.5, critica: 1.8 },
        factorMermas: 1.05  
    };


/* =========================================================================
   🧬 2. LÓGICA INTERNA DE LA APLICACIÓN (NO MODIFICAR - CONECTADA AL MAESTRO)
   ========================================================================= */

    const SUPABASE_URL = "https://ttncfefgemtpiultyaza.supabase.co";
    const SUPABASE_ANON_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InR0bmNmZWZnZW10cGl1bHR5YXphIiwicm9sZSI6ImFub24iLCJpYXQiOjE3ODA3ODY3NDgsImV4cCI6MjA5NjM2Mjc0OH0.zo-obF_anF54BUY73_ZLIiHmAPJ-je9HpJXAKJ77LCQ";
    const _supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);
    const APP_IDENTIFIER = 'balloons';

    let inventarioGlobal = [];
    let cotizacionActual = [];
    let usuarioSesion = null; 
    let modoAuthActual = "login"; 

    const formato = new Intl.NumberFormat('es-MX', { style: 'currency', currency: 'MXN' });
    const AppleAlert = Swal.mixin({
        customClass: { popup: 'swal2-popup-apple', confirmButton: 'swal2-confirm-apple', cancelButton: 'swal2-cancel-apple' },
        buttonsStyling: false
    });

    // Inyección automatizada de textos en el DOM al arrancar
    function inicializarTextosEstaticosDOM() {
        document.getElementById('txt-header-badge').innerText = TEXTOS_CONFIG.headerBadge;
        document.getElementById('txt-header-title').innerHTML = TEXTOS_CONFIG.headerTitleHTML;
        document.getElementById('txt-header-desc').innerText = TEXTOS_CONFIG.headerDesc;
        document.getElementById('txt-block1-title').innerText = TEXTOS_CONFIG.block1Title;
        document.getElementById('btn-tab-insumos').innerText = TEXTOS_CONFIG.tabInsumos;
        document.getElementById('btn-tab-estructuras').innerText = TEXTOS_CONFIG.tabEstructuras;
        document.getElementById('btn-tab-consumibles').innerText = TEXTOS_CONFIG.tabConsumibles;
        
        document.getElementById('lbl-insumo-nombre').innerText = TEXTOS_CONFIG.lblInsumoNombre;
        document.getElementById('insumo-nombre').placeholder = TEXTOS_CONFIG.placeholderInsumoNombre;
        document.getElementById('lbl-insumo-marca').innerText = TEXTOS_CONFIG.lblInsumoMarca;
        document.getElementById('insumo-marca').placeholder = TEXTOS_CONFIG.placeholderInsumoMarca;
        document.getElementById('lbl-insumo-medida').innerText = TEXTOS_CONFIG.lblInsumoMedida;
        document.getElementById('insumo-medida').placeholder = TEXTOS_CONFIG.placeholderInsumoMedida;
        document.getElementById('lbl-insumo-color').innerText = TEXTOS_CONFIG.lblInsumoColor;
        document.getElementById('insumo-color').placeholder = TEXTOS_CONFIG.placeholderInsumoColor;
        document.getElementById('lbl-insumo-cant').innerText = TEXTOS_CONFIG.lblInsumoCant;
        document.getElementById('insumo-cant').placeholder = TEXTOS_CONFIG.placeholderInsumoCant;
        document.getElementById('lbl-insumo-precio').innerText = TEXTOS_CONFIG.lblInsumoPrecio;
        document.getElementById('insumo-precio').placeholder = TEXTOS_CONFIG.placeholderInsumoPrecio;

        document.getElementById('lbl-est-nombre').innerText = TEXTOS_CONFIG.lblEstNombre;
        document.getElementById('est-nombre').placeholder = TEXTOS_CONFIG.placeholderEstNombre;
        document.getElementById('lbl-est-propiedad').innerText = TEXTOS_CONFIG.lblEstPropiedad;
        document.getElementById('lbl-est-costo-propia').innerText = TEXTOS_CONFIG.lblEstCostoPropia;
        document.getElementById('est-costo-propia').placeholder = TEXTOS_CONFIG.placeholderEstCostoPropia;
        document.getElementById('lbl-est-costo-renta').innerText = TEXTOS_CONFIG.lblEstCostoRenta;
        document.getElementById('est-costo-renta').placeholder = TEXTOS_CONFIG.placeholderEstCostoRenta;
        document.getElementById('lbl-est-costo-envio').innerText = TEXTOS_CONFIG.lblEstCostoEnvio;
        document.getElementById('est-costo-envio').placeholder = TEXTOS_CONFIG.placeholderEstCostoEnvio;

        const selectEst = document.getElementById('est-propiedad');
        selectEst.innerHTML = "";
        TEXTOS_CONFIG.selectEstOpciones.forEach(opt => selectEst.options.add(new Option(opt.text, opt.value)));

        document.getElementById('lbl-con-nombre').innerText = TEXTOS_CONFIG.lblConNombre;
        document.getElementById('con-nombre').placeholder = TEXTOS_CONFIG.placeholderConNombre;
        document.getElementById('lbl-con-cantidad').innerText = TEXTOS_CONFIG.lblConCantidad;
        document.getElementById('con-cantidad').placeholder = TEXTOS_CONFIG.placeholderConCantidad;
        document.getElementById('lbl-con-unidad').innerText = TEXTOS_CONFIG.lblConUnidad;
        document.getElementById('lbl-con-precio').innerText = TEXTOS_CONFIG.lblConPrecio;
        document.getElementById('con-precio').placeholder = TEXTOS_CONFIG.placeholderConPrecio;

        const selectCon = document.getElementById('con-unidad');
        selectCon.innerHTML = "";
        TEXTOS_CONFIG.selectConOpciones.forEach(opt => selectCon.options.add(new Option(opt.text, opt.value)));

        document.getElementById('btn-guardar-main').innerText = TEXTOS_CONFIG.btnGuardarMain;
        document.getElementById('calc-dinamico').innerText = TEXTOS_CONFIG.calcDinamicoDefault;
        document.getElementById('txt-catalog-title').innerText = TEXTOS_CONFIG.catalogTitle;

        document.getElementById('txt-block2-title').innerText = TEXTOS_CONFIG.block2Title;
        document.getElementById('lbl-cot-buscar').innerText = TEXTOS_CONFIG.lblCotBuscar;
        document.getElementById('cot-txt-buscar').placeholder = TEXTOS_CONFIG.placeholderCotBuscar;
        document.getElementById('lbl-cot-select').innerText = TEXTOS_CONFIG.lblCotSelect;
        document.getElementById('lbl-cot-cantidad').innerText = TEXTOS_CONFIG.lblCotCantidad;
        document.getElementById('cot-cantidad').placeholder = TEXTOS_CONFIG.placeholderCotCantidad;
        document.getElementById('btn-cot-add').innerText = TEXTOS_CONFIG.btnCotAdd;
        document.getElementById('btn-mesa-save').innerText = TEXTOS_CONFIG.btnMesaSave;
        document.getElementById('btn-mesa-load').innerText = TEXTOS_CONFIG.btnMesaLoad;
        document.getElementById('btn-mesa-clear').innerText = TEXTOS_CONFIG.btnMesaClear;

        document.getElementById('txt-paywall-title').innerText = TEXTOS_CONFIG.paywallTitle;
        document.getElementById('txt-paywall-desc').innerHTML = TEXTOS_CONFIG.paywallDescHTML;
        document.getElementById('btn-paywall-login').innerText = TEXTOS_CONFIG.btnPaywallLogin;
        document.getElementById('txt-block3-title').innerText = TEXTOS_CONFIG.block3Title;
        document.getElementById('lbl-cot-dificultad').innerText = TEXTOS_CONFIG.lblCotDificultad;

        const selectDif = document.getElementById('cot-dificultad');
        selectDif.innerHTML = "";
        TEXTOS_CONFIG.selectDificultadOpciones.forEach(opt => selectDif.options.add(new Option(opt.text, opt.value)));

        document.getElementById('txt-slider-label').innerText = TEXTOS_CONFIG.txtSliderLabel;
        document.getElementById('lbl-mano-obra').innerText = TEXTOS_CONFIG.lblManoObra;
        document.getElementById('cot-mano-obra-usuario').placeholder = TEXTOS_CONFIG.placeholderManoObra;
        document.getElementById('lbl-logistica').innerText = TEXTOS_CONFIG.lblLogistica;
        document.getElementById('log-costo-viaje').placeholder = TEXTOS_CONFIG.placeholderCostoViaje;
        document.getElementById('log-cantidad-viajes').placeholder = TEXTOS_CONFIG.placeholderCantidadViajes;
        document.getElementById('lbl-staff').innerText = TEXTOS_CONFIG.lblStaff;
        document.getElementById('log-costo-staff').placeholder = TEXTOS_CONFIG.placeholderCostoStaff;
        document.getElementById('log-cantidad-staff').placeholder = TEXTOS_CONFIG.placeholderCantidadStaff;

        document.getElementById('txt-row-inv-neta').innerText = TEXTOS_CONFIG.txtRowInvNeta;
        document.getElementById('txt-row-gastos-des').innerText = TEXTOS_CONFIG.txtRowGastosDes;
        document.getElementById('txt-sub-viaticos').innerText = TEXTOS_CONFIG.txtSubViaticos;
        document.getElementById('txt-sub-staff').innerText = TEXTOS_CONFIG.txtSubStaff;
        document.getElementById('txt-sub-mo').innerText = TEXTOS_CONFIG.txtSubMo;
        document.getElementById('txt-row-total-gastos').innerText = TEXTOS_CONFIG.txtRowTotalGastos;
        document.getElementById('txt-row-sugerido').innerHTML = TEXTOS_CONFIG.txtRowSugeridoHTML;

        document.getElementById('txt-pdf-custom-title').innerText = TEXTOS_CONFIG.txtPdfCustomTitle;
        document.getElementById('pdf-custom-name').placeholder = TEXTOS_CONFIG.placeholderPdfCustomName;
        document.getElementById('txt-pdf-upload-btn').innerText = TEXTOS_CONFIG.txtPdfUploadBtn;
        document.getElementById('btn-guardar-pdf').innerText = TEXTOS_CONFIG.btnGuardarPdf;
        document.getElementById('btn-whatsapp').innerText = TEXTOS_CONFIG.btnWhatsapp;
        document.getElementById('txt-footer-brand').innerHTML = TEXTOS_CONFIG.footerBrandHTML;

        document.getElementById('print-nombre-negocio-target').innerText = TEXTOS_CONFIG.pdfDefaultBusinessName;
        document.getElementById('print-subtitulo-target').innerText = TEXTOS_CONFIG.pdfDefaultSubTitle;
        document.getElementById('txt-th-concepto').innerText = TEXTOS_CONFIG.txtThConcepto;
        document.getElementById('txt-th-monto').innerText = TEXTOS_CONFIG.txtThMonto;
        document.getElementById('txt-print-total-lbl').innerText = TEXTOS_CONFIG.txtPrintTotalLbl;
        document.getElementById('txt-print-legal').innerHTML = TEXTOS_CONFIG.txtPrintLegalHTML;

        document.getElementById('txt-modal-plantillas-title').innerText = TEXTOS_CONFIG.txtModalPlantillasTitle;
        document.getElementById('txt-modal-plantillas-desc').innerText = TEXTOS_CONFIG.txtModalPlantillasDesc;

        document.getElementById('txt-auth-title').innerText = TEXTOS_CONFIG.txtAuthTitle;
        document.getElementById('txt-auth-desc').innerText = TEXTOS_CONFIG.txtAuthDesc;
        document.getElementById('txt-auth-plans-box').innerHTML = TEXTOS_CONFIG.txtAuthPlansBoxHTML;
        document.getElementById('lbl-auth-email').innerText = TEXTOS_CONFIG.lblAuthEmail;
        document.getElementById('auth-email').placeholder = TEXTOS_CONFIG.placeholderAuthEmail;
        document.getElementById('lbl-auth-pass').innerText = TEXTOS_CONFIG.lblAuthPass;
        document.getElementById('lbl-auth-confirm').innerText = TEXTOS_CONFIG.lblAuthConfirm;
        document.getElementById('btn-auth-logout').innerText = TEXTOS_CONFIG.btnAuthLogout;

        // Carga de modales de ayuda configurables
        document.getElementById('modal-ayuda-html-content').innerHTML = MODALES_AYUDA_CONFIG.ayudaInventarioHTML;
        document.getElementById('modal-ayuda-costos-html-content').innerHTML = MODALES_AYUDA_CONFIG.ayudaCostosHTML;
    }


/* =========================================================================
   📺 3. GESTIÓN DE MODALES Y VISTAS DE INTERFAZ (UI)
   ========================================================================= */

    function abrirModalAyuda() { document.getElementById('modal-ayuda-container').style.display = 'flex'; document.body.classList.add('modal-open'); }
    function cerrarModalAyuda() { document.getElementById('modal-ayuda-container').style.display = 'none'; document.body.classList.remove('modal-open'); }
    function abrirModalAyudaCostos() { document.getElementById('modal-ayuda-costos-container').style.display = 'flex'; document.body.classList.add('modal-open'); }
    function cerrarModalAyudaCostos() { document.getElementById('modal-ayuda-costos-container').style.display = 'none'; document.body.classList.remove('modal-open'); }
    function abrirModalAuth() { document.getElementById('modal-auth-container').style.display = 'flex'; document.body.classList.add('modal-open'); cambiarModoAuth('login'); }
    function cerrarModalAuth() { document.getElementById('modal-auth-container').style.display = 'none'; document.body.classList.remove('modal-open'); }
    function abrirModalPlantillas() { document.getElementById('modal-plantillas-container').style.display = 'flex'; document.body.classList.add('modal-open'); }
    function cerrarModalPlantillas() { document.getElementById('modal-plantillas-container').style.display = 'none'; document.body.classList.remove('modal-open'); }

    function togglePasswordVisibility(inputId) {
        const input = document.getElementById(inputId);
        const icon = input.nextElementSibling;
        if (input.type === "password") {
            input.type = "text";
            icon.textContent = "🙈";
        } else {
            input.type = "password";
            icon.textContent = "👁️";
        }
    }

    function cambiarModoAuth(modo) {
        modoAuthActual = modo;
        const btnLogin = document.getElementById('btn-auth-mode-login');
        const btnRegistro = document.getElementById('btn-auth-mode-registro');
        const wrapperConfirm = document.getElementById('wrapper-confirmar-pass');
        const btnSubmit = document.getElementById('btn-auth-submit');

        if(modo === 'login') {
            btnLogin.classList.add('active');
            btnRegistro.classList.remove('active');
            wrapperConfirm.style.display = 'none';
            btnSubmit.innerText = TEXTOS_CONFIG.btnAuthSubmitLogin;
            btnSubmit.style.background = "var(--apple-blue)";
        } else {
            btnRegistro.classList.add('active');
            btnLogin.classList.remove('active');
            wrapperConfirm.style.display = 'block';
            btnSubmit.innerText = TEXTOS_CONFIG.btnAuthSubmitRegister;
            btnSubmit.style.background = "var(--success)";
        }
    }

    function ejecutarAccionAuthActual() {
        procesarAuthSupabase(modoAuthActual);
    }

    function abrirModalAyudaMesa() {
        AppleAlert.fire({
            title: MODALES_AYUDA_CONFIG.alertMesaTitulo,
            html: MODALES_AYUDA_CONFIG.alertMesaHTML,
            icon: 'info',
            confirmButtonText: 'Entendido'
        });
    }

    function switchSubTab(btn, targetId) {
        let container = btn.closest('.block');
        container.querySelectorAll('.pill-btn').forEach(b => b.classList.remove('active'));
        container.querySelectorAll('.inventory-subcontent').forEach(c => c.classList.remove('active'));
        btn.classList.add('active'); 
        document.getElementById(targetId).classList.add('active');
        calcularLive();
    }

    function toggleCamposEstructura() {
        const val = document.getElementById('est-propiedad').value;
        document.getElementById('wrapper-est-propia').style.display = val === 'propia' ? 'block' : 'none';
        document.getElementById('wrapper-est-rentada').style.display = val === 'rentada' ? 'block' : 'none';
        calcularLive();
    }


/* =========================================================================
   ☁️ 4. SERVICIOS Y AUTENTICACIÓN CLOUD (SUPABASE)
   ========================================================================= */

    async function procesarAuthSupabase(tipo) {
        const email = document.getElementById('auth-email').value.trim();
        const pass = document.getElementById('auth-pass').value;
        const confirmPass = document.getElementById('auth-confirm-pass').value;
        const btnSubmit = document.getElementById('btn-auth-submit');

        if(!email || !pass) {
            AppleAlert.fire({ title: 'Atención', text: 'Por favor rellena los campos requeridos.', icon: 'warning' });
            return;
        }

        if(tipo === 'registro') {
            if(!confirmPass) {
                AppleAlert.fire({ title: 'Atención', text: 'Por favor confirma tu contraseña.', icon: 'warning' });
                return;
            }
            if(pass !== confirmPass) {
                AppleAlert.fire({ title: 'Validación', text: 'Las contraseñas no coinciden. Por favor verifícalas.', icon: 'error' });
                return;
            }
        }

        const originalText = btnSubmit.innerText;
        btnSubmit.innerHTML = '<span class="spinner"></span> Procesando...';
        btnSubmit.classList.add('loading');

        try {
            let resultado;
            if(tipo === 'registro') {
                resultado = await _supabase.auth.signUp({ email, password: pass });
            } else {
                resultado = await _supabase.auth.signInWithPassword({ email, password: pass });
            }

            if(resultado.error) {
                AppleAlert.fire({ title: 'Error Cloud', text: resultado.error.message, icon: 'error' });
            } else {
                if(tipo === 'registro') {
                    AppleAlert.fire({ title: 'Registro Completo', text: 'Cuenta básica creada exitosamente. Ya puedes iniciar sesión con tus credenciales.', icon: 'success' });
                    document.getElementById('auth-pass').value = "";
                    document.getElementById('auth-confirm-pass').value = "";
                    cambiarModoAuth('login');
                } else {
                    await verificarEstadoSuscripcionUsuario(resultado.data.user);
                    cerrarModalAuth();
                }
            }
        } catch(err) {
            console.error(err);
            AppleAlert.fire({ title: 'Error', text: 'No se pudo conectar con el servidor de autenticación.', icon: 'error' });
        } finally {
            btnSubmit.innerText = originalText;
            btnSubmit.classList.remove('loading');
        }
    }

    async function verificarEstadoSuscripcionUsuario(user) {
        if(!user) return;
        
        const { data, error } = await _supabase.from('perfiles_usuarios').select('*').eq('id', user.id).single();
        
        let esPremiumReal = false;
        let diasRestantes = null;

        if(!error && data) {
            esPremiumReal = data.es_premium;
            
            if(data.fecha_vencimiento) {
                const ahora = new Date();
                const vencimiento = new Date(data.fecha_vencimiento);
                const diferenciaTiempo = vencimiento - ahora;
                diasRestantes = Math.ceil(diferenciaTiempo / (1000 * 60 * 60 * 24));
            }
        }

        usuarioSesion = { 
            email: user.email, 
            id: user.id, 
            esPremium: esPremiumReal,
            diasRestantes: diasRestantes
        };

        if(esPremiumReal && diasRestantes > 0) {
            await descargarInventarioSupabase();
        }
        actualizarInterfazUI();
    }

    async function cerrarSesionSupabase() {
        await _supabase.auth.signOut();
        usuarioSesion = null;
        inventarioGlobal = [];
        cotizacionActual = [];

        document.getElementById('log-costo-viaje').value = "";
        document.getElementById('log-cantidad-viajes').value = "";
        document.getElementById('log-costo-staff').value = "";
        document.getElementById('log-cantidad-staff').value = "";
        document.getElementById('cot-mano-obra-usuario').value = "";
        document.getElementById('auth-email').value = "";
        document.getElementById('auth-pass').value = "";
        document.getElementById('auth-confirm-pass').value = "";
        document.getElementById('cot-txt-buscar').value = "";

        cerrarModalAuth(); 
        actualizarInterfazUI();
        AppleAlert.fire({ title: 'Sesión Cerrada', text: 'Desconectado de la nube correctamente.', icon: 'info' });
    }

    async function descargarInventarioSupabase() {
        if(!usuarioSesion || !usuarioSesion.esPremium || usuarioSesion.diasRestantes <= 0) return;
        const { data, error } = await _supabase.from('inventario').select('*').eq('user_id', usuarioSesion.id).eq('app_id', APP_IDENTIFIER);
        if(!error && data) {
            inventarioGlobal = data.map(item => ({
                id: item.id,
                nombre: item.nombre,
                tipo: item.tipo,
                marca: item.marca || "Genérico",
                medida: item.medida || "N/A",
                color: item.color || "N/A",
                subtipo: item.subtipo,
                costUnitario: item.costo_unitario,
                totalCostOriginal: item.costo_paquete, 
                cantidadOriginal: item.unidades_paquete || 1, 
                unitLabel: item.tipo === TEXTOS_CONFIG.tabInsumos ? "pza" : (item.subtipo === "metros" ? "metro" : "uso")
            }));
        }
    }

    function actualizarInterfazUI() {
        const outBox = document.getElementById('auth-logged-out');
        const inBox = document.getElementById('auth-logged-in');
        const txtUser = document.getElementById('txt-usuario-activo');
        const paywall = document.getElementById('capa-paywall');
        const btnTrigger = document.getElementById('btn-modal-trigger');
        const banner = document.getElementById('app-status-banner');
        const bannerTxt = document.getElementById('app-status-text');

        const paywallTitle = paywall.querySelector('.paywall-title');
        const paywallText = paywall.querySelector('.paywall-text');
        const paywallCrown = paywall.querySelector('.paywall-crown');
        const btnPaywallLogin = document.getElementById('btn-paywall-login');

        if(usuarioSesion) {
            outBox.style.display = 'none'; inBox.style.display = 'block';
            txtUser.innerText = usuarioSesion.email; 
            btnTrigger.innerText = usuarioSesion.esPremium ? "👑 Plan Premium Activo" : "👤 Mi Cuenta (Plan Básico)";
            
            if(usuarioSesion.esPremium && usuarioSesion.diasRestantes > 0) {
                paywall.style.display = 'none';
                if(usuarioSesion.diasRestantes <= 3) {
                    banner.className = "status-banner";
                    banner.style.background = "#FFF3CD";
                    banner.style.color = "#856404";
                    bannerTxt.innerHTML = `⏰ Plan Premium vence en ${usuarioSesion.diasRestantes} días. Renueva para no perder tus cálculos avanzados.`;
                } else {
                    banner.className = "status-banner";
                    banner.style.background = "var(--green-bg)";
                    banner.style.color = "var(--green-text)";
                    bannerTxt.innerHTML = TEXTOS_CONFIG.bannerPremium;
                }
            } 
            else if (usuarioSesion.esPremium && usuarioSesion.diasRestantes <= 0) {
                paywall.style.display = 'flex';
                banner.className = "status-banner expired";
                banner.style.background = "#FFF1F0";
                banner.style.color = "var(--danger)";
                
                paywallCrown.innerText = "⚠️";
                paywallTitle.innerText = "Suscripción Expirada";
                paywallText.innerHTML = "Tu período de 30 días ha terminado. Renueva tu suscripción para volver a habilitar los cálculos avanzados y recuperar tu catálogo en la nube.";
                bannerTxt.innerHTML = TEXTOS_CONFIG.bannerExpired;
                
                if (btnPaywallLogin) btnPaywallLogin.style.display = 'none';
            }
            else {
                paywall.style.display = 'flex'; 
                banner.className = "status-banner standard";
                banner.style.background = "#E5F1FF";
                banner.style.color = "var(--apple-blue)";
                bannerTxt.innerHTML = TEXTOS_CONFIG.bannerBasic;
                
                paywallCrown.innerText = "💎";
                paywallTitle.innerText = "Módulo Exclusivo Premium";
                paywallText.innerHTML = "Estás usando la version con <strong>Plan Básico</strong>. Mejora a una suscripción Premium para desbloquear la automatización de la Ingeniería Financiera.";
                
                if (btnPaywallLogin) btnPaywallLogin.style.display = 'none';
            }
        } else {
            outBox.style.display = 'block'; inBox.style.display = 'none'; paywall.style.display = 'flex';
            paywallCrown.innerText = "💎";
            paywallTitle.innerText = "Módulo de Ingeniería Financiera";
            paywallText.innerHTML = "Sincroniza una cuenta con suscripción <strong>Premium</strong> para automatizar tus cálculos avanzados.";
            
            if (btnPaywallLogin) btnPaywallLogin.style.display = 'block';
            
            btnTrigger.innerText = "🚀 Crear Cuenta / Entrar"; 
            banner.className = "status-banner standard";
            banner.style.background = "#F2F2F7"; 
            banner.style.color = "var(--accent)";
            bannerTxt.innerHTML = TEXTOS_CONFIG.bannerLocal;
        }
        
        document.getElementById('cot-txt-buscar').value = "";
        actualizarSelectMateriales(); renderAlmacen(); renderListaCotizacion(); calcularCotizacionFinal();
    }


/* =========================================================================
   📦 5. MÓDULO LOGÍSTICO: GESTIÓN DE INVENTARIO Y ALMACÉN
   ========================================================================= */

    function actualizarSelectMateriales(inventarioFiltrado = null) {
        const select = document.getElementById('cot-select-material');
        if (!select) return; 
        
        select.innerHTML = '<option value="">-- Elige --</option>';
        const dataset = inventarioFiltrado || inventarioGlobal;
        
        dataset.forEach(el => { 
            select.innerHTML += `<option value="${el.id}">${el.nombre} (${formato.format(el.costUnitario)}/${el.unitLabel})</option>`; 
        });
    }

    function filtrarSelectMateriales(texto) {
        const busqueda = texto.toLowerCase().trim();
        if(!busqueda) {
            actualizarSelectMateriales(inventarioGlobal);
            return;
        }
        const filtrados = inventarioGlobal.filter(item => {
            return item.nombre.toLowerCase().includes(busqueda) || 
                   item.tipo.toLowerCase().includes(busqueda) ||
                   (item.marca && item.marca.toLowerCase().includes(busqueda)) ||
                   (item.color && item.color.toLowerCase().includes(busqueda));
        });
        actualizarSelectMateriales(filtrados);
    }

    function obtenerCalculoUnitario() {
        const activeTab = document.querySelector('.nav-pills .pill-btn.active').innerText;
        
        if (activeTab === TEXTOS_CONFIG.tabInsumos) {
            const cant = parseFloat(document.getElementById('insumo-cant').value);
            const precio = parseFloat(document.getElementById('insumo-precio').value);
            if(!cant || !precio) return null;
            return { cost: precio / cant, totalCost: precio, cantidadOriginal: cant, unitLabel: "pza" };
        } 
        else if (activeTab === TEXTOS_CONFIG.tabEstructuras) {
            const propiedad = document.getElementById('est-propiedad').value;
            if (propiedad === "propia") {
                const mant = parseFloat(document.getElementById('est-costo-propia').value) || 0;
                return { cost: mant, totalCost: mant, cantidadOriginal: 1, unitLabel: "uso" };
            } else {
                const renta = parseFloat(document.getElementById('est-costo-renta').value) || 0;
                const envio = parseFloat(document.getElementById('est-costo-envio').value) || 0;
                const totalRentada = renta + envio;
                return { cost: totalRentada, totalCost: totalRentada, cantidadOriginal: 1, unitLabel: "uso" };
            }
        } 
        else if (activeTab === TEXTOS_CONFIG.tabConsumibles) {
            const cantTotal = parseFloat(document.getElementById('con-cantidad').value);
            const precioTotal = parseFloat(document.getElementById('con-precio').value);
            const unidad = document.getElementById('con-unidad').value;
            if(!cantTotal || !precioTotal) return null;
            
            let labelCorto = unidad === "metros" ? "metro" : (unidad === "piezas" ? "pza" : "uso");
            return { cost: precioTotal / cantTotal, totalCost: precioTotal, cantidadOriginal: cantTotal, unitLabel: labelCorto };
        }
        return null;
    }

    function calcularLive() {
        const res = obtenerCalculoUnitario();
        const display = document.getElementById('calc-dinamico');
        if(res) display.innerHTML = `${TEXTOS_CONFIG.calcDinamicoPrefix}<strong>${formato.format(res.cost)} / ${res.unitLabel}</strong>`;
        else display.innerHTML = TEXTOS_CONFIG.calcDinamicoDefault;
    }

    async function guardarElemento() {
        const activeTab = document.querySelector('.nav-pills .pill-btn.active').innerText;
        const calc = obtenerCalculoUnitario();
        const editId = document.getElementById('edit-id-target').value;
        let nombre = "", marca = "", medida = "", color = "", subtipo = "";

        if (activeTab === TEXTOS_CONFIG.tabInsumos) {
            nombre = document.getElementById('insumo-nombre').value;
            marca = document.getElementById('insumo-marca').value || "Genérico";
            medida = document.getElementById('insumo-medida').value || "N/A";
            color = document.getElementById('insumo-color').value || "N/A";
            subtipo = "N/A";
        } else if (activeTab === TEXTOS_CONFIG.tabEstructuras) {
            nombre = document.getElementById('est-nombre').value;
            subtipo = document.getElementById('est-propiedad').value;
        } else if (activeTab === TEXTOS_CONFIG.tabConsumibles) {
            nombre = document.getElementById('con-nombre').value;
            subtipo = document.getElementById('con-unidad').value;
        }

        if(!nombre.trim() || !calc) {
            AppleAlert.fire({ title: 'Campos Vacíos', text: 'Por favor, llena los datos antes de guardar.', icon: 'warning' });
            return;
        }

        const filaDB = {
            nombre: nombre,
            tipo: activeTab,
            marca: marca,
            medida: medida,
            color: color,
            subtipo: subtipo,
            unidades_paquete: calc.cantidadOriginal,
            costo_paquete: calc.totalCost,
            costo_unitario: calc.cost,
            app_id: APP_IDENTIFIER
        };

        if(usuarioSesion && usuarioSesion.esPremium && usuarioSesion.diasRestantes > 0) {
            filaDB.user_id = usuarioSesion.id;
            if(editId) {
                await _supabase.from('inventario').update(filaDB).eq('id', editId).eq('user_id', usuarioSesion.id);
            } else {
                await _supabase.from('inventario').insert([filaDB]);
            }
            await descargarInventarioSupabase();
        } else {
            const estructuraObjetoLocal = {
                id: editId ? parseFloat(editId) : Date.now(),
                ...filaDB, costUnitario: calc.cost, totalCostOriginal: calc.totalCost, cantidadOriginal: calc.cantidadOriginal, unitLabel: calc.unitLabel
            };
            if(editId) {
                let index = inventarioGlobal.findIndex(e => e.id == editId);
                if(index !== -1) inventarioGlobal[index] = estructuraObjetoLocal;
            } else {
                inventarioGlobal.push(estructuraObjetoLocal);
            }
            localStorage.setItem('studio_os_inventario', JSON.stringify(inventarioGlobal));
        }

        document.getElementById('edit-id-target').value = "";
        document.getElementById('btn-guardar-main').innerText = TEXTOS_CONFIG.btnGuardarMain;
        document.getElementById('insumo-nombre').value = ""; document.getElementById('insumo-marca').value = ""; document.getElementById('insumo-medida').value = ""; document.getElementById('insumo-color').value = ""; document.getElementById('insumo-cant').value = ""; document.getElementById('insumo-precio').value = "";
        document.getElementById('est-nombre').value = ""; document.getElementById('est-costo-propia').value = ""; document.getElementById('est-costo-renta').value = ""; document.getElementById('est-costo-envio').value = "";
        document.getElementById('con-nombre').value = ""; document.getElementById('con-cantidad').value = ""; document.getElementById('con-precio').value = "";
        document.getElementById('calc-dinamico').innerHTML = TEXTOS_CONFIG.calcDinamicoDefault;
        
        renderAlmacen(); 
        actualizarSelectMateriales();
    }

    function renderAlmacen() {
        const lista = document.getElementById('lista-almacen');
        lista.querySelectorAll('.warehouse-item').forEach(i => i.remove());
        if(inventarioGlobal.length === 0) { 
            document.getElementById('empty-message').style.display = 'block'; 
            document.getElementById('empty-message').innerText = TEXTOS_CONFIG.emptyStateWarehouse;
            return; 
        }
        document.getElementById('empty-message').style.display = 'none';

        inventarioGlobal.forEach(el => {
            const row = document.createElement('div'); row.className = 'warehouse-item';
            let detallesHTML = "";
            if(el.tipo === TEXTOS_CONFIG.tabInsumos) {
                detallesHTML = `<span class="item-meta">🏷️ ${el.marca} | 📏 ${el.medida} | 🎨 ${el.color}</span>`;
            } else if(el.tipo === TEXTOS_CONFIG.tabEstructuras) {
                detallesHTML = `<span class="item-meta">⚙️ Estructura: ${el.subtipo.toUpperCase()}</span>`;
            } else if(el.tipo === TEXTOS_CONFIG.tabConsumibles) {
                detallesHTML = `<span class="item-meta">📦 Control por: ${el.subtipo}</span>`;
            }

            row.innerHTML = `
                <div class="item-info">
                    <strong>${el.nombre} <small style="color:var(--accent); font-weight:400;">(${el.tipo})</small></strong>
                    ${detallesHTML}
                    <div class="unit-badge">Costo: ${formato.format(el.costUnitario)} / ${el.unitLabel}</div>
                </div>
                <div class="item-actions">
                    <button class="btn-item-action" onclick="cargarParaEditar(${el.id})">✏️</button>
                    <button class="btn-item-action delete" onclick="eliminarElemento(${el.id}, '${el.nombre}')">✕</button>
                </div>
            `;
            lista.appendChild(row);
        });
    }

    function cargarParaEditar(id) {
        const item = inventarioGlobal.find(e => e.id == id);
        if(!item) return;

        document.getElementById('edit-id-target').value = item.id;
        document.getElementById('btn-guardar-main').innerText = TEXTOS_CONFIG.btnGuardarMainActualizar;

        if(item.tipo === TEXTOS_CONFIG.tabInsumos) {
            switchSubTab(document.getElementById('btn-tab-insumos'), 'cat-insumos');
            document.getElementById('insumo-nombre').value = item.nombre;
            document.getElementById('insumo-marca').value = item.marca;
            document.getElementById('insumo-medida').value = item.medida;
            document.getElementById('insumo-color').value = item.color;
            document.getElementById('insumo-cant').value = item.cantidadOriginal;
            document.getElementById('insumo-precio').value = item.totalCostOriginal;
        } else if(item.tipo === TEXTOS_CONFIG.tabEstructuras) {
            switchSubTab(document.getElementById('btn-tab-estructuras'), 'cat-estructuras');
            document.getElementById('est-nombre').value = item.nombre;
            document.getElementById('est-propiedad').value = item.subtipo;
            toggleCamposEstructura();
            if(item.subtipo === "propia") {
                document.getElementById('est-costo-propia').value = item.totalCostOriginal;
            } else {
                document.getElementById('est-costo-renta').value = item.totalCostOriginal;
                document.getElementById('est-costo-envio').value = 0;
            }
        } else if(item.tipo === TEXTOS_CONFIG.tabConsumibles) {
            switchSubTab(document.getElementById('btn-tab-consumibles'), 'cat-consumibles');
            document.getElementById('con-nombre').value = item.nombre;
            document.getElementById('con-unidad').value = item.subtipo;
            document.getElementById('con-cantidad').value = item.cantidadOriginal; 
            document.getElementById('con-precio').value = item.totalCostOriginal;
        }
        calcularLive();
        window.scrollTo({ top: 180, behavior: 'smooth' });
    }

    async function eliminarElemento(id, nombre) {
        AppleAlert.fire({
            title: '¿Eliminar del catálogo?',
            text: `Se borrará "${nombre}" permanentemente.`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Eliminar',
            cancelButtonText: 'Cancelar'
        }).then(async (result) => {
            if (result.isConfirmed) {
                if(usuarioSesion && usuarioSesion.esPremium && usuarioSesion.diasRestantes > 0) {
                    await _supabase.from('inventario').delete().eq('id', id).eq('user_id', usuarioSesion.id);
                    await descargarInventarioSupabase();
                } else {
                    inventarioGlobal = inventarioGlobal.filter(e => e.id != id);
                    localStorage.setItem('studio_os_inventario', JSON.stringify(inventarioGlobal));
                }
                cotizacionActual = cotizacionActual.filter(e => e.nombre !== nombre);
                localStorage.setItem('studio_os_cotizacion', JSON.stringify(cotizacionActual));
                actualizarInterfazUI();
            }
        });
    }


/* =========================================================================
   🛠️ 6. MESA DE COMPOSICIÓN Y OPERATORIA TÉCNICA
   ========================================================================= */

    function agregarMaterialACotizacion() {
        const select = document.getElementById('cot-select-material');
        const cant = parseFloat(document.getElementById('cot-cantidad').value);
        if(!select.value || !cant || cant <= 0) return;

        const base = inventarioGlobal.find(e => e.id == select.value);
        const existente = cotizacionActual.find(item => item.idCatalogo == base.id);

        if (existente) {
            existente.cantidadUtilizada += cant;
            existente.costoNetoResultante = base.costUnitario * existente.cantidadUtilizada;
        } else {
            cotizacionActual.push({ 
                idUnico: Date.now(), idCatalogo: base.id, nombre: base.nombre, 
                cantidadUtilizada: cant, unitLabel: base.unitLabel, 
                costUnitarioBase: base.costUnitario, costoNetoResultante: base.costUnitario * cant 
            });
        }
        select.value = ""; document.getElementById('cot-cantidad').value = "";
        renderListaCotizacion(); calcularCotizacionFinal();
        localStorage.setItem('studio_os_cotizacion', JSON.stringify(cotizacionActual));
    }

    function renderListaCotizacion() {
        const lista = document.getElementById('lista-cotizacion-actual');
        lista.innerHTML = ""; 
        if (cotizacionActual.length === 0) { 
            lista.innerHTML = `<div class="empty-state">${TEXTOS_CONFIG.emptyStateMesa}</div>`; 
            return; 
        }

        cotizacionActual.forEach(el => {
            const row = document.createElement('div'); row.className = 'warehouse-item';
            row.innerHTML = `
                <div class="item-info">
                    <strong>${el.nombre}</strong>
                    <div style="display: flex; align-items: center; gap: 6px; margin-top: 4px; font-size: 11px; color: var(--accent);">
                        <span>Cant:</span>
                        <input type="number" class="input-mesa-edicion" value="${el.cantidadUtilizada}" min="0.1" step="any" 
                            oninput="modificarQuantityMesa(${el.idUnico}, this.value, false)"
                            onchange="modificarQuantityMesa(${el.idUnico}, this.value, true)">
                        <span data-cost-id="${el.idUnico}">${el.unitLabel}s (${formato.format(el.costoNetoResultante)})</span>
                    </div>
                </div>
                <div class="item-actions">
                    <button class="btn-item-action delete" onclick="eliminarInsumoDeMesa(${el.idUnico})">✕</button>
                </div>
            `;
            lista.appendChild(row);
        });
    }

    function modificarQuantityMesa(idUnico, nuevaCantidad, debeRedibujar = false) {
        const cant = parseFloat(nuevaCantidad);
        const item = cotizacionActual.find(i => i.idUnico === idUnico);
        if (item && !isNaN(cant) && cant >= 0) {
            item.cantidadUtilizada = cant;
            item.costoNetoResultante = item.costUnitarioBase * cant;
            
            calcularCotizacionFinal();
            
            const etiquetaCosto = document.querySelector(`[data-cost-id="${idUnico}"]`);
            if (etiquetaCosto) {
                etiquetaCosto.innerText = `${item.unitLabel}s (${formato.format(item.costoNetoResultante)})`;
            }

            if (debeRedibujar) {
                renderListaCotizacion();
            }
        }
        localStorage.setItem('studio_os_cotizacion', JSON.stringify(cotizacionActual));
    }

    function eliminarInsumoDeMesa(idUnico) {
        cotizacionActual = cotizacionActual.filter(item => item.idUnico !== idUnico);
        renderListaCotizacion(); calcularCotizacionFinal();
        localStorage.setItem('studio_os_cotizacion', JSON.stringify(cotizacionActual));
    }

    function limpiarMesaCompleta() {
        if(cotizacionActual.length === 0) return;
        AppleAlert.fire({
            title: '¿Vaciar mesa?', text: 'Se removerán todos los elementos.', icon: 'warning',
            showCancelButton: true, confirmButtonText: 'Sí, vaciar', cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                cotizacionActual = []; localStorage.setItem('studio_os_cotizacion', JSON.stringify(cotizacionActual));
                renderListaCotizacion(); calcularCotizacionFinal();
            }
        });
    }


/* =========================================================================
   📁 7. SISTEMA DE PLANTILLAS Y COMPOSICIONES GUARDADAS
   ========================================================================= */

    async function guardarComposicionPlantilla() {
        if (cotizacionActual.length === 0) {
            AppleAlert.fire({ title: 'Mesa Vacía', text: 'Agrega materiales antes de guardar.', icon: 'warning' });
            return;
        }

        AppleAlert.fire({
            title: 'Guardar Composición', text: 'Nombre de la plantilla:', input: 'text',
            inputPlaceholder: 'Ej: Arco Orgánico Elegante', showCancelButton: true,
            confirmButtonText: 'Guardar Receta', cancelButtonText: 'Cancelar',
            inputValidator: (value) => { if (!value || !value.trim()) return '¡Ingresa un nombre!'; }
        }).then(async (result) => {
            if (result.isConfirmed) {
                const nombrePlantilla = result.value.trim();
                
                const configMesa = {
                    dificultad: document.getElementById('cot-dificultad').value,
                    margen: parseFloat(document.getElementById('cot-margen').value),
                    mano_obra: parseFloat(document.getElementById('cot-mano-obra-usuario').value) || 0
                };

                if(usuarioSesion && usuarioSesion.esPremium && usuarioSesion.diasRestantes > 0) {
                    await _supabase.from('plantillas').insert([{ 
                        nombre_plantilla: nombrePlantilla, 
                        materiales: cotizacionActual,
                        configuracion: configMesa,
                        user_id: usuarioSesion.id,
                        app_id: APP_IDENTIFIER,
                        total_sugerido: parseFloat(document.getElementById('res-precio-final').innerText.replace(/[^0-9.-]+/g,"")) || 0
                    }]);
                } else {
                    let plantillas = JSON.parse(localStorage.getItem('studio_os_plantillas')) || [];
                    plantillas.push({ id: Date.now(), nombre_plantilla: nombrePlantilla, receta: cotizacionActual, configuracion: configMesa });
                    localStorage.setItem('studio_os_plantillas', JSON.stringify(plantillas));
                }
                AppleAlert.fire({ title: '¡Guardado!', text: `La composición "${nombrePlantilla}" fue archivada con éxito.`, icon: 'success' });
            }
        });
    }

    async function abrirModalCargarPlantillas() {
        const contenedor = document.getElementById('lista-plantillas-guardadas');
        contenedor.innerHTML = "";
        let plantillas = [];

        if(usuarioSesion && usuarioSesion.esPremium && usuarioSesion.diasRestantes > 0) {
            const { data } = await _supabase.from('plantillas').select('*').eq('user_id', usuarioSesion.id).eq('app_id', APP_IDENTIFIER);
            if(data) plantillas = data;
        } else {
            plantillas = JSON.parse(localStorage.getItem('studio_os_plantillas')) || [];
        }
        
        if (plantillas.length === 0) {
            contenedor.innerHTML = `<div class="empty-state">${TEXTOS_CONFIG.emptyStatePlantillas}</div>`;
        } else {
            plantillas.forEach(p => {
                const nombreAMostrar = p.nombre_plantilla || p.nombre;
                const materialesArray = p.materiales || p.receta || [];

                const row = document.createElement('div'); row.className = 'warehouse-item';
                row.innerHTML = `
                    <div class="item-info" style="cursor:pointer;" onclick="cargarPlantillaEnMesa(${p.id})">
                        <strong>📁 ${nombreAMostrar}</strong>
                        <span class="item-meta">${materialesArray.length} materiales integrados</span>
                    </div>
                    <div class="item-actions">
                        <button class="btn-item-action delete" onclick="eliminarPlantillaDeDisco(${p.id})">✕</button>
                    </div>
                `;
                contenedor.appendChild(row);
            });
        }
        abrirModalPlantillas();
    }

    async function cargarPlantillaEnMesa(idPlantilla) {
        let plantillas = [];
        if(usuarioSesion && usuarioSesion.esPremium && usuarioSesion.diasRestantes > 0) {
            const { data } = await _supabase.from('plantillas').select('*').eq('id', idPlantilla).eq('user_id', usuarioSesion.id);
            if(data) plantillas = data;
        } else {
            plantillas = JSON.parse(localStorage.getItem('studio_os_plantillas')) || [];
        }

        const objetivo = plantillas.find(p => p.id == idPlantilla);
        if (objetivo) {
            const listaMateriales = objetivo.materiales || objetivo.receta || [];
            cotizacionActual = listaMateriales.map(item => ({ ...item, idUnico: Date.now() + Math.random() }));
            renderListaCotizacion(); calcularCotizacionFinal(); cerrarModalPlantillas();
            AppleAlert.fire({ title: '¡Cargado!', text: `Mesa lista.`, icon: 'success', timer: 1000, showConfirmButton: false });
        }
    }

    async function eliminarPlantillaDeDisco(idPlantilla) {
        if(usuarioSesion && usuarioSesion.esPremium && usuarioSesion.diasRestantes > 0) {
            await _supabase.from('plantillas').delete().eq('id', idPlantilla).eq('user_id', usuarioSesion.id);
        } else {
            let plantillas = JSON.parse(localStorage.getItem('studio_os_plantillas')) || [];
            plantillas = plantillas.filter(p => p.id != idPlantilla);
            localStorage.setItem('studio_os_plantillas', JSON.stringify(plantillas));
        }
        abrirModalCargarPlantillas();
    }


/* =========================================================================
   📊 8. INGENIERÍA FINANCIERA: CÁLCULO DE COSTOS Y SUGERIDOS
   ========================================================================= */

    let GLOBAL_SUBTOTAL_PRODUCCION = 0;
    let GLOBAL_TOTAL_LOGISTICA_OPERATIVA = 0;
    let GLOBAL_PRECIO_FINAL_PUBLICO = 0;

    function calcularCotizacionFinal() {
        const multiplicadorComercial = parseFloat(document.getElementById('cot-margen').value);
        const nivelDificultad = document.getElementById('cot-dificultad').value;
        const multiplicadorDificultad = CONFIG_NEGOCIO.recargosDificultad[nivelDificultad] || 1.0;
        
        const porcentajeGanancia = Math.round(multiplicadorComercial * 100);
        document.getElementById('display-margen-text').innerText = porcentajeGanancia + "%";

        const feedbackEl = document.getElementById('display-margen-feedback');
        if (multiplicadorComercial <= 1.2) {
            feedbackEl.innerText = "(Muy Barato)";
            feedbackEl.style.color = "var(--danger)";
        } else if (multiplicadorComercial > 1.2 && multiplicadorComercial <= 2.2) {
            feedbackEl.innerText = "(Óptimo)";
            feedbackEl.style.color = "var(--success)";
        } else if (multiplicadorComercial > 2.2 && multiplicadorComercial <= 3.2) {
            feedbackEl.innerText = "(Caro)";
            feedbackEl.style.color = "var(--gold-premium)";
        } else {
            feedbackEl.innerText = "(Muy Caro)";
            feedbackEl.style.color = "var(--danger)";
        }

        let costoNetoTotal = 0;
        cotizacionActual.forEach(item => { costoNetoTotal += item.costoNetoResultante; });

        let costoConMermas = costoNetoTotal * CONFIG_NEGOCIO.factorMermas;
        let subtotalMultiplicado = costoConMermas * multiplicadorComercial * multiplicadorDificultad;

        GLOBAL_SUBTOTAL_PRODUCCION = subtotalMultiplicado;

        const costoPorViaje = parseFloat(document.getElementById('log-costo-viaje').value) || 0;
        const cantidadViajes = parseFloat(document.getElementById('log-cantidad-viajes').value) || 0;
        const pagoPorAyudante = parseFloat(document.getElementById('log-costo-staff').value) || 0;
        const cantidadStaff = parseFloat(document.getElementById('log-cantidad-staff').value) || 0;
        const manoObraUsuarioInput = parseFloat(document.getElementById('cot-mano-obra-usuario').value) || 0;

        let totalLogistica = costoPorViaje * cantidadViajes;
        let totalStaff = pagoPorAyudante * cantidadStaff;

        GLOBAL_TOTAL_LOGISTICA_OPERATIVA = totalLogistica + totalStaff + manoObraUsuarioInput;
        GLOBAL_PRECIO_FINAL_PUBLICO = GLOBAL_SUBTOTAL_PRODUCCION + GLOBAL_TOTAL_LOGISTICA_OPERATIVA;

        document.getElementById('res-costo-neto').innerText = formato.format(costoNetoTotal);
        document.getElementById('sub-gasto-viaticos').innerText = formato.format(totalLogistica);
        document.getElementById('sub-gasto-staff').innerText = formato.format(totalStaff);
        document.getElementById('sub-gasto-manodeobra').innerText = formato.format(manoObraUsuarioInput);
        document.getElementById('res-gasto-operacion').innerText = formato.format(GLOBAL_TOTAL_LOGISTICA_OPERATIVA);
        document.getElementById('res-precio-final').innerText = formato.format(GLOBAL_PRECIO_FINAL_PUBLICO);
    }
    

/* =========================================================================
   💬 9. MÓDULO DE SUSCRIPCIÓN COMERCIAL
   ========================================================================= */

    function solicitarSuscripcionPremium() {
        let correoUsuario = "Usuario sin registrar / Modo Local";
        const txtUsuario = document.getElementById('txt-usuario-activo');
        
        if (txtUsuario && txtUsuario.innerText && txtUsuario.innerText.includes('@')) {
            correoUsuario = txtUsuario.innerText.trim();
        }

        const tuTelefonoWhatsApp = "522291915418"; 

        const mensaje = `¡Hola! 👋 Me interesa adquirir el *Plan Premium* de NEXI Balloons.\n\n` +
                        `📧 *Mi correo de usuario es:* ${correoUsuario}\n\n` +
                        `Por favor, compárteme los datos de transferencia o depósito para proceder con el pago y activar mi módulo financiero. 🚀`;
        
        const mensajeEncodificado = encodeURIComponent(mensaje);
        const urlWhatsApp = `https://wa.me/${tuTelefonoWhatsApp}?text=${mensajeEncodificado}`;

        AppleAlert.fire({
            title: '👑 Acceso Total Premium',
            text: 'Te redirigiremos a WhatsApp para proporcionarte las cuentas de depósito y activar tu cuenta de inmediato.',
            icon: 'info',
            showCancelButton: true,
            confirmButtonText: 'Ir a WhatsApp 💬',
            cancelButtonText: 'Cancelar'
        }).then((result) => {
            if (result.isConfirmed) {
                window.open(urlWhatsApp, '_blank');
            }
        });
    }


/* =========================================================================
   📄 10. EXPORTACIÓN: GENERACIÓN DE PDF E IMPRESIÓN NATIVA
   ========================================================================= */

    function exportarAPDF() {
        if(cotizacionActual.length === 0) {
            AppleAlert.fire({ title: 'Mesa Vacía', text: 'No hay elementos activos para exportar.', icon: 'warning' });
            return;
        }

        const nuevoNombre = document.getElementById('pdf-custom-name').value.trim();
        const fileInput = document.getElementById('pdf-custom-file');
        
        const nombreTarget = document.getElementById('print-nombre-negocio-target');
        const subtituloTarget = document.getElementById('print-subtitulo-target');
        const logoTarget = document.getElementById('print-logo-target');

        if (nuevoNombre !== "") {
            nombreTarget.innerText = nuevoNombre;
            subtituloTarget.innerText = TEXTOS_CONFIG.pdfCustomSubTitle;
        } else {
            nombreTarget.innerText = TEXTOS_CONFIG.pdfDefaultBusinessName;
            subtituloTarget.innerText = TEXTOS_CONFIG.pdfDefaultSubTitle;
        }

        if (fileInput.files && fileInput.files[0]) {
            const reader = new FileReader();
            reader.onload = function (e) {
                logoTarget.src = e.target.result; 
                logoTarget.style.display = "block";
                ejecutarImpresionNativa();
            };
            reader.readAsDataURL(fileInput.files[0]);
        } else {
            logoTarget.src = "";
            logoTarget.style.display = "none";
            ejecutarImpresionNativa();
        }
    }

    function ejecutarImpresionNativa() {
        const opcionesFecha = { year: 'numeric', month: 'long', day: 'numeric' };
        document.getElementById('print-fecha-cotizacion').innerText = `Fecha de Emisión: ${new Date().toLocaleDateString('es-MX', opcionesFecha)}`;

        const tbody = document.getElementById('invoice-print-body');
        tbody.innerHTML = "";

        const trProduccion = document.createElement('tr');
        trProduccion.innerHTML = `
            <td>
                <strong>Servicio Integral de Diseño y Producción Corp.</strong><br>
                <small style="color:#6e6e73;">Incluye conceptualización artística, paleta cromática y materiales base de alta gama de la mesa de composición.</small>
            </td>
            <td style="text-align: right; font-weight: 500;">${formato.format(GLOBAL_SUBTOTAL_PRODUCCION)}</td>
        `;
        tbody.appendChild(trProduccion);

        if (GLOBAL_TOTAL_LOGISTICA_OPERATIVA > 0) {
            const trLogistica = document.createElement('tr');
            trLogistica.innerHTML = `
                <td>
                    <strong>Logística Operativa, Montaje Estructural y Traslados</strong><br>
                    <small style="color:#6e6e73;">Incluye viáticos de transporte seguro de materiales, honorarios de staff operativo y coordination técnica en sitio.</small>
                </td>
                <td style="text-align: right; font-weight: 500;">${formato.format(GLOBAL_TOTAL_LOGISTICA_OPERATIVA)}</td>
            `;
            tbody.appendChild(trLogistica);
        }

        document.getElementById('print-total-final').innerText = formato.format(GLOBAL_PRECIO_FINAL_PUBLICO);
        window.print();
    }


/* =========================================================================
   📲 11. INTEGRACIÓN CON APIS EXTERNAS (WHATSAPP DISPATCHER)
   ========================================================================= */

    function enviarPorWhatsApp() {
        if(cotizacionActual.length === 0) {
            AppleAlert.fire({ title: 'Mesa Vacía', text: 'No hay datos de cotización creados.', icon: 'warning' });
            return;
        }

        let mensaje = TEXTOS_CONFIG.whatsappTemplateIntro;
        
        if (GLOBAL_TOTAL_LOGISTICA_OPERATIVA > 0) {
            mensaje += TEXTOS_CONFIG.whatsappTemplateLogistica;
        }

        let footerFormateado = TEXTOS_CONFIG.whatsappTemplateFooter.replace("{PRECIO}", formato.format(GLOBAL_PRECIO_FINAL_PUBLICO));
        mensaje += footerFormateado;

        let urlWhatsApp = `https://api.whatsapp.com/send?text=${encodeURIComponent(mensaje)}`;
        window.open(urlWhatsApp, '_blank');
    }


/* =========================================================================
   🏁 12. INICIALIZACIÓN GENERAL DEL SISTEMA (DOM READY)
   ========================================================================= */

    document.addEventListener("DOMContentLoaded", async () => {
        // Ejecutamos inyección ordenada de textos globales antes de montar lógica
        inicializarTextosEstaticosDOM();

        const slider = document.getElementById('cot-margen');
        if (slider) {
            slider.min = CONFIG_NEGOCIO.multiplicadorComercial.minmo;
            slider.max = CONFIG_NEGOCIO.multiplicadorComercial.maximo;
            slider.step = CONFIG_NEGOCIO.multiplicadorComercial.paso;
            slider.value = CONFIG_NEGOCIO.multiplicadorComercial.defecto;
        }

        const fileInput = document.getElementById('pdf-custom-file');
        const uploadLabel = document.getElementById('file-upload-label');

        if(fileInput && uploadLabel) {
            fileInput.addEventListener('change', (e) => {
                if(e.target.files && e.target.files[0]) {
                    uploadLabel.innerHTML = `✅ Logo Cargado: ${e.target.files[0].name}`;
                    uploadLabel.classList.add('file-loaded');
                } else {
                    uploadLabel.innerHTML = TEXTOS_CONFIG.txtPdfUploadBtn;
                    uploadLabel.classList.remove('file-loaded');
                }
            });
        }

        try {
            const sessionRes = await _supabase.auth.getSession();
            if(sessionRes && sessionRes.data && sessionRes.data.session) {
                await verificarEstadoSuscripcionUsuario(sessionRes.data.session.user);
            } else {
                const inventarioGuardado = localStorage.getItem('studio_os_inventario');
                if (inventarioGuardado) inventarioGlobal = JSON.parse(inventarioGuardado);
            }
        } catch (e) {
            console.warn("Modo local activado.");
            const inventarioGuardado = localStorage.getItem('studio_os_inventario');
            if (inventarioGuardado) inventarioGlobal = JSON.parse(inventarioGuardado);
        }

        const cotizacionGuardada = localStorage.getItem('studio_os_cotizacion');
        if (cotizacionGuardada) cotizacionActual = JSON.parse(cotizacionGuardada);

        const initBtn = document.getElementById('btn-tab-insumos');
        if(initBtn) switchSubTab(initBtn, 'cat-insumos');
        
        actualizarInterfazUI();
    });
