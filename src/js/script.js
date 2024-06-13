document.getElementById('energyForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const energyDays = parseInt(document.getElementById('energyDays').value);
    const energyStartDay = new Date(document.getElementById('energyStartDay').value);
    const energyEndDay = new Date(document.getElementById('energyEndDay').value);
    const energyValue = parseFloat(document.getElementById('energyValue').value);

    const tenantDays = Math.ceil((energyEndDay - energyStartDay) / (1000 * 60 * 60 * 24)) + 1;
    const dailyValue = energyValue / energyDays;
    const tenantValue = dailyValue * tenantDays;
    const ownerValue = energyValue - tenantValue;

    document.getElementById('energyTenantValue').textContent = tenantValue.toFixed(2);
    document.getElementById('energyOwnerValue').textContent = ownerValue.toFixed(2);
});

document.getElementById('waterForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const waterDays = 30; // Dias fixos para a conta de água
    const waterStartDay = new Date(document.getElementById('waterStartDay').value);
    const waterEndDay = new Date(document.getElementById('waterEndDay').value);
    const waterValue = parseFloat(document.getElementById('waterValue').value);

    const tenantDays = Math.ceil((waterEndDay - waterStartDay) / (1000 * 60 * 60 * 24)) + 1;
    const dailyValue = waterValue / waterDays;
    const tenantValue = dailyValue * tenantDays;
    const ownerValue = waterValue - tenantValue;

    document.getElementById('waterTenantValue').textContent = tenantValue.toFixed(2);
    document.getElementById('waterOwnerValue').textContent = ownerValue.toFixed(2);
});

let campo = document.getElementById('campo')

campo.addEventListener("keypress", (event) => {
    event.preventDefault()
})