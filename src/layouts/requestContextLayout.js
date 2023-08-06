import { useEffect, useState } from 'react';
import { getRequests } from '../ApiService';
import { RequestContext } from '../context/requestsContext';
import { Outlet } from 'react-router-dom';


function RequestContextLayout() {
  const [requests, setRequests] = useState([]);

  useEffect(() => {
    getRequests().then((data) => setRequests(data));
  }, [setRequests])

  return (
    <RequestContext.Provider value={{ requests, setRequests }}>
      <Outlet />
    </RequestContext.Provider>
  )
}

export default RequestContextLayout;
