// Formulário de energia
document.getElementById('energyForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const energyDays = parseInt(document.getElementById('totalDaysEnergy').value);
    const energyStartDay = new Date(document.getElementById('startDateEnergy').value);
    const energyEndDay = new Date(document.getElementById('readingDateEnergy').value);
    const energyValue = parseFloat(document.getElementById('totalValueEnergy').value);

    const tenantDays = Math.ceil((energyEndDay - energyStartDay) / (1000 * 60 * 60 * 24)) + 1;
    const dailyValue = energyValue / energyDays;
    const tenantValue = dailyValue * tenantDays;
    const ownerValue = energyValue - tenantValue;

    document.getElementById('energyTenantValue').textContent = tenantValue.toFixed(2);
    document.getElementById('energyOwnerValue').textContent = ownerValue.toFixed(2);
});

// Formulário de água
document.getElementById('waterForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const waterDays = 30; // Dias fixos para a conta de água
    const waterStartDay = new Date(document.getElementById('startDateWater').value);
    const waterEndDay = new Date(document.getElementById('readingDateWater').value);
    const waterValue = parseFloat(document.getElementById('totalValueWater').value);

    const tenantDays = Math.ceil((waterEndDay - waterStartDay) / (1000 * 60 * 60 * 24)) + 1;
    const dailyValue = waterValue / waterDays;
    const tenantValue = dailyValue * tenantDays;
    const ownerValue = waterValue - tenantValue;

    document.getElementById('waterTenantValue').textContent = tenantValue.toFixed(2);
    document.getElementById('waterOwnerValue').textContent = ownerValue.toFixed(2);
});

let campo = document.getElementById('campo');

if (campo) {
    campo.addEventListener("keypress", (event) => {
        event.preventDefault();
    });
}