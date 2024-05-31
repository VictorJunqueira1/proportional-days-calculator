document.getElementById('energyForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const energyDays = parseInt(document.getElementById('energyDays').value);
    const energyStartDay = parseInt(document.getElementById('energyStartDay').value);
    const energyEndDay = parseInt(document.getElementById('energyEndDay').value);
    const energyValue = parseFloat(document.getElementById('energyValue').value);

    const tenantDays = energyEndDay - energyStartDay + 1;
    const ownerDays = energyDays - tenantDays;

    const dailyValue = energyValue / energyDays;
    const tenantValue = dailyValue * tenantDays;
    const ownerValue = dailyValue * ownerDays;

    document.getElementById('energyTenantValue').textContent = tenantValue.toFixed(2);
    document.getElementById('energyOwnerValue').textContent = ownerValue.toFixed(2);
});

document.getElementById('waterForm').addEventListener('submit', function (e) {
    e.preventDefault();

    const waterStartDay = parseInt(document.getElementById('waterStartDay').value);
    const waterEndDay = parseInt(document.getElementById('waterEndDay').value);
    const waterValue = parseFloat(document.getElementById('waterValue').value);

    const waterDays = 30; // Dias fixos para a conta de água
    const tenantDays = waterEndDay - waterStartDay + 1;
    const ownerDays = waterDays - tenantDays;

    const dailyValue = waterValue / waterDays;
    const tenantValue = dailyValue * tenantDays;
    const ownerValue = dailyValue * ownerDays;

    document.getElementById('waterTenantValue').textContent = tenantValue.toFixed(2);
    document.getElementById('waterOwnerValue').textContent = ownerValue.toFixed(2);
});