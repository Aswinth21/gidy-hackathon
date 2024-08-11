import Graph from "../../components/dashboard/Graph";
import Form from "../../components/dashboard/Form";
import Labels from "../../components/dashboard/Labels";
import List from "../../components/dashboard/List";
import '../styles/dashboard.css';

export function Dashboard () {
  return (
    <div className="App">
      <div className="container mx-auto max-w-6xl text-center drop-shadow-lg text-gray-800">
      
        <h1 className="text-4xl py-8 mb-10 bg-slate-800 text-white rounded">Student's dashboard</h1>
      
      {/*grid columns*/}
      <div className="grid md:grid-cols-2 gap-4">
        {/* Chart */}
        <Graph></Graph>
        {/*Form */ }
        <Form></Form>

      </div>
      </div>
    </div>
  );
}

