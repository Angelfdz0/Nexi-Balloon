// ==========================================================================
// CONFIGURACIÓN DE ENLACE DE LA APP (URL DE GOOGLE SHEETS) - AUTOMATIZADA
// ==========================================================================
const URL_NEXICLOUD_FIJA = "https://script.google.com/macros/s/AQUÍ_VA_TU_ID_DE_GOOGLE_SCRIPT/exec"; 

// ==========================================================================
// VARIABLES GLOBALES DE LA APP
// ==========================================================================
let moduloActivo = "pan"; // Pestañas: 'pan' (Globos), 'relleno' (Estructuras), 'betun' (Accesorios)

// Estructuras de datos dinámicas para almacenar los materiales agregados
let materialesAgregados = {
    pan: [],     // Lista de globos en la receta
    relleno: [], // Lista de estructuras/helio en la receta
    betun: []    // Lista de accesorios en la receta
};

// Variables globales de control
let inventarioInsumos = []; 
let esUsuarioPremiumActivo = false; // Nos dirá en qué modo operativo estamos
let idInsumoEditando = null;        // 💡 CORREGIDO: Declaración global obligatoria anti-caídas

document.addEventListener("DOMContentLoaded", async () => {
    initCloudAndBrandSystem();
    
    // 1. Verificar si existen credenciales Premium configuradas
    const email = localStorage.getItem("nexi_email");
    const token = localStorage.getItem("nexi_token");
    const url = localStorage.getItem("cfg-url");
    const tieneCredenciales = email && token && url && !url.includes("AQUÍ_VA_TU_ID_DE_GOOGLE_SCRIPT");

    if (tieneCredenciales) {
        console.log("🔄 Verificando estado de cuenta Premium con la nube...");
        
        // Llamamos a la función de migración/verificación
        const estadoCuenta = await verificarYMigrarAPremium(url, email, token);
        
        if (estadoCuenta === "active") {
            esUsuarioPremiumActivo = true;
            console.log("🌟 Modo Premium Activo. Usando base de datos de la nube.");
        } else if (estadoCuenta === "suspended") {
            esUsuarioPremiumActivo = false;
            console.warn("❌ Cuenta Premium suspendida por falta de pago.");
            
            // ¡ALERTA VISUAL PARA EL USUARIO!
            Swal.fire({
                icon: 'warning',
                title: 'Suscripción Suspendida',
                html: `<p style="font-size:14px; color:#4b5563; text-align:left;">
                        Tu acceso a <b>NEXICloud Premium</b> ha sido pausado por falta de pago.<br><br>
                        🔒 Hemos activado el <b>Modo Local Seguro</b> de forma automática para que no dejes de trabajar. Tus datos locales han reaparecido en este dispositivo.
                       </p>`,
                confirmButtonText: 'Entendido (Modo Local)',
                confirmButtonColor: '#111827'
            });
        } else {
            // En caso de credenciales inválidas o cualquier otro error de configuración
            esUsuarioPremiumActivo = false;
            console.warn("⚠️ No se pudo validar el Premium. Revirtiendo a Modo Estándar Local.");
        }
    } else {
        esUsuarioPremiumActivo = false;
        console.log("📦 Modo Estándar Activo. Usando almacenamiento local.");
    }

    // 2. Cargar los datos correspondientes según el estado de la cuenta
    cargarDatosSegunModo();

    // 3. Renderizar la interfaz
    renderizarTablaInventarioCompleta();
    cambiarModulo("pan"); 
    alternarCamposCotizador(); 
});


// ==========================================================================
// LÓGICA DE CONFIGURACIÓN DE NUBE Y PERSONALIZACIÓN DE MARCA
// ==========================================================================
function initCloudAndBrandSystem() {
    const banner = document.getElementById("cloud-banner");
    const headerTitle = document.querySelector(".main-header h1");
    
    // 1. Cargar Nombre Personalizado del Negocio desde Almacenamiento Local
    const savedBrandName = localStorage.getItem("nexi_brand_name") || "NEXI Balloons";
    if (headerTitle) headerTitle.textContent = savedBrandName;

    // 2. Estado Inicial de Sincronización de la Nube
    const savedEmail = localStorage.getItem("nexi_email");
    const savedToken = localStorage.getItem("nexi_token");

    if (savedEmail && savedToken) {
        if (banner) banner.textContent = `Sincronizado: ${savedEmail}`;
    } else {
        if (banner) banner.textContent = "NEXICloud: Modo Local (Sin sincronizar)";
    }
}

// Variable de control global para la posición del scroll (colócala fuera de las funciones)
let posicionScrollModal = 0;

function abrirModalConfig() {
    const modal = document.getElementById("modal-config");
    if (modal) {
        // 1. Guardar en qué pixel exacto de la pantalla está el usuario
        posicionScrollModal = window.pageYOffset || document.documentElement.scrollTop;
        
        modal.style.display = 'flex';
        
        // 2. Aplicar el bloqueo estricto al body
        document.body.classList.add("modal-open");
        document.body.style.top = `-${posicionScrollModal}px`;
        document.body.style.position = 'fixed';
        document.body.style.width = '100%';
        
        // Cargar inputs con la configuración actual
        document.getElementById("cfg-pasteleria").value = localStorage.getItem("nexi_brand_name") || "NEXI Balloons";
        document.getElementById("cfg-moneda").value = localStorage.getItem("cfg-moneda") || "$";
        document.getElementById("cfg-indirectos").value = localStorage.getItem("cfg-indirectos") || "10";
        document.getElementById("cfg-merma").value = localStorage.getItem("cfg-merma") || "5";
        document.getElementById("cfg-correo").value = localStorage.getItem("nexi_email") || "";
        document.getElementById("cfg-token").value = localStorage.getItem("nexi_token") || "";
    }
}

function cerrarModalConfig() {
    const modal = document.getElementById("modal-config");
    if (modal) {
        modal.style.display = 'none';
        
        // 3. Remover las clases de congelación
        document.body.classList.remove("modal-open");
        
        // 4. Limpiar los estilos en línea añadidos dinámicamente
        document.body.style.top = '';
        document.body.style.position = '';
        document.body.style.width = '';
        
        // 5. Devolver al usuario a la posición en la que estaba navegando
        window.scrollTo(0, posicionScrollModal);
    }
}

