document.addEventListener('DOMContentLoaded', () => {
    const adminForm = document.getElementById('admin-form');
    const adminTable = document.getElementById('admin-table').querySelector('tbody');
  
    const goodsForm = document.getElementById('goods-form');
    const goodsTable = document.getElementById('goods-table').querySelector('tbody');
  
    // Add a new warehouse admin
    adminForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const adminName = document.getElementById('admin-name').value;
      const adminSalary = document.getElementById('admin-salary').value;
  
      const newRow = document.createElement('tr');
      newRow.innerHTML = `
        <td>${adminName}</td>
        <td>${adminSalary}</td>
        <td>
          <button class="edit-btn">Edit</button>
          <button class="delete-btn">Delete</button>
        </td>
      `;
      adminTable.appendChild(newRow);
      adminForm.reset();
    });
  
    // Add a new perishable good
    goodsForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const goodsName = document.getElementById('goods-name').value;
      const goodsType = document.getElementById('goods-type').value;
      const goodsPrice = document.getElementById('goods-price').value;
      const productionDate = document.getElementById('goods-production-date').value;
      const shelfTime = document.getElementById('goods-shelf-time').value;
      const temperature = document.getElementById('goods-temperature').value;
      const batchNumber = document.getElementById('goods-batch').value;
  
      const newRow = document.createElement('tr');
      newRow.innerHTML = `
        <td>${goodsName}</td>
        <td>${goodsType}</td>
        <td>${goodsPrice}</td>
        <td>${productionDate}</td>
        <td>${shelfTime}</td>
        <td>${temperature}</td>
        <td>${batchNumber}</td>
        <td>
          <button class="edit-btn">Edit</button>
          <button class="delete-btn">Delete</button>
        </td>
      `;
      goodsTable.appendChild(newRow);
      goodsForm.reset();
    });
  });
  