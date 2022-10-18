import React from 'react'

import { useRouter } from 'next/router'

export default function Produto() {

  const router = useRouter()
  const { product_id } = router.query

  return (
    <div>{product_id}</div>
  )
}
