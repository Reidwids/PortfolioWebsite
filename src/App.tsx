import { Route, Routes } from 'react-router-dom';
import Home from './components/Home/Home';
import About from './components/About/About';
// import Contact from './components/Contact/Contact';
import Layout from './components/Layout/Layout';
import './App.scss';
import Contact from './components/Contact/Contact';
import Skills from './components/Skills/Skills';
import Projects from './components/Projects/Projects';

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<Layout />}>
					<Route path="" element={<Home />} />
					<Route path="about" element={<About />} />
					<Route path="contact" element={<Contact />} />
					<Route path="skills" element={<Skills />} />
					<Route path="projects" element={<Projects />} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