function guardarConfiguracion() {
    const brandName = document.getElementById("cfg-pasteleria").value.trim() || "NEXI Balloons";
    const moneda = document.getElementById("cfg-moneda").value.trim() || "$";
    const indirectos = document.getElementById("cfg-indirectos").value || "10";
    const merma = document.getElementById("cfg-merma").value || "5";
    const email = document.getElementById("cfg-correo").value.trim();
    const token = document.getElementById("cfg-token").value.trim();

    localStorage.setItem("nexi_brand_name", brandName);
    localStorage.setItem("cfg-moneda", moneda);
    localStorage.setItem("cfg-indirectos", indirectos);
    localStorage.setItem("cfg-merma", merma);
    localStorage.setItem("cfg-url", URL_NEXICLOUD_FIJA); 
    localStorage.setItem("nexi_email", email);
    localStorage.setItem("nexi_token", token);

    const headerTitle = document.querySelector(".main-header h1");
    if (headerTitle) headerTitle.textContent = brandName;

    const banner = document.getElementById("cloud-banner");
    if (email && token) {
        if (banner) banner.textContent = `Sincronizado: ${email}`;
        sincronizarInventarioConNube();
    } else {
        if (banner) banner.textContent = "NEXICloud: Modo Local (Sin sincronizar)";
    }

    cerrarModalConfig();
    
    renderizarTablaInventarioCompleta();
    renderizarTablaModuloActual();
    
    Swal.fire({
        title: '<div style="color: #10b981; font-size: 45px; margin-bottom: 10px;">✔</div>Configuración Guardada',
        html: '<p style="font-size:15px; color:#4b5563;">Los cambios se aplicaron de forma segura en tu móvil.</p>',
        timer: 1500,
        showConfirmButton: false
    });
}

function actualizarLabelContenido() {
    const unidad = document.getElementById("insumo-unidad").value;
    const labelContenido = document.getElementById("label-contenido");
    const inputContenido = document.getElementById("insumo-contenido");
    const labelCosto = document.getElementById("label-costo");

    if (!labelContenido || !inputContenido || !labelCosto) return;

    labelCosto.textContent = "Costo Total Compra + Envío ($):";
    inputContenido.disabled = false;

    switch (unidad) {
        case "paquete":
            labelContenido.textContent = "Contenido (Pzas por Paquete):";
            inputContenido.value = "50";
            break;
        case "pieza":
            labelContenido.textContent = "Contenido (1 Pza):";
            inputContenido.value = "1";
            break;
        case "tanque":
            labelContenido.textContent = "Rendimiento Estimado (Pzas infladas):";
            inputContenido.value = "100";
            break;
        case "metro":
            labelContenido.textContent = "Metros por Rollo / Unidad:";
            inputContenido.value = "10";
            break;
        case "estructura":
            labelCosto.textContent = "Costo de Compra de Estructura ($):";
            labelContenido.textContent = "Usos estimados para recuperar inversión:";
            inputContenido.value = "5"; 
            break;
        case "estructura_rentada":
            labelCosto.textContent = "Precio que te cobra el Proveedor ($):";
            labelContenido.textContent = "Cantidad de Eventos asignados:";
            inputContenido.value = "1"; 
            inputContenido.disabled = true; 
            break;
        default:
            labelContenido.textContent = "Contenido:";
            inputContenido.value = "1";
    }
}

// ==========================================================================
// CONTROLADOR DE VENTANAS DE AYUDA (SWEETALERT2)
// ==========================================================================
function abrirAyuda(seccion) {
    let titulo = "";
    let htmlContenido = "";

    switch (seccion) {
        case 'seccion-inventario':
            titulo = "📋 Ayuda: Inventario de Materiales";
            htmlContenido = `
                <div style="text-align: left; font-size: 14px; line-height: 1.5; color: #4b5563;">
                    <p>Registra tus insumos cuidando los costos ocultos para proteger tu dinero y asegurar tu ganancia:</p>
                    <ul style="padding-left: 20px; margin-top: 8px; display: flex; flex-direction: column; gap: 8px;">
                        <li><strong>Marca / Calidad:</strong> Clasifica tus globos (Sempertex, Qualatex, etc.).</li>
                        <li><strong>Costo + Envío:</strong> Si compraste en línea o pagaste transporte, ¡suma ese gasto aquí!</li>
                        <li><strong>Estructuras Propias:</strong> Define en cuántos eventos quieres recuperarla. La app cobrará solo esa fracción de "renta interna" automáticamente.</li>
                        <li><strong>Estructuras Rentadas:</strong> Si rentas un backpanel a un tercero, coloca el precio que te cobran y se transferirá al cliente.</li>
                    </ul>
                </div>`;
            break;

        case 'seccion-composicion':
            titulo = "📐 Ayuda: Composición del Arreglo";
            htmlContenido = `
                <div style="text-align: left; font-size: 14px; line-height: 1.5; color: #4b5563;">
                    <p>Diseña la receta o fórmula de tu arreglo distribuyendo tus materiales en las 3 pestañas:</p>
                    <ul style="padding-left: 20px; margin-top: 8px;">
                        <li><strong>🎈 Globos y Calibres:</strong> Látex, burbujas y microfoil que consumirá el diseño.</li>
                        <li><strong>🏗️ Estructuras y Helio:</strong> Bases, mamparas, estructuras o gas helio.</li>
                        <li><strong>✨ Accesorios y Detalles:</strong> Flores artificiales, viniles personalizados o luces LED.</li>
                    </ul>
                </div>`;
            break;

        case 'seccion-cotizador':
            titulo = "💰 Ayuda: Cotizador Comercial";
            htmlContenido = `
                <div style="text-align: left; font-family: 'Inter', sans-serif; font-size: 14px; color: #4b5563; line-height: 1.5;">
                    <p style="margin-bottom: 16px; color: #1f2937; font-weight: 500;">
                        Sigue esta guía paso a paso para calcular un precio de venta exacto, profesional y altamente rentable:
                    </p>
                    
                    <ul style="padding-left: 20px; margin-bottom: 20px; display: flex; flex-direction: column; gap: 10px;">
                        <li><strong>📏 Metros / Piezas:</strong> Indica el tamaño o cantidad total del proyecto. Por ejemplo: 4 si es un arco de 4 metros, o 2 si vas a vender 2 bouquets individuales.</li>
                        <li><strong>📈 Margen Ganancia (%):</strong> Selecciona el porcentaje de utilidad para tu empresa. El sistema ya incluye las opciones sugeridas (Mínimo, Estándar y Premium).</li>
                        <li><strong>⏳ Horas de Montaje:</strong> Estima el tiempo real que te tomará inflar, trasladar y acomodar los globos en el lugar del evento.</li>
                        <li><strong>💵 Costo por Hora ($):</strong> Define cuánto vale tu hora de trabajo físico (tu mano de obra o la de tu staff).</li>
                    </ul>
        
                    <div style="background: #f0fdf4; border: 1px solid #bbf7d0; border-radius: 12px; padding: 14px; margin-top: 15px;">
                        <h4 style="margin: 0 0 8px 0; color: #166534; font-size: 13px; font-weight: 700; text-transform: uppercase; display: flex; align-items: center; gap: 6px;">
                            🚗 Guía de Cobro: Viáticos y Transporte
                        </h4>
                        <p style="margin: 0 0 10px 0; font-size: 12px; color: #1e40af; font-weight: 500;">
                            No uses porcentajes fijados al azar. Introduce un monto exacto guiándote con estas zonas:
                        </p>
                        <div style="display: flex; flex-direction: column; gap: 8px; font-size: 12.5px; color: #1f2937;">
                            <div>
                                <span style="background: #dcfce7; color: #15803d; padding: 2px 6px; border-radius: 4px; font-weight: 600; font-size: 11px;">ZONA LOCAL (0 - 5 km)</span>
                                <div style="margin-top: 4px; color: #4b5563;"><strong>Sugerido: $100 - $150.</strong> Cubre el arranque de tu vehículo y el traslado protegido de globos ya inflados a distancias cortas.</div>
                            </div>
                            <hr style="border: 0; border-top: 1px dashed #bbf7d0; margin: 4px 0;">
                            <div>
                                <span style="background: #fef9c3; color: #a16207; padding: 2px 6px; border-radius: 4px; font-weight: 600; font-size: 11px;">ZONA METROPOLITANA (5 - 15 km)</span>
                                <div style="margin-top: 4px; color: #4b5563;"><strong>Sugerido: $200 - $350.</strong> Costo intermedio calculado con base en el tráfico de la ciudad y el tiempo de viaje de ida y vuelta.</div>
                            </div>
                            <hr style="border: 0; border-top: 1px dashed #bbf7d0; margin: 4px 0;">
                            <div>
                                <span style="background: #fee2e2; color: #991b1b; padding: 2px 6px; border-radius: 4px; font-weight: 600; font-size: 11px;">ZONA EXTENDIDA / FORÁNEA</span>
                                <div style="margin-top: 4px; color: #4b5563;">Costo real de gasolina o flete <strong>multiplicado por 1.5 o 2</strong> (para amortizar el desgaste del auto), más el tiempo muerto si el viaje supera los 40 minutos.</div>
                            </div>
                        </div>
                    </div>
                </div>`;
            break;

        default:
            titulo = "Ayuda NEXI Balloons";
            htmlContenido = "<p>Selecciona una sección válida para recibir asistencia técnica.</p>";
    }

    const scrollY = window.scrollY;
    document.body.style.top = `-${scrollY}px`;
    document.body.classList.add("modal-open");

    Swal.fire({
        title: titulo,
        html: htmlContenido,
        icon: 'info',
        confirmButtonText: 'Entendido',
        confirmButtonColor: '#111827', 
        customClass: { popup: 'animate-pop' },
        willClose: () => {
            document.body.classList.remove("modal-open");
            document.body.style.top = '';
            window.scrollTo(0, scrollY);
        }
    });
}

