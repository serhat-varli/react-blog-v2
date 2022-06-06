import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.scss';
import Header from './component/header/header';
import Blog from './page/blog/blog';
import Create from './page/create/create';
import Home from './page/home/home';
import Search from './page/search/search';
import Footer from './component/footer/footer';
import ThemeSelector from './component/ThemeSelector/ThemeSelector';
import { useTheme } from './hooks/useTheme';

export default function App() {
  const { mode } = useTheme();
  return (
    <div className={`App ${mode}`}>
      <BrowserRouter>
        <Header />
        <ThemeSelector />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/create">
            <Create />
          </Route>
          <Route exact path="/blog/:id">
            <Blog />
          </Route>
          <Route exact path="/search">
            <Search />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    </div>
  );
}