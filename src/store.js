import { create } from 'zustand'
import { persist } from 'zustand/middleware';
import { productData } from './productlist/product';


const storeData = {

  productData: productData,
  cart: [],
  wishList: [],
  buyNowItem: {
    product: [],
    subTotal: 0,
    total: 0
  },
  totalQnt: 0,
  totalAmount: 0,
  couponDiscount: 0,
  orderRecord:{}


};

const useBearStore = create(
  persist(
    (set) => ({
      storeData,

      addToWishList: (item) =>

        set((state) => {

          let filterWishlist = state.storeData.wishList;

          const isWishListed = filterWishlist.some((product) => product.id == item.id)

          const setSingleQnt = { ...item, qnt: 1 }

          const updatedWishlist = isWishListed ? filterWishlist.filter((data) => data.id != item.id) : [...filterWishlist, setSingleQnt]


          return {

            storeData:
            {
              ...state.storeData,
              wishList: updatedWishlist,

            },
          };




        }),

      addToCart: (item) =>

        set((state) => {

          let filterCart = state.storeData.cart;

          const iscartListed = filterCart.some((product) => product.id == item.id)


          const updatedcartList = iscartListed ? filterCart.filter((data) => data.id != item.id) : [...filterCart, item]


          return {

            storeData:
            {
              ...state.storeData,
              cart: updatedcartList,

            },
          };




        }),

      addProductToCart: (item) =>

        set((state) => {

          let filterCart = state.storeData.cart;




          return {

            storeData:
            {
              ...state.storeData,
              cart: [...filterCart, item],

            },
          };




        }),

      buyItNowAction: (item) =>

        set((state) => {


          const newData = () => {

            let product = [item];
            let subTotal = product.reduce((accu, current) => accu + current.qnt * current.price, 0);
            let discount = state.storeData.couponDiscount;
            let total = subTotal - discount;


            return { product, subTotal, total }

          }




          return {

            storeData:
            {
              ...state.storeData,
              couponDiscount: 0,
              buyNowItem: newData()


            },
          };




        }),

      cartPageIncrement: (item) =>

        set((state) => {



          return {

            storeData:
            {
              ...state.storeData,
              cart: state.storeData.cart.map((element) => {

                if (element.id === item.id) {

                  return { ...element, qnt: element.qnt + 1 }
                } else {
                  return element
                }

              }),

            },
          };




        }),


      cartPageDecrement: (item) =>

        set((state) => {


          return {

            storeData:
            {
              ...state.storeData,
              cart: state.storeData.cart.map((element) => {

                if (element.id === item.id) {

                  if (element.qnt > 1) {

                    return { ...element, qnt: element.qnt - 1 }

                  } else {

                    return null

                  }

                } else {
                  return element
                }

              }).filter((element) => element != null),

            },
          };




        }),

      cartDeleteItem: (item) =>

        set((state) => {

          const updatedCart = state.storeData.cart.filter((element) => element.id !== item.id);

          return {

            storeData:
            {
              ...state.storeData,
              cart: updatedCart,
              couponDiscount: updatedCart.length == 0 ? 0 : state.storeData.couponDiscount,

            },
          };




        }),

      clearCart: (item) =>

        set((state) => {


          return {

            storeData:
            {
              ...state.storeData,
              couponDiscount: 0,
              cart: [],

            },
          };




        }),

      couponCode: (amount) =>

        set((state) => {

          const currentBuyNow = state.storeData.buyNowItem;

          const hasBuyNowItems = currentBuyNow.product.length > 0;

          const subTotal = hasBuyNowItems ? currentBuyNow.product.reduce((acc, item) => acc + item.qnt * item.price,0): currentBuyNow.subTotal;

          const total = subTotal - amount;

          return {
            storeData: {
              ...state.storeData,
              couponDiscount: amount,
              buyNowItem: hasBuyNowItems ? {...currentBuyNow,subTotal,total,}: currentBuyNow,
            },
          };
        }),

      removeFromWishlist: (item) =>

        set((state) => {


          return {

            storeData:
            {
              ...state.storeData,
              wishList: state.storeData.wishList.filter((element) => element.id != item.id),

            },
          };




        }),

      cartToCheckout: (item) =>

        set((state) => {

          const { subTotal, total } = item

          return {

            storeData:
            {
              ...state.storeData,

              buyNowItem: {

                product: state.storeData.cart,
                subTotal: subTotal,
                total: total
              },

            },
          };




        }),

        completeOrder: (orderRecord) =>

        set((state) => {

          const updateCart = state.storeData.cart.filter((item)=> !state.storeData.buyNowItem.product.includes(item))

          return {

            storeData:
            {
              ...state.storeData,
              cart: updateCart,
              buyNowItem: {
                product: [],
                subTotal: 0,
                total: 0
              },
              couponDiscount: 0,
              orderRecord


            },
          };




        }),

    }),




    {

      name: 'bear-store',
      getStorage: () => localStorage,

    }



  )


);





export default useBearStore