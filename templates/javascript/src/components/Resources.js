import React from "react";
import DataTable from "react-data-table-component";
const data = [
    {
        category: "CoVID-19 Testing Lab",
        city: "Port Blair",
        contact: "http://rmrc.res.in/",
        descriptionandorserviceprovided: "Government approved and supported Testing labs by ICMR",
        nameoftheorganisation: "Regional Medical Research Centre (ICMR)",
        phonenumber: "3192251158,\n3192251159",
        state: "Andaman & Nicobar"
        },
        {
        category: "CoVID-19 Testing Lab",
        city: "Kakinada",
        contact: "https://web.archive.org/web/20190103062219/http://rmckakinada.com/",
        descriptionandorserviceprovided: "Government Approved and Supported Testing Lab by ICMR",
        nameoftheorganisation: "Rangaraya Medical College",
        phonenumber: "8842363401",
        state: "Andhra Pradesh"
        },
        {
        category: "Free Food",
        city: "Vijayawada",
        contact: "http://amruthahastam.org",
        descriptionandorserviceprovided: "We are providing free food service to the needy from more than 2 years, now during lockdown we are distributing more than 10000 people daily during lockdown",
        nameoftheorganisation: "Amrutha Hastam Charitable Trust",
        phonenumber: "9246472100",
        state: "Andhra Pradesh"
        },
        {
        category: "CoVID-19 Testing Lab",
        city: "Vijayawada",
        contact: "http://ssmctumkur.org/",
        descriptionandorserviceprovided: "Government Approved and Supported Testing Lab by ICMR",
        nameoftheorganisation: "Sidhartha Medical College",
        phonenumber: "8662450390",
        state: "Andhra Pradesh"
        },
        {
        category: "Fundraisers",
        city: "Visakhapatnam",
        contact: "http://www.irdwsi.in",
        descriptionandorserviceprovided: "Volunteers and Staff to engage in awareness building and relief work",
        nameoftheorganisation: "The Integrated Rural Development of Weaker Sections in India",
        phonenumber: "9849120377",
        state: "Andhra Pradesh"
        },
        {
        category: "Hospitals and Centers",
        city: "Kurnool",
        contact: "http://gghknl.com",
        descriptionandorserviceprovided: "Covid-19 treatment.",
        nameoftheorganisation: "Govt General Hospital Kurnool",
        phonenumber: "8518255422",
        state: "Andhra Pradesh"
        },
        {
        category: "Delivery [Vegetables, Fruits, Groceries, Medicines, etc.]",
        city: "Tirupati",
        contact: "https://tirupati.cdma.ap.gov.in",
        descriptionandorserviceprovided: "It consist of list of vendors,providing home delivery",
        nameoftheorganisation: "Tirupati municipal Corporation",
        phonenumber: "9849983062",
        state: "Andhra Pradesh"
        },
        {
        category: "Hospitals and Centers",
        city: "Kadapa",
        contact: "http://rimskadapa.in/contact-us.html",
        descriptionandorserviceprovided: "Covid-19 testing approved by govt. and isolation wards",
        nameoftheorganisation: "Rajiv Gandhi institute of medical science",
        phonenumber: "8562220200",
        state: "Andhra Pradesh"
        },
        {
        category: "Hospitals and Centers",
        city: "Visakhapatnam",
        contact: "https://mediniz.com/list/hivhelp/center/government-tb-and-chest-hospital-visakhapatnam",
        descriptionandorserviceprovided: "Covid 19 isolation wards and treatment",
        nameoftheorganisation: "government TB & chest hospitals",
        phonenumber: "8912552525",
        state: "Andhra Pradesh"
        },
];
const columns = [
  {
    name: "Category",
    selector: "category",
    sortable: true,
    width: '10%'
  },
  {
    name: "City",
    selector: "city",
    sortable: true,
    width: '10%'

  },
  {
    name: "Contact",
    selector: "phonenumber",
    sortable: true,
    width: '10%'

  },
  {
    name: "Description",
    selector: "descriptionandorserviceprovided",
    sortable: true,
    width: '10%'


  },
  {
    name: "Organisation",
    selector: "nameoftheorganisation",
    width: '10%'


  },
  {
    name: "State",
    selector: "state",
    width: '10%'

  },
];
class Resources extends React.Component {
  render() {
    return (
        <div>
        <DataTable
          title="COVID-19 ESSENTIALS"
          columns={columns}
          data={data}
          pagination={true}
          striped={true}
          highlightOnHover={true}
        />
        </div>
    );
  }
}
export default Resources;