// ==========================================================================
// PROCESADOR DEL FORMULARIO DE INVENTARIO (MODO INTELIGENTE: LOCAL VS PREMIUM)
// ==========================================================================
function guardarInsumoEvent(event) {
    event.preventDefault();

    const nombre = document.getElementById("insumo-nombre").value.trim();
    const marca = document.getElementById("insumo-marca") ? document.getElementById("insumo-marca").value.trim() : "";
    const unidad = document.getElementById("insumo-unidad").value;
    const contenido = parseFloat(document.getElementById("insumo-contenido").value);
    const costoTotal = parseFloat(document.getElementById("insumo-costo").value);

    if (!nombre || isNaN(contenido) || isNaN(costoTotal) || contenido <= 0) {
        Swal.fire({
            icon: 'error',
            title: 'Datos incompletos',
            text: 'Por favor, llena correctamente todos los campos obligatorios.',
            confirmButtonColor: '#111827'
        });
        return;
    }

    const costoUnitario = costoTotal / contenido;

    // 💡 CORREGIDO: Validación estricta diferenciando null de un ID activo
    if (idInsumoEditando !== null) {
        // --- MODO EDICIÓN ---
        const insumo = inventarioInsumos.find(i => i.id === idInsumoEditando);
        if (insumo) {
            insumo.nombre = nombre;
            insumo.marca = marca;
            insumo.unidad = unidad;
            insumo.contenido = contenido;
            insumo.costoTotal = costoTotal;
            insumo.costoUnitario = costoUnitario;
        }

        ["pan", "relleno", "betun"].forEach(mod => {
            if (materialesAgregados[mod]) {
                materialesAgregados[mod].forEach(m => {
                    if (m.idInsumo === idInsumoEditando) {
                        m.nombre = nombre;
                        m.marca = marca;
                        m.costoUnitario = costoUnitario;
                        m.costoProporcional = m.cantidad * costoUnitario;
                    }
                });
            }
        });

        Swal.fire({
            title: '<div style="color: #10b981; font-size: 45px; margin-bottom: 10px;">✔</div>¡Material Actualizado!',
            html: `<p style="font-size: 15px; color: #4b5563;">"${nombre}" se modificó correctamente.</p>`,
            timer: 1500,
            showConfirmButton: false
        });

        const submitBtn = document.querySelector("#form-insumo button[type='submit']");
        if (submitBtn) submitBtn.innerHTML = "Guardar Material";
        idInsumoEditando = null;

    } else {
        // --- MODO NUEVO REGISTRO ---
        const id = "insumo-" + Date.now();
        inventarioInsumos.push({
            id: id,
            nombre: nombre,
            marca: marca,
            unidad: unidad,
            contenido: contenido,
            costoTotal: costoTotal,
            costoUnitario: costoUnitario
        });

        Swal.fire({
            title: '<div style="color: #10b981; font-size: 45px; margin-bottom: 10px;">✔</div>¡Material Guardado!',
            html: `<p style="font-size: 15px; color: #4b5563;">"${nombre}" se guardó con éxito.</p>`,
            timer: 1500,
            showConfirmButton: false
        });
    }

    // --- ENRUTAMIENTO INTELIGENTE DE ALMACENAMIENTO ---
    if (esUsuarioPremiumActivo) {
        localStorage.setItem("nexi_inventario_premium", JSON.stringify(inventarioInsumos));
        console.log("☁️ Guardado en contenedor Premium Local.");
        sincronizarInventarioConNube();
    } else {
        localStorage.setItem("nexi_inventario", JSON.stringify(inventarioInsumos));
        console.log("🔒 Guardado en contenedor Estándar Local.");
    }

    // --- RENDERIZACIÓN Y LIMPIEZA DE INTERFAZ ---
    renderizarTablaInventarioCompleta();

    document.getElementById("form-insumo").reset();
    if (document.getElementById("buscador-inventario")) {
        document.getElementById("buscador-inventario").value = "";
    }
    actualizarLabelContenido();
    filtrarSelectorPorModulo();
    renderizarTablaModuloActual();
}

function cargarInsumoParaEditar(idInsumo) {
    const insumo = inventarioInsumos.find(i => i.id === idInsumo);
    if (!insumo) return;

    idInsumoEditando = idInsumo;

    document.getElementById("insumo-nombre").value = insumo.nombre;
    if (document.getElementById("insumo-marca")) {
        document.getElementById("insumo-marca").value = insumo.marca;
    }
    document.getElementById("insumo-unidad").value = insumo.unidad;
    
    actualizarLabelContenido();
    
    document.getElementById("insumo-contenido").value = insumo.contenido;
    document.getElementById("insumo-costo").value = insumo.costoTotal;

    const submitBtn = document.querySelector("#form-insumo button[type='submit']");
    if (submitBtn) {
        submitBtn.innerHTML = `<span class="material-symbols-outlined" style="vertical-align: middle; font-size:18px; margin-right:4px;">edit</span> Actualizar Insumo`;
    }

    document.getElementById("form-insumo").scrollIntoView({ behavior: 'smooth' });
}

