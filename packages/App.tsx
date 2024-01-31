import MeaninglessButton from './components/MeaninglessButton';

function App() {
  return (
    <>
      <MeaninglessButton onClick={() => console.log('primary')}>
        Primary
      </MeaninglessButton>
      <MeaninglessButton variant="danger">Danger</MeaninglessButton>
    </>
  );
}

export default App;
