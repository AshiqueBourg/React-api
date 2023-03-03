import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchBranches } from './actions';

function App() {
  const dispatch = useDispatch();
  const branches = useSelector(state => state.branches.branches);
  const error = useSelector(state => state.branches.error);

  useEffect(() => {
    dispatch(fetchBranches());
  }, [dispatch]);

  return (
    <div>
      <h1>Company Branch List</h1>
      {error && <p>{error.message}</p>}
      <ul>
        {branches.map(branch => (
          <li key={branch.id}>
            <div>
              <h2>{branch.name}</h2>
              <p>{branch.address1}</p>
              <p>{branch.address2}</p>
              <p>{branch.phone}</p>
              <p>{branch.email}</p>
              <img src={branch.branch_logo} alt={`${branch.name} logo`} />
              <img src={branch.branch_image} alt={`${branch.name} image`} />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default App;
