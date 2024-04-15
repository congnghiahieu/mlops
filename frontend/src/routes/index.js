import authed from './authed';
import nonAuthed from './nonAuthed';
import error404 from './404.js';
import { createElement } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

export const router = createBrowserRouter([authed, nonAuthed, error404])

export function Router() {
    return createElement(RouterProvider, { router });
}
