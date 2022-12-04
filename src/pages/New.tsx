/*import { useAppContext } from "../context/AppContext";
import { useParams, Link } from "react-router-dom";
import dayjs from "dayjs"
import React, { useEffect, useState } from "react";
import axios from "axios";

function New() {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const { tasks, projects, timelogs } = useAppContext();
  const [selectedTask, setSelectedTask] = useState<any>();
  const [price, setPrice] = useState<number>(0);
  const [customer, setCustomer] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<number>(0)
  const baseURL = "http://localhost:3000";

  const params: any = useParams();
  const task: any = tasks.find((task) => {
    return task
  });
  const project: any = projects.find((project) => {
    return project
  });


  //INTERFACE
  interface Invoice {
    id: number;
    taskId: number;
    status: string;
    customer: string;
    daysLeft: number;
    price: number;
    timelogId: number;
  }
  interface ContextInterface {
    invoices: Invoice[];
    addInvoice: (invoice: Invoice) => void;
  }

  async function addInvoice(invoice: Invoice) {
    await axios.post(`${baseURL}/invoices`, {
      taskId: selectedTask,
      status: "unpaid",
      customer: customer,
      daysLeft: 30,
      price: price,
      totalPrice: totalPrice,
      timelogId: selectedTime
    });
    getInvoices();
  }

  async function patchInvoice(id: number) {
    await axios.patch(`http://localhost:3000/invoices/${id}`, {
      status: status
    });
    getInvoices();
  }

  async function getInvoices() {
    await axios
      .get(`${baseURL}/invoices`)
      .then((response: any) => {
        setInvoices(response.data);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getInvoices();
  }, []);

  async function deleteInvoice(id: number) {
    const invoice: any = invoices.find((invoice) => {
        return !invoice.id
      });
    await axios.delete(`http://localhost:3000/invoices/${invoice.id}`);
    getInvoices();
  }

  const handleDelete = (e: any) => {
    e.preventDefault()
    deleteInvoice(e.target.value)
  }







  function patch(e: any) {
    patchInvoice(e.target.value);
  }

 

  let mapedTime: number[] = timelogs.map(({ time }) => time);

  const timelog: any = timelogs.find((timelog) => {
   return timelog
  }); 




//dayjs().minute()


let hours: number = 0;

const convert = () =>{
hours = Math.floor(selectedTime / 60 / 60)
}
convert()



const [totalPrice, setTotalPrice] = useState<number>(0)

const priceFunc = () => {
let hourPrice: number = Math.floor(price*hours)
setTotalPrice(hourPrice)
}

// ATT GÖRA ÄR TÖMMA SETTOTALPRICE EFTER 


useEffect(() => {
  priceFunc() 
}, [])


console.log(hours)
console.log(selectedTime)
console.log(totalPrice)

function handleSubmit(e: any) {
  e.preventDefault();
  setCustomer("");
  setPrice(0);
}

function add(e: any) {
  priceFunc()
  addInvoice(e.target.value);
}

  return (
    <div>
      <p>{project.project}</p>
      <br />
      <br />
      <div className="bodyDiv">
        <div className="formDiv">
          <form onSubmit={handleSubmit}>
            <select
              name="selectedTime"
              onChange={(e: any) => {setSelectedTime(e.target.value)}}
              required
              id="selectedTime"
              value={selectedTime}
            >
              <option value="timelogs">--Please choose timelog--</option>
              {timelogs.map((timelog) => (
                <option value={timelog.time}>Timelog: {timelog.id} from task:{timelog.taskId} time:{timelog.time}</option>
              ))} 
            </select>
            <p>Timelog Id: {selectedTime}</p>
            <p>Time: {timelog.time}</p>
            <br />
            <label>Customer Name: </label>
            <br />
            <input
              type="text"
              onChange={({target}) => {setCustomer(target.value)}}
              value={customer}
              name="text"
            />
            <br />
            <label>Price/ hour: </label>
            <br />
            <input
              type="number"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {setPrice(parseInt(e.target.value))}}
              value={price}
              name="text"
            />
            <br />
            <button onClick={add}>Add Invoice</button>
          </form>
        </div>
        <div>
          {invoices.map((invoice) => (
            <div>
            <p>
              Customer Name: {invoice.customer}
              <br />
              Total Price: {invoice.price} SEK <br /> Status: {invoice.status}{" "}
              <br />
            </p>
            <button onClick={handleDelete}>Delete Invioce</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default New;
  */
