import Projects from "../components/Projects.jsx";
import Clients from "../components/Clients.jsx";

import AddClientsModal from "../components/AddClientsModal.jsx";

function Home() {
  return (
    <>
      <div className="d-flex gap-3 mb-4">
        <AddClientsModal />
      </div>
      <Projects />
      <hr />
      <Clients />
    </>
  );
}

export default Home;
