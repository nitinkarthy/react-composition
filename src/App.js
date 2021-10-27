import { RootComponent as SpecializedRootComponent } from "./Specialized";
import { RootComponent as ComposedRootComponent } from "./Composed";
import { RootComponent as LiftedRootComponent } from "./Lifted";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h2>Specialized</h2>
      <SpecializedRootComponent />
      <h2>Composed</h2>
      <ComposedRootComponent />
      <h2>Lifted</h2>
      <LiftedRootComponent />
    </div>
  );
}