import { useAppContext } from "../context/AppContext";
import { useParams, Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import axios from "axios";

function New() {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const { tasks, projects, timelogs, deleteInvoice } = useAppContext();
  const [selectedTask, setSelectedTask] = useState<any>();
  const [price, setPrice] = useState<number>(0);
  const [customer, setCustomer] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<number>(0);
  const baseURL = "http://localhost:3000";


  const task: any = tasks.find((task) => {
    return task;
  });
  const project: any = projects.find((project) => {
    return project;
  });

  //INTERFACE
  interface Invoice {
    id: number;
    taskId: number;
    status: string;
    customer: string;
    daysLeft: number;
    price: number;
    timelogId: number;
    totalprice: number;
  }
  interface ContextInterface {
    invoices: Invoice[];
    addInvoice: (invoice: Invoice) => void;
  }

  async function addInvoice(invoice: Invoice) {
    await axios.post(`${baseURL}/invoices`, {
      taskId: selectedTask,
      status: "unpaid",
      customer: customer,
      daysLeft: 30,
      price: price,
      totalprice: totalPrice,
      timelogId: timelog.id,
    });
    getInvoices();
  }

  async function getInvoices() {
    await axios
      .get(`${baseURL}/invoices`)
      .then((response: any) => {
        setInvoices(response.data);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getInvoices();
  }, []);

  const timelog: any = timelogs.find((timelog) => {
    return timelog;
  });

  let hours: number = 0;

  const convert = () => {
    hours = Math.floor(selectedTime / 60 / 60);
  };
  convert();

  const [totalPrice, setTotalPrice] = useState<number>(0);

  const priceFunc = () => {
    let hourPrice: number = Math.floor(price * hours * 10);
    setTotalPrice(hourPrice);
  };

  useEffect(() => {
    priceFunc();
  }, []);

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setPrice(parseInt(e.target.value));
    priceFunc();
  };



  console.log(hours);
  console.log(timelog.id);
  console.log(totalPrice);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setCustomer("");
    setPrice(0);
  }

  function handleAdd(e: any) {
    addInvoice(e.target.value);
  }


  const sort = (project: any) => {
    const sortResult: any = tasks.filter(
      (task: any) => task.projectId === project.id
    );
    return sortResult.length;
  };

  return (
    <div>
      <br />
      <br />
      <div className="bodyDiv">
        <div className="formDiv">
          <form onSubmit={handleSubmit}>
            <select
              name="selectedTime"
              onChange={(e: any) => {
                setSelectedTime(e.target.value);
              }}
              required
              id="selectedTime"
              value={selectedTime}
            >
              <option value="timelogs">--Please choose timelog--</option>
              {timelogs.map((timelog) => (
                <option value={timelog.id}>
                  Timelog: {timelog.id} from task:{timelog.taskId} time:
                  {timelog.time}
                </option>
              ))}
            </select>
            <br />
            <label>Customer Name: </label>
            <br />
            <input
              type="text"
              onChange={({ target }) => {
                setCustomer(target.value);
              }}
              value={customer}
              name="text"
            />
            <br />
            <label>Price/ hour: </label>
            <br />
            <input type="number" onChange={handleOnChange} value={price} />
            <br />
            <button type="submit" onClick={handleAdd}>
              Add Invoice
            </button>
          </form>
        </div>
        <div>
          {invoices.map((invoice) => (
            <div>
              <p>
                Customer Name: {invoice.customer}
                <br />
                Total Price: {invoice.totalprice} SEK <br /> Status:{" "}
                {invoice.status} <br />
              </p>
              <button onClick={() => deleteInvoice(invoice.id)}>
                Delete Invoice
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default New;
/* 
mport { useAppContext } from "../context/AppContext";
import { useParams, Link } from "react-router-dom";
import dayjs from "dayjs";
import React, { ChangeEventHandler, useEffect, useState } from "react";
import axios from "axios";

function New() {
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const { tasks, projects, timelogs, deleteInvoice } = useAppContext();
  const [selectedTask, setSelectedTask] = useState<any>();
  const [price, setPrice] = useState<number>(0);
  const [customer, setCustomer] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<number>(0);
  const baseURL = "http://localhost:3000";

  const params: any = useParams();
  const task: any = tasks.find((task) => {
    return task;
  });
  const project: any = projects.find((project) => {
    return project;
  });

  //INTERFACE
  interface Invoice {
    id: number;
    taskId: number;
    status: string;
    customer: string;
    daysLeft: number;
    price: number;
    timelogId: number;
    totalprice: number;
  }
  interface ContextInterface {
    invoices: Invoice[];
    addInvoice: (invoice: Invoice) => void;
  }

  async function addInvoice(invoice: Invoice) {
    await axios.post(`${baseURL}/invoices`, {
      taskId: selectedTask,
      status: "unpaid",
      customer: customer,
      daysLeft: 30,
      price: price,
      totalprice: totalPrice,
      timelogId: timelog.id,
    });
    getInvoices();
  }

  async function getInvoices() {
    await axios
      .get(`${baseURL}/invoices`)
      .then((response: any) => {
        setInvoices(response.data);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getInvoices();
  }, []);

  const timelog: any = timelogs.find((timelog) => {
    return timelog;
  });

  let hours: number = 0;

  const convert = () => {
    hours = Math.floor(selectedTime / 60 / 60);
  };
  convert();

  const [totalPrice, setTotalPrice] = useState<number>(0);

  const priceFunc = () => {
    let hourPrice: number = Math.floor(price * hours * 10);
    setTotalPrice(hourPrice);
  };

  const handleOnChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setPrice(parseInt(e.target.value));
    priceFunc();
  };

  useEffect(() => {
    priceFunc();
  }, []);

  console.log(hours);
  console.log(timelog.id);
  console.log(totalPrice);

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setCustomer("");
    setPrice(0);
  }

  function handleAdd(e: any) {
    addInvoice(e.target.value);
  }

  return (
    <div>
      <br />
      <br />
      <div className="bodyDiv">
        <div className="formDiv">
          <form onSubmit={handleSubmit}>
          <select
              name="selectedTime"
              onChange={(e: any) => {
                setSelectedTime(e.target.value);
              }}
              required
              id="selectedTime"
              value={selectedTime}
            >
              <option value="timelogs">--Please choose timelog--</option>
              {timelogs.map((timelog) => (
                <option value={timelog.id}>
                  Timelog: {timelog.id} from task:{timelog.taskId} time:
                  {timelog.time}
                </option>
              ))}
            </select>
            <p>Timelog Id: {selectedTime}</p>
            <p>Time: {timelog.time}</p>
            <br />
            <label>Customer Name: </label>
            <br />
            <input
              type="text"
              onChange={({ target }) => {
                setCustomer(target.value);
              }}
              value={customer}
              name="text"
            />
            <br />
            <label>Price/ hour: </label>
            <br />
            <input
              type="number"
              onChange={handleOnChange}
              value={price}
             
            />
            <br />
            <button type="submit" onClick={handleAdd}>
              Add Invoice
            </button>
          </form>
        </div>
        <div>
          {invoices.map((invoice) => (
            <div>
              <p>
                Customer Name: {invoice.customer}
                <br />
                Total Price: {invoice.totalprice} SEK <br /> Status:{" "}
                {invoice.status} <br />
              </p>
              <button onClick={() => deleteInvoice(invoice.id)}>
                Delete Invoice
              </button>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}

export default New;





import { useAppContext } from "../context/AppContext";
import { useParams, Link } from "react-router-dom";
import dayjs from "dayjs";
import React, { useEffect, useState } from "react";
import axios from "axios";

function New() {
  const { tasks, projects, timelogs } = useAppContext();
  const [invoices, setInvoices] = useState<Invoice[]>([]);
  const [totalPrice, setTotalPrice] = useState<number>(0);
  const [selectedTask, setSelectedTask] = useState<any>();
  const [price, setPrice] = useState<number>(0);
  const [daysLeft, setDaysLeft] = useState<number>(30)
  const [customer, setCustomer] = useState<string>("");
  const [status, setStatus] = useState<string>("");
  const [selectedTime, setSelectedTime] = useState<number>(0);
  const baseURL = "http://localhost:3000";

  const params: any = useParams();
  const task: any = tasks.find((task) => {
    return task;
  });
  const project: any = projects.find((project) => {
    return project;
  });

  //INTERFACE
  interface Invoice {
    id: number;
    taskId: number;
    status: string;
    customer: string;
    daysLeft: number;
    timelogId: number;
    totalprice: number;
    date: any;
    hourPrice: number;
  }
  interface ContextInterface {
    invoices: Invoice[];
    addInvoice: (invoice: Invoice) => void;
  }

  async function addInvoice(invoice: Invoice) {
    await axios.post(`${baseURL}/invoices`, {
      taskId: selectedTask,
      status: status,
      customer: customer,
      daysLeft: daysLeft,
      totalprice: totalPrice,
      timelogId: selectedTime,
      hourPrice: price,
      date: Date()
    });
    getInvoices();
  }
  
  async function getInvoices() {
    await axios
      .get(`${baseURL}/invoices`)
      .then((response: any) => {
        setInvoices(response.data);
      })
      .catch((err) => console.log(err));
  }

  useEffect(() => {
    getInvoices();
  }, []);

  async function deleteInvoice(id: number) {
    const invoice: any = invoices.find((invoice) => {
      return !invoice.id;
    });
    await axios.delete(`http://localhost:3000/invoices/${invoice.id}`);
    getInvoices();
  }

  const handleDelete = (e: any) => {
    e.preventDefault();
    deleteInvoice(e.target.value);
  };
  
  function patch(e: any) {
    patchInvoice(e.target.value);
  }

 

  let mapedTime: number[] = timelogs.map(({ time }) => time);

  const timelog: any = timelogs.find((timelog) => {
    return timelog;
  });

  //dayjs().minute()

  let hours: number = 0;

  const convert = () => {
    hours = Math.floor(selectedTime / 60 / 60);
  };
  convert();

  const priceFunc = () => {

    let hourPrice: any = Math.floor(price * hours);
    setTotalPrice(hourPrice);
  };

  type OnChangeEvent = React.ChangeEvent<HTMLInputElement>
const handlePrice: any = (e: OnChangeEvent) => {
setPrice(e.target.value as any)
}

  useEffect(() => {
    priceFunc();
  }, []);

 const savePrice = (e: any) => {
    e.preventDefault();
    priceFunc();
  };
console.log(price)
  function handleSubmit(e: any) {
   
    e.preventDefault();
    priceFunc()
    setCustomer("");
    setStatus("");
    setPrice(0);
    console.log(hours);
    console.log(selectedTime);
    console.log(totalPrice);
    addInvoice(e.target.value);
  }

  function add(e: any) {
    // priceFunc()
    addInvoice(e.target.value);
  }



  useEffect(() => {
    let interval: any = null; 
    if (daysLeft > 0){
    interval = setInterval(() => {
      setDaysLeft(-1)
    }, 86400000)} else if (daysLeft < 1){
    return () => clearInterval(interval)}
  }, [daysLeft]);



  return (
    <div>
      <br />
      <br />
      <div className="bodyDiv">
        <div className="formDiv">
          <form onSubmit={handleSubmit}>
            <select
              name="selectedTime"
              onChange={(e: any) => {
                setSelectedTime(e.target.value);
              }}
              required
              id="selectedTime"
              value={selectedTime}
            >
              <option value="timelogs">--Please choose timelog--</option>
              {timelogs.map((timelog) => (
                <option value={timelog.id}>
                  Timelog: {timelog.id} from task:{timelog.taskId} time:
                  {timelog.time}
                </option>
              ))}
            </select>
            <br />
            <label>Customer Name: </label>
            <br />
            <input
              type="text"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setCustomer(e.target.value);
              }}
              value={customer}
              name="text"
            />{" "}
            <br />
            <label>Status: unpaid, paid, delayed</label>
            <input
              type="text"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setStatus(e.target.value);
              }}
              value={status}
              name="text"
            />
            <br />
            <label>Price/ hour: </label>
            <br />
            <input
              type="number"
              onChange={() => {handlePrice}}
              value={price}
              
            />
            <br />
            <br />
            <br />
            <button onClick={handleSubmit}>Add Invoice</button>
          </form><br /><br />
        </div>
        <div>
          {invoices.map((invoice) => (
            <div>
              <p>
                Customer Name: {invoice.customer}
                <br />
                Status:{" "}
                {invoice.status} <br />
               Price/ Hour: {invoice.hourPrice} SEK <br />
               Total Price: {invoice.totalprice}
               <input type="number" value={totalPrice} onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setTotalPrice(parseInt(e.target.value));
              }}/><button>patch</button>
               <br /> 
              </p>
              <button onClick={handleDelete}>Delete Invioce</button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default New;
*/
