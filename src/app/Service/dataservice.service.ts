import { Subject, } from "rxjs";
import { Product } from "../Model/product";

export class DataService {
  totalPrice = new Subject<number>();
  totalQuantity = new Subject<number>();
  navdata = new Subject<unknown>

  option: Array<any>= [
    {id:1, title:'Manage Payment', img:'./../../../assets/icon/card.png'},
    {id:2, title:'Store Locator', img:'./../../../assets/icon/store.png'},
    {id:3, title:'Download Nutrition info', img:'./../../../assets/icon/list.png'},
    {id:4, title:'About', img:'./../../../assets/icon/icons8-about-50.png'},
  ] 
  
  offer: any[] = [
    { id: 1, title: 'DIWALISPC', codeoffer: 'Free delivery', subtitle: 'Free delivery On Above Rs.', description: 'Offer applicable on regular and advance orders Offer can be redeemed by a user 1 time per day', offerprice: 199 },
    { id: 2, title: 'S250', codeoffer: 'Free Samosa', subtitle: 'Free delivery On Above Rs.', description: 'Valid on MrFood&Mood orders only Offer Valid on App, Web & Msite Offer applicable on minimum spends of Rs.250 Offer applicable on regular and advance orders', offerprice: 250 },
    { id: 3, title: 'V181', codeoffer: '', subtitle: 'Get Free Fries / Drink', description: 'Valid on F&MDelivery orders only /nOffer Valid on App, Web & Msite /nOffer applicable on minimum spends of Rs.181 /nOffer applicable on regular and advance orders', offerprice: 181 },
    { id: 4, title: 'B229', codeoffer: 'Free VadaPav', subtitle: 'Get a FREE VadaPav of your choice worth Rs.', description: 'Valid on McDelivery orders only /nOffer Valid on App, Web & F&Msite /nOffer applicable on minimum spends of Rs.229 /nOffer applicable on regular and advance orders', offerprice: 229 },
    { id: 5, title: 'FDESERT', codeoffer: 'Free Sweets', subtitle: 'Free Desert of your choice', description: 'Valid on McDelivery orders only /nOffer Valid on App, Web & Msite /nOffer applicable on minimum spends of Rs.399 /nOffer applicable on regular and advance orders /n/nMin Cart Value excluding delivery fees and taxes ₹ 399.00', offerprice: 399 },
    { id: 6, title: 'FREEBALL', codeoffer: 'Free Bhajiya', subtitle: 'Get Free Medium Bhajiya worth Rs. 109 On Orders Above Rs. 259', description: 'Get Free Medium Fries worth Rs. 109 On Orders Above Rs.', offerprice: 259 },
    { id: 7, title: 'FREEVADAPAV', codeoffer: 'Free VadaPav', subtitle: 'Free 3VadaPav of your choice on a minimum order value of Rs.', description: 'Free 3 VadaPav of your choice on a minimum order value of Rs. 899', offerprice: 899 },
    { id: 8, title: 'TUESDAYTREAT', codeoffer: 'Tuesday Treat!', subtitle: 'Enjoy Free Samosa Plate of your choice on Order Above Rs.', description: 'Terms & Conditions', offerprice: 399 }
  ]

  data: Product[] = [
    { id: 1, title: 'Vada Pav', img: './../../../assets/icon/samosa-PhotoRoom.png-PhotoRoom.png', descp: 'Lorem ipsum dolor sit amet .', price: 200, quantity: 0, stock: 'available', category: { type: "jain veg", img: "./../assets/icon/icons8-veg-color/icons8-veg-48.png" }, calories: "125 cal", isavailable: 'Available' },
    { id: 2, title: 'Bread Pakoda', img: './../../../assets/icon/samosa-PhotoRoom.png-PhotoRoom.png', descp: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum deleniti eveniet accusantium quibusdam aliquid eaque quod commodi maxime. Quas, reprehenderit.', price: 390, quantity: 0, stock: 'available', category: { type: "veg", img: "./../assets/icon/icons8-veg-color/icons8-veg-48.png" }, calories: "100 cal", isavailable: 'Available' },
    { id: 3, title: 'SAMOSA CHAT', img: './../../../assets/icon/samosa-PhotoRoom.png-PhotoRoom.png', descp: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum deleniti eveniet accusantium quibusdam aliquid eaque quod commodi maxime. Quas, reprehenderit.', price: 150, quantity: 0, stock: 'available', category: { type: "veg", img: "./../assets/icon/icons8-veg-color/icons8-veg-48.png" }, calories: "155 cal", isavailable: 'Available' },
    { id: 4, title: 'GUJARATI DABELI', img: './../../../assets/icon/samosa-PhotoRoom.png-PhotoRoom.png', descp: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum deleniti eveniet accusantium quibusdam aliquid eaque quod commodi maxime. Quas, reprehenderit.', price: 250, quantity: 0, stock: 'available', category: { type: "veg", img: "./../assets/icon/icons8-veg-color/icons8-veg-48.png" }, calories: '200 cal', isavailable: 'Available' },
    { id: 5, title: 'KACHORI', img: './../../../assets/icon/samosa-PhotoRoom.png-PhotoRoom.png', descp: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum deleniti eveniet accusantium quibusdam aliquid eaque quod commodi maxime. Quas, reprehenderit.', price: 300, quantity: 0, stock: 'available', category: { type: "veg", img: "./../assets/icon/icons8-veg-color/icons8-veg-48.png" }, calories: '130 cal', isavailable: 'Available' },
    { id: 6, title: 'DAHI PURI', img: './../../../assets/icon/samosa-PhotoRoom.png-PhotoRoom.png', descp: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum deleniti eveniet accusantium quibusdam aliquid eaque quod commodi maxime. Quas, reprehenderit.', price: 350, quantity: 0, stock: 'available', category: { type: "veg", img: "./../assets/icon/icons8-veg-color/icons8-veg-48.png" }, calories: '280 cal', isavailable: 'Available' },
    { id: 7, title: 'PAV BHAJI', img: './../../../assets/icon/samosa-PhotoRoom.png-PhotoRoom.png', descp: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Earum deleniti eveniet accusantium quibusdam aliquid eaque quod commodi maxime. Quas, reprehenderit.', price: 200, quantity: 0, stock: 'available', category: { type: "veg", img: "./../assets/icon/icons8-veg-color/icons8-veg-48.png" }, calories: '300 cal', isavailable: 'notAvailable' }
  ];

  countQuantity() {
    let totalQ = 0;
    this.data.forEach(data => {
      totalQ += data.quantity;
    });
    this.totalQuantity.next(totalQ);

    let total = this.data.map((e) => {
      if (e.quantity > 0) {
        return e.quantity * e.price
      } else { return 0 }

    });
    const initialValue = 0;
    let totalp = total.reduce(
      (accumulator, currentValue) => accumulator + currentValue,
      initialValue,
    );

    this.totalPrice.next(totalp)
    //  console.log('subj');
  }

  deleteCart(obj: Product, value: string) {
    this.data.find((e) => {
      if (value === '+' && e.quantity !== 0 && e === obj) {
        e.quantity++;
      } else if (value === '-' && e.quantity !== 0 && e === obj) {
        e.quantity--
      } else {
        null
      }
    })
  }

  deleteAllCart() {
    alert('delete all cart items')

    this.data.forEach((e) => {
      e.quantity = 0;
    })
  }
  
  addItemCart(id: number) {
    console.log('addfood');
    this.data.find((e) => {
      if (e.id == id) {
        e.quantity++
      }
    })
  }

  //
  navData(nd: string) {
    this.navdata.next(nd)
  }
}