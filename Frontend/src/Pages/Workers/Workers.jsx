import React, { useEffect, useState } from "react";

const Workers = () => {
  const [workers, setWorkers] = useState([]);
  const [formData, setFormData] = useState({
    first_name: "",
    last_name: "",
    date_of_birth: "",
    start_date: "",
    position: "",
    email: "",
    phone: "",
    status: "Active",
  });
  const [editingId, setEditingId] = useState(null);

  // Fetch all workers from the server
  const fetchWorkers = async () => {
    try {
      const response = await fetch("http://localhost:8000/Backend/api/workers.php?action=fetch");
      if (!response.ok) throw new Error("Failed to fetch workers");
      const data = await response.json();
      setWorkers(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchWorkers();
  }, []);

  // Update form data on input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  // Submit form for adding or updating worker
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Determine action URL: add or update
    const url = "http://localhost:8000/Backend/api/workers.php?action=" + (editingId ? "update" : "add");

    // Prepare data as URL encoded string
    const params = new URLSearchParams({ ...formData });
    if (editingId) params.append("worker_id", editingId);

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: params.toString(),
      });
      if (!response.ok) throw new Error("Failed to add/update worker");

      // Refresh workers list and reset form
      fetchWorkers();
      setFormData({
        first_name: "",
        last_name: "",
        date_of_birth: "",
        start_date: "",
        position: "",
        email: "",
        phone: "",
        status: "Active",
      });
      setEditingId(null);
    } catch (error) {
      console.error(error);
    }
  };

  // Set form data to selected worker for editing
  const handleEdit = (worker) => {
    setFormData(worker);
    setEditingId(worker.worker_id);
  };

  // Delete worker by id
  const handleDelete = async (id) => {
    try {
      const params = new URLSearchParams({ worker_id: id });
      const response = await fetch("http://localhost:8000/Backend/api/workers.php?action=delete", {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: params.toString(),
      });
      if (!response.ok) throw new Error("Failed to delete worker");
      fetchWorkers();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="workers-page">
      <h1>Workers Management</h1>
      <form className="worker-form" onSubmit={handleSubmit}>
        <div className="form-grid">
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
            required
          />
          <select name="status" value={formData.status} onChange={handleChange}>
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
        <div className="form-actions">
          <button type="submit">{editingId ? "Update Worker" : "Add Worker"}</button>
          {editingId && (
            <button
              type="button"
              onClick={() => {
                setEditingId(null);
                setFormData({
                  first_name: "",
                  last_name: "",
                  date_of_birth: "",
                  start_date: "",
                  position: "",
                  email: "",
                  phone: "",
                  status: "Active",
                });
              }}
            >
              Cancel
            </button>
          )}
        </div>
      </form>

      <table className="workers-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>First Name</th>
            <th>Last Name</th>
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
              <td>{worker.worker_id}</td>
              <td>{worker.first_name}</td>
              <td>{worker.last_name}</td>
              <td>{worker.date_of_birth}</td>
              <td>{worker.start_date}</td>
              <td>{worker.position}</td>
              <td>{worker.email}</td>
              <td>{worker.phone}</td>
              <td>{worker.status}</td>
              <td>
                <button onClick={() => handleEdit(worker)}>Edit</button>
                <button className="delete-btn" onClick={() => handleDelete(worker.worker_id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Workers;
