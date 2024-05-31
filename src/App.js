import './App.css';
import Header from './Header';
import Footer from './Footer';
import NewTodo from './NewTodo';
import List from './List';

function App() {
  return (
    <div id="app">
      <Header />
      <div id="content">
        <NewTodo />
        <div id="lists" className="display-flex flex-wrap">
          <List name="Todo" />
          <List name="Doing" />
          <List name="Done" />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
