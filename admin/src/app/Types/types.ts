export type dataType = {
   _id?: any,
   brand: string,
   price: number,
   description: string,
   category: string,
   gender: string,
   image: string,
   rating: {
      rate?: number,
      count: number
   }
}

export type productsStateType = {
   products: dataType[],
   admin: boolean
}