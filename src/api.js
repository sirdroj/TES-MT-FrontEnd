import axios from 'axios';
import useStore from './store';

const BASE_URL = 'http://127.0.0.1:8000';

export const registerfunction = async (userdata) => {

  try {
    const res = await fetch(BASE_URL + '/register/',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userdata)
      }
    );
    const data = await res.json();
    alert("User Created Successfully");
    console.log({ data })

  } catch (error) {
    console.error('Error:', error);
    return (false)
  }
}
export const loginfunction = async (userdata, navigate,setUserName2) => {
  
  try {
    if (localStorage.getItem("refreshToken")) {
      alert("Your last login session is active");
      navigate("/");
      return;
    }

    const res = await fetch(BASE_URL + '/login/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(userdata)
    });

    const data = await res.json();
    console.log({ data });
    alert("Login successful");
    localStorage.setItem("userName", userdata.username);
    setUserName2(userdata.username);
    localStorage.setItem("refreshToken", data.refresh);
    localStorage.setItem("accessToken", data.access);
    navigate("/");
  } catch (error) {
    console.error('Error:', error);
    return false;
  }
};
export const addData = async (formData) => {
  try {
    // if (localStorage.getItem("refreshToken")) {
    //   // alert("Your last login session is active");
    //   // navigate("/");
    //   return;
    // }

    const res = await fetch(BASE_URL + '/client_portfolio/add_client_data/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: formData
    });

    const ResPonseData = await res.json();
    // console.log({ ResPonseData });
    // alert("data added");
  } catch (error) {
    console.error('Error:', error);
    return false;
  }
};
export const getCliendData = async (ClientCode) => {
  try {
    // if (localStorage.getItem("refreshToken")) {
    //   // alert("Your last login session is active");
    //   // navigate("/");
    //   return;
    // }

    // const res = await fetch(BASE_URL + '/client_portfolio/get_client_stock_data/' + ClientId, {
    const res = await fetch(BASE_URL + '/client_portfolio/get_stock_data/' + ClientCode, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
      // body: formData
    });

    const ResPonseData = await res.json();
    console.log({ ResPonseData });
    return ResPonseData
    // alert("data added");
  } catch (error) {
    console.error('Error:', error);
    return false;
  }
};
export const buyStock = async (formData) => {
  try {
    // if (localStorage.getItem("refreshToken")) {
    //   // alert("Your last login session is active");
    //   // navigate("/");
    //   return;
    // }

    const res = await fetch(BASE_URL + '/client_portfolio/buy_stock/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
      // body:formData
    });
    if (res.ok) {
      alert("stock added")
    }
    else {
      const errorMessage = await response.text();
      throw new Error(errorMessage);
    }

    const ResPonseData = await res.json();
    console.log({ ResPonseData });
    // alert("data added")
    return ResPonseData;
  } catch (error) {
    console.error('Error:', error);
    return false;
  }
};
export const sellStock = async (formData) => {
  try {
    // if (localStorage.getItem("refreshToken")) {
    //   // alert("Your last login session is active");
    //   // navigate("/");
    //   return;
    // }

    const res = await fetch(BASE_URL + '/client_portfolio/sell_stock/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
      // body:formData
    });
    if (res.ok) {
      alert("stock Sold")
    }
    else {
      const errorMessage = await response.text();
      throw new Error(errorMessage);
    }

    const ResPonseData = await res.json();
    console.log({ ResPonseData });
    // alert("data added")
    return ResPonseData;
  } catch (error) {
    console.error('Error:', error);
    return false;
  }
};
export const mapCient = async (formData) => {
  try {
    const response = await fetch('http://127.0.0.1:8000/client_portfolio/map_client/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData)
      // body: JSON.stringify(testinput)
    });
    console.log({ response })
    if (response.ok) {
      // If the response is okay, alert the user
      alert("Client Mapped Sucessfully");
    }
    else {
      // If the response is not okay, throw an error
      const errorMessage = await response.text();
      throw new Error(errorMessage);
    }
  } catch (error) {
    console.error('Error uploading file:', error);
    console.log({ error });

    // Extract the inner HTML of the summary from the error message
    const match = error.message.match(/<pre class="exception_value">([\s\S]*?)<\/pre>/);
    const exceptionValue = match ? match[1].trim() : 'Exception value not found';
    if (exceptionValue.split(":")[0] == "UNIQUE constraint failed") {
      // alert("Cridentials already exists please enter unique crediantials")
      alert("Client Already Exists");
    }
    else {
      alert(exceptionValue.split(":")[0]);
    }
  }


};
export const mapCientBulk = async (Data) => {
  try {
    const response = await fetch('http://127.0.0.1:8000/client_portfolio/map_client/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(Data)
      // body: JSON.stringify(testinput)
    });
    console.log({ response })
    if (response.ok) {
      // If the response is okay, alert the user
      alert("Client Mapped Sucessfully");
    }
    else {
      // If the response is not okay, throw an error
      const errorMessage = await response.text();
      throw new Error(errorMessage);
    }
  } catch (error) {
    console.error('Error uploading file:', error);
    console.log({ error });

    // Extract the inner HTML of the summary from the error message
    const match = error.message.match(/<pre class="exception_value">([\s\S]*?)<\/pre>/);
    const exceptionValue = match ? match[1].trim() : 'Exception value not found';
    if (exceptionValue.split(":")[0] == "UNIQUE constraint failed") {
      // alert("Cridentials already exists please enter unique crediantials")
      alert("Client Already Exists");
    }
    else {
      alert(exceptionValue.split(":")[0]);
    }
  }


};
export const getMapClientData = async (master_code) => {

  const url = 'http://127.0.0.1:8000/client_portfolio/calculate_management_fee/' + master_code;
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error('Error fetching data:', error);
    return null;
  }
};
export const getSingleClientData = async (client_code) => {
  const url = 'http://127.0.0.1:8000/client_portfolio/get_individual_client_details/' + client_code;
  try {
    const response = await fetch(url, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    });

    if (!response.ok) {
      throw new Error('Network response was not ok ' + response.statusText);
    }

    const responseData = await response.json();
    return responseData;
  } catch (error) {
    console.error('Error fetching data:', error);
    // alert("Error fetching data:");
    return [];
    return [
      {
        "client_code": "",
        "first_entry_date": "",
        "chargeable_market_value": "",
        "management_fee_rate": "",
        "portfolio_pnl": "",
        "portfolio_value": "",
        "yearly_fees": "",
        "daily_fees": ""
      },
      {
        "client_code": "02SS11",
        "first_entry_date": "2021-12-31",
        "chargeable_market_value": 5000000,
        "management_fee_rate": 1.5,
        "portfolio_pnl": 0.0052,
        "portfolio_value": 5026000,
        "yearly_fees": 75390,
        "daily_fees": 206.55
      }, {
        "client_code": "02SS11",
        "first_entry_date": "2021-12-31",
        "chargeable_market_value": 5000002,
        "management_fee_rate": 1.5,
        "portfolio_pnl": 0.0052,
        "portfolio_value": 5026000,
        "yearly_fees": 75390,
        "daily_fees": 206.55
      }


    ];
  }
};