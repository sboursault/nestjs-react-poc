import React, { useEffect, useState } from 'react';

interface Scenario {
  id: number;
  description: string;
}

const API_URL = 'http://localhost:3000/scenarios';

function App() {
  const [scenarios, setScenarios] = useState<Scenario[]>([]);
  const [description, setDescription] = useState('');
  const [editId, setEditId] = useState<number | null>(null);
  const [editDescription, setEditDescription] = useState('');

  const fetchScenarios = async () => {
    const res = await fetch(API_URL);
    setScenarios(await res.json());
  };

  useEffect(() => {
    fetchScenarios();
  }, []);

  const handleCreate = async (e: React.FormEvent) => {
    e.preventDefault();
    await fetch(API_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ description }),
    });
    setDescription('');
    fetchScenarios();
  };

  const handleEdit = (scenario: Scenario) => {
    setEditId(scenario.id);
    setEditDescription(scenario.description);
  };

  const handleUpdate = async (e: React.FormEvent) => {
    e.preventDefault();
    if (editId === null) return;
    await fetch(`${API_URL}/${editId}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ description: editDescription }),
    });
    setEditId(null);
    setEditDescription('');
    fetchScenarios();
  };

  const handleDelete = async (id: number) => {
    await fetch(`${API_URL}/${id}`, { method: 'DELETE' });
    fetchScenarios();
  };

  return (
    <div className="container mt-5">
      <h1 className="title">Scenario Manager</h1>
      <form onSubmit={handleCreate} className="box mb-5">
        <div className="field is-grouped">
          <div className="control is-expanded">
            <input
              className="input"
              type="text"
              placeholder="New scenario description"
              value={description}
              onChange={e => setDescription(e.target.value)}
              required
            />
          </div>
          <div className="control">
            <button className="button is-primary" type="submit">Add</button>
          </div>
        </div>
      </form>
      <table className="table is-fullwidth is-striped">
        <thead>
          <tr>
            <th>ID</th>
            <th>Description</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {scenarios.map(scenario => (
            <tr key={scenario.id}>
              <td>{scenario.id}</td>
              <td>
                {editId === scenario.id ? (
                  <form onSubmit={handleUpdate} className="is-flex">
                    <input
                      className="input mr-2"
                      type="text"
                      value={editDescription}
                      onChange={e => setEditDescription(e.target.value)}
                      required
                    />
                    <button className="button is-success mr-2" type="submit">Save</button>
                    <button className="button" type="button" onClick={() => setEditId(null)}>Cancel</button>
                  </form>
                ) : (
                  scenario.description
                )}
              </td>
              <td>
                <button className="button is-small is-info mr-2" onClick={() => handleEdit(scenario)} disabled={editId !== null && editId !== scenario.id}>Edit</button>
                <button className="button is-small is-danger" onClick={() => handleDelete(scenario.id)} disabled={editId !== null}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
