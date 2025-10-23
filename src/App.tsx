import { Calculator } from "./components/Calculator";
import { PaymentContextProvider } from "./contexts/Payment-Context-Provider";

function App() {
  return (
    <PaymentContextProvider>
      <main className="lg:h-screen lg:grid lg:place-content-center">
        <Calculator />
      </main>
    </PaymentContextProvider>
  );
}

export default App;
