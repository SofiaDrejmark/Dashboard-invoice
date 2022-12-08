import { useAppContext } from "../context/AppContext";
import { Link } from "react-router-dom";
import dayjs from "dayjs";
function Feed() {
  const { tasks, deleteTimelog, projects, invoices, timelogs } =
    useAppContext();

  let projectsLength = 0;
  for (let i = 0; i < projects.length; i++) {
    projectsLength++;
  }

  let tasksLength = 0;
  for (let i = 0; i < tasks.length; i++) {
    tasksLength++;
  }

  let invoicesLength = 0;
  for (let i = 0; i < invoices.length; i++) {
    invoicesLength++;
  }

  const timelog: any = timelogs.find((timelog) => {
    return timelog;
  });

  const pastMonth = dayjs().subtract(30, "days");
  const timelogFilter: any = timelogs.filter((time) =>
    pastMonth.isBefore(time.start, "days")
  );

  //antalet kronor som fakturerats det senate året
  const pastYear: any = dayjs().subtract(12, "months");
  const yearAmount: any = invoices.filter((date) =>
    pastYear.isBefore(date.date, "months")
  );

  let prices: any = yearAmount.map(function (i: any) {
    return i.totalprice;
  });

  let totalSumPrice: number = prices.reduce(function (a: number, b: number) {
    return a + b;
  }, 0);

  return (
    <div className="feedDiv">
      <div className="amountDiv">
        Total amount invoices:{" "}
        <span className="amount">{totalSumPrice} SEK</span>
      </div>

      <ul className="feedUl">
        <Link to="/projectlist">
          <li className="projectsLi">
            <span>{projectsLength}</span>
            <p>Projects</p>
          </li>
        </Link>
        <Link to="tasklist">
          <li className="tasksLi">
            <span>{tasksLength}</span>
            <p>Tasks</p>
          </li>
        </Link>
        <Link to="/invoicelist">
          {" "}
          <li className="invoicesLi">
            <span>{invoicesLength}</span>
            <p>Invoices</p>
          </li>
        </Link>
      </ul>

      <div className="goToInvoiceDiv">
        <Link to="/new">
          <h3>Create new invoice</h3>
        </Link>
      </div>

      <div>
        <ul className="timelogUl">
          Timelogs from latest 30 days
          {timelogFilter.map((filteredTimelog: any) => (
            <li key={filteredTimelog.id}>
              <h3>
                {" "}
                Date:
                <br /> {filteredTimelog.stop}
              </h3>

              <h3>Time: {filteredTimelog.time}</h3>
              <br />
              <h3>Task nr: {filteredTimelog.taskId}</h3>
              <button onClick={() => deleteTimelog(timelog.id)}>Delete</button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default Feed;
