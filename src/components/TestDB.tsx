const TestDB = () => {
    const saveData = async () => {
      try {
        const response = await fetch('/api/energy-data', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ userId: 'test-user', usage: 100 }),
        });
        const result = await response.json();
        console.log('Saved data:', result);
      } catch (error) {
        console.error('Error saving data:', error);
      }
    };
  
    return (
      <div>
        <button onClick={saveData}>Save Test Data</button>
      </div>
    );
  };
  
  export default TestDB;