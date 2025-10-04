const mongoose=require("mongoose");
const Schema=new mongoose.Schema;

const data = [
  {
    name: "Maruti Suzuki",
    model: "Swift VXI",
    year: 2016,
    kms: 32321,
    fuel: "Diesel",
    colour: "Black",
    owner: "First",
    insurance: "Not Available",
    i_expiry: "2032-11-12",
    images: [
      {
        url: "https://avgmotors.co.in/wp-content/uploads/2022/03/Mettallic-Magma-Grey-876x535.png",
        filename: "Car_Bazar_Listings"
      }
    ],
    price: 350000
  },
  {
    name: "Hyundai",
    model: "i20 Sportz",
    year: 2018,
    kms: 32321,
    fuel: "Diesel",
    colour: "White",
    owner: "First",
    insurance: "Not Available",
    i_expiry: "2032-11-12",
    images: [
      {
        url: "https://imgd.aeplcdn.com/664x374/n/cw/ec/150603/i20-exterior-right-front-three-quarter-7.jpeg?isig=0&q=80",
        filename: "Car_Bazar_Listings"
      }
    ],
    price: 520000
  },
  {
    name: "Honda",
    model: "City ZX",
    year: 2017,
    kms: 32321,
    fuel: "Diesel",
    colour: "Silver",
    owner: "First",
    insurance: "Not Available",
    i_expiry: "2032-11-12",
    images: [
      {
        url: "https://ackodrive-assets.ackodrive.com/media/test_2pvxUvJ.png",
        filename: "Car_Bazar_Listings"
      }
    ],
    price: 780000
  },
  {
    name: "Toyota",
    model: "Innova Crysta",
    year: 2019,
    kms: 32321,
    fuel: "Diesel",
    colour: "Grey",
    owner: "First",
    insurance: "Not Available",
    i_expiry: "2032-11-12",
    images: [
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFkmURMoKz_0xcQPqPUkcvLnzMdqMlRHAk0A&s",
        filename: "Car_Bazar_Listings"
      }
    ],
    price: 1200000
  },
  {
    name: "Ford",
    model: "EcoSport Titanium",
    year: 2016,
    kms: 32321,
    fuel: "Diesel",
    colour: "Blue",
    owner: "First",
    insurance: "Not Available",
    i_expiry: "2032-11-12",
    images: [
      {
        url: "https://www.ppsford.com/uploads/gallery/1622731952_pps-ford-ecosport-smoke-grey.webp",
        filename: "Car_Bazar_Listings"
      }
    ],
    price: 650000
  },
  {
    name: "Tata",
    model: "Nexon XM",
    year: 2019,
    kms: 32321,
    fuel: "Diesel",
    colour: "Red",
    owner: "First",
    insurance: "Not Available",
    i_expiry: "2032-11-12",
    images: [
      {
        url: "https://akm-img-a-in.tosshub.com/indiatoday/images/story/202009/Tata_Nexon_XM_S_.png",
        filename: "Car_Bazar_Listings"
      }
    ],
    price: 580000
  },
  {
    name: "Mahindra",
    model: "XUV500 W8",
    year: 2018,
    kms: 32321,
    fuel: "Diesel",
    colour: "Black",
    owner: "First",
    insurance: "Not Available",
    i_expiry: "2032-11-12",
    images: [
      {
        url: "https://imgd.aeplcdn.com/1280x720/cw/cars/discontinued/mahindra/xuv500-2011-2015.jpg?q=80",
        filename: "Car_Bazar_Listings"
      }
    ],
    price: 1100000
  },
  {
    name: "Volkswagen",
    model: "Polo Highline",
    year: 2017,
    kms: 32321,
    fuel: "Diesel",
    colour: "White",
    owner: "First",
    insurance: "Not Available",
    i_expiry: "2032-11-12",
    images: [
      {
        url: "https://imgd.aeplcdn.com/664x374/cw/specialVersions/5435.jpg?v=20180309060021&q=80",
        filename: "Car_Bazar_Listings"
      }
    ],
    price: 490000
  },
  {
    name: "Renault",
    model: "Kwid RXT",
    year: 2016,
    kms: 32321,
    fuel: "Diesel",
    colour: "Grey",
    owner: "First",
    insurance: "Not Available",
    i_expiry: "2032-11-12",
    images: [
      {
        url: "https://images.overdrive.in/wp-content/odgallery/2022/03/61583_2022_Renault_Kwid_468x263.jpg",
        filename: "Car_Bazar_Listings"
      }
    ],
    price: 280000
  },
  {
    name: "Skoda",
    model: "Rapid Ambition",
    year: 2018,
    kms: 32321,
    fuel: "Diesel",
    colour: "Silver",
    owner: "First",
    insurance: "Not Available",
    i_expiry: "2032-11-12",
    images: [
      {
        url: "https://imgd.aeplcdn.com/664x374/cw/cars/discontinued/skoda/rapid-2011-2014.jpg?q=80",
        filename: "Car_Bazar_Listings"
      }
    ],
    price: 620000
  },
  {
    name: "Chevrolet",
    model: "Beat LT",
    year: 2015,
    kms: 32321,
    fuel: "Diesel",
    colour: "Black",
    owner: "First",
    insurance: "Not Available",
    i_expiry: "2032-11-12",
    images: [
      {
        url: "https://imgd.aeplcdn.com/0x0/ec/0C/48/13637/img/m/2014-Chevrolet-Beat-28351_l.jpg?q=75",
        filename: "Car_Bazar_Listings"
      }
    ],
    price: 220000
  },
  {
    name: "Nissan",
    model: "Micra XV",
    year: 2016,
    kms: 32321,
    fuel: "Diesel",
    colour: "White",
    owner: "First",
    insurance: "Not Available",
    i_expiry: "2032-11-12",
    images: [
      {
        url: "https://imgd.aeplcdn.com/1056x594/n/3g499sa_1463606.jpg?q=80",
        filename: "Car_Bazar_Listings"
      }
    ],
    price: 330000
  },
  {
    name: "Hyundai",
    model: "Verna SX",
    year: 2017,
    kms: 32321,
    fuel: "Diesel",
    colour: "Red",
    owner: "First",
    insurance: "Not Available",
    i_expiry: "2032-11-12",
    images: [
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjwW5hoGW8NaoJP2C_xui61j-5OODZSJiuMA&s",
        filename: "Car_Bazar_Listings"
      }
    ],
    price: 720000
  },
  {
    name: "Maruti Suzuki",
    model: "Baleno Delta",
    year: 2019,
    kms: 32321,
    fuel: "Diesel",
    colour: "Blue",
    owner: "First",
    insurance: "Not Available",
    i_expiry: "2032-11-12",
    images: [
      {
        url: "https://imgd.aeplcdn.com/664x374/n/cw/ec/102663/baleno-exterior-right-front-three-quarter-64.jpeg?isig=0&q=80",
        filename: "Car_Bazar_Listings"
      }
    ],
    price: 560000
  },
  {
    name: "Honda",
    model: "Jazz V",
    year: 2016,
    kms: 32321,
    fuel: "Diesel",
    colour: "Black",
    owner: "First",
    insurance: "Not Available",
    i_expiry: "2032-11-12",
    images: [
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQwqleb87QCoCuTLqwRmMtrBeGO3OSrXP1K8w&s",
        filename: "Car_Bazar_Listings"
      }
    ],
    price: 480000
  },
  {
    name: "Toyota",
    model: "Corolla Altis",
    year: 2017,
    kms: 32321,
    fuel: "Diesel",
    colour: "White",
    owner: "First",
    insurance: "Not Available",
    i_expiry: "2032-11-12",
    images: [
      {
        url: "https://imgd.aeplcdn.com/1280x720/cw/cars/toyota/corolla-altis.jpg?q=80",
        filename: "Car_Bazar_Listings"
      }
    ],
    price: 850000
  },
  {
    name: "Ford",
    model: "Figo Titanium",
    year: 2015,
    kms: 32321,
    fuel: "Diesel",
    colour: "Silver",
    owner: "First",
    insurance: "Not Available",
    i_expiry: "2032-11-12",
    images: [
      {
        url: "https://imgd.aeplcdn.com/1056x594/n/vevpl4a_1525229.jpg?q=80",
        filename: "Car_Bazar_Listings"
      }
    ],
    price: 370000
  },
  {
    name: "Tata",
    model: "Harrier XT",
    year: 2020,
    kms: 32321,
    fuel: "Diesel",
    colour: "Grey",
    owner: "First",
    insurance: "Not Available",
    i_expiry: "2032-11-12",
    images: [
      {
        url: "https://stimg.cardekho.com/images/carexteriorimages/930x620/Tata/Harrier/9368/1755844894060/front-left-side-47.jpg",
        filename: "Car_Bazar_Listings"
      }
    ],
    price: 1250000
  },
  {
    name: "Mahindra",
    model: "Scorpio S10",
    year: 2018,
    kms: 32321,
    fuel: "Diesel",
    colour: "Black",
    owner: "First",
    insurance: "Not Available",
    i_expiry: "2032-11-12",
    images: [
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSQT2d5edsC6set8uca__WCRdRceqbVPBaWiA&s",
        filename: "Car_Bazar_Listings"
      }
    ],
    price: 950000
  },
  {
    name: "Kia",
    model: "Seltos HTK",
    year: 2020,
    kms: 32321,
    fuel: "Diesel",
    colour: "Red",
    owner: "First",
    insurance: "Not Available",
    i_expiry: "2032-11-12",
    images: [
      {
        url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBO4zdaY5o3qa3oxMX_iEuz2XT_gR4iphmKg&s",
        filename: "Car_Bazar_Listings"
      }
    ],
    price: 1350000
  }
];




module.exports ={data};