// Product
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

// User
export interface User { 
  id: number,
  username: string,
  classe: string,
  level: number,
  password: string
}

export interface InsertUser { 
  username: string,
  classe: string,
  level: number,
  password: string
}

// Order

export interface OrderWithProducts {
  id: number,
  userId: number,
  productsIds: Array<number>
}

export type Order = Omit<OrderWithProducts, 'productsIds'>;