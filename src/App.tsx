import useAuthCheck from "./hooks/useAuthCheck";
import MainLayout from "./layouts/MainLayout";

function App() {
  const authChecked = useAuthCheck();

  return !authChecked ? (
    <div>Checking authicated</div>
  ) : (
    <div>
      <MainLayout />
    </div>
  );
}

export default App;
