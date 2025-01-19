// Definir las fechas de vencimiento de los pagos
const dueDates = {
    vivienda: '2025-02-04',
    colegio: '2025-03-25',
    internet: '2025-02-05',
    movilidad:'2025-03-02',
};

// Función para mostrar el recordatorio si el pago está cerca
function checkPayments() {
    const today = new Date();
    let reminderMessage = "¡Recuerda realizar tus pagos mensuales!";

    Object.keys(dueDates).forEach(payment => {
        const dueDate = new Date(dueDates[payment]);
        const timeDiff = dueDate - today;

        if (timeDiff <= 3 * 24 * 60 * 60 * 1000 && timeDiff > 0) {
            reminderMessage += `<br><strong>${payment.charAt(0).toUpperCase() + payment.slice(1)}</strong>: Vence en ${Math.ceil(timeDiff / (24 * 60 * 60 * 1000))} días`;
        }
    });

    document.getElementById('reminder').innerHTML = reminderMessage;
}

// Ejecutar la función para mostrar el recordatorio
checkPayments();