function renderizarTablaInventarioCompleta() {
    const tbody = document.querySelector("#tabla-insumos tbody");
    if (!tbody) return;

    tbody.innerHTML = "";
    const moneda = localStorage.getItem("cfg-moneda") || "$";

    if (inventarioInsumos.length === 0) {
        tbody.innerHTML = `<tr><td colspan="4" style="text-align: center; color: #9ca3af; font-size: 13px; padding: 20px;">No hay materiales guardados en el inventario.</td></tr>`;
        return;
    }

    inventarioInsumos.forEach(insumo => {
        let formatoCompra = "";
        const marcaTexto = insumo.marca ? ` (${insumo.marca})` : "";
        
        // Validar costo unitario por si se guardó un dato corrupto anteriormente
        if (typeof insumo.costoUnitario !== 'number' || isNaN(insumo.costoUnitario)) {
            const contenido = parseFloat(insumo.contenido) || 1;
            const costoTotal = parseFloat(insumo.costoTotal) || 0;
            insumo.costoUnitario = costoTotal / contenido;
        }

        switch (insumo.unidad) {
            case "paquete": formatoCompra = `Paquete x ${insumo.contenido} pzas${marcaTexto}`; break;
            case "pieza": formatoCompra = `Pieza Unitaria${marcaTexto}`; break;
            case "tanque": formatoCompra = `Tanque (Rinde ${insumo.contenido} pzas)${marcaTexto}`; break;
            case "metro": formatoCompra = `Rollo / Tramo de ${insumo.contenido}m${marcaTexto}`; break;
            case "estructura": formatoCompra = `Estructura Propia (Recup. en ${insumo.contenido} usos)`; break;
            case "estructura_rentada": formatoCompra = `Renta Externa (Proveedor)`; break;
            default: formatoCompra = `${insumo.unidad || 'Global'}${marcaTexto}`;
        }

        const fila = document.createElement("tr");
        fila.id = insumo.id;
        fila.innerHTML = `
            <td style="font-weight: 500; color: #1f2937;">${insumo.nombre}</td>
            <td style="color: #4b5563; font-size: 13px;">${formatoCompra}</td>
            <td style="font-weight: 600; color: #111827;">${moneda}${insumo.costoUnitario.toFixed(2)}</td>
            <td style="text-align: center; display: flex; gap: 8px; justify-content: center; align-items: center;">
                <button class="btn-editar-tabla" onclick="cargarInsumoParaEditar('${insumo.id}')" style="background: transparent; border: none; color: #3b82f6; cursor: pointer; padding: 4px;">
                    <span class="material-symbols-outlined" style="font-size: 18px;">edit</span>
                </button>
                <button class="btn-eliminar-tabla" onclick="eliminarInsumoDeRaiz('${insumo.id}')" style="background: transparent; border: none; color: #ef4444; cursor: pointer; padding: 4px;">
                    <span class="material-symbols-outlined" style="font-size: 18px;">delete</span>
                </button>
            </td>
        `;
        tbody.appendChild(fila);
    });
}


function eliminarInsumoDeRaiz(idInsumo) {
    if (idInsumoEditando === idInsumo) {
        idInsumoEditando = null;
        const submitBtn = document.querySelector("#form-insumo button[type='submit']");
        if (submitBtn) submitBtn.innerHTML = "Guardar Material";
        document.getElementById("form-insumo").reset();
    }

    inventarioInsumos = inventarioInsumos.filter(i => i.id !== idInsumo);

    ["pan", "relleno", "betun"].forEach(mod => {
        if (materialesAgregados[mod]) {
            materialesAgregados[mod] = materialesAgregados[mod].filter(m => m.idInsumo !== idInsumo);
        }
    });

    // 💡 CORREGIDO: Guardar en el casillero correspondiente al eliminar para evitar resurrección de datos
    if (esUsuarioPremiumActivo) {
        localStorage.setItem("nexi_inventario_premium", JSON.stringify(inventarioInsumos));
    } else {
        localStorage.setItem("nexi_inventario", JSON.stringify(inventarioInsumos));
    }

    renderizarTablaInventarioCompleta();
    filtrarSelectorPorModulo();
    renderizarTablaModuloActual();

    // Sincronizar cambio en la nube
    sincronizarInventarioConNube();
}

// ==========================================================================
// CONTROLADOR DE CAMBIO DE PESTAÑAS (MÓDULOS)
// ==========================================================================
function cambiarModulo(modulo) {
    moduloActivo = modulo;

    document.querySelectorAll(".tabs-modulos .tab-btn").forEach(btn => {
        btn.classList.remove("active");
    });
    
    const tabId = modulo === "pan" ? "tab-pan" : (modulo === "relleno" ? "tab-relleno" : "tab-betun");
    const botonActivo = document.getElementById(tabId);
    if (botonActivo) botonActivo.classList.add("active");

    filtrarSelectorPorModulo();
    renderizarTablaModuloActual();
}

function filtrarSelectorPorModulo() {
    const selectInsumo = document.getElementById("select-insumo-modulo");
    if (!selectInsumo) return;

    selectInsumo.innerHTML = "";

    const mapeoFiltros = {
        pan: ["paquete", "pieza"],
        relleno: ["tanque", "estructura", "estructura_rentada"],
        betun: ["metro", "global"]
    };

    const unidadesPermitidas = mapeoFiltros[moduloActivo] || [];
    const insumosFiltrados = inventarioInsumos.filter(insumo => unidadesPermitidas.includes(insumo.unidad));

    if (insumosFiltrados.length === 0) {
        const opt = document.createElement("option");
        opt.textContent = "Sin materiales para esta sección";
        opt.value = "";
        selectInsumo.appendChild(opt);
        actualizarLabelCantidadModulo();
        return;
    }

    insumosFiltrados.forEach(insumo => {
        const opt = document.createElement("option");
        opt.value = insumo.id;
        const moneda = localStorage.getItem("cfg-moneda") || "$";
        const marcaTexto = insumo.marca ? ` [${insumo.marca}]` : "";
        opt.textContent = `${insumo.nombre}${marcaTexto} (${moneda}${insumo.costoUnitario.toFixed(2)} c/u)`;
        selectInsumo.appendChild(opt);
    });

    selectInsumo.onchange = actualizarLabelCantidadModulo;
    actualizarLabelCantidadModulo();
}

