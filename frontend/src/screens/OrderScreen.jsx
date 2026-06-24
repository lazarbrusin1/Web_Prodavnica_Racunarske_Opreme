import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { PayPalScriptProvider, PayPalButtons } from '@paypal/react-paypal-js'
import { Alert } from 'react-bootstrap'

const OrderScreen = () => {
    const { id } = useParams()
    const [order, setOrder] = useState(null)
    const [error, setError] = useState('')
    const [paid, setPaid] = useState(false)

    useEffect(() => {
        const fetchOrder = async () => {
            try {
                const res = await fetch(`/api/orders/${id}`)
                const data = await res.json()

                if (!res.ok) {
                    throw new Error(data.message || 'Greška pri učitavanju porudžbine')
                }

                setOrder(data)
            } catch (err) {
                setError('Greška pri učitavanju porudžbine')
            }
        }

        fetchOrder()
    }, [id, paid])

    const successPaymentHandler = async (paymentResult) => {
        try {
            const res = await fetch(`/api/orders/${id}/pay`, {
                method: 'PUT',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(paymentResult),
            })

            if (!res.ok) {
                throw new Error('Greška pri plaćanju')
            }

            setPaid(true)
        } catch (err) {
            setError('Plaćanje nije uspešno evidentirano')
        }
    }

    return (
        <>
            <h1 className='products-title'>Porudžbina</h1>

            {error && <Alert variant='danger'>{error}</Alert>}
            {paid && <Alert variant='success'>Porudžbina je uspešno plaćena!</Alert>}

            {order && (
                <div className='text-center'>
                    <h4>Ukupno: {order.totalPrice} RSD</h4>

                    {!order.isPaid && (
                        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
                            <PayPalScriptProvider options={{ clientId: 'test', currency: 'USD' }}>
                                <PayPalButtons
                                    createOrder={(data, actions) => {
                                        return actions.order.create({
                                            purchase_units: [
                                                {
                                                    amount: {
                                                        value: '10.00',
                                                    },
                                                },
                                            ],
                                        })
                                    }}
                                    onApprove={(data, actions) => {
                                        return actions.order.capture().then((details) => {
                                            successPaymentHandler(details)
                                        })
                                    }}
                                />
                            </PayPalScriptProvider>
                        </div>
                    )}

                    {order.isPaid && <h4>Porudžbina je plaćena</h4>}
                </div>
            )}
        </>
    )
}

export default OrderScreen