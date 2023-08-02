import React, { useState } from "react";

export default function Todoedit({ item, handleEdit }) {
  const [editedItem, setEditedItem] = useState(item);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedItem((prevItem) => ({ ...prevItem, [name]: value }));
  };

  const handleSave = () => {
    handleEdit(editedItem);
  };

  return (
    <div>
      <input
        name="name"
        value={editedItem.name}
        className="form-control mb-2"
        type="text"
        onChange={handleChange}
      />
      <input
        name="dueDate"
        value={editedItem.dueDate}
        className="form-control mb-2"
        type="date"
        onChange={handleChange}
      />
      <input
        name="category"
        value={editedItem.category}
        className="form-control mb-2"
        type="text"
        placeholder="Category"
        onChange={handleChange}
      />
      <button className="btn btn-success" onClick={handleSave}>
        Save
      </button>
    </div>
  );
}
