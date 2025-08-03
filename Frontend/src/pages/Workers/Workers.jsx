import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

function Workers() {
  const [workers, setWorkers] = useState([]);
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    date_of_birth: '',
    start_date: '',
    position: '',
    email: '',
    phone: '',
    status: 'Active',
  });

  const [editingId, setEditingId] = useState(null);

  // Fetch all workers
  const fetchWorkers = async () => {
    const response = await fetch('http://localhost:8000/Backend/api/workers.php');
    const data = await response.json();
    setWorkers(data);
  };

  useEffect(() => {
    fetchWorkers();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const action = editingId ? 'update' : 'create';
    const body = JSON.stringify({ ...formData, action, id: editingId });

    await fetch('http://localhost:8000/Backend/api/workers.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body,
    });

    setFormData({
      first_name: '',
      last_name: '',
      date_of_birth: '',
      start_date: '',
      position: '',
      email: '',
      phone: '',
      status: 'Active',
    });

    setEditingId(null);
    fetchWorkers();
  };

  const handleEdit = (worker) => {
    setFormData(worker);
    setEditingId(worker.worker_id);
  };

  const handleDelete = async (id) => {
    await fetch('http://localhost:8000/Backend/api/workers.php', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ action: 'delete', id }),
    });
    fetchWorkers();
  };

  const retiredCount = workers.filter((w) => {
    const birthYear = new Date(w.date_of_birth).getFullYear();
    const currentYear = new Date().getFullYear();
    return currentYear - birthYear >= 65;
  }).length;

  return (
    <StyledWrapper>
      <div className="workers-wrapper">
        <h1>
          Manage <span>Workers</span>
        </h1>

        <div className="workers-wrapper-middle">
          <div className="stats-container">
            <div className="stat-box">
              <h3>Total Workers</h3>
              <p>{workers.length}</p>
            </div>

            <div className="stat-box">
              <h3>Retired Workers</h3>
              <p>{retiredCount}</p>
            </div>
          </div>

          <div className="form-box">
            <form onSubmit={handleSubmit} className="form-grid">
              <input
                name="first_name"
                placeholder="First Name"
                value={formData.first_name}
                onChange={handleChange}
                required
              />
              <input
                name="last_name"
                placeholder="Last Name"
                value={formData.last_name}
                onChange={handleChange}
                required
              />

              <input
                type="date"
                name="date_of_birth"
                value={formData.date_of_birth}
                onChange={handleChange}
                required
              />
              <input
                type="date"
                name="start_date"
                value={formData.start_date}
                onChange={handleChange}
                required
              />

              <input
                name="position"
                placeholder="Position"
                value={formData.position}
                onChange={handleChange}
                required
              />
              <input
                name="email"
                placeholder="Email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                required
              />

              <input
                name="phone"
                placeholder="Phone"
                value={formData.phone}
                onChange={handleChange}
              />
              <select name="status" value={formData.status} onChange={handleChange}>
                <option value="Active">Active</option>
                <option value="Inactive">Inactive</option>
              </select>

              <button type="submit">{editingId ? 'Update' : 'Add'} Worker</button>
            </form>
          </div>
        </div>

        <div className="table-box">
          <table>
            <thead>
              <tr>
                <th>Name</th>
                <th>DOB</th>
                <th>Start Date</th>
                <th>Position</th>
                <th>Email</th>
                <th>Phone</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {workers.map((worker) => (
                <tr key={worker.worker_id}>
                  <td>
                    {worker.first_name} {worker.last_name}
                  </td>
                  <td>{worker.date_of_birth}</td>
                  <td>{worker.start_date}</td>
                  <td>{worker.position}</td>
                  <td>{worker.email}</td>
                  <td>{worker.phone}</td>
                  <td>{worker.status}</td>
                  <td>
                    <button onClick={() => handleEdit(worker)}>Edit</button>
                    <button onClick={() => handleDelete(worker.worker_id)} className="delete-btn">
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.div`
  .workers-wrapper {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    gap: 20px;
    padding: 20px;
    background-color: var(--grayColor);
    color: var(--darkcolor);
    font-family: inherit;
  }

  .workers-wrapper h1 {
    color: var(--primaryColor);
    font-size: 28px;
    text-align: center;
    margin-bottom: 0;
    background-color: var(--lightColor);
    padding: 10px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  h1 span {
    color: var(--darkcolor);
  }

  .workers-wrapper-middle {
    display: flex;
    gap: 20px;
  }

  .stats-container {
    width: 30%;
  }

  .stat-box {
    background-color: var(--lightColor);
    border-left: 5px solid var(--primaryColor);
    padding: 16px;
    border-radius: 8px;
    box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
    margin-bottom: 20px;
  }

  .stat-box h3 {
    margin: 0;
    font-size: 16px;
    color: var(--primaryColor);
  }

  .stat-box p {
    margin: 4px 0 0;
    font-size: 20px;
    font-weight: bold;
  }

  .form-box {
    width: 70%;
    height: 45%;
    background-color: var(--lightColor);
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  }

  .form-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 12px;
  }

  .form-grid input,
  .form-grid select {
    padding: 8px;
    border: 1px solid #ccc;
    border-radius: 6px;
    font-size: 14px;
    width: 100%;
    box-sizing: border-box;
  }

  .form-grid button {
    grid-column: span 2;
    padding: 10px;
    background-color: var(--primaryColor);
    color: var(--lightColor);
    border: none;
    border-radius: 6px;
    font-size: 16px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .form-grid button:hover {
    background-color: var(--hoverColor);
    color: var(--darkcolor);
  }

  .table-box {
    background-color: var(--lightColor);
    border-radius: 8px;
    padding: 16px;
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1);
    overflow-x: auto;
  }

  table {
    width: 100%;
    border-collapse: collapse;
    font-size: 14px;
  }

  th,
  td {
    padding: 10px;
    border-bottom: 1px solid #ddd;
    text-align: left;
  }

  th {
    background-color: var(--primaryColor);
    color: var(--lightColor);
  }

  tr:hover {
    background-color: var(--hoverColor);
  }

  button.delete-btn {
    background-color: #e53935;
    color: white;
    border: none;
    padding: 6px 10px;
    border-radius: 4px;
    cursor: pointer;
    font-size: 13px;
    margin-left: 6px;
  }

  button.delete-btn:hover {
    background-color: #c62828;
  }
`;

export default Workers;