function actualizarLabelCantidadModulo() {
    const selectInsumo = document.getElementById("select-insumo-modulo");
    const labelCantidad = document.getElementById("label-cantidad-modulo");
    const inputCantidad = document.getElementById("input-cantidad-modulo");
    
    if (!labelCantidad || !selectInsumo) return;

    const idSeleccionado = selectInsumo.value;
    const insumo = inventarioInsumos.find(i => i.id === idSeleccionado);

    if (!insumo) {
        labelCantidad.textContent = "Cantidad Requerida:";
        if (inputCantidad) inputCantidad.placeholder = "Ej: 10";
        return;
    }

    switch (insumo.unidad) {
        case "paquete":
        case "pieza":
            labelCantidad.textContent = "Cantidad de Globos (Piezas):";
            if (inputCantidad) inputCantidad.placeholder = "Ej: 25";
            break;
        case "tanque":
            labelCantidad.textContent = "Porción de Helio Equivalente (Pzas a Inflar):";
            if (inputCantidad) inputCantidad.placeholder = "Ej: 15";
            break;
        case "metro":
            labelCantidad.textContent = "Metros Necesarios (m):";
            if (inputCantidad) inputCantidad.placeholder = "Ej: 2.5";
            break;
        case "estructura":
            labelCantidad.textContent = "Uso de la Estructura Propia (Eventos):";
            if (inputCantidad) inputCantidad.placeholder = "Fijo: 1";
            break;
        case "estructura_rentada":
            labelCantidad.textContent = "Servicio de Renta Externa (Unidades):";
            if (inputCantidad) inputCantidad.placeholder = "Fijo: 1";
            break;
        default:
            labelCantidad.textContent = "Cantidad Requerida:";
            if (inputCantidad) inputCantidad.placeholder = "Ej: 1";
    }
}

function agregarMaterialAModulo() {
    const selectInsumo = document.getElementById("select-insumo-modulo");
    const inputCantidad = document.getElementById("input-cantidad-modulo");

    if (!selectInsumo || !inputCantidad || !selectInsumo.value) {
        Swal.fire({ icon: 'warning', title: 'Atención', text: 'Selecciona un material válido.', confirmButtonColor: '#111827' });
        return;
    }

    const idInsumo = selectInsumo.value;
    const cantidad = parseFloat(inputCantidad.value);

    if (isNaN(cantidad) || cantidad <= 0) {
        Swal.fire({ icon: 'warning', title: 'Cantidad Inválida', text: 'Por favor, ingresa una cantidad mayor a cero.', confirmButtonColor: '#111827' });
        return;
    }

    const insumoOriginal = inventarioInsumos.find(i => i.id === idInsumo);
    if (!insumoOriginal) return;

    const materialExistente = materialesAgregados[moduloActivo].find(m => m.idInsumo === idInsumo);
    if (materialExistente) {
        materialExistente.cantidad += cantidad;
        materialExistente.costoProporcional = materialExistente.cantidad * insumoOriginal.costoUnitario;
    } else {
        materialesAgregados[moduloActivo].push({
            idInsumo: idInsumo,
            nombre: insumoOriginal.nombre,
            marca: insumoOriginal.marca,
            cantidad: cantidad,
            costoUnitario: insumoOriginal.costoUnitario,
            costoProporcional: cantidad * insumoOriginal.costoUnitario
        });
    }

    inputCantidad.value = "";
    renderizarTablaModuloActual();
}

// ==========================================================================
// RENDERIZADOR VISUAL DE LA TABLA DE COMPOSICIÓN Y BOTONES DE PLANTILLA
// ==========================================================================
function renderizarTablaModuloActual() {
    const tbody = document.querySelector("#tabla-modulo-actual tbody");
    const subtotalLabel = document.getElementById("subtotal-modulo-valor");
    if (!tbody) return;

    tbody.innerHTML = "";
    let subtotalSeccion = 0;
    const moneda = localStorage.getItem("cfg-moneda") || "$";
    const listaActual = materialesAgregados[moduloActivo] || [];

    if (listaActual.length === 0) {
        tbody.innerHTML = `<tr><td colspan="4" style="text-align: center; color: #9ca3af; font-size: 13px; padding: 20px;">No has añadido materiales a esta sección.</td></tr>`;
    } else {
        listaActual.forEach((item, index) => {
            subtotalSeccion += item.costoProporcional;
            const fila = document.createElement("tr");
            const marcaTexto = item.marca ? ` <span style="font-size:11px; color:#6b7280;">(${item.marca})</span>` : "";

            fila.innerHTML = `
                <td style="font-weight: 500; color: #1f2937; padding: 12px 8px;">${item.nombre}${marcaTexto}</td>
                <td style="color: #4b5563; padding: 12px 8px;">${item.cantidad.toFixed(2)}</td>
                <td style="font-weight: 600; color: #111827; padding: 12px 8px;">${moneda}${item.costoProporcional.toFixed(2)}</td>
                <td style="text-align: center; padding: 12px 8px;">
                    <button onclick="eliminarMaterialDeModulo(${index})" style="background: transparent; border: none; color: #ef4444; cursor: pointer; display: flex; align-items: center; justify-content: center; margin: 0 auto;">
                        <span class="material-symbols-outlined" style="font-size: 18px;">delete</span>
                    </button>
                </td>
            `;
            tbody.appendChild(fila);
        });
    }

    if (subtotalLabel) {
        subtotalLabel.textContent = `${moneda}${subtotalSeccion.toFixed(2)}`;
    }
    
    actualizarDesgloseTecnicoPantalla();

    if (typeof calcularPrecioFinalEvento === "function") {
        calcularPrecioFinalEvento();
    }
}


function eliminarMaterialDeModulo(index) {
    materialesAgregados[moduloActivo].splice(index, 1);
    renderizarTablaModuloActual();
}

// Función corregida: Se borró la lógica vacía y ahora interactúa directo con el cotizador central
function actualizarDesgloseTecnicoPantalla() {
    if (typeof calcularPrecioFinalEvento === "function") {
        calcularPrecioFinalEvento();
    }
}

// ==========================================================================
// INTERACTVIDAD DE PLANTILLAS Y PROYECTOS (LOCALSTORAGE)
// ==========================================================================
function guardarComposicionComoPlantilla() {
    const tieneMateriales = Object.keys(materialesAgregados).some(mod => materialesAgregados[mod] && materialesAgregados[mod].length > 0);
    
    if (!tieneMateriales) {
        Swal.fire({
            icon: 'warning',
            title: 'Proyecto Vacío',
            text: 'Añade al menos un material a la composición antes de guardarlo como plantilla.',
            confirmButtonColor: '#111827'
        });
        return;
    }

    Swal.fire({
        title: '💾 Guardar Nueva Plantilla',
        input: 'text',
        inputLabel: 'Asigna un nombre a este diseño o proyecto:',
        inputPlaceholder: 'Ej: Arco Orgánico 4m, Bouquet...',
        showCancelButton: true,
        confirmButtonText: 'Guardar',
        cancelButtonText: 'Cancelar',
        confirmButtonColor: '#111827',
        didOpen: () => {
            const input = Swal.getInput();
            if (input) {
                input.style.maxWidth = '100%';
                input.style.boxSizing = 'border-box';
                input.style.margin = '15px auto';
            }
        },
        inputValidator: (value) => {
            if (!value || !value.trim()) {
                return '¡Necesitas escribir un nombre para la plantilla!';
            }
        }
    }).then((result) => {
        if (result.isConfirmed) {
            const nombrePlantilla = result.value.trim();
            let plantillasGuardadas = JSON.parse(localStorage.getItem("nexi_plantillas")) || {};
            
            plantillasGuardadas[nombrePlantilla] = JSON.parse(JSON.stringify(materialesAgregados));
            localStorage.setItem("nexi_plantillas", JSON.stringify(plantillasGuardadas));

            Swal.fire({
                title: '<div style="color: #10b981; font-size: 45px; margin-bottom: 10px;">✔</div>¡Plantilla Guardada!',
                html: `<p style="font-size: 15px; color: #4b5563;">El proyecto <strong style="color:#111827;">"${nombrePlantilla}"</strong> se registró con éxito.</p>`,
                timer: 2000,
                showConfirmButton: false
            });
        }
    });
}

