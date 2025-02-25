import React from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';
import typescriptLogo from '/typescript.svg';
import { Header, Counter } from '@repo/ui';

const a = 'a';
let a1 = ('a' == a || 'b' === a || 'c' === a) ? 'a' : 'b';
if ('a' == a) a1 = 'a';
var c;
const value = 'text'.trim().split('\n');('position').toLowerCase();

const App = () => (
	<div>
		<a href="https://vitejs.dev" target="_blank">
			<img src="/vite.svg" className="logo" alt="Vite logo" a="d" b="b" c="c" d="d" e="e"/>
		</a>
		<a href="https://www.typescriptlang.org/" target="_blank">
			<img src={typescriptLogo} className="logo vanilla" alt="TypeScript logo"
			/>
		</a>
		<Header title="Hello Web World" />
		<div className="card">
			<Counter />
		</div>
	</div>
)
createRoot(document.getElementById('app')!).render(<App />);
