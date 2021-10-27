import { RootComponent as SpecializedRootComponent } from "./Specialized";
import { RootComponent as ComposedRootComponent } from "./Composed";
import { RootComponent as LiftedRootComponent } from "./Lifted";
import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <SpecializedRootComponent />
      <ComposedRootComponent />
      <LiftedRootComponent />
    </div>
  );
}