function abrirMenuCargarPlantillas() {
    const plantillasGuardadas = JSON.parse(localStorage.getItem("nexi_plantillas")) || {};
    const nombres = Object.keys(plantillasGuardadas);

    if (nombres.length === 0) {
        Swal.fire({
            icon: 'info',
            title: 'Sin Plantillas',
            text: 'Aún no tienes proyectos guardados. Diseña uno y presiona "Guardar Plantilla".',
            confirmButtonColor: '#111827'
        });
        return;
    }

    let opcionesHtml = `
        <div style="display: flex; flex-direction: column; gap: 10px; max-height: 250px; overflow-y: auto; padding: 5px;">
            ${nombres.map(nombre => `
                <div style="display: flex; justify-content: space-between; align-items: center; background: #f3f4f6; padding: 10px 14px; border-radius: 8px; border: 1px solid #e5e7eb;">
                    <span style="font-weight: 600; color: #1f2937; text-align: left; font-size: 14px; flex-grow: 1; cursor: pointer;" onclick="Swal.clickConfirm(); aplicarPlantillaReceta('${btoa(unescape(encodeURIComponent(nombre)))}');">
                        📂 ${nombre}
                    </span>
                    <button onclick="eliminarPlantillaReceta('${btoa(unescape(encodeURIComponent(nombre)))}')" style="background: transparent; border: none; color: #ef4444; cursor: pointer; display: flex; align-items: center; margin-left: 10px;">
                        <span class="material-symbols-outlined" style="font-size: 20px;">delete</span>
                    </button>
                </div>
            `).join('')}
        </div>
    `;

    Swal.fire({
        title: '📂 Cargar Plantilla de Proyecto',
        html: opcionesHtml,
        showCancelButton: true,
        showConfirmButton: false,
        cancelButtonText: 'Cerrar',
        focusCancel: true
    });
}

function aplicarPlantillaReceta(nombreBase64) {
    const nombre = decodeURIComponent(escape(atob(nombreBase64)));
    const plantillasGuardadas = JSON.parse(localStorage.getItem("nexi_plantillas")) || {};
    const plantillaSeleccionada = plantillasGuardadas[nombre];

    if (!plantillaSeleccionada) return;

    Swal.fire({
        title: '¿Cargar diseño?',
        text: `Esto reemplazará los materiales que tengas actualmente en la composición por el proyecto de "${nombre}".`,
        icon: 'question',
        showCancelButton: true,
        confirmButtonText: 'Sí, cargar',
        cancelButtonText: 'Cancelar',
        confirmButtonColor: '#111827'
    }).then((result) => {
        if (result.isConfirmed) {
            materialesAgregados = JSON.parse(JSON.stringify(plantillaSeleccionada));
            
            renderizarTablaModuloActual();

            Swal.fire({
                title: '<div style="color: #10b981; font-size: 45px; margin-bottom: 10px;">✔</div>¡Proyecto Cargado!',
                html: `<p style="font-size: 15px; color: #4b5563;">Se aplicó el proyecto de <strong style="color:#111827;">"${nombre}"</strong> con tus costos actuales de inventario.</p>`,
                timer: 2000,
                showConfirmButton: false
            });
        }
    });
}

window.eliminarPlantillaReceta = function(nombreBase64) {
    const nombre = decodeURIComponent(escape(atob(nombreBase64)));
    
    Swal.fire({
        title: '¿Eliminar Plantilla?',
        text: `¿Estás seguro de que deseas borrar permanentemente la receta de "${nombre}"?`,
        icon: 'warning',
        showCancelButton: true,
        confirmButtonText: 'Sí, borrar',
        cancelButtonText: 'Cancelar',
        confirmButtonColor: '#ef4444'
    }).then((result) => {
        if (result.isConfirmed) {
            let plantillasGuardadas = JSON.parse(localStorage.getItem("nexi_plantillas")) || {};
            delete plantillasGuardadas[nombre];
            localStorage.setItem("nexi_plantillas", JSON.stringify(plantillasGuardadas));
            
            Swal.close();
            setTimeout(abrirMenuCargarPlantillas, 300);
        }
    });
};

// ==========================================================================
// NUEVO CÁLCULO INTERACTIVO DEL COTIZADOR COMERCIAL DE EVENTOS (MODO HUMANO)
// ==========================================================================
function calcularPrecioFinalEvento() {
    // 1. Obtener los costos base calculados por las pestañas usando la función auxiliar
    const costoMateriales = obtenerCostoTotalMateriales(); 
    
    // 2. Obtener los datos del formulario del cotizador usando los IDs REALES del HTML
    const horasTrabajo = parseFloat(document.getElementById("cot-horas")?.value) || 0;
    const costoHora = parseFloat(document.getElementById("cot-costo-hora")?.value) || 0;
    const viaticos = parseFloat(document.getElementById("cot-viaticos")?.value) || 0;
    const margenGanancia = parseFloat(document.getElementById("cot-margen")?.value) || 200;
    
    const tipoCotizacion = document.getElementById("tipo-cotizacion")?.value || "proyecto"; 
    const dimension = parseFloat(document.getElementById("dimension-metros")?.value) || 1;

    // 3. Calcular la Mano de Obra Total y Costo Operativo
    const totalManoObra = horasTrabajo * costoHora;
    const costoOperacionTotal = totalManoObra + viaticos;

    // 4. Aplicar lógica intuitiva según la modalidad seleccionada
    let precioVentaSugerido = 0;
    let costoBaseTotal = 0;

    if (tipoCotizacion === "proyecto") {
        // MODO PROYECTO: Todo lo que metió en la receta es el total del evento
        costoBaseTotal = costoMateriales + costoOperacionTotal;
        precioVentaSugerido = costoBaseTotal * (1 + (margenGanancia / 100));
    } else {
        // MODO METRO: La receta era solo para 1 metro, multiplicamos la materia prima por la dimensión
        const costoMaterialesTotal = costoMateriales * dimension;
        costoBaseTotal = costoMaterialesTotal + costoOperacionTotal;
        precioVentaSugerido = costoBaseTotal * (1 + (margenGanancia / 100));
    }

    // 5. Calcular la Utilidad Neta Real de la Empresa
    const utilidadNeta = precioVentaSugerido - costoBaseTotal;

    // 6. RENDERIZAR TODO EL RESUMEN FINANCIERO EN LA PANTALLA
    const moneda = obtenerMonedaActual();
    
    if (document.getElementById("res-costo-materiales")) {
        const matCostoVisual = tipoCotizacion === "metro" ? costoMateriales * dimension : costoMateriales;
        document.getElementById("res-costo-materiales").textContent = `${moneda}${matCostoVisual.toFixed(2)}`;
    }
    if (document.getElementById("res-costo-operacion")) {
        document.getElementById("res-costo-operacion").textContent = `${moneda}${costoOperacionTotal.toFixed(2)}`;
    }
    if (document.getElementById("res-utilidad")) {
        document.getElementById("res-utilidad").textContent = `${moneda}${utilidadNeta.toFixed(2)}`;
    }
    if (document.getElementById("res-precio-final")) {
        document.getElementById("res-precio-final").textContent = `${moneda}${precioVentaSugerido.toFixed(2)}`;
    }
}

