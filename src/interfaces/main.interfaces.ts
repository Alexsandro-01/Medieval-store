export interface Product {
  id: number,
  name: string,
  amount: string,
  orderId?: number | null
}

export interface InsertProduct {
  name: string,
  amount: string
}
