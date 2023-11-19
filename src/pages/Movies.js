import { useState } from 'react';
import { toast } from 'react-toastify';

export const Movies = ({ onSubmit }) => {
  const [data, setData] = useState('');

  const handleChange = evt => {
    setData(evt.currentTarget.value);
  };

  const handleSubmit = evt => {
    evt.preventDefault();

    if (data.trim() === '') {
      toast.error('Please enter your search details.');
      return;
    }
    onSubmit(data);
    setData('');
  };

  return (
    <>
      <header className="searchbar">
        <form className="form" onSubmit={handleSubmit}>
          <button type="submit" className="button">
            <span className="button-label">Search</span>
          </button>
          <input
            onChange={handleChange}
            value={data}
            name="data"
            className="input"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    </>
  );
};
