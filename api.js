/**
 * NEXI Balloons - Módulo de Conexión HTTP (API Remota)
 * Maneja las peticiones hacia Google Apps Script (NEXICloud)
 */

async function apiFetch(url, payload) {
    if (!url) {
        throw new Error("La URL de la API de NEXICloud no está configurada.");
    }

    try {
        // Configuramos la petición POST con los datos en formato URL Encoded
        // para máxima compatibilidad con Google Apps Script
        const formData = new URLSearchParams();
        for (const key in payload) {
            formData.append(key, payload[key]);
        }

        const response = await fetch(url, {
            method: 'POST',
            mode: 'cors',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            },
            body: formData.toString()
        });

        if (!response.ok) {
            throw new Error(`Error en el servidor remoto: ${response.status} ${response.statusText}`);
        }

        const data = await response.json();
        return data;
        
    } catch (error) {
        console.error("Error en la capa de comunicación apiFetch:", error);
        throw error;
    }
}
