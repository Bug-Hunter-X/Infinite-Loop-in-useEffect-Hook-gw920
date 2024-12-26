```javascript
function MyComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // Correct: runs only once after initial render
    setCount(count + 1);
  }, []); // Empty dependency array

  return <div>Count: {count}</div>;
}
```