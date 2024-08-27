/* prettier-ignore-start */

/* eslint-disable */

// @ts-nocheck

// noinspection JSUnusedGlobalSymbols

// This file is auto-generated by TanStack Router

// Import Routes

import { Route as rootRoute } from './routes/__root'
import { Route as TodoImport } from './routes/todo'
import { Route as NoteImport } from './routes/note'
import { Route as DashbordImport } from './routes/dashbord'
import { Route as AboutImport } from './routes/about'
import { Route as IndexImport } from './routes/index'

// Create/Update Routes

const TodoRoute = TodoImport.update({
  path: '/todo',
  getParentRoute: () => rootRoute,
} as any)

const NoteRoute = NoteImport.update({
  path: '/note',
  getParentRoute: () => rootRoute,
} as any)

const DashbordRoute = DashbordImport.update({
  path: '/dashbord',
  getParentRoute: () => rootRoute,
} as any)

const AboutRoute = AboutImport.update({
  path: '/about',
  getParentRoute: () => rootRoute,
} as any)

const IndexRoute = IndexImport.update({
  path: '/',
  getParentRoute: () => rootRoute,
} as any)

// Populate the FileRoutesByPath interface

declare module '@tanstack/react-router' {
  interface FileRoutesByPath {
    '/': {
      id: '/'
      path: '/'
      fullPath: '/'
      preLoaderRoute: typeof IndexImport
      parentRoute: typeof rootRoute
    }
    '/about': {
      id: '/about'
      path: '/about'
      fullPath: '/about'
      preLoaderRoute: typeof AboutImport
      parentRoute: typeof rootRoute
    }
    '/dashbord': {
      id: '/dashbord'
      path: '/dashbord'
      fullPath: '/dashbord'
      preLoaderRoute: typeof DashbordImport
      parentRoute: typeof rootRoute
    }
    '/note': {
      id: '/note'
      path: '/note'
      fullPath: '/note'
      preLoaderRoute: typeof NoteImport
      parentRoute: typeof rootRoute
    }
    '/todo': {
      id: '/todo'
      path: '/todo'
      fullPath: '/todo'
      preLoaderRoute: typeof TodoImport
      parentRoute: typeof rootRoute
    }
  }
}

// Create and export the route tree

export const routeTree = rootRoute.addChildren({
  IndexRoute,
  AboutRoute,
  DashbordRoute,
  NoteRoute,
  TodoRoute,
})

/* prettier-ignore-end */

/* ROUTE_MANIFEST_START
{
  "routes": {
    "__root__": {
      "filePath": "__root.tsx",
      "children": [
        "/",
        "/about",
        "/dashbord",
        "/note",
        "/todo"
      ]
    },
    "/": {
      "filePath": "index.tsx"
    },
    "/about": {
      "filePath": "about.tsx"
    },
    "/dashbord": {
      "filePath": "dashbord.tsx"
    },
    "/note": {
      "filePath": "note.tsx"
    },
    "/todo": {
      "filePath": "todo.tsx"
    }
  }
}
ROUTE_MANIFEST_END */