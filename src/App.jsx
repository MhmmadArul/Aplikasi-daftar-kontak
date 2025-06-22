import { useState } from "react";
import './App.css'

function App() {
  const [nama, setNama] = useState("");
  const [nomor, setNomor] = useState("");
  const [items, setItems] = useState([]);

  const isReady = nama.trim() !== "" && nomor.trim() !== "";

  // Tambah item baru
  const handleAdd = () => {
    if (!isReady) return;
    setItems((prev) => [...prev, { nama, nomor }]);
    setNama("");
    setNomor("");
  };

  // Hapus satu item berdasarkan index
  const handleDelete = (idx) => {
    setItems((prev) => prev.filter((_, i) => i !== idx));
  };
  return (
    <div className="flex flex-col gap-4 max-w-sm mx-auto p-5 w-xs bg-white rounded-xl">
      <h2 className="text-xl bg-indigo-500 p-3 rounded-xl text-white font-bold" >Daftar Kontak</h2>

      {/* -------- Form -------- */}
      <input
        type="text"
        placeholder="Nama..."
        value={nama}
        onChange={(e) => setNama(e.target.value)}
        className="border-1 border-white border-b-indigo-500 p-2 rounded-lg"
      />
      <input
        type="text"
        placeholder="Nomor..."
        value={nomor}
        onChange={(e) => setNomor(e.target.value)}
        className="border-1 border-white border-b-indigo-500 p-2 rounded-lg"
      />

      <button
        onClick={handleAdd}
        disabled={!isReady}
        className={`rounded-lg p-2 text-white ${isReady ? "bg-indigo-500 hover:bg-indigo-700" : "bg-gray-400 cursor-not-allowed"
          }`}
      >
        Tambah
      </button>

      {/* -------- List -------- */}
      {items.length > 0 && (
        <>
          <ul className="space-y-1 pt-2 border-t border-indigo-500">
            {items.map((item, idx) => (
              <li
                key={idx}
                className="flex justify-between items-center bg-gray-50 rounded-lg p-2"
              >
                <div className="flex justify-between text-black w-xs">
                  <span className="font-semibold">{item.nama}</span>
                  <span className="pr-2 font-semibold">{item.nomor}</span>
                </div>

                {/* tombol hapus 1 item */}
                <button
                  onClick={() => handleDelete(idx)}
                  className="border-l-1 p-1 border-gray-300"
                >
                  ❌
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default App
