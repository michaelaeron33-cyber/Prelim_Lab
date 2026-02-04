import React, { useState, useEffect } from 'react';
import { FaEnvelope, FaPhone, FaTrash, FaEdit, FaPlus, FaSortAlphaDown, FaSortAlphaUp } from 'react-icons/fa';

const Students = () => {
  const [students, setStudents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');
  const [newStudent, setNewStudent] = useState({ name: '', email: '', phone: '' });
  const [formError, setFormError] = useState('');
  const [sortAsc, setSortAsc] = useState(true);

  useEffect(() => {
    fetchStudents();
  }, []);

  const fetchStudents = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await fetch('https://jsonplaceholder.typicode.com/users');
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const data = await response.json();
      setStudents(
        data.map(user => ({
          id: user.id,
          name: user.name,
          email: user.email,
          phone: user.phone,
        }))
      );
    } catch (err) {
      setError(err.message || 'Failed to fetch student data.');
    } finally {
      setLoading(false);
    }
  };

  const handleDeleteStudent = (id) => {
    if (window.confirm('Are you sure you want to delete this student?')) {
      setStudents(prev => prev.filter(student => student.id !== id));
    }
  };

  const handleAddStudent = () => {
    setFormError('');
    if (!newStudent.name || !newStudent.email || !newStudent.phone) {
      return setFormError('All fields are required!');
    }
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(newStudent.email)) {
      return setFormError('Please enter a valid email address.');
    }

    setStudents(prev => [
      ...prev,
      { id: Date.now(), ...newStudent }
    ]);
    setNewStudent({ name: '', email: '', phone: '' });
  };

  const handleSort = () => {
    const sorted = [...students].sort((a, b) => {
      if (a.name < b.name) return sortAsc ? -1 : 1;
      if (a.name > b.name) return sortAsc ? 1 : -1;
      return 0;
    });
    setStudents(sorted);
    setSortAsc(!sortAsc);
  };

  const filteredStudents = students.filter(s =>
    s.name.toLowerCase().includes(search.toLowerCase()) ||
    s.email.toLowerCase().includes(search.toLowerCase())
  );

  /* ================= STYLES ================= */
  const styles = {
    page: { minHeight: '100vh', padding: '3rem 6%', background: '#f8fafc', fontFamily: 'Inter, system-ui, sans-serif' },
    header: { display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '2rem', flexWrap: 'wrap', gap: '1rem' },
    title: { fontSize: '1.6rem', fontWeight: 600, color: '#0f172a' }, // smaller & lighter
    subtitle: { fontSize: '0.95rem', color: '#475569', marginTop: '0.25rem' },
    input: { padding: '0.55rem 0.9rem', borderRadius: '8px', border: '1px solid #c7d2fe', marginRight: '0.5rem', minWidth: '180px' },
    button: { padding: '0.55rem 1rem', borderRadius: '999px', border: 'none', background: '#6366f1', color: '#fff', cursor: 'pointer', transition: 'transform 0.2s, box-shadow 0.2s' },
    buttonHover: { transform: 'scale(1.05)', boxShadow: '0 5px 15px rgba(99,102,241,0.35)' },
    list: { display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(280px, 1fr))', gap: '1.5rem' },
    card: { display: 'flex', flexDirection: 'column', gap: '1rem', background: 'rgba(255,255,255,0.8)', backdropFilter: 'blur(12px)', padding: '1.5rem', borderRadius: '20px', boxShadow: '0 15px 40px rgba(0,0,0,0.1)', transition: 'transform 0.2s, box-shadow 0.2s' },
    cardHover: { transform: 'translateY(-5px)', boxShadow: '0 25px 60px rgba(0,0,0,0.18)' },
    cardLeft: { display: 'flex', alignItems: 'center', gap: '1rem' },
    avatar: { width: '56px', height: '56px', borderRadius: '50%', background: '#6366f1', display: 'grid', placeItems: 'center', fontSize: '1.4rem', fontWeight: 700, color: '#fff', flexShrink: 0 },
    info: { display: 'flex', flexDirection: 'column', gap: '0.25rem' },
    name: { fontSize: '1.05rem', fontWeight: 500, color: '#0f172a' },
    detail: { fontSize: '0.9rem', color: '#475569', display: 'flex', alignItems: 'center', gap: '0.4rem' },
    deleteBtn: { background: 'transparent', border: 'none', color: '#f87171', fontSize: '1.2rem', cursor: 'pointer', transition: 'transform 0.2s' },
    editBtn: { background: 'transparent', border: 'none', color: '#6366f1', fontSize: '1.2rem', cursor: 'pointer', transition: 'transform 0.2s' },
    addForm: { display: 'flex', gap: '0.5rem', marginBottom: '1.5rem', flexWrap: 'wrap' },
  };

  return (
    <div style={styles.page}>
      {/* HEADER */}
      <div style={styles.header}>
        <div>
          <p style={styles.subtitle}>Explore portfolios from students across different fields</p>
        </div>

        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexWrap: 'wrap' }}>
          <input
            style={styles.input}
            type="text"
            fontSize='1.5rem'
            placeholder="Search students..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            onKeyDown={e => e.key === 'Enter' && handleSort()}
          />
          <button style={styles.button} onClick={handleSort}>
            {sortAsc ? <FaSortAlphaDown /> : <FaSortAlphaUp />} Sort
          </button>
          <button style={styles.button} onClick={fetchStudents}>Refresh</button>
        </div>
      </div>

      {/* ADD STUDENT */}
      <div style={styles.addForm}>
        <input
          style={styles.input}
          placeholder="Name"
          value={newStudent.name}
          onChange={e => setNewStudent({ ...newStudent, name: e.target.value })}
        />
        <input
          style={styles.input}
          placeholder="Email"
          value={newStudent.email}
          onChange={e => setNewStudent({ ...newStudent, email: e.target.value })}
        />
        <input
          style={styles.input}
          placeholder="Phone"
          value={newStudent.phone}
          onChange={e => setNewStudent({ ...newStudent, phone: e.target.value })}
        />
        <button style={styles.button} onClick={handleAddStudent}><FaPlus /> Add</button>
      </div>
      {formError && <div style={{ color: '#ef4444', marginBottom: '1rem', fontSize: '0.9rem' }}>{formError}</div>}

      {/* STATES */}
      {loading && <div>Loading student data...</div>}
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {!loading && !error && filteredStudents.length === 0 && <div>No students found.</div>}

      {/* STUDENT CARDS */}
      {!loading && !error && filteredStudents.length > 0 && (
        <div style={styles.list}>
          {filteredStudents.map(student => (
            <div key={student.id} style={styles.card} className="student-card">
              <div style={styles.cardLeft}>
                <div style={styles.avatar}>{student.name.charAt(0)}</div>
                <div style={styles.info}>
                  <span style={styles.name}>{student.name}</span>
                  <span style={styles.detail}><FaEnvelope /> {student.email}</span>
                  <span style={styles.detail}><FaPhone /> {student.phone}</span>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <button style={styles.editBtn} title="Edit"><FaEdit /></button>
                <button style={styles.deleteBtn} onClick={() => handleDeleteStudent(student.id)} title="Remove student"><FaTrash /></button>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Students;
