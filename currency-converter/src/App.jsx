import CurrencyBox from './components/CurrencyBox'

function App() {

  return (
    <>
      <div className="w-full h-screen bg-gradient-to-b from-sky-500 to-indigo-500 flex items-center justify-center">
        <div className="h-2/5 w-1/3 py-2 rounded-lg bg-white shadow-lg flex flex-col justify-stretch">
          <div className="mx-4 p-2 h-2/3 relative">
            <CurrencyBox text1='From' type="USD"/>
            <CurrencyBox text1='To' type="INR"/>
          </div>
          <div className='w-4/5 m-auto py-3 text-center bg-blue-500 rounded-md font-semibold text-xl text-white hover:bg-blue-600 cursor-pointer'>
            Convert
          </div>
        </div>
      </div>
    </>
  )
}

export default App