function alternarCamposCotizador() {
    const tipo = document.getElementById("tipo-cotizacion")?.value || "proyecto";
    const inputMetros = document.getElementById("dimension-metros");
    if (!inputMetros) return;
    
    const contenedorMetros = inputMetros.closest(".grupo-input");
    
    if (tipo === "proyecto") {
        inputMetros.value = 1;
        if (contenedorMetros) {
            contenedorMetros.style.opacity = "0.4";
            contenedorMetros.style.pointerEvents = "none"; // Bloquea por completo la interacción
        }
    } else {
        if (contenedorMetros) {
            contenedorMetros.style.opacity = "1";
            contenedorMetros.style.pointerEvents = "auto";  // Desbloquea el campo
        }
    }
}

// ==========================================================================
// FUNCIONES AUXILIARES MATEMÁTICAS Y DE MONEDA (OBLIGATORIAS)
// ==========================================================================
function obtenerCostoTotalMateriales() {
    let total = 0;
    ["pan", "relleno", "betun"].forEach(modulo => {
        if (materialesAgregados[modulo]) {
            materialesAgregados[modulo].forEach(item => {
                total += item.costoProporcional || 0;
            });
        }
    });
    return total;
}

function obtenerMonedaActual() {
    return localStorage.getItem("cfg-moneda") || "$";
}

function calcularTodo() {
    calcularPrecioFinalEvento();
}

// ==========================================================================
// CAPA INTERNA DE SINCRONIZACIÓN EN SEGUNDO PLANO (ONLINE)
// ==========================================================================
async function sincronizarInventarioConNube() {
    const email = localStorage.getItem("nexi_email");
    const token = localStorage.getItem("nexi_token");
    const url = localStorage.getItem("cfg-url");

    if (!email || !token || !url) return;

    try {
        const payload = {
            action: "sincronizarInventario",
            email: email,
            token: token,
            datosInventario: JSON.stringify(inventarioInsumos)
        };

        if (typeof apiFetch === "function") {
            const respuesta = await apiFetch(url, payload);
            console.log("☁ Sincronización exitosa con NEXICloud:", respuesta);
        }
    } catch (error) {
        console.warn("⚠️ Falló la conexión con la nube. Se mantiene guardado localmente en el teléfono:", error);
    }
}

