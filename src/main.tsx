import React from 'react';
import ReactDOM from 'react-dom/client';
import './main.css';
import { Layout } from './layouts/Layout.tsx';
import { Index } from '@/pages/Index.tsx';
import './core/i18n.ts';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<Layout>
			<Index />
		</Layout>
	</React.StrictMode>
);
