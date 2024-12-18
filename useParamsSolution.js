The solution involves ensuring that the `useParams` hook is called within a component that is rendered by a `<Route>` component.

```javascript
// Correct usage
function MyComponent() {
  const params = useParams();
  // params will be defined here
  return <div>...</div>;
}

function App() {
  return (
    <Routes>
      <Route path="/my-route/:id" element={<MyComponent/>}>
      </Route>
    </Routes>
  );
}
```