// ==========================================================================
// FUNCIÓN AUXILIAR: COMPARTIR PRESUPUESTO POR WHATSAPP COHERENTE
// ==========================================================================
function enviarCotizacionWhatsApp() {
    const negocio = localStorage.getItem("nexi_brand_name") || "NEXI Balloons";
    const moneda = obtenerMonedaActual();
    const precio = document.getElementById("res-precio-final")?.textContent || `${moneda}0.00`;
    const metros = document.getElementById("dimension-metros")?.value || "1";
    const tipoCotizacion = document.getElementById("tipo-cotizacion")?.value || "proyecto";

    const detalleTexto = tipoCotizacion === "metro" 
        ? `Proyecto de Decoración Lineal (${metros} metros)`
        : `Proyecto Cerrado de Diseño / Decoración`;

    const mensaje = `✨ *Presupuesto de Decoración Profesional* ✨\n\n` +
                    `¡Hola! Te comparto la cotización estimada de tu proyecto a través de *${negocio}*:\n\n` +
                    `🎈 *Detalle:* ${detalleTexto}\n` +
                    `💰 *Inversión Total:* *${precio}*\n\n` +
                    `_Quedo a tus órdenes para apartar la fecha y afinar los detalles de tus globos._`;

    const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(mensaje)}`;
    window.open(url, '_blank');
}

// ==========================================================================
// FILTRO BUSCADOR EN TIEMPO REAL PARA EL INVENTARIO
// ==========================================================================
function filtrarInventarioEnTiempoReal() {
    const textoBusqueda = document.getElementById("buscador-inventario").value.toLowerCase().trim();
    const filas = document.querySelectorAll("#tabla-insumos tbody tr");

    filas.forEach(fila => {
        const nombreMaterial = fila.cells[0]?.textContent.toLowerCase() || "";
        const formatoCompra = fila.cells[1]?.textContent.toLowerCase() || "";

        if (nombreMaterial.includes(textoBusqueda) || formatoCompra.includes(textoBusqueda)) {
            fila.style.display = ""; 
        } else {
            fila.style.display = "none"; 
        }
    });
}

/**
 * Limpia por completo los materiales agregados al módulo o composición activa
 */
 
function limpiarModuloActual() {
    Swal.fire({
        title: '¿Vaciar sección?',
        text: "Se eliminarán todos los materiales de la pestaña activa en esta composición.",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#ef4444',
        cancelButtonColor: '#6b7280',
        confirmButtonText: 'Sí, limpiar',
        cancelButtonText: 'Cancelar'
    }).then((result) => {
        if (result.isConfirmed) {
            // 1. Vaciar la estructura de datos interna del módulo activo
            materialesAgregados[moduloActivo] = [];
            
            // 2. Refrescar la tabla visual de inmediato
            renderizarTablaModuloActual();

            // 3. Resetear el input numérico de cantidad por comodidad
            const inputCantidad = document.getElementById("input-cantidad-modulo");
            if (inputCantidad) inputCantidad.value = "";

            // 💡 SOLUCIÓN AQUÍ: Usamos un check estilizado en HTML puro para saltarnos el icono roto
            Swal.fire({
                title: '<div style="color: #10b981; font-size: 45px; margin-bottom: 10px;">✔</div>¡Vaciado!',
                html: '<p style="font-size:15px; color:#4b5563;">La sección se ha reiniciado correctamente.</p>',
                timer: 1200,
                showConfirmButton: false
            });
        }
    });
}


async function verificarYMigrarAPremium(url, email, token) {
    try {
        const datosLocales = localStorage.getItem("nexi_inventario");
        const datosPlantillasLocales = localStorage.getItem("nexi_plantillas"); 

        const payload = {
            action: "verificarYMigrar",
            email: email,
            token: token,
            datosInventarioLocal: datosLocales || "[]",
            datosPlantillasLocal: datosPlantillasLocales || "[]"
        };

        const response = await fetch(url, {
            method: "POST",
            body: JSON.stringify(payload)
        });
        
        const resultado = await response.json();

        // 1. Si la cuenta está al día
        if (resultado && resultado.status === "active") {
            localStorage.setItem("nexi_inventario_premium", JSON.stringify(resultado.inventario));
            localStorage.setItem("nexi_plantillas_premium", JSON.stringify(resultado.plantillas));
            return "active"; 
        }
        
        // 2. Si tu script de Google Sheets explícitamente responde que está suspendida
        if (resultado && resultado.status === "suspended") {
            return "suspended";
        }
        
        return "error";

    } catch (error) {
        console.error("Error de conexión con el servidor Premium:", error);
        // Si no hay internet, devolvemos error para que cargue lo local de emergencia sin alarmar con corte de pago
        return "error"; 
    }
}


function cargarDatosSegunModo() {
    if (esUsuarioPremiumActivo) {
        // MODO PREMIUM: Cargamos estrictamente lo que bajó de la nube
        const datosPremium = localStorage.getItem("nexi_inventario_premium");
        inventarioInsumos = datosPremium ? JSON.parse(datosPremium) : [];
    } else {
        // MODO ESTÁNDAR / SUSPENDIDO: Reaparece instantáneamente todo lo local
        const datosLocales = localStorage.getItem("nexi_inventario");
        inventarioInsumos = datosLocales ? JSON.parse(datosLocales) : [];
    }
}

function generarPDFCotizacion() {
    const nombreEmpresa = localStorage.getItem("nexi_brand_name") || "NEXI Balloons";
    const moneda = localStorage.getItem("cfg-moneda") || "$";
    
    const precioFinalElemento = document.getElementById("res-precio-final");
    const precioFinal = precioFinalElemento ? precioFinalElemento.textContent : `${moneda}0.00`;
    const fechaActual = new Date().toLocaleDateString();

    // 1. Mostrar un aviso de carga en la app principal
    Swal.fire({
        title: 'Generando PDF',
        text: 'Procesando tu cotización oficial...',
        allowOutsideClick: false,
        didOpen: () => {
            Swal.showLoading();
        }
    });

    // 2. Abrir una nueva ventana en blanco en el navegador
    const ventanaPDF = window.open("", "_blank");
    if (!ventanaPDF) {
        Swal.fire({
            icon: 'error',
            title: 'Bloqueador de ventanas activado',
            text: 'Por favor, permite las ventanas emergentes en tu navegador para poder descargar el PDF.'
        });
        return;
    }

    // 3. Escribir un HTML completamente aislado e independiente dentro de esa ventana
    ventanaPDF.document.write(`
        <!DOCTYPE html>
        <html lang="es">
        <head>
            <meta charset="UTF-8">
            <title>Cotización - ${nombreEmpresa}</title>
            <script src="https://cdnjs.cloudflare.com/ajax/libs/html2pdf.js/0.10.1/html2pdf.bundle.min.js"></script>
            <style>
                /* Estilos puros e independientes de tu CSS principal */
                body {
                    margin: 0;
                    padding: 0;
                    background-color: #ffffff;
                    font-family: Arial, sans-serif;
                    color: #111827;
                }
                .invoice-box {
                    max-width: 800px;
                    margin: auto;
                    padding: 40px;
                    box-sizing: border-box;
                    background: #ffffff;
                }
                .header-table {
                    width: 100%;
                    border-collapse: collapse;
                    border-bottom: 2px solid #e5e7eb;
                    padding-bottom: 20px;
                    margin-bottom: 30px;
                }
                .description-box {
                    background-color: #f9fafb;
                    border-left: 4px solid #6366f1;
                    padding: 20px;
                    border-radius: 8px;
                    margin-bottom: 35px;
                    text-align: left;
                }
                .price-box {
                    border: 1px solid #e5e7eb;
                    border-radius: 12px;
                    padding: 35px;
                    text-align: center;
                    background-color: #f3f4f6;
                    margin-bottom: 40px;
                }
                .footer-box {
                    margin-top: 100px;
                    text-align: center;
                    border-top: 1px solid #e5e7eb;
                    padding-top: 20px;
                    font-size: 11px;
                    color: #9ca3af;
                }
            </style>
        </head>
        <body>
            <div class="invoice-box" id="contenedor-imprimir">
                <table class="header-table">
                    <tr>
                        <td style="vertical-align: top; text-align: left;">
                            <h1 style="font-size: 28px; margin: 0; font-weight: bold; color: #6366f1;">${nombreEmpresa}</h1>
                            <p style="font-size: 13px; color: #6b7280; margin: 5px 0 0 0;">Documento Oficial de Cotización</p>
                        </td>
                        <td style="text-align: right; vertical-align: top;">
                            <p style="font-size: 11px; color: #6b7280; margin: 0; text-transform: uppercase;">Fecha de Emisión</p>
                            <p style="font-size: 14px; font-weight: bold; margin: 4px 0 0 0; color: #111827;">${fechaActual}</p>
                        </td>
                    </tr>
                </table>

                <div class="description-box">
                    <h3 style="margin: 0 0 8px 0; font-size: 12px; text-transform: uppercase; color: #4b5563; font-weight: bold;">Descripción del Proyecto</h3>
                    <p style="margin: 0; font-size: 13px; color: #4b5563; line-height: 1.5;">
                        Agradecemos la oportunidad de cotizar con ustedes. A continuación, se presenta el presupuesto formal estimado para el desarrollo y ejecución del proyecto de decoración y diseño solicitado. Este presupuesto contempla materiales de alta calidad y mano de obra especializada.
                    </p>
                </div>

                <div class="price-box">
                    <span style="font-size: 12px; font-weight: bold; color: #6b7280; text-transform: uppercase; display: block; margin-bottom: 5px;">Inversión Total Estimada</span>
                    <div style="font-size: 42px; font-weight: bold; color: #111827; margin: 10px 0;">
                        ${precioFinal}
                    </div>
                    <p style="font-size: 11px; color: #9ca3af; margin: 0;">* Los precios expresados están sujetos a cambios según modificaciones de diseño.</p>
                </div>

                <div class="footer-box">
                    Gracias por tu confianza en ${nombreEmpresa}. Generado de forma segura por NEXI App.
                </div>
            </div>

            <script>
                // Ejecutamos la descarga una vez que todo el DOM de esta ventana se haya estructurado
                window.onload = function() {
                    const elemento = document.getElementById("contenedor-imprimir");
                    const opciones = {
                        margin:       10,
                        filename:     "Cotizacion_${nombreEmpresa.replace(/\s+/g, '_')}.pdf",
                        image:        { type: 'jpeg', quality: 0.98 },
                        html2canvas:  { scale: 2, useCORS: true, logging: false },
                        jsPDF:        { unit: 'mm', format: 'letter', orientation: 'portrait' }
                    };
                    
                    // Renderizar, guardar y cerrar automáticamente la pestaña al terminar
                    html2pdf().set(opciones).from(elemento).save().then(() => {
                        window.close();
                    }).catch(err => {
                        console.error(err);
                        window.close();
                    });
                };
            <\/script>
        </body>
        </html>
    `);
    
    ventanaPDF.document.close();

    // 4. Cerrar el modal de carga en la ventana principal tras iniciar la exportación externa
    setTimeout(() => {
        Swal.fire({
            icon: 'success',
            title: '¡Procesado!',
            text: 'Tu documento se ha enviado a la cola de descargas.',
            timer: 2000,
            showConfirmButton: false
        });
    }, 1000);
}

