import { Switch, Route } from "react-router-dom";
import { Home, Bolos, Carnes, Molhos } from "pages";

const Routes = () => {
  return (
    <Switch>
      <Route path="/Bolos" exact component={Bolos} />
      <Route path="/Carnes" exact component={Carnes} />
      <Route path="/Molhos" exact component={Molhos} />
      <Route path="/" exact component={Home} />
    </Switch>
  );
};

export default Routes;